import {
  LoginWrap,
  Form,
  Title,
  Input,
  AutoLogin,
  CheckBox,
  Find,
  SignUpGo,
} from "./components/LoginStyled";
import { useForm } from "react-hook-form";
import { ErrorMsg } from "./components/ErrorMsg";
import { Button } from "./components/Button";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";

import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";

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
