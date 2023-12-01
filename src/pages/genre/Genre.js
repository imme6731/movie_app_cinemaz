import { styled } from "styled-components";
import { Layout } from "../../components/Layout";
import { IMG_URL, discover, genresList } from "../../api";
import { Colors } from "../../style/GlobalStyled";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
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

  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await discover(id);

        setData(results);
        setIsLoading(false);

        const { genres } = await genresList();

        // eslint-disable-next-line
        setTitle(genres.filter((x) => x.id == id).map((x) => x.name));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <Layout>
              <Title>{title} 영화</Title>

              <ConWrap>
                {data &&
                  data.map((res) => (
                    <Con key={res.id}>
                      <Link to={`/detail/${res.id}`}>
                        <Bg $bgUrl={res.poster_path} />
                        <MovieTitle>{res.title}</MovieTitle>
                      </Link>
                    </Con>
                  ))}
              </ConWrap>
            </Layout>
          )}
        </>
      )}
    </>
  );
};
