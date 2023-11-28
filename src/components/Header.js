import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  padding: 20px ${PaddingValue.pcWrap};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftWrap = styled.div`
  display: flex;
`;

const Logo = styled.h3`
  font-size: 40px;
  font-weight: 700;
  color: ${Colors.pointColor};
  margin-right: 85px;
`;

const MenuWrap = styled.ul`
  display: flex;
  align-items: center;
  li {
    font-size: 18px;
    font-weight: 500;
    margin-right: 50px;
  }
`;

const RightWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 16px;
    color: #e0e0e0;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <LeftWrap>
        <Logo>CINEMAZ</Logo>

        <MenuWrap>
          <li>홈</li>
          <li>영화</li>
          <li>검색</li>
        </MenuWrap>
      </LeftWrap>

      <RightWrap>
        <li>로그인</li>
        <li>회원가입</li>
      </RightWrap>
    </SHeader>
  );
};
