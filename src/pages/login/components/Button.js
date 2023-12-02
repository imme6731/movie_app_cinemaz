import { styled } from "styled-components";
import { Colors } from "../../../style/GlobalStyled";

const SButton = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: ${Colors.pointColor};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  color: white;
  box-sizing: border-box;
  cursor: pointer;
  opacity: ${(props) => (props.$isAvtive ? 1 : 0.5)};
  @media screen and (max-width: 640px) {
    height: 40px;
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

export const Button = ({ active, text }) => {
  return <SButton $isAvtive={active}>{text}</SButton>;
};
