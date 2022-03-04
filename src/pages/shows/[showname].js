import Head from "next/head";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import Header from "../../components/common/Header";
import Show from "../../components/shows/Show";
import ShowChannels from "../../components/shows/ShowChannels";

const axios = require('axios');


export default function ShowPage({show,recommend,showSecondPage,showThirdPage}) {
  const router = useRouter();
  return (
    <div>
      <Header />
      <ShowChannels recommendChannels={recommend} slug= {router.query.showname}/>
      <Show showData={show} recommendShows={recommend} showSecondPage={showSecondPage} showThirdPage={showThirdPage}/>
    </div>
  );
}
  
  export async function getServerSideProps(context) {
    var show
    var showSecondPage
    var showThirdPage
    var recommend
    var footer
    const {params} = context
    const {showname} = params
    const showRequest = axios.get(`https://jarvis.republicworld.com/shows?sub_category_slug=${showname}&limit=10&page_no=1`)
    const showRequestTwo = axios.get(`https://jarvis.republicworld.com/shows?sub_category_slug=${showname}&limit=10&page_no=2`)
    const showRequestThree = axios.get(`https://jarvis.republicworld.com/shows?sub_category_slug=${showname}&limit=10&page_no=3`)
    const recommendShows = axios.get(`https://jarvis.republicworld.com/shows/home`)
    const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
    await Promise.all([showRequest, footerRequest, recommendShows, showRequestTwo, showRequestThree]).then(function (results) {
      show = results[0].data.data;
      footer = results[1].data.footer_links; 
      recommend= results[2].data.data;
      showSecondPage= results[3].data.data;
      showThirdPage= results[4].data.data; 
      console.log(show) ;   
  });
    return { props: { show,recommend ,footer,showSecondPage,showThirdPage} }
  };