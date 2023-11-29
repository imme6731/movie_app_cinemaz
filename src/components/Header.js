import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFilm,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
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
  @media screen and (max-width: 1024px) {
    margin-right: 70px;
  }
  @media screen and (max-width: 890px) {
    margin-right: 40px;
    font-size: 32px;
  }
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
    @media screen and (max-width: 890px) {
      p {
        display: none;
      }
      margin-right: 0;
    }
  }
`;

const HeaderIcon = styled.h3`
  font-size: 22px;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (max-width: 890px) {
    margin-right: 25px;
  }
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

const RightWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 16px;
    color: ${Colors.gray};
    @media screen and (max-width: 890px) {
      font-size: 14px;
      margin-left: 35px;
    }
    @media screen and (max-width: 530px) {
      display: none;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 530px) {
    display: block;
    font-size: 22px;
    cursor: pointer;
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
        <MobileMenu>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenu>
      </RightWrap>
    </SHeader>
  );
};
