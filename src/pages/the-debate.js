import Head from "next/head";
import Image from "next/image";
import TheDebate from "../components/common/TheDebate";
import Header from "../components/common/Header";
const axios = require('axios');

export default function TheDebatePage({ debate }) {
    return (
      <div>
        <Header />
        <TheDebate debate={debate}/>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    var debate
    var footer
    const theDebateRequest = axios.get(`https://jarvis.republicworld.com/debates/cards?limit=10&page_no=1`)
    const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
    await Promise.all([theDebateRequest, footerRequest]).then(function (results) {
      debate = results[0].data.data;
      footer = results[1].data.data;
    });
    return { props: { debate } }
  
  };