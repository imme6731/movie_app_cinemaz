import { styled } from "styled-components";
import { PaddingValue } from "../style/GlobalStyled";

const Container = styled.div`
  padding: 120px ${PaddingValue.pcInnerWrap};
  @media screen and (max-width: 1024px) {
    padding: 80px ${PaddingValue.pcInnerWrap};
  }
  @media screen and (max-width: 640px) {
    padding: 60px ${PaddingValue.pcInnerWrap};
  }
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
