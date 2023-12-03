import { styled } from "styled-components";
import { Colors, PaddingValue } from "../../style/GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { IMG_URL, movieSearch } from "../../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.div`
  width: 100%;
  padding: 100px ${PaddingValue.pcInnerWrap};
`;
const Form = styled.form`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`;
const Input = styled.input`
  width: 90%;
  height: 100%;
  background-color: #1d1d1d;
  border: none;
  font-size: 30px;
  font-weight: 500;
  color: white;
`;
const Btn = styled.div`
  font-size: 30px;
  opacity: ${(props) => (props.$isValid ? 1 : 0.5)};
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
`;

const ResultWrap = styled.div`
  padding: 80px 0;
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

const ErrorMessage = styled.div`
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  & p {
    margin-top: 20px;
  }
`;

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const [term, setTerm] = useState();
  const [inputVal, setInputVal] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    // console.log("결과:" + keyword);
    setInputVal(keyword);

    try {
      const { results } = await movieSearch(keyword);
      console.log(results);
      setTerm(results);
    } catch (error) {
      console.log("에러:" + error);
    }
  };

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
                        <Bg $bgUrl={data.poster_path} />
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
        <>{term?.length !== 0 && "트렌딩"}</>
      )}
    </Container>
  );
};
