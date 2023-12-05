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
import { useEffect, useRef, useState } from "react";
import { SubMenu } from "./SubMenu";
import { genresList } from "../api";

import {
  SHeader,
  LeftWrap,
  Logo,
  MenuWrap,
  HeaderIcon,
  RightWrap,
  MobileMenu,
  MovileSlideMenu,
  Container,
  MHeader,
  MLogo,
  Out,
  Section1,
  Btn,
  Login,
  SignUp,
  Section2,
  HomeTap,
  SearchTap,
  MovieTap,
  Left,
  Right,
  Wrap,
  GenreList,
} from "./headerStyled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuLeft, setMenuLeft] = useState("100%");
  const [openGenre, setOpenGenre] = useState("360px");
  const [display, setDisplay] = useState("none");
  const [opPer, setOpPer] = useState(0);
  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;

    if (pageY > 100) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.backgroundColor = "rgba(29,29,29,0.8)";
      headerRef.current.style.backdropFilter = "blur(2px)";
    } else {
      headerRef.current.style.position = "relative";
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  const onClickMenu = () => {
    if (menuLeft === "100%") {
      setMenuLeft(0);
      setOpenGenre("360px");
      setOpPer(0);
      setDisplay("block");
    } else if (menuLeft === "0") {
      setMenuLeft("100%");
      setOpenGenre("412px");
      setOpPer("100%");
      setDisplay("none");
    }
  };

  const closeMenu = () => {
    if (menuLeft === 0) {
      setMenuLeft("100%");
      setOpenGenre("360px");
      setOpPer(0);
      setDisplay("none");
    } else {
      setMenuLeft(0);
      setOpenGenre("412px");
      setOpPer("100%");
      setDisplay("block");
    }
  };

  const onClickMovie = () => {
    if (openGenre === "360px") {
      setOpenGenre("412px");
      setOpPer("100%");
    } else {
      setOpenGenre("360px");
      setOpPer(0);
    }
  };

  const showModal = (e) => {
    document.body.style.overflow = "hidden";
  };

  const hideModal = (e) => {
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    (async () => {
      try {
        const { genres } = await genresList();

        setList(genres);
        setIsLoading(false);
        return window.addEventListener("scroll", scrollHandler);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  return (
    <SHeader ref={headerRef}>
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
        <MobileMenu
          onClick={() => {
            onClickMenu();
            showModal();
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </MobileMenu>
      </RightWrap>

      <MovileSlideMenu $left={menuLeft} $display={display}>
        <Container>
          <MHeader>
            <MLogo>CINEMAZ</MLogo>
            <Out
              onClick={() => {
                closeMenu();
                hideModal();
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Out>
          </MHeader>
          <Section1>
            <h3>
              즐거운 문화 생활!
              <br />
              <b>CINEMAZ</b>와 함께 하세요.
            </h3>

            <Btn onClick={hideModal}>
              <Link to={routes.login} onClick={closeMenu}>
                <Login>로그인</Login>
              </Link>
              <Link to={routes.signUp} onClick={closeMenu}>
                <SignUp>회원가입</SignUp>
              </Link>
            </Btn>
          </Section1>

          <Section2>
            <Link
              to={routes.home}
              onClick={() => {
                closeMenu();
                hideModal();
              }}
            >
              <HomeTap>
                <FontAwesomeIcon icon={faHome} />
                <p>홈</p>
              </HomeTap>
            </Link>
            <Link
              to={routes.search}
              onClick={() => {
                closeMenu();
                hideModal();
              }}
            >
              <SearchTap>
                <FontAwesomeIcon icon={faSearch} />
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

            {isLoading ? (
              ""
            ) : (
              <>
                {genresList && (
                  <Wrap $top={openGenre} $opacity={opPer}>
                    <GenreList>
                      <li>
                        <Link
                          to={`/genre/${list[0].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[0].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[2].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[2].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[3].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[3].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[5].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[5].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[7].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[7].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[8].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[8].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[10].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[10].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[11].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
                        >
                          • {list[11].name}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/genre/${list[13].id}`}
                          onClick={() => {
                            closeMenu();
                            hideModal();
                          }}
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
    </SHeader>
  );
};
