import Head from "next/head";
import Image from "next/image";
import TheDebate from "../components/common/TheDebate";
import Header from "../components/common/Header";
import Recommend from "../components/common/Recommend";
const axios = require('axios');

export default function TheDebatePage({ debate,recommend,debateTwo,debateThree }) {
 console.log(recommend)
//  console.log(footer);
    return (
      <div>
        <Header />
        <TheDebate debateData={debate} recommendShows={recommend} debateDataTwo={debateTwo} debateDataThree={debateThree}/>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    var debate
    var debateTwo
    var debateThree
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
      debateTwo= results[3].data.data;
      debateThree= results[4].data.data;     
  });
    return { props: { debate, recommend ,footer,debateTwo,debateThree} }
  };