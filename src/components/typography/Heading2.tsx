import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import { mq } from "../../utils/media-query";

const Heading2: FunctionComponent<JSX.IntrinsicElements["h1"]> = (props) => {
  return <Element {...props} />;
};

const Element = styled.h2(
  mq({
    fontWeight: 800,
    fontFamily: "Manrope",
    fontSize: [40, 45, 52],
    lineHeight: "64px",
  })
);

export default Heading2;
