import { Layout } from "../../components/Layout";
import { MainBanner } from "./components/MainBanner";
import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { SectionBanner } from "./components/SectionBanner";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularData, setPopularData] = useState();
  const [nowData, setNowData] = useState();
  const [upData, setUpData] = useState();
  const [topData, setTopData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: popularResults } = await popular();
        setPopularData(popularResults);
        setIsLoading(false);

        const { results: nowResults } = await nowPlaying();
        setNowData(nowResults);

        const { results: upResults } = await upcoming();
        setUpData(upResults);

        const { results: topResults } = await topRated();
        setTopData(topResults);
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
          {popularData && (
            <>
              <MainBanner dataName={nowData} />
              <Layout>
                <SectionBanner
                  titleName={"HOT! 인기 영화"}
                  dataName={popularData}
                  page={"popular"}
                />
                <SectionBanner
                  titleName={"현재 상영작"}
                  dataName={nowData}
                  page={"now_playing"}
                />
                <SectionBanner
                  titleName={"개봉 예정 영화"}
                  dataName={upData}
                  page={"upcoming"}
                />

                <SectionBanner
                  titleName={"믿고 보는 극찬 영화"}
                  dataName={topData}
                  page={"top_rated"}
                />
              </Layout>
            </>
          )}
        </>
      )}
    </>
  );
};
