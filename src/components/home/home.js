import CardImage from "../common/CardImage";
import Header from "../common/Header";
import HomePageBanner from "./HomePageBanner"
import BannerAd from "../common/BannerAd"
import { ATF } from "../../public/utils/Ads/Ads"
import Head from 'next/head'
import TopStory from "./top_story/TopStory"
import Debate from "./debate/Debate";
import HomeSectionTemplate1 from "./template/HomeSectionTemplate1";

export default function Home({ props }) {
  return (
    <>
      <Head>
        <script async='async' src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />
        <script>
          {`var googletag = googletag || {};
       googletag.cmd = googletag.cmd || [];`}
        </script>
      </Head>
      <Header />
      <HomePageBanner />
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', width: '100%', height: '90px' }}><BannerAd adSlot={ATF["home"]} /></div>
      <TopStory latestStories={props.latest_news} topStories={props.top_stories} liveTv={props.livetv} />
      <Debate debate={props.debates} poll={props.poll} />
      {props.sections.map((item, index) => <HomeSectionTemplate1 props={item}/>)}
    </>
  );
}