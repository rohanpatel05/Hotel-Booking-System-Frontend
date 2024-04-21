import React from "react";
import { DBeigeBackgroundPageWrapper } from "../../config/styles";
import { Title, StyledContainer, StyledCol } from "./AccommodationsElements";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { fetchRooms } from "../../services/roomService";
import { GET_ROOMS_QUERY_KEY } from "../../config/queryKeys";
import Spinner from "../../components/Spinner.js";
import StyledErrorAlert from "../../components/Error.js";

function Accommodations() {
  const {
    data: rooms,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: [GET_ROOMS_QUERY_KEY],
    queryFn: fetchRooms,
  });

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <StyledErrorAlert variant="danger">
        Error loading rooms&apos; info: {error.message}
      </StyledErrorAlert>
    );

  return (
    <DBeigeBackgroundPageWrapper>
      <Title>Accommodations</Title>
      <StyledContainer>
        <Row>
          <StyledCol>hi</StyledCol>
        </Row>
        <Row>
          <Col>hi</Col>
        </Row>
      </StyledContainer>
      <div>Data: {JSON.stringify(rooms)}</div>
    </DBeigeBackgroundPageWrapper>
  );
}

export default Accommodations;
