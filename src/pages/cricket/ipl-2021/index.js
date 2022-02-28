import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/CricketMenuBar'
import CricketNewsCard from '/components/common/CricketNewsCard'
import TeamPointsTable from '/components/common/TeamPointsTable'
import Link from 'next/link';
import WatchUsLive from "../../../components/common/WatchUsLive";
const axios = require('axios');
var keyvalue;

export default function ipl({ cricketStories, pointsTable }) {
    const router = useRouter()
    let isIpl2021 = router.query.ipl === "ipl-2021"
    // if(isIpl2021){
    return (
        <>
            <Header />
            <Cricket />
            <nav id="breadcrumb" class="font14 font-roboto font14 flex flexAlignItemsCenter" style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;" }}>Home / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important;" }}> Cricket / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important", color: "#e60000", fontWeight: "500!important" }}> IPL 2021</a></Link></span>
            </nav>

            <div class="flex padtop20 flexJustifyCenter" style={{ display: "flex;", paddingLeft: "10px", paddingRight: "10px" }}>
                <div class="width100 bdr-dddddd flex">
                    <div class="flex mrgnright10" style={{ width: "76%" }}>
                        <img style={{ width: "100%" }} src="https://www.republicworld.com/assets/images/cricket/cricket_banner_logo.jpeg" alt="Cricket" title="Cricket" width={100} height={60} />
                    </div>
                    <div style={{ width: "24%" }} class="flex flexJustifyCenter padleft10">
                        <div class="flex flexJustifyCenter flexDirectionCol font14 txtcenter">Supported by</div>
                        <a rel="nofollow" style={{ margin: "auto 0" }} href="https://www.cricketapi.com/?ref=republicworld.com" target="_blank">
                            <img style={{ width: "120px", height: "60px" }} src="https://www.republicworld.com/assets/images/cricket/roanuz_logo.png" alt="Roanuz Cricket API" title="Roanuz Cricket API" width={120} height={60} />
                        </a>
                    </div>
                </div>
            </div>

            <div class="overflowHidden" style={{ paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
                <div class="padtop20 txtcenter minheight90" style={{ backgroundColor: "#ddd" }}>
                    <div id="div-gpt-ad-1574168742469-0" data-google-query-id="CP7To_PUofYCFb6aZgIdb4cAeA" style={{ position: "relative", zIndex: "0", width: "728px", height: "90px", marginLeft: "auto", marginRight: "auto", display: "block" }}>
                        <div id="andbeyond7281" data-google-query-id="CPfctr_7ofYCFTeBZgIdDl0JEA">
                            <div id="google_ads_iframe_/21708198417,222812108/323541-728-90-1_0__container__" style={{ border: "0pt none" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section style={{ padding: "20px 10px 10px 10px" }}>
                <h1 class="font25 lineHeight25px" title="IPL 2021">Indian Premier League 2021</h1>
            </section>

            <div class="padtop20 flex cricket-page-responsive" style={{ padding: "20px 10px 10px 10px", flexDirection: "column" }}>
                <div class="fxWidth67 width67 cricket-page-responsive">
                    <div class="flex" style={{ display: "flex", flex: "initial!important", webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif" }}>
                        <article class="hover-effect top-news bdr-dddddd" style={{ width: "56%;" }}>
                            <a href="https://www.republicworld.com/sports-news/cricket-news/india-vs-west-indies-t20i-why-was-rishabh-pant-appointed-as-team-indias-vice-captain-articleshow.html">
                                <div class="posRelative flex overflowHidden">
                                    <img
                                        class="imghover"
                                        src={cricketStories.data.stories[0].placeholder}
                                        style={{ width: "100%;" }}
                                        alt="India vs West Indies T20I: Why was Rishabh Pant appointed as Team India's vice-captain?"
                                    />
                                </div>
                                <p class="texthover txtTruncate lineClip3">
                                    {cricketStories.data.stories[0].meta_title}
                                </p>
                            </a>
                        </article>
                        <div class="flex flexDirectionCol bdrRight-dddddd bdrTop-dddddd bdrBtm-dddddd" style={{ width: "44%"}}>
                            {cricketStories.data.stories.slice(1, 6).map((value, index) => {
                                return (
                                    <article class="hover-effect recent-news">
                                            <a href="https://www.republicworld.com/sports-news/cricket-news/rohit-sharma-shuts-down-questions-on-ex-skipper-virat-kohlis-form-if-you-guys-can-dot-articleshow.html">
                                                <div class="posRelative flex overflowHidden" style={{ minWidth: "80px", height: "60px"}}>
                                                    <img
                                                        class="imghover"
                                                        src={value.placeholder}
                                                        alt="Rohit Sharma shuts down questions on ex-skipper Virat Kohli's form; 'If you guys can...'"
                                                    />
                                                </div>
                                                <p class="texthover txtTruncate lineClip3 font16">
                                                    {value.meta_title}
                                                </p>
                                            </a>
\
                                    </article>
                                )
                            })}

                        </div>
                    </div>
                    <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                        <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 class="font25 lineHeight25px">LATEST CRICKET NEWS</h2>
                            <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories.slice(0, 6)} />
                    </div>
                    <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                        <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 class="font25 lineHeight25px">EDITOR'S PICK</h2>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories.slice(0, 4)} />

                    </div>
                    <div class="overflowHidden" style={{ paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
                        <div class="padtop20 txtcenter minheight90" style={{ backgroundColor: "#ddd" }}>
                            <div id="div-gpt-ad-1574168742469-0" data-google-query-id="CP7To_PUofYCFb6aZgIdb4cAeA" style={{ position: "relative", zIndex: "0", width: "728px", height: "90px", marginLeft: "auto", marginRight: "auto", display: "block" }}>
                                <div id="andbeyond7281" data-google-query-id="CPfctr_7ofYCFTeBZgIdDl0JEA">
                                    <div id="google_ads_iframe_/21708198417,222812108/323541-728-90-1_0__container__" style={{ border: "0pt none" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                        <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 class="font25 lineHeight25px">MORE CRICKET NEWS</h2>
                            <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories.slice(0, 2)} />

                    </div>
                    <div id="cricket-videos">
                        <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 class="font25 lineHeight25px">VIDEOS</h2>
                        </div>
                        <div class="video-container bdr-dddddd flex">
                            {cricketStories.data.video_stories.slice(0,2).map((value, index) => {
                                return(
                                <article class="hover-effect video-inner-container">
                                    <Link href="https://www.republicworld.com/sports-news/cricket-news/wriddhiman-saha-on-chetan-sharmas-clear-message-we-cannot-drop-a-new-player-either-articleshow.html">
                                        <a class="flex flexDirectionCol">
                                            <div class="overflowHidden posRelative flex">
                                                <img
                                                    class="imghover"
                                                    src={value.placeholder}
                                                    alt="Wriddhiman Saha on Chetan Sharma's 'clear' message: 'We cannot drop a new player either'"
                                                />
                                                <div class="videohover posAbsolute width100 height100p">
                                                    <div class="flex height100p">
                                                        <div class="livetv-play-button" style={{ margin: "auto" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="texthover video-container-text">
                                                <p class="txtTruncate">{value.meta_title}</p>
                                            </div>
                                        </a>
                                    </Link>
                                </article>
                                )
                            })}

                        </div>
                    </div>
                    <div class="clr-D10014 mrgntop10 pad5 font18 bdr4px-dddddd fontweight700">
                        Disclaimer: None of the advertisers on this page are the official sponsors of the IPL 2021
                    </div>
                </div>
            </div>

            <WatchUsLive />
            <TeamPointsTable data={pointsTable[0].rankings} />

        </>
    )
    // }
}

export async function getServerSideProps() {
    var cricketStories
    var pointsTable
    const cricketStoriesRequest = axios.get(`https://jarvis.mynationvoice.com/sub-category/cricketstories?sub_category_slug=cricket-news&page_no=1&limit=12&event=ipl-2021`)
    const pointsTableRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/ipl_rankings_2021.json`)
    await Promise.all([cricketStoriesRequest, pointsTableRequest]).then(function (results) {
        cricketStories = results[0].data;
        pointsTable = results[1].data;
    });
    return { props: { cricketStories, pointsTable } }

};
