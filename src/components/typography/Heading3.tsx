import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import { mq } from "../../utils/media-query";

const Heading3: FunctionComponent<JSX.IntrinsicElements["h3"]> = (props) => {
  return <Element {...props} />;
};

const Element = styled.h3(
  mq({
    fontWeight: 800,
    fontFamily: "Manrope",
    fontSize: [35, 37, 40],
    lineHeight: "56px",
  })
);

export default Heading3;
