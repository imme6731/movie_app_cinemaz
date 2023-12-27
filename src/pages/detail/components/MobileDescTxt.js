import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Colors } from "../../../style/GlobalStyled";

const DescTxt = styled.div`
  @media screen and (max-width: 19200px) {
    display: none;
  }
  @media screen and (max-width: 640px) {
    display: block;
  }
  margin-top: 20px;
  margin-bottom: 60px;
`;
const Basic = styled.ul`
  margin-bottom: 60px;
  & h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 25px;
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
    @media screen and (max-width: 640px) {
      font-size: 16px;
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
  @media screen and (max-width: 800px) {
    & ul {
      flex-direction: column;
    }
    & ul > li {
      margin-bottom: 10px;
      margin-right: 0;
      &:last-child {
        margin-bottom: 0;
      }
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
  margin-bottom: 60px;
  & h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 25px;
  }
  & p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    color: ${Colors.gray};
  }
  @media screen and (max-width: 640px) {
    & p {
      font-size: 16px;
    }
  }
`;
const Credits = styled.div`
  & h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 25px;
  }
  & ul {
    font-size: 18px;
    color: ${Colors.gray};
    li {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 640px) {
    & ul {
      font-size: 16px;
    }
    padding-bottom: 60px;
    border-bottom: 0.5px solid #525252;
  }
`;

export const MobileDescTxt = ({ val, year, nat1, nat2, act }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [nat1Len, setNat1Len] = useState();
  const [actLen, setActLen] = useState();
  const [genreLen, setGenreLen] = useState();

  useEffect(() => {
    setIsLoading(false);
    setNat1Len(nat1?.length);
    setActLen(act?.length);
    setGenreLen(val?.genres);
  }, [val, year, nat1, nat2, act]);

  return (
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
                val.genres.map((gen) => <li key={gen.id}>{gen.name}</li>)}
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
            <ul>{act && act.map((per) => <li key={per.id}>{per.name}</li>)}</ul>
          )}
        </Credits>
      )}
    </DescTxt>
  );
};
