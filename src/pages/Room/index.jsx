import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, CardBody } from "react-bootstrap";
import { NotFound } from "../index.js";
import { roomTypeMap } from "../../config/roomsMap.js";
import { DBeigeBackgroundPageWrapper } from "../../config/styles.js";
import {
  Title,
  BodyWrapper,
  InfoTextCard,
  RoomImageCard,
  InfoText,
  RoomImage,
} from "./RoomElements.js";
import RoomPhoto from "../../assets/images/RoomPlaceholder1.png";

const getRoomByType = (state, roomType) => {
  return state.rooms.value.find((room) => room.type === roomType);
};

function Room() {
  const { roomType } = useParams();
  const roomInfo = useSelector((state) => getRoomByType(state, roomType));

  if (!roomInfo) {
    return <NotFound />;
  }

  return (
    <DBeigeBackgroundPageWrapper>
      <Title>{roomTypeMap[roomInfo.type] || roomInfo.type}</Title>
      <BodyWrapper>
        <Container fluid>
          <Row>
            <Col md={6} sm={12}>
              <RoomImageCard>
                <CardBody>
                  <RoomImage src={RoomPhoto} alt="Room image." />
                </CardBody>
              </RoomImageCard>
            </Col>
            <Col md={6} sm={12}>
              <InfoTextCard>
                <CardBody>
                  <InfoText>{roomInfo.description}</InfoText>
                  <InfoText>{roomInfo.beds} Standard Beds</InfoText>
                  <InfoText>
                    Amenities: {roomInfo.amenities.join(", ")}
                  </InfoText>
                  <InfoText>Price: ${roomInfo.price}/night</InfoText>
                </CardBody>
              </InfoTextCard>
            </Col>
          </Row>
        </Container>
      </BodyWrapper>
    </DBeigeBackgroundPageWrapper>
  );
}

export default Room;
