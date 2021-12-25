import styled from "@emotion/styled";
import type { FunctionComponent } from "react";

const Anchor: FunctionComponent<JSX.IntrinsicElements["a"]> = (props) => {
  return <Element {...props} />;
};

const Element = styled.a({
  fontFamily: "Manrope",
  textDecoration: "none",
  margin: "0 16px",
  cursor: "pointer",
});

export default Anchor;
