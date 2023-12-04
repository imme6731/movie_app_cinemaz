import { styled } from "styled-components";
import { Colors } from "../../../style/GlobalStyled";
import { IMG_URL } from "../../../api";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
`;
export const Select = styled.select`
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
export const ConWrap = styled.div`
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
export const Con = styled.div``;
export const Bg = styled.div`
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
export const MovieTitle = styled.p`
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
