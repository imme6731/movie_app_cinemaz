import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMsg } from "./components/ErrorMsg";
import { Button } from "./components/Button";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { Colors } from "../../style/GlobalStyled";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";

const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;
const Form = styled.form`
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
const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 390px) {
    font-size: 28px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid white;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  @media screen and (max-width: 640px) {
    height: 40px;
    font-size: 14px;
    padding-left: 10px;
  }
`;
const AutoLogin = styled.label`
  width: 100%;
  display: flex;
  align-items: center;

  & p {
    font-size: 16px;
  }
  @media screen and (max-width: 640px) {
    & p {
      font-size: 14px;
    }
  }
`;
const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  @media screen and (max-width: 640px) {
    width: 18px;
    height: 18px;
  }
`;

const Find = styled.ul`
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
const SignUpGo = styled.div`
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

export const Login = () => {
  useScrollTop();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const nav = useNavigate();

  const Submit = (data) => {
    nav("/");
  };

  return (
    <LoginWrap>
      <PageTitle titlename={` | Login`} />
      <Form onSubmit={handleSubmit(Submit)}>
        <Title>Login</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          placeholder="아이디"
        />
        <ErrorMsg message={errors?.username?.message} />
        <Input
          {...register("password", {
            required: "비밀번호는 필수 입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 작성해 주세요.",
            },
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
              message: "숫자와 특수기호를 포함하여 작성해 주세요.",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMsg message={errors?.password?.message} />
        <AutoLogin>
          <CheckBox type="checkbox" />
          <p>자동 로그인</p>
        </AutoLogin>
        <Button text={"로그인"} active={isValid} />
        <Find>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
        </Find>
        <SignUpGo>
          <p>아직 계정이 없으신가요?</p>
          <Link to={routes.signUp}>
            <h4>지금 가입하세요.</h4>
          </Link>
        </SignUpGo>
      </Form>
    </LoginWrap>
  );
};
