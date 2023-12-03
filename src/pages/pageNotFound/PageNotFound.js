import { styled } from "styled-components";
import { ReactComponent as ErrorImg } from "../../assets/404 Logo.svg";
import { Colors } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 160px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.h3`
  max-width: 500px;
  width: 100%;
  text-align: center;
  margin-top: 80px;
  font-size: 20px;
  font-weight: 500;
`;
const Desc = styled.p`
  max-width: 500px;
  width: 100%;
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
  line-height: 1.5;
  color: ${Colors.gray};
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
`;
export const PageNotFound = () => {
  return (
    <Container>
      <ErrorImg
        style={{
          transform: "rotate(360deg)",
          animation: "path11 6s linear infinite",
        }}
      />
      <Main>죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셨습니다.</Main>
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
