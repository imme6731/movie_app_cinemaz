import { styled } from "styled-components";

const Bg = styled.div`
  width: 100%;
  height: 434px;
  margin-bottom: 20px;
  background: url("https://icon-library.com/images/no-image-icon/no-image-icon-15.jpg")
    no-repeat center / cover;
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

export const NoImg = () => {
  return <Bg />;
};
