import styled from "@emotion/styled";
import LogoContainer from "./LogoContainer";

const Header = () => {
  return (
    <Container>
      <LogoContainer />
      <div>2</div>
    </Container>
  );
};

const Container = styled.section({
  height: "88px",
  padding: "20px 34px",
  backgroundColor: "var(--color-background-dark)",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
});

export default Header;
