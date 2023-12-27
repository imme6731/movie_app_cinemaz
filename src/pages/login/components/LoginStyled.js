import { styled } from "styled-components";
import { Colors } from "../../../style/GlobalStyled";

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;
export const Form = styled.form`
  max-width: 460px;
  width: 100%;
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #313131;
  border-radius: 10px;
  @media screen and (max-width: 640px) {
    max-width: 360px;
    padding: 60px 30px 20px 30px;
  }
  @media screen and (max-width: 390px) {
    max-width: 300px;
    padding: 60px 30px 20px 30px;
  }
`;
export const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 390px) {
    font-size: 28px;
  }
`;
export const SubTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 40px;
  color: #e1e1e1;
  @media screen and (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid white;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  margin-bottom: 12px;

  @media screen and (max-width: 640px) {
    height: 40px;
    font-size: 14px;
    padding-left: 10px;
  }
`;
export const AutoLogin = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  & p {
    font-size: 16px;
  }
  @media screen and (max-width: 640px) {
    & p {
      font-size: 14px;
    }
  }
`;
export const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  @media screen and (max-width: 640px) {
    width: 18px;
    height: 18px;
  }
`;

export const Find = styled.ul`
  display: flex;
  font-size: 16px;
  margin-bottom: 40px;
  color: ${Colors.gray};
  cursor: pointer;
  & li:first-child {
    margin-right: 40px;
  }
  & li:hover {
    color: white;
    font-weight: 500;
  }
  @media screen and (max-width: 640px) {
    font-size: 14px;
    & li:first-child {
      margin-right: 40px;
    }
    margin-bottom: 30px;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 40px;
  }
`;
export const SignUpGo = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  color: ${Colors.gray};
  & p {
    margin-right: 10px;
    font-weight: 300;
  }
  & a {
    color: ${Colors.gray};
    text-decoration: underline;
  }

  & a:hover {
    color: white;
    font-weight: 500;
  }
  @media screen and (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    & p {
      margin-bottom: 15px;
    }
  }
`;
