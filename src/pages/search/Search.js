import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { movieSearch, trending } from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import { Trending } from "./components/Trending";
import { NoImg } from "../../components/NoImg";
import {
  Container,
  Form,
  Input,
  Btn,
  Title,
  ResultWrap,
  ConWrap,
  Con,
  Bg,
  MovieTitle,
  ErrorMessage,
} from "./components/SearchStyled";

export const Search = () => {
  useScrollTop();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [term, setTerm] = useState();
  const [inputVal, setInputVal] = useState();
  const [trendVal, setTrendVal] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    // console.log("결과:" + keyword);
    setInputVal(keyword);

    try {
      const { results } = await movieSearch(keyword);
      // console.log(results);
      setTerm(results);
    } catch (error) {
      console.log("에러:" + error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { results: trendResults } = await trending();
        // console.log(trendResults);
        setTrendVal(trendResults);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <PageTitle titlename={` | Search`} />
      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색어를 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 영화 제목을 입력해보세요."
        ></Input>
        <Btn onClick={handleSubmit(searchHandler)} $isValid={isValid}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Btn>
      </Form>

      {term ? (
        <>
          {term?.length !== 0 ? (
            <ResultWrap>
              <Title>검색 결과</Title>
              <ConWrap>
                {term &&
                  term.map((data) => (
                    <Con key={data.id}>
                      <Link to={`/detail/${data.id}}`}>
                        {data.poster_path ? (
                          <Bg $bgUrl={data.poster_path} />
                        ) : (
                          <NoImg />
                        )}

                        <MovieTitle>{data.title}</MovieTitle>
                      </Link>
                    </Con>
                  ))}
              </ConWrap>
            </ResultWrap>
          ) : (
            <ResultWrap>
              <ErrorMessage text={errors?.search?.message}>
                <FontAwesomeIcon icon={faCircleExclamation} />
                <p>"{inputVal}" 검색 결과가 없습니다.</p>
              </ErrorMessage>
            </ResultWrap>
          )}
        </>
      ) : (
        <>
          {term?.length !== 0 && (
            <Trending titleName={"이번 주 트렌딩"} dataName={trendVal} />
          )}
        </>
      )}
    </Container>
  );
};
