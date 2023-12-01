import { styled } from "styled-components";

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: url("https://icon-library.com/images/no-image-icon/no-image-icon-15.jpg")
    no-repeat center / cover;
`;

export const NoImg = () => {
  return <Bg />;
};
