import React from 'react';
import Container from 'react-bootstrap';

function MainContainer(props) {
  return (
    <Container className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
  );
}

export default MainContainer;
