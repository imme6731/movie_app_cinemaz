import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
=======
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12

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
<<<<<<< HEAD
  position: relative;
  li {
    display: flex;
    align-items: center;
=======
  align-items: center;
  li {
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
    font-size: 18px;
    font-weight: 500;
    margin-right: 50px;
  }
`;

<<<<<<< HEAD
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

=======
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
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
<<<<<<< HEAD
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
=======
          <li>홈</li>
          <li>영화</li>
          <li>검색</li>
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
        </MenuWrap>
      </LeftWrap>

      <RightWrap>
<<<<<<< HEAD
        <Link to={routes.login}>
          <li>로그인</li>
        </Link>
        <Link to={routes.signUp}>
          <li>회원가입</li>
        </Link>
=======
        <li>로그인</li>
        <li>회원가입</li>
>>>>>>> 6ccea8e8b0d4aedbbceb2c5c469edf5c2a56ae12
      </RightWrap>
    </SHeader>
  );
};
