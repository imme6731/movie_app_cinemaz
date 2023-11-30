import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { Colors, PaddingValue } from "../../../style/GlobalStyled";
import { IMG_URL } from "../../../api";

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
`;
const TxtWrap = styled.div`
  width: 40%;
  word-break: keep-all;
`;
const MainTxt = styled.div``;
const Title = styled.h3`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 30px;
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
  }
  & li:first-child {
    margin-right: 20px;
  }
  & li > p {
    font-size: 16px;
    margin-top: 10px;
  }
`;
const DescTxt = styled.div``;
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
    li {
      margin-bottom: 10px;
    }
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
`;

export const MainDetail = ({ val, year, nat1, nat2, act }) => {
  return (
    <Container>
      <Bg $Bg={val.backdrop_path}>
        <BlackBg />
      </Bg>
      <InnerCon>
        <TxtWrap>
          <MainTxt>
            <Title>{val.title}</Title>
            <BoxDesc>
              <li>{year}</li>
              <li>{val.genres[0].name}</li>
              <li>{val.runtime}분</li>
            </BoxDesc>
            <BtnWrap>
              <li>
                <FontAwesomeIcon icon={faHeart} />
                <p>찜</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <p>공유</p>
              </li>
            </BtnWrap>
          </MainTxt>
          <DescTxt>
            <Basic>
              <h3>기본 정보</h3>
              <Release>
                <h4>개봉연도</h4>
                <p>{year}년</p>
              </Release>
              <Genre>
                <h4>장르</h4>
                <ul>
                  {val.genres &&
                    val.genres.map((gen) => <li key={gen.id}>{gen.name}</li>)}
                </ul>
              </Genre>
              <Nation>
                <h4>국가</h4>
                <p>{nat1}</p>
                <p>{nat2}</p>
              </Nation>
              <RunTime>
                <h4>런타임</h4>
                <p>{val.runtime}분</p>
              </RunTime>
              <VoteAvg>
                <h4>평점</h4>
                <p>{Math.round(val.vote_average)}점</p>
              </VoteAvg>
            </Basic>
            <Overview>
              <h3>줄거리</h3>
              <p>{val.overview}</p>
            </Overview>
            <Credits>
              <h3>출연</h3>
              <ul>
                {act && act.map((per) => <li key={per.id}>{per.name}</li>)}
              </ul>
            </Credits>
          </DescTxt>
        </TxtWrap>
        <PosterImg $poster={val.poster_path}></PosterImg>
      </InnerCon>
    </Container>
  );
};
