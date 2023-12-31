import { styled } from "styled-components";
import { IMG_URL } from "../../../api";
import { Colors } from "../../../style/GlobalStyled";
import { Link } from "react-router-dom";
import { PageTitle } from "../../../components/PageTitle";
import { NoImg } from "../../../components/NoImg";

const Contianer = styled.div`
  width: 100%;
  padding: 80px 0;
  @media screen and (max-width: 530px) {
    padding: 60px 0;
  }
`;
const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
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

export const Trending = ({ titleName, dataName }) => {
  return (
    <Contianer>
      <PageTitle titlename={` | ${titleName}`} />
      <Title>{titleName}</Title>

      <ConWrap>
        {dataName &&
          dataName.map((res) => (
            <Con key={res.id}>
              <Link to={`/detail/${res.id}`}>
                {res.poster_path ? <Bg $bgUrl={res.poster_path} /> : <NoImg />}
                <MovieTitle>{res.title}</MovieTitle>
              </Link>
            </Con>
          ))}
      </ConWrap>
    </Contianer>
  );
};
