import React from "react";
import { Container, Heading, Message, Link } from "./NotFoundElements.js";

function NotFound() {
  return (
    <Container>
      <Heading>404 - Page Not Found</Heading>
      <Message>The page you are looking for does not exist.</Message>
      <Message>
        Please go to <Link href="/">the home page</Link>.
      </Message>
    </Container>
  );
}

export default NotFound;
