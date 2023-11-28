import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";

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
  position: relative;
  li {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 50px;
  }
`;

const HeaderIcon = styled.h3`
  font-size: 22px;
  margin-right: 10px;
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -200px;
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
          <li>
            <HeaderIcon>
              <Link to={routes.home}>
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </HeaderIcon>
            <Link to={routes.home}>
              <p>홈</p>
            </Link>
          </li>
          <li>
            <HeaderIcon>
              <FontAwesomeIcon icon={faFilm} />
            </HeaderIcon>
            <p>영화</p>
            {/* <SubMenu>
              <li>액션</li>
              <li>액션</li>
              <li>액션</li>
              <li>액션</li>
              <li>액션</li>
              <li>액션</li>
              <li>액션</li>
              <li>액션</li>
              <li>액션</li>
            </SubMenu> */}
          </li>
          <li>
            <HeaderIcon>
              <Link to={routes.search}>
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </HeaderIcon>
            <Link to={routes.search}>
              <p>검색</p>
            </Link>
          </li>
        </MenuWrap>
      </LeftWrap>

      <RightWrap>
        <Link to={routes.login}>
          <li>로그인</li>
        </Link>
        <Link to={routes.signUp}>
          <li>회원가입</li>
        </Link>
      </RightWrap>
    </SHeader>
  );
};
