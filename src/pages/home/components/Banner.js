import { IMG_URL } from "../../../api";
import { styled } from "styled-components";

const SMainBanner = styled.div`
  height: 64vh;
  /* background-color: lightgreen; */
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  position: relative;
`;
const BlabkBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  background: linear-gradient(
    0deg,
    rgba(29, 29, 29, 1) 15%,
    rgba(29, 29, 29, 0.7007396708683473) 52%,
    rgba(29, 29, 29, 0) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;
const TxtWrap = styled.div`
  position: relative;
  padding: 350px 0 0 6.812%;
`;
const Title = styled.h3`
  max-width: 680px;
  width: 100%;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const Tagline = styled.p`
  max-width: 680px;
  width: 100%;
  font-size: 24px;
  line-height: 32px;
`;

export const Banner = ({ data, tag }) => {
  return (
    <SMainBanner $bgUrl={data.backdrop_path}>
      <BlabkBg />
      <TxtWrap>
        <Title>{data.title}</Title>
        <Tagline>{tag}</Tagline>
      </TxtWrap>
    </SMainBanner>
  );
};
