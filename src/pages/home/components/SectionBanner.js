import { styled } from "styled-components";
import { IMG_URL } from "../../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../../../style/GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";

const ConWrap = styled.section`
  margin-bottom: 120px;
  &:last-child {
    margin-bottom: 0;
  }
  a {
    color: white;
  }
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 40px;
`;
const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;
const ViewMore = styled.div`
  display: flex;
  font-size: 16px;
  p {
    margin-right: 15px;
  }
`;
const ConBg = styled.div`
  width: 300px;
  height: 440px;
  background: url(${IMG_URL}/w500/${(props) => props.$posterBg}) no-repeat
    center / cover;
  margin-bottom: 20px;
`;
const MovieTitle = styled.p`
  font-size: 18px;
  color: ${Colors.gray};
`;

export const SectionBanner = ({ titleName, dataName }) => {
  return (
    <ConWrap>
      <TitleWrap>
        <Title>{titleName}</Title>
        <ViewMore>
          <p>더보기</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </ViewMore>
      </TitleWrap>
      <Swiper slidesPerView={5} spaceBetween={45}>
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
