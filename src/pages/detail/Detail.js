import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { countries, credits, movieDatail, recommend, similar } from "../../api";
import { useParams } from "react-router-dom";
import { MainDetail } from "./components/MainDetail";
import { Loading } from "../../components/Loading";
import { SectionBanner } from "../home/components/SectionBanner";
import { PageTitle } from "../../components/PageTitle";

export const Detail = () => {
  const { id } = useParams();
  // console.log(id);
  const [value, setValue] = useState();
  const [date, setDate] = useState();
  const [conList, setConList] = useState();
  const [conList_2, setConList_2] = useState();
  const [actor, setActor] = useState();
  const [sim, setSim] = useState();
  const [simLength, setSimLength] = useState();
  const [recom, setRecom] = useState();
  const [recomLength, setRecomLength] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDatail(id);
        setValue(data);
        setIsLoading(false);

        const { release_date } = await movieDatail(id);
        setDate(release_date.slice(0, 4));

        const { production_countries: country } = await movieDatail(id);

        const out = await countries();
        setConList(
          out
            .filter((x) => x.iso_3166_1 === country[0]?.iso_3166_1)
            .map((x) => x.native_name)
        );
        setConList_2(
          out
            .filter((x) => x.iso_3166_1 === country[1]?.iso_3166_1)
            .map((x) => x.native_name)
        );

        const { cast } = await credits(id);
        setActor(cast.slice(0, 3));

        const { results: similarRes } = await similar(id);
        setSim(similarRes);
        setSimLength(similarRes.length);

        const { results: recommedRes } = await recommend(id);
        setRecom(recommedRes);
        setRecomLength(recommedRes.length);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, [id]);

  return (
    <>
      <PageTitle titlename={` | ${value?.title}`} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {value && (
            <>
              <MainDetail
                val={value}
                year={date}
                nat1={conList}
                nat2={conList_2}
                act={actor}
              />
              <Layout>
                {recomLength === 0 ? (
                  ""
                ) : (
                  <SectionBanner
                    titleName={"추천 영화"}
                    dataName={recom}
                    page={"recommendations"}
                  />
                )}
                {simLength === 0 ? (
                  ""
                ) : (
                  <SectionBanner
                    titleName={"유사한 영화"}
                    dataName={sim}
                    page={"similar"}
                  />
                )}
              </Layout>
            </>
          )}
        </>
      )}
    </>
  );
};
