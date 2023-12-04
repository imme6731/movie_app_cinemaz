import { styled } from "styled-components";

const Bg = styled.div`
  background: url("https://icon-library.com/images/no-image-icon/no-image-icon-15.jpg")
    no-repeat center / cover;
  width: 500px;
  height: 750px;

  @media screen and (max-width: 1240px) {
    width: 400px;
    height: 600px;
  }
  @media screen and (max-width: 890px) {
    width: 320px;
    height: 480px;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const NoImgPoster = () => {
  return <Bg />;
};
