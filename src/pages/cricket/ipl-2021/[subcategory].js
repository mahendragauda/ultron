import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/CricketMenuBar'
import CricketNewsCard from '/components/common/CricketNewsCard'
import TeamPointsTable from '/components/common/TeamPointsTable'
import Link from 'next/link';
import Image from "next/image";
const axios = require('axios');
var keyvalue;


export default function ipl({ cricketStories, pointsTable, scheduleData, resultData }) {
    const router = useRouter()
    let isIpl2021 = router.query.ipl === "ipl-2021"
    // if(isIpl2021){
    return (
        <>
            <Header />
            <Cricket value={router.query.subcategory} />
            <nav id="breadcrumb" class="font14 font-roboto font14 flex flexAlignItemsCenter" style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;" }}>Home / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important;" }}> Cricket / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important;" }}> IPL 2021 /</a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ color: "#e60000" }} class="color-e60000 fontweight500"> {router.query.subcategory.charAt(0).toUpperCase() + router.query.subcategory.replace(".html", "").slice(1)}</a></Link></span>
            </nav>
            {(() => {
                switch (router.query.subcategory) {
                    case 'schedule.html':
                        return <>
                            <div style={{ marginTop: "20px!important", boxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", fontSize: ".8em" }}>
                                <div style={{ padding: "10px 10px", marginTop: "20px!important", fontSize: "18px", fontWeight: "700!important", fontFamily: "Roboto,sans-serif" }}>Indian Premier League 2021</div>
                                <div class="mrgntop flex flexWrap" style={{ padding: "10px 10px" }}>
                                    {scheduleData.seasons[0].matches.map((value, index) => {
                                        return (
                                            <div class="schedule-match-wrapper">
                                                <a href="https://www.republicworld.com/cricket/ipl-2021/hyderabad-vs-mumbai-live-score/iplt20-2021-g31.html" style={{ textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                    <div class="flex flexJustifyBetween" style={{ paddingBottom: "20px!important", justifyContent: "space-between", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                        <div style={{ fontSize: "14px", fontWeight: "700", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.start_date_f}</div></div>
                                                    <div class="flex flexJustifyBetween">
                                                        <div class="flex">
                                                            <div class="schedule-team-flag" style={{ background: value.teams.a.color_code }}>{value.teams.a.logo_character}</div>
                                                            <div class="padleft10 font16" style={{ margin: "auto", paddingLeft: "10px", fontSize: "16px", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.teams.a.name}</div>
                                                        </div>
                                                        <div class="vs-container-red" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>vs</div>
                                                        <div class="flex">
                                                            <div class="padright10 font16" style={{ margin: "auto", paddingRight: "10px", fontSize: "16px", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.teams.b.name}</div>
                                                            <div class="schedule-team-flag" style={{ background: value.teams.b.color_code }}>{value.teams.b.logo_character}</div>
                                                        </div>
                                                    </div>
                                                    <div style={{ paddingTop: "20px", display: "flex", flex: "initial" }}>
                                                        <div style={{ paddingTop: "3px", paddingRight: "2px" }}>
                                                            <img style={{ boxSizing: "border-box", width: "14px" }} src="https://www.republicworld.com/assets/images/place.png" /></div>
                                                        <div style={{ fontSize: "12px", boxSizing: "border-box", display: "block" }}>{value.venue}</div>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div style={{ marginTop: "30px", lineHeight: "20px" }}>
                                    <div class="flex flexJustifyBetween" style={{ padding: "10px", justifyContent: "space-between", display: "flex", flex: "initial!important" }}>
                                        <h2 style={{ marginBottom: "15px", margin: "0", fontSize: "25px", fontWeight: "700", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", marginInlineStart: "0px", marginInlineEnd: "0px", dispaly: "block" }}>LATEST IPL 2021 NEWS</h2>
                                    </div>
                                    <div class="flex flexWrap" style={{ padding: "10px" }}>
                                        {cricketStories.data.stories.slice(0, 6).map((value, index) => {
                                            return (
                                                <article class="related-content bdrRadius4px bdr-dddddd">
                                                    <Link href="">
                                                        <a style={{ textDecoration: "none!important", border: "none", color: "#000", WebkitBoxSizing: "border-box" }}>
                                                            <div class="latest-news-text flex flexDirectionCol">
                                                                <div>
                                                                    <p class="font16 fontweight500 mrgn0 txtTruncate lineClip3">
                                                                        {value.meta_title}
                                                                    </p>
                                                                </div>
                                                                <div style={{ paddingTop: "5px", WebkitBoxSizing: "border-box" }}>
                                                                    <p class="font14 mrgn0">{value.pub_datetime}</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </article>
                                            )
                                        })}

                                    </div>
                                </div>

                                <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                                    <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h2 class="font25 lineHeight25px">MORE CRICKET NEWS</h2>
                                        <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                                    </div>
                                    {/* <CricketNewsCard keyvalue={cricketStories.data.stories} /> */}
                                    <div style={{ flexWrap: "wrap", display: "flex", flex: "initial", display: "-webkit-flex", WebkitBoxSizing: "border-box" }}>
                                        {cricketStories.data.stories.slice(0, 5).map((value, index) => {
                                            return (
                                                <article style={{ flexShrink: '0', marginRight: "20px", maxWidth: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", flexGrow: "1", flexShrink: "1", flexBasis: "48%", borderTopColor: "rgb(221, 221, 221)", borderTopStyle: "solid", borderTopWidth: "1px", borderRightColor: "rgb(221, 221, 221)", borderRightStyle: "solid", borderRightWidth: "1px", borderBottomColor: "rgb(221, 221, 221)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeftColor: "rgb(221, 221, 221)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderImageSource: "initial", borderImageSlice: "initial", borderImageWidth: "initial", borderImageOutset: "initial", borderImageRepeat: "initial", webkitBoxSizing: "border-box" }}>
                                                    <div data-index={index}>
                                                        <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                            <div class="flex" style={{ display: "flex", flex: "initial!important" }}>
                                                                <div class="posRelative flex overflowHidden" style={{ width: "30%", display: "flex", position: "relative", overflow: "hidden!important", flexGrow: "initial !important", flexShrink: "initial !important", flexBasis: "initial !important" }}>
                                                                    <img src={value.placeholder} style={{ transition: "all .5s", objectFit: "cover", borderRadius: "2px", minWidth: "80px", height: "100px", width: "100%", WebkitBoxSizing: "border-box" }} />
                                                                </div>
                                                                <div class="texthover latest-news-text flex flexDirectionCol" style={{ paddingLeft: "10px", width: "70%", flexDirection: "column", display: "flex", flex: "initial!important" }}>
                                                                    <div style={{ height: "60px", webkitBoxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                                        <p class="txtTruncate lineClip3" style={{ fontSize: "16px", fontWeight: "400", margin: "0 0 0 10px", margin: "0", WebkitLineClamp: "3!important", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitBoxSizing: "border-box", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>
                                                                            {value.meta_title}
                                                                        </p>
                                                                    </div>
                                                                    <div class="mrgntop10" style={{ marginTop: "10px!important", webkitBoxSizing: "border-box" }}>
                                                                        <p style={{ fontSize: "14px", color: "#464646", margin: "0 0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>{value.pub_datetime}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </article>
                                            )
                                        })}

                                    </div>


                                </div>
                                <TeamPointsTable data={pointsTable[0].rankings} />
                            </div>
                            <div id="cricket-videos">
                                <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2 class="font25 lineHeight25px">VIDEOS</h2>
                                </div>
                                <div class="video-container bdr-dddddd flex">
                                    {cricketStories.data.video_stories.slice(0, 2).map((value, index) => {
                                        return (
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


                        </>
                    case 'ipl-points-table.html':
                        return <>
                            <TeamPointsTable data={pointsTable[0].rankings} />

                            <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                                <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2 class="font25 lineHeight25px">MORE CRICKET NEWS</h2>
                                    <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                                </div>
                                <div style={{ flexWrap: "wrap", display: "flex", flex: "initial", display: "-webkit-flex", WebkitBoxSizing: "border-box" }}>
                                    {cricketStories.data.stories.slice(0, 5).map((value, index) => {
                                        return (
                                            <article style={{ flexShrink: '0', marginRight: "20px", maxWidth: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", flexGrow: "1", flexShrink: "1", flexBasis: "48%", borderTopColor: "rgb(221, 221, 221)", borderTopStyle: "solid", borderTopWidth: "1px", borderRightColor: "rgb(221, 221, 221)", borderRightStyle: "solid", borderRightWidth: "1px", borderBottomColor: "rgb(221, 221, 221)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeftColor: "rgb(221, 221, 221)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderImageSource: "initial", borderImageSlice: "initial", borderImageWidth: "initial", borderImageOutset: "initial", borderImageRepeat: "initial", webkitBoxSizing: "border-box" }}>
                                                <div data-index={index}>
                                                    <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                        <div class="flex" style={{ display: "flex", flex: "initial!important" }}>
                                                            <div class="posRelative flex overflowHidden" style={{ width: "30%", display: "flex", position: "relative", overflow: "hidden!important", flexGrow: "initial !important", flexShrink: "initial !important", flexBasis: "initial !important" }}>
                                                                <img src={value.placeholder} style={{ transition: "all .5s", objectFit: "cover", borderRadius: "2px", minWidth: "80px", height: "100px", width: "100%", WebkitBoxSizing: "border-box" }} />
                                                            </div>
                                                            <div class="texthover latest-news-text flex flexDirectionCol" style={{ paddingLeft: "10px", width: "70%", flexDirection: "column", display: "flex", flex: "initial!important" }}>
                                                                <div style={{ height: "60px", webkitBoxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                                    <p class="txtTruncate lineClip3" style={{ fontSize: "16px", fontWeight: "400", margin: "0 0 0 10px", margin: "0", WebkitLineClamp: "3!important", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitBoxSizing: "border-box", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>
                                                                        {value.meta_title}
                                                                    </p>
                                                                </div>
                                                                <div class="mrgntop10" style={{ marginTop: "10px!important", webkitBoxSizing: "border-box" }}>
                                                                    <p style={{ fontSize: "14px", color: "#464646", margin: "0 0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>{value.pub_datetime}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </article>
                                        )
                                    })}

                                </div>


                            </div>
                        </>
                    case 'result.html':
                        return <>
                            <div class="padtop20 padbtm20">
                                <div class="flex cricket-page-responsive">
                                    <div class="width667 padright20">
                                        <div class="result-match">
                                            {resultData.matches.map((value, index) => {
                                                return (
                                                    <div class="flex pad15 mrgntop10 bdrRadius4px bdr-dddddd">
                                                        <div style={{ width: "80%" }}>
                                                            <div style={{ fontSize: "14px" }}>{value.start_date_f}| {value.season} | {value.venue}</div>
                                                            <div class="flex padtop15 font16">
                                                                <div style={{ fontSize: "16px" }}>{value.teams.a.name}</div>
                                                                <div class="vs-container-red mrgnleft20 mrgnright20" style={{display: "flex",justifyContent: "center",alignItems: "center"}}>vs</div>
                                                                <div style={{ fontSize: "16px", fontFamily: "Roboto,sans-serif" }}>{value.teams.b.name}</div>
                                                            </div>
                                                            <div class="padtop15 font14 fontweight500">{value.result}</div>
                                                        </div>
                                                        <div class="flex flexJustifyCenter" style={{ margin: "auto", width: "20%" }}>
                                                            <Link href="">
                                                                <a class="scorecard-wrapper">
                                                                    <p>Scorecard</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                                <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2 class="font25 lineHeight25px">MORE CRICKET NEWS</h2>
                                    <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                                </div>
                                {/* <CricketNewsCard keyvalue={cricketStories.data.stories} /> */}
                                <div style={{ flexWrap: "wrap", display: "flex", flex: "initial", display: "-webkit-flex", WebkitBoxSizing: "border-box" }}>
                                    {cricketStories.data.stories.slice(0, 5).map((value, index) => {
                                        return (
                                            <article style={{ flexShrink: '0', marginRight: "20px", maxWidth: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", flexGrow: "1", flexShrink: "1", flexBasis: "48%", borderTopColor: "rgb(221, 221, 221)", borderTopStyle: "solid", borderTopWidth: "1px", borderRightColor: "rgb(221, 221, 221)", borderRightStyle: "solid", borderRightWidth: "1px", borderBottomColor: "rgb(221, 221, 221)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeftColor: "rgb(221, 221, 221)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderImageSource: "initial", borderImageSlice: "initial", borderImageWidth: "initial", borderImageOutset: "initial", borderImageRepeat: "initial", webkitBoxSizing: "border-box" }}>
                                                <div data-index={index}>
                                                    <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                        <div class="flex" style={{ display: "flex", flex: "initial!important" }}>
                                                            <div class="posRelative flex overflowHidden" style={{ width: "30%", display: "flex", position: "relative", overflow: "hidden!important", flexGrow: "initial !important", flexShrink: "initial !important", flexBasis: "initial !important" }}>
                                                                <img src={value.placeholder} style={{ transition: "all .5s", objectFit: "cover", borderRadius: "2px", minWidth: "80px", height: "100px", width: "100%", WebkitBoxSizing: "border-box" }} />
                                                            </div>
                                                            <div class="texthover latest-news-text flex flexDirectionCol" style={{ paddingLeft: "10px", width: "70%", flexDirection: "column", display: "flex", flex: "initial!important" }}>
                                                                <div style={{ height: "60px", webkitBoxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                                    <p class="txtTruncate lineClip3" style={{ fontSize: "16px", fontWeight: "400", margin: "0 0 0 10px", margin: "0", WebkitLineClamp: "3!important", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitBoxSizing: "border-box", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>
                                                                        {value.meta_title}
                                                                    </p>
                                                                </div>
                                                                <div class="mrgntop10" style={{ marginTop: "10px!important", webkitBoxSizing: "border-box" }}>
                                                                    <p style={{ fontSize: "14px", color: "#464646", margin: "0 0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>{value.pub_datetime}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </article>
                                        )
                                    })}

                                </div>


                            </div>
                            <TeamPointsTable data={pointsTable[0].rankings} />

                        </>
                    default:
                        return null
                }
            })()}
        </>
    )
}

export async function getServerSideProps() {
    var cricketStories
    var pointsTable
    var scheduleData
    var resultData
    const cricketStoriesRequest = axios.get(`https://jarvis.mynationvoice.com/sub-category/cricketstories?sub_category_slug=cricket-news&page_no=1&limit=12&event=ipl-2021`)
    const pointsTableRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/ipl_rankings_2021.json`)
    const scheduleDataRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/schedule_iplt20_2021.json`)
    const resultDataRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/results_iplt20_2021.json`)
    await Promise.all([cricketStoriesRequest, pointsTableRequest, scheduleDataRequest, resultDataRequest]).then(function (results) {
        cricketStories = results[0].data;
        pointsTable = results[1].data;
        scheduleData = results[2].data;
        resultData = results[3].data;

    });
    return { props: { cricketStories, pointsTable, scheduleData, resultData } }

};
