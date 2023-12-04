import { Layout } from "../../components/Layout";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import { NoImg } from "../../components/NoImg";
import {
  Title,
  ConWrap,
  Con,
  Bg,
  MovieTitle,
} from "./components/ViewMoreStyled";

export const ViewMore = () => {
  useScrollTop();
  const location = useLocation();
  // console.log(location);
  const dataName = location.state.data.dataName;
  const titleName = location.state.title.titleName;

  useEffect(() => {}, [location]);

  return (
    <Layout>
      <PageTitle titlename={` | ${titleName}`} />
      <Title>{titleName}</Title>

      <ConWrap>
        {dataName.map((res) => (
          <Con key={res.id}>
            <Link to={`/detail/${res.id}`}>
              {res.poster_path ? <Bg $bgUrl={res.poster_path} /> : <NoImg />}

              <MovieTitle>{res.title}</MovieTitle>
            </Link>
          </Con>
        ))}
      </ConWrap>
    </Layout>
  );
};
