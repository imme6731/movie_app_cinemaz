import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { Colors, PaddingValue } from "../../../style/GlobalStyled";
import { IMG_URL } from "../../../api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../../../components/Loading";

const Container = styled.section`
  width: 100%;
  position: relative;
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  background: linear-gradient(
    0deg,
    rgba(29, 29, 29, 1) 5%,
    rgba(29, 29, 29, 0.8) 20%,
    rgba(29, 29, 29, 0.6) 31%,
    rgba(29, 29, 29, 0.2) 60%,
    rgba(29, 29, 29, 0) 89%
  );
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(50px);
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${IMG_URL}/original/${(props) => props.$Bg}) no-repeat center /
    cover;
  display: block;
  position: absolute;
  top: 25px;
  left: 0px;
  opacity: 0.5;
  transform: scale(1.05);
`;
const InnerCon = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: ${PaddingValue.pcInnerWrap};
  @media screen and (max-width: 640px) {
    padding: 0 ${PaddingValue.pcInnerWrap};
    padding-top: 200px;
  }
`;
const TxtWrap = styled.div`
  width: 40%;
  word-break: keep-all;
`;
const MainTxt = styled.div`
  @media screen and (max-width: 640px) {
  }
`;
const Title = styled.h3`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 890px) {
    font-size: 48px;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;
const BoxDesc = styled.ul`
  display: flex;
  margin-bottom: 30px;
  & li {
    border: 1px solid white;
    border-radius: 10px;
    padding: 8px 10px;
    margin-right: 10px;
    font-size: 16px;
    @media screen and (max-width: 640px) {
      font-size: 14px;
    }
  }
`;
const BtnWrap = styled.ul`
  display: flex;
  margin-bottom: 40px;
  & li {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 890px) {
      font-size: 32px;
    }
  }
  & li:first-child {
    margin-right: 30px;
    @media screen and (max-width: 890px) {
      margin-right: 20px;
    }
  }
  & li > p {
    font-size: 16px;
    margin-top: 10px;
  }
`;
const DescTxt = styled.div`
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const Basic = styled.ul`
  margin-bottom: 40px;
  & h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  & li {
    display: flex;
    margin-bottom: 20px;
    font-size: 18px;
    & h4 {
      width: 70px;
      margin-right: 20px;
    }
    & p {
      color: ${Colors.gray};
    }
  }
`;
const Release = styled.li``;
const Genre = styled.li`
  & ul {
    font-size: 18px;
    color: ${Colors.gray};
    display: flex;
  }
  & ul > li {
    margin-right: 10px;
    display: block;
    margin-bottom: 0;
  }
`;
const Nation = styled.li`
  & p {
    margin-right: 10px;
  }
`;
const RunTime = styled.li``;
const VoteAvg = styled.li``;

const Overview = styled.div`
  margin-bottom: 40px;
  & h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  & p {
    font-size: 18px;
    line-height: 1.3;
    color: ${Colors.gray};
  }
`;
const Credits = styled.div`
  & h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  & ul {
    font-size: 18px;
    color: ${Colors.gray};
    li {
      margin-bottom: 10px;
    }
  }
`;
const PosterImg = styled.div`
  width: 500px;
  height: 750px;
  background: url(${IMG_URL}/w500/${(props) => props.$poster}) no-repeat center /
    cover;
  @media screen and (max-width: 1240px) {
    width: 400px;
    height: 600px;
  }
  @media screen and (max-width: 890px) {
    width: 320px;
    height: 480px;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const MainDetail = ({ val, year, nat1, nat2, act }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [heartIcon, setHeartIcon] = useState(false);
  const [nat1Len, setNat1Len] = useState();
  const [actLen, setActLen] = useState();
  const [genreLen, setGenreLen] = useState();

  const hadnleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (error) {
      console.log("에러:" + error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    setIsLoading(false);
    setNat1Len(nat1?.length);
    setActLen(act?.length);
    setGenreLen(val?.genres);
  }, [val, year, nat1, nat2, act]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Bg $Bg={val.backdrop_path}>
            <BlackBg />
          </Bg>
          <InnerCon>
            <TxtWrap>
              <MainTxt>
                <Title>{val.title}</Title>
                <BoxDesc>
                  {year && <li>{year}</li>}
                  <li>{val.genres[0].name}</li>
                  {val.runtime !== 0 && <li>{val.runtime}분</li>}
                </BoxDesc>
                <BtnWrap>
                  <li
                    onClick={() => {
                      setHeartIcon(!heartIcon);
                    }}
                  >
                    {heartIcon ? (
                      <FontAwesomeIcon
                        icon={solidHeart}
                        style={{ color: "crimson" }}
                      />
                    ) : (
                      <FontAwesomeIcon icon={regularHeart} />
                    )}
                    <p>찜</p>
                  </li>
                  <li
                    onClick={() =>
                      hadnleCopyClipBoard(
                        `http://localhost:3000/${location.pathname}`
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    <p>공유</p>
                  </li>
                </BtnWrap>
              </MainTxt>
              <DescTxt>
                <Basic>
                  <h3>기본 정보</h3>
                  {year && (
                    <Release>
                      <h4>개봉연도</h4>
                      <p>{year}년</p>
                    </Release>
                  )}
                  {genreLen !== 0 && (
                    <Genre>
                      <h4>장르</h4>
                      <ul>
                        {val.genres &&
                          val.genres.map((gen) => (
                            <li key={gen.id}>{gen.name}</li>
                          ))}
                      </ul>
                    </Genre>
                  )}
                  {nat1Len !== 0 && (
                    <Nation>
                      <h4>국가</h4>
                      {isLoading ? (
                        "loading..."
                      ) : (
                        <>
                          <p>{nat1}</p>
                          <p>{nat2}</p>
                        </>
                      )}
                    </Nation>
                  )}
                  {val.runtime !== 0 && (
                    <RunTime>
                      <h4>런타임</h4>
                      <p>{val.runtime}분</p>
                    </RunTime>
                  )}
                  {val.vote_average !== 0 && (
                    <VoteAvg>
                      <h4>평점</h4>
                      <p>{Math.round(val.vote_average)}점</p>
                    </VoteAvg>
                  )}
                </Basic>
                {val.overview && (
                  <Overview>
                    <h3>줄거리</h3>
                    <p>{val.overview}</p>
                  </Overview>
                )}
                {actLen !== 0 && (
                  <Credits>
                    <h3>출연</h3>
                    {isLoading ? (
                      "loading"
                    ) : (
                      <ul>
                        {act &&
                          act.map((per) => <li key={per.id}>{per.name}</li>)}
                      </ul>
                    )}
                  </Credits>
                )}
              </DescTxt>
            </TxtWrap>
            <PosterImg $poster={val.poster_path}></PosterImg>
          </InnerCon>
        </Container>
      )}
    </>
  );
};
