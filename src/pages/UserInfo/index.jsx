import React, { useState } from 'react';
import { TopBar, OverlayedSpinner as Spinner, UpdateUserInfo, UpdatePassword } from '../../components/index';
import { Card } from 'react-bootstrap';
import { StyledCard, StyledButton, CardTitle, ErrorMessage } from './UserInfoElements';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import useAuth from '../../hooks/useAuth';
import { NotFound } from '../index';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GET_USERINFO_QUERY_KEY } from '../../config/queryKeys';
import { getUserInfo } from '../../services/userService';

const formatAddress = (address) => {
  const { street, city, state, zipCode } = address;
  let formattedAddress = "";

  if (street) {
    formattedAddress += street;
  }
  if (city) {
    formattedAddress += formattedAddress ? `, ${city}` : city;
  }
  if (state) {
    formattedAddress += formattedAddress ? `, ${state}` : state;
  }
  if (zipCode) {
    formattedAddress += formattedAddress ? `, ${zipCode}` : zipCode;
  }

  return formattedAddress || "No address provided";
};

function UserInfo() {
  const queryClient = useQueryClient();
  const isAuthenticated = useAuthStatus();
  const { authState } = useAuth();

  if (!isAuthenticated) {
    return <NotFound />;
  }

  const [activeTab, setActiveTab] = useState('info');

  const { data: getUserInfoData, isLoading: getUserInfoIsLoading, isError: getUserInfoIsError, error: getUserInfoError } = useQuery({
    queryKey: [GET_USERINFO_QUERY_KEY, authState.user._id],
    queryFn: () => getUserInfo(authState.user._id)
  });

  const handleRefresh = async () => {
    try {
      console.log(`Refreshing user info data`);
      await queryClient.invalidateQueries({ queryKey: [GET_USERINFO_QUERY_KEY, authState.user._id] });
      console.log(getUserInfoData);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <>
            <CardTitle>Account Information</CardTitle>
            {getUserInfoData ? (
              <>
                <p><strong>Name:</strong> {getUserInfoData.user.name}</p>
                <p><strong>Email:</strong> {getUserInfoData.user.email}</p>
                {getUserInfoData.user.phoneNumber ? (<p><strong>Phone Number:</strong> {getUserInfoData.user.phoneNumber}</p>) : null}
                {getUserInfoData.user.address ? (<p><strong>Address:</strong> {formatAddress(getUserInfoData.user.address)}</p>) : null}
              </>
            ) : getUserInfoIsError ? (<ErrorMessage>Error getting user info: {getUserInfoError.message}</ErrorMessage>) : null}
          </>
        );
      case 'update':
        return <UpdateUserInfo initialData={getUserInfoData.user} onRefresh={handleRefresh}/>;
      case 'password':
        return <UpdatePassword />;
      default:
        return null;
    }
  }; 

  if (getUserInfoIsLoading ) {
    return <Spinner />;
  }

  return (
    <>
      <TopBar />
      <StyledCard>
        <Card.Header>
          <div>
            <StyledButton variant="link" className="link" onClick={() => setActiveTab('info')}>Info</StyledButton>
            <StyledButton variant="link" className="link" onClick={() => setActiveTab('update')}>Update Info</StyledButton>
            <StyledButton variant="link" className="link" onClick={() => setActiveTab('password')}>Change Password</StyledButton>
          </div>
        </Card.Header>
        <Card.Body>
          {renderContent()}
        </Card.Body>
      </StyledCard>
    </>
  );
}

export default UserInfo;
