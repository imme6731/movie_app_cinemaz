import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { genresList } from "../api";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

const SubWrap = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 22.656%;
  bottom: 62.5vh;
  background-color: #3c3c3c;
  padding: 30px 40px;
  @media screen and (max-width: 890px) {
    bottom: 63.2vh;
  }
`;

const SSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
    cursor: default;
  }
  ul {
    display: flex;
  }
  ul > li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    margin-right: 35px;
    p {
      margin-bottom: 25px;
      @media screen and (max-width: 890px) {
        display: block;
      }
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
  ul > li:last-child {
    margin-right: 0;
  }
`;

export const SubMenu = () => {
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
  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          {genresList && (
            <Container>
              <SubWrap>
                <SSubMenu>
                  <h4>장르</h4>
                  <ul>
                    <li>
                      <p>
                        <Link to={`/genre/${list[0].id}`}>{list[0].name}</Link>
                      </p>
                      <p>
                        <Link to={`/genre/${list[2].id}`}>{list[2].name}</Link>
                      </p>
                      <p>
                        <Link to={`/genre/${list[3].id}`}>{list[3].name}</Link>
                      </p>
                      <p>
                        <Link to={`/genre/${list[5].id}`}>{list[5].name}</Link>
                      </p>
                      <p>
                        <Link to={`/genre/${list[7].id}`}>{list[7].name}</Link>
                      </p>
                    </li>
                    <li>
                      <p>
                        <Link to={`/genre/${list[8].id}`}>{list[8].name}</Link>
                      </p>
                      <p>
                        <Link to={`/genre/${list[10].id}`}>{list[0].name}</Link>
                      </p>
                      <p>
                        <Link to={`/genre/${list[11].id}`}>
                          {list[11].name}
                        </Link>
                      </p>
                      <p>
                        <Link to={`/genre/${list[13].id}`}>
                          {list[13].name}
                        </Link>
                      </p>
                    </li>
                  </ul>
                </SSubMenu>
              </SubWrap>
            </Container>
          )}
        </>
      )}
    </>
  );
};
