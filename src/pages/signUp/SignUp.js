import {
  SignUpWrap,
  Form,
  Title,
  SubTitle,
  Input,
  Txt,
} from "./components/SignUpStyled";
import { Button } from "../login/components/Button";
import { useForm } from "react-hook-form";
import { ErrorMsg } from "../login/components/ErrorMsg";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";

export const SignUp = () => {
  const nav = useNavigate();
  useScrollTop();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  const Submit = (data) => {
    nav("/login");
  };

  return (
    <SignUpWrap>
      <PageTitle titlename={` | SignUp`} />
      <Form onSubmit={handleSubmit(Submit)}>
        <Title>Sign Up</Title>
        <SubTitle>아이디와 이메일로 간편하게 시작하세요!</SubTitle>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 6,
              message: "6자리 이상 작성해 주세요.",
            },
            pattern: {
              value: /^[a-zA-Z0-9]{6,12}$/,
              message: "특수문자를 제외한 6~12자리까지 가능합니다.",
            },
          })}
          placeholder="아이디"
        />
        {errors?.username?.message ? (
          <ErrorMsg message={errors?.username?.message} />
        ) : (
          <Txt>영문자 또는 숫자 6~12자</Txt>
        )}
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
          style={{ marginBottom: "10px" }}
        />
        <Input
          {...register("passwordConfirm", {
            required: "비밀번호를 확인 해주세요.",
            validate: (value) =>
              value === watch("password") ? true : "비밀번호를 확인해 주세요.",
          })}
          type="password"
          placeholder="비밀번호 확인"
        />
        {errors?.passwordConfirm?.message ? (
          <ErrorMsg message={errors?.passwordConfirm?.message} />
        ) : errors?.password?.message ? (
          <ErrorMsg message={errors?.password?.message} />
        ) : (
          <Txt>영문자, 숫자, 특수문자 포함 6~18자</Txt>
        )}
        <Input
          {...register("email", {
            required: "이메일은 필수 입니다.",
          })}
          type="email"
          placeholder="이메일"
        />

        <Button text={"가입하기"} active={isValid} />
      </Form>
    </SignUpWrap>
  );
};
