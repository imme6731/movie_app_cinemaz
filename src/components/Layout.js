import { styled } from "styled-components";
import { PaddingValue } from "../style/GlobalStyled";

const Container = styled.div`
  padding: 120px ${PaddingValue.pcInnerWrap};
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
