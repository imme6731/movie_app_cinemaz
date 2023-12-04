import { styled } from "styled-components";
import { Layout } from "../../components/Layout";
import { IMG_URL, discoverPop, discoverVote, genresList } from "../../api";
import { Colors } from "../../style/GlobalStyled";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import { NoImg } from "../../components/NoImg";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
`;
const Select = styled.select`
  width: 130px;
  height: 30px;
  background-color: #1d1d1d;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  padding-left: 5px;
  @media screen and (max-width: 390px) {
    width: 115px;
  }
`;
const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 2.29%;
  row-gap: 60px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 25px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 25px;
  }
  @media screen and (max-width: 390px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Con = styled.div``;
const Bg = styled.div`
  height: 434px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat
    center/cover;
  margin-bottom: 20px;
  @media screen and (max-width: 1460px) {
    height: 328px;
  }
  @media screen and (max-width: 1024px) {
    height: 275px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 860px) {
    height: 250px;
  }
  @media screen and (max-width: 640px) {
    height: 250px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 390px) {
    height: 165px;
    margin-bottom: 10px;
  }
`;
const MovieTitle = styled.p`
  font-size: 18px;
  line-height: 1.2;
  color: ${Colors.gray};
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;
export const Genre = () => {
  const { id } = useParams();

  const [popular, setPopular] = useState();
  const [vote, setVote] = useState();
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState("인기순");

  const handlerChange = (e) => {
    setResults(e.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const { results: popdesc } = await discoverPop(id);

        setPopular(popdesc);
        setIsLoading(false);

        const { results: votedesc } = await discoverVote(id);
        setVote(votedesc);

        const { genres } = await genresList();

        // eslint-disable-next-line
        setTitle(genres.filter((x) => x.id == id).map((x) => x.name));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  useScrollTop();

  return (
    <>
      <PageTitle titlename={` | ${title}`} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {popular && (
            <Layout>
              <Top>
                <Title>{title} 영화</Title>
                <Select onChange={handlerChange}>
                  <option
                    key={"인기순"}
                    value={"인기순"}
                    defaultValue={"인기순"}
                  >
                    인기순
                  </option>
                  <option key={"리뷰 많은 순"} value={"리뷰 많은 순"}>
                    리뷰 많은 순
                  </option>
                </Select>
              </Top>

              {results === "인기순" ? (
                <ConWrap>
                  {popular &&
                    popular.map((res) => (
                      <Con key={res.id}>
                        <Link to={`/detail/${res.id}`}>
                          {res.poster_path ? (
                            <Bg $bgUrl={res.poster_path} />
                          ) : (
                            <NoImg />
                          )}
                          <MovieTitle>{res.title}</MovieTitle>
                        </Link>
                      </Con>
                    ))}
                </ConWrap>
              ) : (
                <ConWrap>
                  {vote &&
                    vote.map((res) => (
                      <Con key={res.id}>
                        <Link to={`/detail/${res.id}`}>
                          {res.poster_path ? (
                            <Bg $bgUrl={res.poster_path} />
                          ) : (
                            <NoImg />
                          )}
                          <MovieTitle>{res.title}</MovieTitle>
                        </Link>
                      </Con>
                    ))}
                </ConWrap>
              )}
            </Layout>
          )}
        </>
      )}
    </>
  );
};
