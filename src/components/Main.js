import React, { useEffect, useState } from "react";
import LoadingKnowladge from "./LoadingKnowladge";
import LoadingResult from "./LoadingResult";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Container from "./Container";
import ReactPlayer from "react-player";
function Main() {
  // result
  const [resultSearch, setResultSearch] = useState("");
  const [resultSearchLoading, setResultSearchLoading] = useState(true);
  const [resultSearchError, setResultSearchError] = useState("");

  // knowledge panel
  const [knowledgePanel, setKnowledgePanel] = useState("");
  const [knowledgePanelLoading, setKnowledgePanelLoading] = useState(true);
  const [knowledgePanelError, setKnowledgePanelError] = useState("");

  // news
  const [newsResultSearch, setNewsResultSearch] = useState("");
  const [newsResultSearchLoading, setNewsResultSearchLoading] = useState("");
  const [newsResultSearchError, setNewsResultSearchError] = useState("");

  // video
  const [videoResultSearch, setVideoResultSearch] = useState("");
  const [videoResultSearchLoading, setVideoResultSearchLoading] =
    useState(true);
  const [videoResultSearchError, setVideoResultSearchError] = useState("");

  // image
  const [imageResultSearch, setImageResultSearch] = useState("");
  const [imageResultSearchLoading, setImageResultSearchLoading] =
    useState(true);
  const [imageResultSearchError, setImageResultSearchError] = useState("");

  const location = useLocation();
  const params = location.search.split("?").join("");
  const param = new URLSearchParams(location.search);

  const option = {
    result: {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "ea973a0762msh397302d4c4b6a25p121810jsn9ed20d0acd65",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    },
    knowledge: {
      params: { query: param.get("q"), max: "10" },
      headers: {
        "X-RapidAPI-Key": "ea973a0762msh397302d4c4b6a25p121810jsn9ed20d0acd65",
        "X-RapidAPI-Host": "google-web-search.p.rapidapi.com",
      },
    },
  };

  useEffect(() => {
    // result
    async function getResultSearch() {
      try {
        const url = `https://google-search3.p.rapidapi.com/api/v1/search/${params}`;
        const { data } = await axios.get(url, option.result);
        setResultSearchLoading(false);
        setResultSearch(data);
      } catch (error) {
        console.log(error);
        setResultSearchError(error);
      }
    }

    // news
    async function getNewsResult() {
      try {
        const url = `https://google-search3.p.rapidapi.com/api/v1/news/${params}`;
        const { data } = await axios.get(url, option.result);
        setNewsResultSearchLoading(false);
        setNewsResultSearch(data);
      } catch (error) {
        setVideoResultSearchError(error);
      }
    }

    // video
    async function getVideoResult() {
      try {
        const url = `https://google-search3.p.rapidapi.com/api/v1/video/${params}`;
        const { data } = await axios.get(url, option.result);
        setVideoResultSearchLoading(false);
        setVideoResultSearch(data);
      } catch (error) {
        setKnowledgePanelError(error);
      }
    }

    //   image
    async function getImageResult() {
      try {
        const url = `https://google-search3.p.rapidapi.com/api/v1/image/${params}`;
        const { data } = await axios.get(url, option.result);
        setImageResultSearchLoading(false);
        setImageResultSearch(data);
      } catch (error) {
        setImageResultSearchError(error);
      }
    }

    // knowladge
    async function getKnowladgePanel() {
      try {
        const url = `https://google-web-search.p.rapidapi.com/`;
        const { data } = await axios.get(url, option.knowledge);
        setKnowledgePanel(data);
        setKnowledgePanelLoading(false);
      } catch (error) {
        setNewsResultSearchError(error);
      }
    }

    getKnowladgePanel();
    getNewsResult();
    getResultSearch();
    getVideoResult();
    getImageResult();
  }, [location]);

  function transcute(props) {
    return props?.length > 180 ? props.substring(0, 180) + "..." : props;
  }

  console.log(imageResultSearch);
  switch (location.pathname) {
    case "/search":
      return (
        <Container>
          <div className="mt-5 grid lg:grid-cols-3 gap-10">
            {/* grid 1 */}

            {resultSearchLoading ? (
              <LoadingResult />
            ) : (
              <div className="space-y-7 w-full lg:w-[40rem] col-span-2">
                {/* time */}
                <p className="text-[#bdc1c6] text-sm">
                  About {resultSearch?.total?.toLocaleString()} results (
                  {resultSearch?.ts?.toString().substring(0, 4)}) seconds
                </p>

                {resultSearch?.results?.map((result, i) => (
                  <div key={i}>
                    <h1 className="text-[#bdc1c6]">{result?.cite?.domain}</h1>
                    <a href={result.link}>
                      <h1 className="text-lg font-medium text-[#8ab4f8] hover:underline">
                        {result?.title}
                      </h1>
                    </a>
                    <h1 className="font-base text-[#bdc1c6]">
                      {result?.description}
                    </h1>
                  </div>
                ))}
              </div>
            )}
            {/* grid 2 */}
            {knowledgePanelLoading ? (
              <LoadingKnowladge />
            ) : (
              <div className="w-full lg:w-[23rem]">
                <div className="border border-[#3e3f41] rounded-2xl w-full">
                  <a
                    href={knowledgePanel?.knowledge_panel?.image?.page_url}
                    target="_noblank"
                    className="cursor-pointer opacity-95 hover:opacity-100 "
                  >
                    <img
                      src={knowledgePanel?.knowledge_panel?.image?.url}
                      className="w-full rounded-t-2xl p-0.2 h-60"
                    />
                  </a>

                  <div className="p-3">
                    <h1 className="text-3xl font-medium">
                      {knowledgePanel?.knowledge_panel?.name}
                    </h1>
                    <p className="text-[#bdc1c6] text-md mt-3">
                      {knowledgePanel?.knowledge_panel?.label}
                    </p>
                  </div>
                  <div className="border-t border-[#3e3f41]" />

                  <div className="p-3">
                    <h1 className="font-md text-[#bdc1c6] leading-5">
                      {transcute(
                        knowledgePanel?.knowledge_panel?.description?.text
                      )}
                      <span>
                        <a
                          className="text-[#8ab4f8] hover:underline"
                          href={
                            knowledgePanel?.knowledge_panel?.description?.url
                          }
                        >
                          {" " +
                            knowledgePanel?.knowledge_panel?.description?.site}
                        </a>
                      </span>
                    </h1>

                    <div className="mt-3">
                      {knowledgePanel?.knowledge_panel?.info?.map((info, i) => (
                        <div key={i} className="text-[#bdc1c6]">
                          <h1 className="font-bold">
                            {info.title} :{" "}
                            <span className="font-normal">{info.labels}</span>
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      );

    case "/video":
      return (
        <Container>
          <div className="mt-5 space-y-10 w-full lg:w-[40rem] ">
            {videoResultSearch?.results?.map((p, i) => (
              <div className="space-y-3" key={i}>
                <h1 className="text-[#bdc1c6]">{p?.cite?.domain}</h1>
                <a href={p.link}>
                  <h1 className="text-lg font-medium text-[#8ab4f8] hover:underline">
                    {p?.title}
                  </h1>
                </a>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <ReactPlayer url={p.link} width={"12rem"} height="6rem" />
                  <div className="col-span-2">
                    <h1>{p.description}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      );

    default:
      return <h1>error</h1>;
  }
}

export default Main;
