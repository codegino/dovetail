import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

const Heading5: FunctionComponent<JSX.IntrinsicElements["h5"]> = (props) => {
  return <Element {...props} />;
};

const Element = styled.h5({
  fontWeight: 800,
  fontFamily: "Manrope",
  fontSize: 20,
  lineHeight: "32px",
});

export default Heading5;
