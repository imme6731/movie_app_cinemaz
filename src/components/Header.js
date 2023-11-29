import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useState } from "react";
import { SubMenu } from "./SubMenu";

const SHeader = styled.header`
  width: 100%;
  padding: 20px ${PaddingValue.pcWrap};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 900;
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
    font-size: 20px;
    font-weight: 500;
    margin-right: 50px;
    cursor: pointer;
  }
`;

const HeaderIcon = styled.h3`
  font-size: 22px;
  margin-right: 10px;
  cursor: pointer;
`;

const RightWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 16px;
    color: ${Colors.gray};
  }
`;

export const Header = () => {
  const [view, setView] = useState(false);

  // console.log(view);

  return (
    <SHeader>
      <LeftWrap>
        <Link to={routes.home}>
          <Logo>CINEMAZ</Logo>
        </Link>

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
          <li
            onClick={() => {
              setView(!view);
            }}
          >
            <HeaderIcon>
              <FontAwesomeIcon icon={faFilm} />
            </HeaderIcon>
            <p>영화</p>
            {view && <SubMenu />}
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
