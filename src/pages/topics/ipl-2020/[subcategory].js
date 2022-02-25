import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/CricketMenuBar'
import CricketNewsCard from '/components/common/CricketNewsCard'
import TeamPointsTable from '/components/common/TeamPointsTable'
import Link from 'next/link';
import Image from "next/image";
const axios = require('axios');
var keyvalue;


export default function ipl({ cricketStories, pointsTable, scheduleData,resultData }) {
    const router = useRouter()
    let isIpl2021 = router.query.ipl === "ipl-2021"
    // if(isIpl2021){
    return (
        <>
            <Header />
            <Cricket />
            <nav id="breadcrumb" class="font14 font-roboto font14 flex flexAlignItemsCenter" style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;" }}>Home / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important;" }}> Topics / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important;" }}> IPL 2020 /</a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ color: "#e60000" }} class="color-e60000 fontweight500"> {router.query.subcategory.charAt(0).toUpperCase()+router.query.subcategory.replace(".html","").slice(1)}</a></Link></span>
            </nav>
            {(() => {
                switch (router.query.subcategory) {
                    case 'schedule.html':
                        return <>
                            <div style={{ marginTop: "20px!important", boxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", fontSize: ".8em" }}>
                                <div style={{ padding: "10px 10px", marginTop: "20px!important", fontSize: "18px", fontWeight: "700!important", fontFamily: "Roboto,sans-serif" }}>Indian Premier League 2021</div>
                                <div class="mrgntop flex flexWrap" style={{ padding: "10px 10px"}}>
                                    {scheduleData.seasons[0].matches.map((value, index) => {
                                        return (
                                            <div class="schedule-match-wrapper">
                                                <a href="https://www.republicworld.com/cricket/ipl-2021/hyderabad-vs-mumbai-live-score/iplt20-2021-g31.html" style={{ textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                    <div class="flex flexJustifyBetween" style={{ paddingBottom: "20px!important", justifyContent: "space-between", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                        <div style={{ fontSize: "14px", fontWeight: "700", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.start_date_f}</div></div>
                                                    <div class="flex flexJustifyBetween">
                                                        <div class="flex">
                                                            <div class="schedule-team-flag" style={{ background: "#004BA0" }}>{value.teams.a.logo_character}</div>
                                                            <div class="padleft10 font16" style={{ margin: "auto", paddingLeft: "10px", fontSize: "16px", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.teams.a.name}</div>
                                                        </div>
                                                        <div class="vs-container-red">vs</div>
                                                        <div class="flex">
                                                            <div class="padright10 font16" style={{ margin: "auto", paddingRight: "10px", fontSize: "16px", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>{value.teams.b.name}</div>
                                                            <div class="schedule-team-flag" style={{ background: "#004BA0" }}>{value.teams.b.logo_character}</div>
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
                                    <div class="flex flexWrap" style={{padding:"10px"}}>
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
                            <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                                <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h2 class="font25 lineHeight25px">VIDEOS</h2>
                                </div>
                                <div style={{ padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", border: "1px solid #ddd", display: "flex", flex: "initial!important", webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                    {cricketStories.data.video_stories.map((value, index) => {
                                        <div data-index={index}>
                                            <Link href="/">
                                                <a style={{ width: "50%", display: "flex", float: "left", padding: "5px" }}>
                                                    <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", background: "rgb(26, 20, 35)", boxSizing: "border-box" }}>
                                                        <div style={{ height: "120px", position: "relative" }}>
                                                            <img
                                                                src={value.placeholder}
                                                                alt="Nishant Sindhu's coach opines on India's strategy post losing toss in U-19 World Cup final"
                                                                style={{ width: "100%", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423" }} />
                                                            <div style={{ position: "absolute", right: "44%", margin: "auto", top: "42%", background: "black", width: "25px", textAlign: "center", borderRadius: "100%", height: "25px", padding: "0px" }}>
                                                                <div style={{ width: "10px", height: "10px", marginLeft: "10px", borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid white", marginTop: "8px" }}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{ padding: "10px 0px", fontFamily: "Roboto, sans-serif", fontStyle: "normal", fontWeight: "normal", background: "rgb(26, 20, 35)", color: "rgb(255, 255, 255)", fontSize: "14px", textAlign: "left", height: "68px", overflow: "hidden" }}>
                                                            <div style={{ paddingTop: "50px", fontSize: "14px", lineHeight: "16px", height: "48px", overflow: "hidden", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423" }} >{value.meta_title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
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
                        </>
                    case 'result.html':
                        return <>
                            <div style={{paddingBottom: "20px",paddingTop: "20px",WebkitBoxSizing: "border-box"}}>
                                <div style={{flexDirection: "column",display: "flex",flex: "initial!important",WebkitBoxSizing: "border-box"}}>
                                    <div style={{paddingRight: "0",paddingBottom: "30px",width: "100%",flexDirection: "column",WebkitBoxSizing: "border-box"}}>
                                        <div style={{WebkitBoxSizing: "border-box",boxSizing: "border-box"}}>
                                        {resultData.matches.map((value, index) => {
                                        return (
                                            <div data-index={index}>
                                            <div style={{marginTop: "10px",padding: "15px",border: "1px solid #ddd",WebkitBorderRadius: "4px",display: "flex",flex: "initial!important"}}>
                                                <div style={{width: "80%"}}>
                                                    <div style={{fontSize: "14px"}}>{value.start_date_f}| {value.season} | {value.venue}</div>
                                                    <div style={{paddingTop: "15px",fontSize: "16px",display: "-webkit-box"}}>
                                                        <div style={{fontSize: "16px"}}>{value.teams.a.name}</div>
                                                        <div style={{background: "#d10014",borderRadius: "50px",color: "#fff",width: "22px",height: "22px",textAlign: "center",fontSize: "12px",marginLeft: "20px",marginRight: "20px",fontFamily: "Roboto,sans-serif"}}>vs</div>
                                                        <div style={{fontSize: "16px",fontFamily: "Roboto,sans-serif"}}>{value.teams.b.name}</div>
                                                    </div>
                                                    <div style={{paddingTop: "15px",fontSize: "14px",fontWeight: "500"}}>{value.result}</div>
                                                </div>
                                                <div style={{margin: "auto",width: "20%",justifyContent: "center",display: "flex",flex: "initial!important",fontFamily: "Roboto,sans-serif"}}>
                                                    <Link href="">
                                                    <a> 
                                                    <p style={{margin: "0",padding: "10px 20px",display: "block",marginBlockStart: "1em",marginBlockEnd: "1em",marginInlineStart: "0px",marginInlineEnd: "0px",border: "1px solid #d10014",borderRadius: "3px",color: "#d10014",textAlign: "center",fontSize: "14px",fontWeight: "700",display: "inline-block",fontFamily: "Roboto,sans-serif"}}>Scorecard</p> 
                                                    </a>
                                                    </Link>
                                                </div>
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
    await Promise.all([cricketStoriesRequest, pointsTableRequest, scheduleDataRequest,resultDataRequest]).then(function (results) {
        cricketStories = results[0].data;
        pointsTable = results[1].data;
        scheduleData = results[2].data;
        resultData = results[3].data;

    });
    return { props: { cricketStories, pointsTable, scheduleData,resultData } }

};
