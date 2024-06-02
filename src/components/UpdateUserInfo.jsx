import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from "react-bootstrap";
import {
  StyledButton,
  StyledForm,
  CardTitle,
  ErrorMessage,
  SuccessMessage,
} from "../pages/UserInfo/UserInfoElements";
import { useUpdateUserInfo } from "../hooks/useUpdateUserInfo";
import {
  nameRegex,
  phoneRegex,
  streetRegex,
  cityRegex,
  stateRegex,
  zipCodeRegex,
} from "../config/regex";
import useAuth from "../hooks/useAuth";

const UpdateUserInfo = ({ initialData, onRefresh }) => {
  const { authState } = useAuth();
  
  const [name, setName] = useState(initialData?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(
    initialData?.phoneNumber || ""
  );
  const [address, setAddress] = useState(
    initialData?.address || { street: "", city: "", state: "", zipCode: "" }
  );

  const [errors, setErrors] = useState({});
  const {
    mutate: updateUserInfo,
    data: updateUserInfoData,
    isLoading: updateUserInfoIsLoading,
    isError: updateUserInfoIsError,
    error: updateUserInfoError,
  } = useUpdateUserInfo();

  const validateForm = () => {
    const newErrors = {};
    if (name && !nameRegex.test(name)) newErrors.name = "Invalid name format";
    if (phoneNumber && !phoneRegex.test(phoneNumber))
      newErrors.phoneNumber = "Invalid phone number format";
    if (address.street && !streetRegex.test(address.street))
      newErrors.street = "Invalid street address";
    if (address.city && !cityRegex.test(address.city)) newErrors.city = "Invalid city";
    if (address.state && !stateRegex.test(address.state)) newErrors.state = "Invalid state";
    if (address.zipCode && !zipCodeRegex.test(address.zipCode))
      newErrors.zipCode = "Invalid zip code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateUserInfo = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const userInfoBody = { name: name, phoneNumber: phoneNumber, address: address };

    updateUserInfo({
      accessToken: authState.accessToken,
      userId: authState.user._id,
      userInfoBody      
    }, {
      onSuccess: () => { onRefresh(); }
    });
  };

  return (
    <>
      <CardTitle>Update Information</CardTitle>
      <StyledForm>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
          <Form.Control
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            isInvalid={!!errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="street">Street Address</Form.Label>
          <Form.Control
            id="street"
            type="text"
            placeholder="Enter your street address"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            isInvalid={!!errors.street}
          />
          <Form.Control.Feedback type="invalid">
            {errors.street}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="city">City</Form.Label>
          <Form.Control
            id="city"
            type="text"
            placeholder="Enter your city"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            isInvalid={!!errors.city}
          />
          <Form.Control.Feedback type="invalid">
            {errors.city}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="state">State</Form.Label>
              <Form.Control
                id="state"
                type="text"
                placeholder="Enter your state"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
              <Form.Control
                id="zipCode"
                type="text"
                placeholder="Enter your zip code"
                value={address.zipCode}
                onChange={(e) =>
                  setAddress({ ...address, zipCode: e.target.value })
                }
                isInvalid={!!errors.zipCode}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zipCode}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <StyledButton
          variant="primary"
          type="submit"
          onClick={handleUpdateUserInfo}
          disabled={updateUserInfoIsLoading}
        >
          Update Info
        </StyledButton>
        {updateUserInfoData ? (
          <SuccessMessage>{updateUserInfoData.message}</SuccessMessage>
        ) : updateUserInfoIsError ? (
          <ErrorMessage>
            Error updating user info: {updateUserInfoError.message}
          </ErrorMessage>
        ) : null}
      </StyledForm>
    </>
  );
};

UpdateUserInfo.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipCode: PropTypes.string,
    }),
  }),
  onRefresh: PropTypes.func.isRequired
};

export default UpdateUserInfo;
