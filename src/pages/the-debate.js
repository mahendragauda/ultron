import Head from "next/head";
import Image from "next/image";
import Debate from "../components/debate/Debate";
import Header from "../components/common/Header";

const axios = require('axios');

export default function TheDebatePage({ debate,recommend,debateSecondPage,debateThirdPage }) {
    return (
      <div>
        <Header />
        <Debate debateData={debate} recommendShows={recommend} debateSecondPage={debateSecondPage} debateThirdPage={debateThirdPage}/>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    var debate
    var debateSecondPage
    var debateThirdPage
    var recommend
    var footer
    const theDebateRequest = axios.get(`https://jarvis.republicworld.com/debates/cards?limit=10&page_no=1`)
    const theDebateRequestTwo = axios.get(`https://jarvis.republicworld.com/debates/cards?limit=10&page_no=2`)
    const theDebateRequestThree = axios.get(`https://jarvis.republicworld.com/debates/cards?limit=10&page_no=3`)
    const recommendShows = axios.get(`https://jarvis.republicworld.com/shows/home`)
    const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
    await Promise.all([theDebateRequest, footerRequest, recommendShows, theDebateRequestTwo, theDebateRequestThree]).then(function (results) {
      debate = results[0].data.data;
      footer = results[1].data.footer_links;
      recommend= results[2].data.data;
      debateSecondPage= results[3].data.data;
      debateThirdPage= results[4].data.data;     
  });
    return { props: { debate, recommend ,footer,debateSecondPage,debateThirdPage} }
  };