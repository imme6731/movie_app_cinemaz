import { styled } from "styled-components";
import { Colors, PaddingValue } from "../../../style/GlobalStyled";
import { IMG_URL } from "../../../api";

export const Container = styled.div`
  width: 100%;
  padding: 100px ${PaddingValue.pcInnerWrap};
  @media screen and (max-width: 530px) {
    padding: 60px ${PaddingValue.pcInnerWrap};
  }
`;
export const Form = styled.form`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #525252;
  @media screen and (max-width: 530px) {
    height: 40px;
  }
  @media screen and (max-width: 390px) {
    padding: 0;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #1d1d1d;
  border: none;
  font-size: 24px;
  font-weight: 500;
  color: white;
  @media screen and (max-width: 690px) {
    font-size: 18px;
  }
  @media screen and (max-width: 530px) {
    font-size: 16px;
  }
`;
export const Btn = styled.div`
  margin-left: 5px;
  font-size: 30px;
  opacity: ${(props) => (props.$isValid ? 1 : 0.5)};
  @media screen and (max-width: 530px) {
    font-size: 24px;
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
`;

export const ResultWrap = styled.div`
  padding: 80px 0;
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

export const ErrorMessage = styled.div`
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  & p {
    margin-top: 20px;
  }
`;
