import { styled } from "styled-components";
// import { ReactComponent as ErrorImg } from "../../assets/404 Logo.svg";
import errorLogo from "../../assets/404 Logo.png";
import { Colors } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  width: 100%;
  padding: 160px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 530px) {
    padding: 100px 5%;
  }
`;

const ErrorImg = styled.img`
  width: 700px;
  @media screen and (max-width: 890px) {
    width: 400px;
  }
  @media screen and (max-width: 530px) {
    width: 260px;
  }
`;

const Main = styled.h3`
  max-width: 500px;
  width: 100%;
  text-align: center;
  margin-top: 80px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (max-width: 890px) {
    font-size: 18px;
  }
  @media screen and (max-width: 530px) {
    max-width: 300px;
    font-size: 16px;
    margin-top: 60px;
  }
`;
const Br = styled.br`
  display: none;
  @media screen and (max-width: 530px) {
    display: block;
  }
`;
const Desc = styled.p`
  max-width: 500px;
  width: 100%;
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
  line-height: 1.5;
  color: ${Colors.gray};
  @media screen and (max-width: 890px) {
    font-size: 14px;
  }
  @media screen and (max-width: 530px) {
    max-width: 300px;
  }
`;
const Button = styled.button`
  all: unset;
  width: 180px;
  height: 60px;
  margin-top: 80px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border: 2px solid ${Colors.pointColor};
  border-radius: 5px;
  color: ${Colors.pointColor};
  @media screen and (max-width: 890px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 530px) {
    width: 120px;
    height: 50px;
    font-size: 14px;
    border: 1px solid ${Colors.pointColor};
  }
`;
export const PageNotFound = () => {
  useScrollTop();
  return (
    <Container>
      <ErrorImg src={errorLogo} />
      <Main>
        죄송합니다.
        <Br /> 현재 찾을 수 없는 페이지를 요청 하셨습니다.
      </Main>
      <Desc>
        존재하지 않는 주소를 입력하셨거나,
        <br />
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </Desc>
      <Link to={"/"}>
        <Button>메인으로</Button>
      </Link>
    </Container>
  );
};
