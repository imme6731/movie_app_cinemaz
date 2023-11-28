import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";

const SFooter = styled.div`
  width: 100%;
<<<<<<< HEAD
  padding: 0 ${PaddingValue.pcWrap};
`;

const InnerWrap = styled.div`
  width: 100%;
  padding: 60px 0;
=======
  padding: 60px ${PaddingValue.pcWrap};
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.5px solid white;
`;

const Logo = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: ${Colors.pointColor};
  margin-bottom: 40px;
`;

const CopyRight = styled.p`
  font-size: 14px;
`;

export const Footer = () => {
  return (
    <SFooter>
<<<<<<< HEAD
      <InnerWrap>
        <Logo>CINEMAZ</Logo>
        <CopyRight>&copy; 2023 CINEMAZ</CopyRight>
      </InnerWrap>
=======
      <Logo>CINEMAZ</Logo>
      <CopyRight>&copy; 2023 CINEMAZ</CopyRight>
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
    </SFooter>
  );
};
