import { styled } from "styled-components";

const Msg = styled.span`
  color: #ff2e00;
  width: 100%;
  padding: 5px 0px 5px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const ErrorMsg = ({ message }) => {
  return <Msg>{message}</Msg>;
};
