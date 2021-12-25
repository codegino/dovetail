import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <div>1</div>
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
