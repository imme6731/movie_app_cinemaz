import styled from "styled-components";
import { Colors, PaddingValue } from "../style/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faFilm,
  faHome,
  faHouse,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useState } from "react";
import { SubMenu } from "./SubMenu";
import { genresList } from "../api";

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

const MovileSlideMenu = styled.div`
  width: 100%;
  height: 100%;
  background-color: #313131;
  padding: 20px 8%;
  position: fixed;
  left: ${(props) => props.$left};
  top: 0;
  transition: 0.3s;
  overflow: scroll;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 10px;
`;
const MLogo = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${Colors.pointColor};
`;
const Out = styled.div`
  font-size: 20px;
`;
const Section1 = styled.div`
  h3 {
    font-size: 18px;
    line-height: 1.3;
    b {
      color: ${Colors.pointColor};
    }
    margin-bottom: 30px;
  }
`;
const Btn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;
const Login = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid none;
  border-radius: 40px;
  line-height: 34px;
  background-color: ${Colors.pointColor};
  margin-right: 20px;
`;
const SignUp = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid ${Colors.pointColor};
  color: ${Colors.pointColor};
  border-radius: 40px;
  line-height: 34px;
`;
const Section2 = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;
const HomeTap = styled.div`
  position: relative;
  align-items: center;
  font-size: 20px;

  display: flex;
  margin-left: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #bcbcbc;
  color: ${Colors.pointColor};
  p {
    font-size: 16px;
    color: white;
    margin-left: 20px;
  }
  z-index: 20;
`;
const SearchTap = styled.div`
  position: relative;
  align-items: center;
  font-size: 20px;

  display: flex;
  margin-left: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #bcbcbc;
  color: ${Colors.pointColor};
  p {
    font-size: 16px;
    color: white;
    margin-left: 20px;
  }
  z-index: 20;
`;
const MovieTap = styled.div`
  position: relative;
  align-items: center;
  font-size: 20px;
  overflow: hidden;
  display: flex;
  margin-left: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #bcbcbc;
  color: ${Colors.pointColor};
  p {
    font-size: 16px;
    color: white;
    margin-left: 20px;
  }
  z-index: 20;
`;
const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  color: ${Colors.gray};
  font-size: 16px;
  position: absolute;
  right: 0;
`;

const Wrap = styled.div`
  position: absolute;
  /* bottom: -135.5px;
  bottom: 100%; */
  bottom: ${(props) => props.$bottom};
  opacity: ${(props) => props.$opacity};
  width: 85%;
  background-color: #1d1d1d;
  padding: 30px 40px;
  transition: 0.5s;
  z-index: 0;
`;

const GenreList = styled.ul`
  li {
    margin-bottom: 20px;
    display: block !important;
    font-size: 16px !important;
    &:last-child {
      margin-bottom: 0;
    }
    & a {
      color: ${Colors.gray};
    }
  }
`;
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuLeft, setMenuLeft] = useState("100%");
  const [openGenre, setOpenGenre] = useState("-22%");
  const [opPer, setOpPer] = useState(0);

  const onClickMenu = () => {
    menuLeft === "100%" ? setMenuLeft(0) : setMenuLeft("100%");
  };

  const closeMenu = () => {
    // menuLeft === 0 ? setMenuLeft("100%") : setMenuLeft(0);
    if (menuLeft === 0) {
      setMenuLeft("100%");
      setOpenGenre("-22%");
      setOpPer(0);
    } else {
      setMenuLeft(0);
      setOpenGenre("-27%");
      setOpPer("100%");
    }
  };

  const onClickMovie = () => {
    // openGenre === "10%"
    //   ? (setOpenGenre("-135.5px"), setOpPer("100%"))
    //   : (setOpenGenre("10%"), setOpPer(0));

    if (openGenre === "-22%") {
      setOpenGenre("-27%");
      setOpPer("100%");
    } else {
      setOpenGenre("-22%");
      setOpPer(0);
    }
  };

  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { genres } = await genresList();
        // console.log(genres);
        setList(genres);
        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

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
              setIsOpen(!isOpen);
            }}
          >
            <HeaderIcon>
              <FontAwesomeIcon icon={faFilm} />
            </HeaderIcon>
            <p>영화</p>
            {isOpen && <SubMenu />}
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
        <MobileMenu onClick={onClickMenu}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenu>

        <MovileSlideMenu $left={menuLeft}>
          <Container>
            <MHeader>
              <MLogo>CINEMAZ</MLogo>
              <Out onClick={closeMenu}>
                <FontAwesomeIcon icon={faXmark} />
              </Out>
            </MHeader>
            <Section1>
              <h3>
                즐거운 문화 생활!
                <br />
                <b>CINEMAZ</b>와 함께 하세요.
              </h3>

              <Btn>
                <Link to={routes.login} onClick={closeMenu}>
                  <Login>로그인</Login>
                </Link>
                <Link to={routes.signUp} onClick={closeMenu}>
                  <SignUp>회원가입</SignUp>
                </Link>
              </Btn>
            </Section1>

            <Section2>
              <Link to={routes.home} onClick={closeMenu}>
                <HomeTap>
                  <FontAwesomeIcon icon={faHome} />
                  <p>홈</p>
                </HomeTap>
              </Link>
              <Link to={routes.search} onClick={closeMenu}>
                <SearchTap>
                  <FontAwesomeIcon icon={faSearch} onClick={closeMenu} />
                  <p>검색</p>
                </SearchTap>
              </Link>
              <MovieTap onClick={onClickMovie}>
                <Left>
                  <FontAwesomeIcon icon={faFilm} />
                  <p>영화</p>
                </Left>
                <Right>
                  <FontAwesomeIcon icon={faChevronDown} />
                </Right>
              </MovieTap>
              {/* <MobileGenreMenu
                bottomVal={openGenre}
                opVal={opPer}
            
              ></MobileGenreMenu> */}

              {isLoading ? (
                ""
              ) : (
                <>
                  {genresList && (
                    <Wrap $bottom={openGenre} $opacity={opPer}>
                      <GenreList>
                        <li>
                          <Link to={`/genre/${list[0].id}`} onClick={closeMenu}>
                            • {list[0].name}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/genre/${list[2].id}`} onClick={closeMenu}>
                            • {list[2].name}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/genre/${list[3].id}`} onClick={closeMenu}>
                            • {list[3].name}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/genre/${list[5].id}`} onClick={closeMenu}>
                            • {list[5].name}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/genre/${list[7].id}`} onClick={closeMenu}>
                            • {list[7].name}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/genre/${list[8].id}`} onClick={closeMenu}>
                            • {list[8].name}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/genre/${list[10].id}`}
                            onClick={closeMenu}
                          >
                            • {list[10].name}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/genre/${list[11].id}`}
                            onClick={closeMenu}
                          >
                            • {list[11].name}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/genre/${list[13].id}`}
                            onClick={closeMenu}
                          >
                            • {list[13].name}
                          </Link>
                        </li>
                      </GenreList>
                    </Wrap>
                  )}
                </>
              )}
            </Section2>
          </Container>
        </MovileSlideMenu>
      </RightWrap>
    </SHeader>
  );
};
