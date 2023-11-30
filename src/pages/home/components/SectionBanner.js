import { styled } from "styled-components";
import { IMG_URL } from "../../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../../style/GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const ConWrap = styled.section`
  margin-bottom: 120px;
  &:last-child {
    margin-bottom: 0;
  }
  a {
    color: white;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 60px;
  }
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 40px;
  @media screen and (max-width: 640px) {
    margin-bottom: 25px;
  }
`;
const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
`;
const More = styled.div`
  display: flex;
  font-size: 16px;
  p {
    margin-right: 15px;
  }
  @media screen and (max-width: 640px) {
    font-size: 14px;
    p {
      margin-right: 10px;
    }
  }
`;
const ConBg = styled.div`
  height: 44vh;
  background: url(${IMG_URL}/w500/${(props) => props.$posterBg}) no-repeat
    center / cover;
  margin-bottom: 20px;
  @media screen and (max-width: 1460px) {
    height: 36vh;
  }
  @media screen and (max-width: 1024px) {
    height: 30vh;
  }
  @media screen and (max-width: 640px) {
    height: 30vh;
  }
  @media screen and (max-width: 390px) {
    height: 25vh;
  }
`;
const MovieTitle = styled.p`
  font-size: 18px;
  line-height: 1.2;
  color: ${Colors.gray};
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;

const params = {
  slidesPerView: 5,
  spaceBetween: 45,
  breakpoints: {
    1460: {
      slidesPerView: 5,
      spaceBetween: 45,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
};

export const SectionBanner = ({ titleName, dataName, page }) => {
  return (
    <ConWrap>
      <TitleWrap>
        <Title>{titleName}</Title>
        <Link
          to={`/viewmore/${page}`}
          state={{ title: { titleName }, data: { dataName } }}
        >
          <More>
            <p>더보기</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </More>
        </Link>
      </TitleWrap>
      <Swiper {...params}>
        {dataName &&
          dataName.map((data) => (
            <SwiperSlide key={data.id}>
              <ConBg $posterBg={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </SwiperSlide>
          ))}
      </Swiper>
    </ConWrap>
  );
};
