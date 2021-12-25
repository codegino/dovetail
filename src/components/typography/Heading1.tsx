import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import { mq } from "../../utils/media-query";

const Heading1: FunctionComponent<JSX.IntrinsicElements["h1"]> = (props) => {
  return <Element {...props} />;
};

const Element = styled.h1(
  mq({
    fontWeight: 800,
    fontFamily: "Manrope",
    fontSize: [40, 50, 60, 72],
    lineHeight: ["45px", "55px", "70px", "80px"],
    margin: "24px 0",
  })
);

export default Heading1;
