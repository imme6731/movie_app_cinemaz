import "../style/mainbanner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { movieDatail, nowPlaying } from "../../../api";
import { Link } from "react-router-dom";
import { Loading } from "../../../components/Loading";

const Container = styled.section`
  width: 100%;
  height: 64vh;
  @media screen and (max-width: 1024px) {
    height: 50vh;
  }
  @media screen and (max-width: 640px) {
    height: 40vh;
  }
  @media screen and (max-width: 530px) {
    height: 48vh;
  }
`;

export const MainBanner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowData, setNowData] = useState();
  const [tagData_0, setTagData_0] = useState();
  const [tagData_1, setTagData_1] = useState();
  const [tagData_2, setTagData_2] = useState();
  const [tagData_3, setTagData_3] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        // console.log(nowResults);
        setNowData(nowResults);
        setIsLoading(false);

        const { tagline: tag_0 } = await movieDatail(nowResults[0].id);
        // console.log(tagline);
        setTagData_0(tag_0);

        const { tagline: tag_1 } = await movieDatail(nowResults[1].id);
        setTagData_1(tag_1);
        const { tagline: tag_2 } = await movieDatail(nowResults[2].id);
        setTagData_2(tag_2);
        const { tagline: tag_3 } = await movieDatail(nowResults[3].id);
        setTagData_3(tag_3);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowPlaying && (
            <>
              <Container>
                <Swiper
                  slidesPerView={1.09}
                  spaceBetween={30}
                  centeredSlides={true}
                  pagination={{ clickable: true }}
                  navigation={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  modules={[Pagination, Autoplay, Navigation]}
                >
                  <SwiperSlide>
                    <Link to={`/detail/${nowData[0].id}`}>
                      <Banner data={nowData[0]} tag={tagData_0} />
                    </Link>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Link to={`/detail/${nowData[1].id}`}>
                      <Banner data={nowData[1]} tag={tagData_1} />
                    </Link>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Link to={`/detail/${nowData[2].id}`}>
                      <Banner data={nowData[2]} tag={tagData_2} />
                    </Link>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Link to={`/detail/${nowData[3].id}`}>
                      <Banner data={nowData[3]} tag={tagData_3} />
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
};
