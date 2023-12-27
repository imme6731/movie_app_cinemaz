import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";

const SFooter = styled.div`
  width: 100%;
  padding: 0 ${PaddingValue.pcWrap};
`;

const InnerWrap = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.5px solid #525252;
  @media screen and (max-width: 640px) {
    padding: 40px 0;
  }
`;

const Logo = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: ${Colors.pointColor};
  margin-bottom: 40px;
  @media screen and (max-width: 530px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const CopyRight = styled.p`
  font-size: 14px;
`;

export const Footer = () => {
  return (
    <SFooter>
      <InnerWrap>
        <Logo>CINEMAZ</Logo>
        <CopyRight>&copy; 2023 CINEMAZ</CopyRight>
      </InnerWrap>
    </SFooter>
  );
};
