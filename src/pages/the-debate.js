import Head from "next/head";
import Image from "next/image";
import TheDebate from "../components/common/TheDebate";
import Header from "../components/common/Header";
import Recommend from "../components/common/Recommend";
const axios = require('axios');

export default function TheDebatePage({ debate, recommend}) {
  // console.log(debate)
    return (
      <div>
        <Header />
        <TheDebate debateData={debate} recommendShows={recommend} />
      </div>
    );
  }
  
  export async function getServerSideProps() {
    var debate
    var recommend
    var footer
    const theDebateRequest = axios.get(`https://jarvis.republicworld.com/debates/cards?limit=10&page_no=1`)
    const recommendShows = axios.get(`https://jarvis.republicworld.com/shows/home`)
    const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
    await Promise.all([theDebateRequest, footerRequest, recommendShows]).then(function (results) {
      debate = results[0].data.data;
      recommend= results[0].data.data;
      footer = results[1].data.data;
  });
    return { props: { debate, recommend } }
  
  };