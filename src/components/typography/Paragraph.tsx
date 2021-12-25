import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

const Paragraph: FunctionComponent<JSX.IntrinsicElements["p"]> = (props) => {
  return <Element {...props} />;
};

const Element = styled.p({
  fontFamily: "Poppins",
  margin: 0,
  fontSize: 20,
  lineHeight: "32px",
  fontWeight: 400,
});

export default Paragraph;
