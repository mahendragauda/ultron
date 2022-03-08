import { useRouter } from "next/router";
import Header from '../../../components/common/Header'
import Cricket from '../../../components/common/Cricket/CricketMenuBar'
import CricketNewsCard from '../../../components/common/Cricket/CricketNewsCard'
import TeamPointsTable from '../../../components/common/Cricket/TeamPointsTable'
import Link from 'next/link';
import Image from "next/image";
const axios = require('axios');
var keyvalue;
import styles from '/styles/Cricket.module.css'



export default function ipl({ cricketStories, pointsTable, scheduleData, resultData }) {
    const router = useRouter()
    let isIpl2021 = router.query.ipl === "ipl-2021"
    // if(isIpl2021){
    return (
        <>
            <Header />
            <nav id="breadcrumb" className={[styles.font14, styles.fontRoboto, styles.font14, styles.flex, styles.flexAlignItemsCenter].join(" ")} style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;" }}>Home / </a></Link></span>
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important;" }}> Topics / </a></Link></span>
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important;" }}> IPL 2020 /</a></Link></span>
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ color: "#e60000" }} className="color-e60000 fontweight500"> {router.query.subcategory.charAt(0).toUpperCase() + router.query.subcategory.replace(".html", "").slice(1)}</a></Link></span>
            </nav>
            {(() => {
                switch (router.query.subcategory) {
                    case 'schedule.html':
                        return <>
                            <div style={{ marginTop: "20px!important", boxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", fontSize: ".8em" }}>
                                <div className={[styles.mrgntop, styles.flex, styles.flexWrap].join(" ")} style={{ padding: "10px 10px" }}>
                                    {scheduleData.seasons[0].matches.map((value, index) => {
                                        return (
                                            <div className={styles.scheduleMatchWrapper}>
                                                <a href={value.short_name.toLowerCase().replace(/ /g, '-') + "-live-score" + "/" + value.key + ".html"} style={{ textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                    <div className={[styles.flex, styles.flexJustifyBetween].join(" ")} style={{ paddingBottom: "20px!important", justifyContent: "space-between", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                        <div style={{ fontSize: "14px", fontWeight: "700", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.start_date_f}</div></div>
                                                    <div className={[styles.flex, styles.flexJustifyBetween].join(" ")}>
                                                        <div className={styles.flex}>
                                                            <div className={styles.scheduleTeamFlag} style={{ background: value.teams.a.color_code }}>{value.teams.a.logo_character}</div>
                                                            <div className={[styles.padleft10, styles.font16].join(" ")} style={{ margin: "auto", paddingLeft: "10px", fontSize: "16px", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.teams.a.name}</div>
                                                        </div>
                                                        <div className={styles.vsContainerRed} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>vs</div>
                                                        <div className={styles.flex}>
                                                            <div className={[styles.padright10, styles.font16]} style={{ margin: "auto", paddingRight: "10px", fontSize: "16px", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.teams.b.name}</div>
                                                            <div className={styles.scheduleTeamFlag} style={{ background: value.teams.b.color_code }}>{value.teams.b.logo_character}</div>
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
                                    <div className={[styles.flex, styles.flexJustifyBetween].join(" ")} style={{ padding: "10px", justifyContent: "space-between", display: "flex", flex: "initial!important" }}>
                                        <h2 style={{ marginBottom: "15px", margin: "0", fontSize: "25px", fontWeight: "700", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", marginInlineStart: "0px", marginInlineEnd: "0px", dispaly: "block" }}>LATEST IPL 2020 NEWS</h2>
                                    </div>
                                    <div className={[styles.flex, styles.flexWrap].join(" ")} style={{ padding: "10px" }}>
                                        {cricketStories.data.stories.slice(0, 6).map((value, index) => {
                                            return (
                                                <article className={[styles.relatedContent, styles.bdrRadius4px, styles.bdrDddddd].join(" ")}>
                                                    <Link href="">
                                                        <a style={{ textDecoration: "none!important", border: "none", color: "#000", WebkitBoxSizing: "border-box" }}>
                                                            <div className={[styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")}>
                                                                <div>
                                                                    <p className={[styles.font16, styles.fontweight500, styles.mrgn0, styles.txtTruncate, styles.lineClip3].join(" ")}>
                                                                        {value.meta_title}
                                                                    </p>
                                                                </div>
                                                                <div style={{ paddingTop: "5px", WebkitBoxSizing: "border-box" }}>
                                                                    <p className={[styles.font14, styles.mrgn0].join(" ")}>{value.pub_datetime}</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </article>
                                            )
                                        })}

                                    </div>
                                </div>

                                <div className={styles.padtop30} style={{ padding: "20px 10px 10px 10px" }}>
                                    <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")} style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h2 className={[styles.font25, styles.lineHeight25px].join(" ")}>MORE CRICKET NEWS</h2>
                                        <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                                    </div>
                                    {/* <CricketNewsCard keyvalue={cricketStories.data.stories} /> */}
                                    <div style={{ flexWrap: "wrap", display: "flex", flex: "initial", display: "-webkit-flex", WebkitBoxSizing: "border-box" }}>
                                        {cricketStories.data.stories.slice(0, 5).map((value, index) => {
                                            return (
                                                <article style={{ flexShrink: '0', marginRight: "20px", maxWidth: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", flexGrow: "1", flexShrink: "1", flexBasis: "48%", borderTopColor: "rgb(221, 221, 221)", borderTopStyle: "solid", borderTopWidth: "1px", borderRightColor: "rgb(221, 221, 221)", borderRightStyle: "solid", borderRightWidth: "1px", borderBottomColor: "rgb(221, 221, 221)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeftColor: "rgb(221, 221, 221)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderImageSource: "initial", borderImageSlice: "initial", borderImageWidth: "initial", borderImageOutset: "initial", borderImageRepeat: "initial", webkitBoxSizing: "border-box" }}>
                                                    <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                        <div className={styles.flex} style={{ display: "flex", flex: "initial!important" }}>
                                                            <div className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")} style={{ width: "30%", display: "flex", position: "relative", overflow: "hidden!important", flexGrow: "initial !important", flexShrink: "initial !important", flexBasis: "initial !important" }}>
                                                                <img src={value.placeholder} style={{ transition: "all .5s", objectFit: "cover", borderRadius: "2px", minWidth: "80px", height: "100px", width: "100%", WebkitBoxSizing: "border-box" }} />
                                                            </div>
                                                            <div className={[styles.texthover, styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")} style={{ paddingLeft: "10px", width: "70%", flexDirection: "column", display: "flex", flex: "initial!important" }}>
                                                                <div style={{ height: "60px", webkitBoxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                                    <p className={[styles.txtTruncate, styles.lineClip3].join(" ")} style={{ fontSize: "16px", fontWeight: "400", margin: "0 0 0 10px", margin: "0", WebkitLineClamp: "3!important", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitBoxSizing: "border-box", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>
                                                                        {value.meta_title}
                                                                    </p>
                                                                </div>
                                                                <div className={styles.mrgntop10} style={{ marginTop: "10px!important", webkitBoxSizing: "border-box" }}>
                                                                    <p style={{ fontSize: "14px", color: "#464646", margin: "0 0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>{value.pub_datetime}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </article>
                                            )
                                        })}

                                    </div>


                                </div>
                                <TeamPointsTable data={pointsTable[0].rankings} />
                            </div>
                            <div id="cricketVideos">
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


                        </>
                    case 'ipl-points-table.html':
                        return <>
                            <TeamPointsTable data={pointsTable[0].rankings} />

                            <div className={styles.padtop30} style={{ padding: "20px 10px 10px 10px" }}>
                                <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")} style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2 className={[styles.font25, styles.lineHeight25px].join(" ")}>MORE CRICKET NEWS</h2>
                                    <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                                </div>
                                <div style={{ flexWrap: "wrap", display: "flex", flex: "initial", display: "-webkit-flex", WebkitBoxSizing: "border-box" }}>
                                    {cricketStories.data.stories.slice(0, 5).map((value, index) => {
                                        return (
                                            <article style={{ flexShrink: '0', marginRight: "20px", maxWidth: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", flexGrow: "1", flexShrink: "1", flexBasis: "48%", borderTopColor: "rgb(221, 221, 221)", borderTopStyle: "solid", borderTopWidth: "1px", borderRightColor: "rgb(221, 221, 221)", borderRightStyle: "solid", borderRightWidth: "1px", borderBottomColor: "rgb(221, 221, 221)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeftColor: "rgb(221, 221, 221)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderImageSource: "initial", borderImageSlice: "initial", borderImageWidth: "initial", borderImageOutset: "initial", borderImageRepeat: "initial", webkitBoxSizing: "border-box" }}>
                                                <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                    <div className={styles.flex} style={{ display: "flex", flex: "initial!important" }}>
                                                        <div className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")} style={{ width: "30%", display: "flex", position: "relative", overflow: "hidden!important", flexGrow: "initial !important", flexShrink: "initial !important", flexBasis: "initial !important" }}>
                                                            <img src={value.placeholder} style={{ transition: "all .5s", objectFit: "cover", borderRadius: "2px", minWidth: "80px", height: "100px", width: "100%", WebkitBoxSizing: "border-box" }} />
                                                        </div>
                                                        <div className={[styles.texthover, styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")} style={{ paddingLeft: "10px", width: "70%", flexDirection: "column", display: "flex", flex: "initial!important" }}>
                                                            <div style={{ height: "60px", webkitBoxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                                <p className={[styles.txtTruncate, styles.lineClip3].join(" ")} style={{ fontSize: "16px", fontWeight: "400", margin: "0 0 0 10px", margin: "0", WebkitLineClamp: "3!important", overflow: "hidden", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitBoxSizing: "border-box", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }}>
                                                                    {value.meta_title}
                                                                </p>
                                                            </div>
                                                            <div className={styles.mrgntop10} style={{ marginTop: "10px!important", webkitBoxSizing: "border-box" }}>
                                                                <p style={{ fontSize: "14px", color: "#464646", margin: "0 0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>{value.pub_datetime}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </article>
                                        )
                                    })}

                                </div>


                            </div>
                        </>
                    case 'result.html':
                        return <>
                            <div className={[styles.padtop20, styles.padbtm20].join(" ")}>
                                <div className={[styles.flex, styles.cricketPageResponsive].join(" ")}>
                                    <div className={[styles.width667, styles.padright20].join(" ")}>
                                        <div className={styles.resultMatch}>
                                            {resultData.matches.map((value, index) => {
                                                return (
                                                    <div className={[styles.flex, styles.pad15, styles.mrgntop10, styles.bdrRadius4px, styles.bdrDddddd].join(" ")}>
                                                        <div style={{ width: "80%" }}>
                                                            <div style={{ fontSize: "14px" }}>{value.start_date_f}| {value.season} | {value.venue}</div>
                                                            <div className={[styles.flex, styles.padtop15, styles.font16].join(" ")}>
                                                                <div style={{ fontSize: "16px" }}>{value.teams.a.name}</div>
                                                                <div className={[styles.vsContainerRed, styles.mrgnleft20, styles.mrgnright20].join(" ")} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>vs</div>
                                                                <div style={{ fontSize: "16px", fontFamily: "Roboto,sans-serif" }}>{value.teams.b.name}</div>
                                                            </div>
                                                            <div className={[styles.padtop15, styles.font14, styles.fontweight500].join(" ")}>{value.result}</div>
                                                        </div>
                                                        <div className={[styles.flex, styles.flexJustifyCenter].join(" ")} style={{ margin: "auto", width: "20%" }}>
                                                            <Link href="">
                                                                <a className={styles.scorecardWrapper}>
                                                                    <p>Scorecard</p>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                            <div className={styles.width333}>
                            <div className={styles.padtop30}>
                                <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")}>
                                    <h2 className={[styles.font25, styles.lineHeight25px,styles.fontweight700].join(" ")}>MORE CRICKET NEWS</h2>
                                    <Link href="">
                                    <a className={[styles.font14, styles.padtop5, styles.txtdecorationunderline].join(" ")}>View more</a>
                                    </Link>
                                </div>
                                <div className={[styles.flex, styles.flexDirectionCol].join("")}>
                                    {cricketStories.data.stories.slice(0, 5).map((value, index) => {
                                        return (
                                            <article className={[styles.hoverEffect, styles.latestNews, styles.oneCl, styles.rightPanelNews, styles.bdrRadius4px, styles.bdrDddddd].join(" ")} style={{width: "100% !important%"}}>
                                                <Link href="">
                                                <a>
                                                    <div className={styles.flex}>
                                                        <div className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")}>
                                                            <img className={styles.imghover} src={value.placeholder} />
                                                        </div>
                                                        <div className={[styles.texthover, styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")}>
                                                            <div>
                                                                <p className={[styles.txtTruncate, styles.lineClip3].join(" ")}>
                                                                    {value.meta_title}
                                                                </p>
                                                            </div>
                                                            <div className={styles.mrgntop10}>
                                                                <p>{value.pub_datetime}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                </Link>
                                            </article>
                                        )
                                    })}

                                </div>


                            </div>
                            <TeamPointsTable data={pointsTable[0].rankings} />
                            </div>
                            </div>
                            </div>

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
    const cricketStoriesRequest = axios.get(`https://jarvis.mynationvoice.com/sub-category/cricketstories?sub_category_slug=cricket-news&page_no=1&limit=12&event=ipl-2020`)
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
