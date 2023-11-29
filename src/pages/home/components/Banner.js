import { IMG_URL } from "../../../api";
import { styled } from "styled-components";

const SMainBanner = styled.div`
  height: 100%;
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
  padding: 40vh 0 0 6.812%;
  @media screen and (max-width: 1024px) {
    padding: 27vh 0 0 6.812%;
  }
  @media screen and (max-width: 640px) {
    padding: 21vh 0 0 6.812%;
  }
  @media screen and (max-width: 530px) {
    padding: 32vh 0 0 6.812%;
  }
`;
const Title = styled.h3`
  max-width: 680px;
  width: 100%;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    font-size: 48px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 530px) {
    font-size: 32px;
    margin-bottom: 15px;
  }
`;
const Tagline = styled.p`
  max-width: 680px;
  width: 100%;
  font-size: 24px;
  line-height: 32px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 28px;
    display: inline-block;
    width: 420px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    height: 4.2em;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  @media screen and (max-width: 640px) {
    width: 300px;
    line-height: 1.3;
    height: 3.8em;
  }
  @media screen and (max-width: 530px) {
    font-size: 16px;
    line-height: 1.4;
    -webkit-line-clamp: 2;
    height: 2.8em;
  }
`;

export const Banner = ({ data, tag }) => {
  return (
    <SMainBanner $bgUrl={data.backdrop_path}>
      <BlabkBg />
      <TxtWrap>
        <Title>{data.title}</Title>
        {tag === "" ? (
          <Tagline>{data.overview.slice(0, 100) + "..."}</Tagline>
        ) : (
          <Tagline>{tag}</Tagline>
        )}
      </TxtWrap>
    </SMainBanner>
  );
};
