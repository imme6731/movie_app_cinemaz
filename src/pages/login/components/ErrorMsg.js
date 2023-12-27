import { styled } from "styled-components";

const Msg = styled.span`
  color: #ff2e00;
  width: 100%;
  padding: 0px 0px 12px 10px;
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const ErrorMsg = ({ message }) => {
  return <Msg>{message}</Msg>;
};
