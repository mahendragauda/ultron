import CardImage from "../common/CardImage";
import Header from "../common/Header";
import HomePageBanner from "./HomePageBanner";
import BannerAd from "../common/BannerAd";
import { ATF } from "../../public/utils/Ads/Ads"
import Head from 'next/head'
import TopStory from "./top_story/TopStory";

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
      <div style={{ display: 'flex', justifyContent: 'center' }}><BannerAd adSlot={ATF} /></div>
      <TopStory latestStories={props.latest_news} topStories={props.top_stories} ></TopStory>
      <div>{props.meta_title}</div>
    </>
  );
}