import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

const Heading6: FunctionComponent<JSX.IntrinsicElements["h6"]> = (props) => {
  return <Element {...props} />;
};

const Element = styled.h6({
  fontWeight: 800,
  fontFamily: "Manrope",
  fontSize: 16,
  lineHeight: "24px",
  margin: 0,
});

export default Heading6;
