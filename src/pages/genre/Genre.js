import { Layout } from "../../components/Layout";
import { discoverPop, discoverVote, genresList } from "../../api";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import { NoImg } from "../../components/NoImg";
import {
  Top,
  Title,
  Select,
  ConWrap,
  Con,
  Bg,
  MovieTitle,
} from "./components/GenreStyled";

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
