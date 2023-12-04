import { styled } from "styled-components";

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://icon-library.com/images/no-image-icon/no-image-icon-15.jpg")
    no-repeat center / cover;
  display: block;
  position: absolute;
  top: 25px;
  left: 0px;
  opacity: 0.5;
  transform: scale(1.05);
  @media screen and (max-width: 640px) {
    opacity: 0.5;
    transform: scale(1.1);
  }
`;

export const NoImgBack = () => {
  return <Bg />;
};
