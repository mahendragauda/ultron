import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/CricketMenuBar'
import CricketNewsCard from '/components/common/CricketNewsCard'
import TeamPointsTable from '/components/common/TeamPointsTable'
import Link from 'next/link';
import WatchUsLive from "../../../components/common/WatchUsLive";
const axios = require('axios');
var keyvalue;
import styles from '/styles/Cricket.module.css'


export default function ipl({ cricketStories, pointsTable }) {
    const router = useRouter()
    let isIpl2021 = router.query.ipl === "ipl-2021"
    // if(isIpl2021){
    return (
        <>
            <Header />
            <Cricket slug="" />
            <nav id="breadcrumb" className={[styles.font14, styles.fontRoboto, styles.font14, styles.flex, styles.flexAlignItemsCenter].join(" ")} style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;" }}>Home / </a></Link></span>
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important;" }}> Cricket / </a></Link></span>
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important", color: "#e60000", fontWeight: "500!important" }}> IPL 2021</a></Link></span>
            </nav>

            <div className={[styles.flex, styles.padtop20, styles.flexJustifyCenter].join(" ")} style={{ display: "flex;", paddingLeft: "10px", paddingRight: "10px" }}>
                <div className={[styles.width100, styles.bdrDddddd, styles.flex].join(" ")}>
                    <div className={[styles.flex, styles.mrgnright10].join(" ")} style={{ width: "76%" }}>
                        <img style={{ width: "100%" }} src="https://www.republicworld.com/assets/images/cricket/cricket_banner_logo.jpeg" alt="Cricket" title="Cricket" width={100} height={60} />
                    </div>
                    <div style={{ width: "24%" }} className={[styles.flex, styles.flexJustifyCenter, styles.padleft10].join(" ")}>
                        <div className={[styles.flex, styles.flexJustifyCenter, styles.flexDirectionCol, styles.font14, styles.txtcenter].join(" ")}>Supported by</div>
                        <a rel="nofollow" style={{ margin: "auto 0" }} href="https://www.cricketapi.com/?ref=republicworld.com" target="_blank">
                            <img style={{ width: "120px", height: "60px" }} src="https://www.republicworld.com/assets/images/cricket/roanuz_logo.png" alt="Roanuz Cricket API" title="Roanuz Cricket API" width={120} height={60} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.overflowHidden} style={{ paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
                <div className={[styles.padtop20, styles.txtcenter, styles.minheight90]} style={{ backgroundColor: "#ddd" }}>
                    <div id="div-gpt-ad-1574168742469-0" data-google-query-id="CP7To_PUofYCFb6aZgIdb4cAeA" style={{ position: "relative", zIndex: "0", width: "728px", height: "90px", marginLeft: "auto", marginRight: "auto", display: "block" }}>
                        <div id="andbeyond7281" data-google-query-id="CPfctr_7ofYCFTeBZgIdDl0JEA">
                            <div id="google_ads_iframe_/21708198417,222812108/323541-728-90-1_0__container__" style={{ border: "0pt none" }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section style={{ padding: "20px 10px 10px 10px" }}>
                <h1 className={[styles.font25, styles.lineHeight25px].join(" ")} title="IPL 2021">Indian Premier League 2021</h1>
            </section>

            <div className={[styles.padtop20, styles.flex, styles.cricketPageResponsive].join(" ")}>
                <div className={[styles.fxWidth67, styles.width67, styles.cricketPageResponsive].join(" ")}>
                    <div className={styles.flex}>
                        <article className={[styles.hoverEffect, styles.topNews, styles.bdrDddddd].join(" ")} style={{ width: "56%;" }}>
                            <Link href="">
                                <a>
                                    <div className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")}>
                                        <img
                                            className={styles.imghover}
                                            src={cricketStories.data.stories[0].placeholder}
                                            style={{ width: "100%;" }}
                                            alt="India vs West Indies T20I: Why was Rishabh Pant appointed as Team India's vice-captain?"
                                        />
                                    </div>
                                    <p className={[styles.texthover, styles.txtTruncate, styles.lineClip3].join(" ")}>
                                        {cricketStories.data.stories[0].meta_title}
                                    </p>
                                </a>
                            </Link>
                        </article>
                        <div className={[styles.flex, styles.flexDirectionCol, styles.bdrRightDddddd, styles.bdrTopDddddd, styles.bdrBtmDddddd].join(" ")} style={{ width: "44%" }}>
                            {cricketStories.data.stories.slice(1, 6).map((value, index) => {
                                return (
                                    <article className={[styles.hoverEffect, styles.recentNews].join(" ")}>
                                        <Link href="">
                                            <a>
                                                <div className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")} style={{ minWidth: "80px", height: "60px" }}>
                                                    <img
                                                        className={styles.imghover}
                                                        src={value.placeholder}
                                                        alt="Rohit Sharma shuts down questions on ex-skipper Virat Kohli's form; 'If you guys can...'"
                                                    />
                                                </div>
                                                <p className={[styles.texthover, styles.txtTruncate, styles.lineClip3, styles.font16].join(" ")}>
                                                    {value.meta_title}
                                                </p>
                                            </a>
                                        </Link>
                                    </article>
                                )
                            })}

                        </div>
                    </div>
                    <div className={styles.padtop30} style={{ padding: "20px 10px 10px 10px" }}>
                        <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")} style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 className={[styles.font25, styles.lineHeight25px].join(" ")}>LATEST CRICKET NEWS</h2>
                            <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories.slice(0, 6)} />
                    </div>
                    <div className={styles.padtop30} style={{ padding: "20px 10px 10px 10px" }}>
                        <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")} style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 className={[styles.font25, styles.lineHeight25px].join(" ")}>EDITOR'S PICK</h2>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories.slice(0, 4)} />

                    </div>
                    <div className={styles.overflowHidden} style={{ paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
                        <div className={[styles.padtop20, styles.txtcenter, styles.minheight90].join(" ")} style={{ backgroundColor: "#ddd" }}>
                            <div id="div-gpt-ad-1574168742469-0" data-google-query-id="CP7To_PUofYCFb6aZgIdb4cAeA" style={{ position: "relative", zIndex: "0", width: "728px", height: "90px", marginLeft: "auto", marginRight: "auto", display: "block" }}>
                                <div id="andbeyond7281" data-google-query-id="CPfctr_7ofYCFTeBZgIdDl0JEA">
                                    <div id="google_ads_iframe_/21708198417,222812108/323541-728-90-1_0__container__" style={{ border: "0pt none" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.padtop30} style={{ padding: "20px 10px 10px 10px" }}>
                        <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")} style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 className={[styles.font25, styles.lineHeight25px].join(" ")}>MORE CRICKET NEWS</h2>
                            <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories.slice(0, 2)} />

                    </div>
                    <div id={styles.cricketVideos}>
                        <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")} style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 className={[styles.font25, styles.lineHeight25px].join(" ")}>VIDEOS</h2>
                        </div>
                        <div className={[styles.videoContainer, styles.bdrDddddd, styles.flex].join(" ")}>
                            {cricketStories.data.video_stories.slice(0, 2).map((value, index) => {
                                return (
                                    <article className={[styles.hoverEffect, styles.videoInnerContainer].join(" ")}>
                                        <Link href="https://www.republicworld.com/sports-news/cricket-news/wriddhiman-saha-on-chetan-sharmas-clear-message-we-cannot-drop-a-new-player-either-articleshow.html">
                                            <a className={[styles.flex, styles.flexDirectionCol].join(" ")}>
                                                <div className={[styles.overflowHidden, styles.posRelative, styles.flex].join(" ")}>
                                                    <img
                                                        className={styles.imghover}
                                                        src={value.placeholder}
                                                        alt="Wriddhiman Saha on Chetan Sharma's 'clear' message: 'We cannot drop a new player either'"
                                                    />
                                                    <div className={[styles.videohover, styles.posAbsolute, styles.width100, styles.height100p].join(" ")}>
                                                        <div className={[styles.flex, styles.height100p].join(" ")}>
                                                            <div className={styles.livetvPlayButton} style={{ margin: "auto" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={[styles.texthover, styles.videoContainerText].join(" ")}>
                                                    <p className={styles.txtTruncate}>{value.meta_title}</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </article>
                                )
                            })}

                        </div>
                    </div>
                    <div className={[styles.clrD10014, styles.mrgntop10, styles.pad5, styles.font18, styles.bdr4pxDddddd, styles.fontweight700].join(" ")}>
                        Disclaimer: None of the advertisers on this page are the official sponsors of the IPL 2021
                    </div>
                </div>

            <div className={styles.width33}>
                <div className={styles.txtcenter}>
                    <div className={[styles.mrgnbtm20, styles.bgF8f8f8, styles.padtop10, styles.padbtm10].join(" ")} style={{ backgroundColor: "#ddd" }}>
                    </div>
                </div>
            <WatchUsLive />
            <TeamPointsTable data={pointsTable[0].rankings} />
            </div>
            </div>

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
