import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/CricketMenuBar'
import CricketNewsCard from '/components/common/CricketNewsCard'
import TeamPointsTable from '/components/common/TeamPointsTable'
import Link from 'next/link';
const axios = require('axios');
var keyvalue;

export default function ipl({ cricketStories,pointsTable }) {
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
                <span class="txtTransformCaps"><Link href="/"><a href={{ textDecoration: "underline !important;" }} class="color-e60000 fontweight500"> IPL 2021</a></Link></span>
            </nav>
            {/* <div class="flex padtop20 flexJustifyCenter" style={{display: "flex;"}}>
            <div class="width100 bdr-dddddd flex">
                <div class="flex mrgnright10" style={{width:"76%"}}>
                    <Image style={{width:"100%"}} src="https://www.republicworld.com/assets/images/cricket/cricket_banner_logo.jpeg" alt="Cricket" title="Cricket" width={100} height={60}/>
                </div>
                <div style={{width:"24%"}} class="flex flexJustifyCenter padleft10">
                    <div class="flex flexJustifyCenter flexDirectionCol font14 txtcenter">Supported by</div>
                    <a rel="nofollow" style={{margin:"auto 0"}} href="https://www.cricketapi.com/?ref=republicworld.com" target="_blank">
                        <Image style={{width:"120px",height:"60px"}} src="https://www.republicworld.com/assets/images/cricket/roanuz_logo.png" alt="Roanuz Cricket API" title="Roanuz Cricket API" width={120} height={60}/>
                    </a>
                </div>
            </div>
        </div>         */}

            <section style={{ padding: "20px 10px 10px 10px" }}>
                <h1 class="font25 lineHeight25px" title="IPL 2021">Indian Premier League 2021</h1>
            </section>

            <div class="padtop20 flex cricket-page-responsive" style={{ padding: "20px 10px 10px 10px", flexDirection: "column" }}>
                <div class="fxWidth67 width67 cricket-page-responsive">
                    <div class="flex" style={{ display: "flex", flex: "initial!important", webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif" }}>
                        <article class="hover-effect top-news bdr-dddddd" style={{ width: "56%;", display: "block", fontFamily: "Roboto,sans-serif", fontSize: ".8em", webkitBoxSizing: "border-box", borderTopColor: "rgb(221, 221, 221)", borderTopStyle: "solid", borderTopWidth: "1px", borderRightColor: "rgb(221, 221, 221)", borderRightStyle: "solid", borderRightWidth: "1px", borderBottomColor: "rgb(221, 221, 221)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeftColor: "rgb(221, 221, 221)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderImageSource: "initial", borderImageSlice: "initial", borderImageWidth: "initial", borderImageOutset: "initial", borderImageRepeat: "initial" }}>
                            <a href="https://www.republicworld.com/sports-news/cricket-news/india-vs-west-indies-t20i-why-was-rishabh-pant-appointed-as-team-indias-vice-captain-articleshow.html">
                                <div class="posRelative flex overflowHidden">
                                    <img
                                        class="imghover"
                                        src={cricketStories.data.stories[0].placeholder}
                                        style={{ width: "100%;" }}
                                        alt="India vs West Indies T20I: Why was Rishabh Pant appointed as Team India's vice-captain?"
                                    />
                                </div>
                                <p class="texthover txtTruncate lineClip3" style={{ transitionProperty: "all", transitionDuration: "0.5s", transitionTimingFunction: "ease", transitionDelay: "0s", lineHeight: "25px", fontSize: "21px", marginTop: "0", marginBottom: "0", padding: "5px 10px", fontWeight: "500", marginRight: "0px", marginLeft: "0px", webkitLineClamp: "3!important", overflowX: "hidden", overflowY: "hidden", display: "-webkit-box", webkitBoxOrient: "vertical", webkitBoxSizing: "border-box", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif" }}>
                                    {cricketStories.data.stories[0].meta_title}
                                </p>
                            </a>
                        </article>
                        <div class="flex flexDirectionCol bdrRight-dddddd bdrTop-dddddd bdrBtm-dddddd" style={{ width: "44%;", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgb(221, 221, 221)", borderRightWidth: "1px", borderRightStyle: "solid", borderRightColor: "rgb(221, 221, 221)", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgb(221, 221, 221)", flexDirection: "column", display: "flex", flex: "initial!important", webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                            {cricketStories.data.stories.slice(1, 6).map((value, index) => {
                                return (
                                    <article class="hover-effect recent-news" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "rgb(221, 221, 221)", webkitBoxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                        <div data-index={index = 5}>
                                            <a href="https://www.republicworld.com/sports-news/cricket-news/rohit-sharma-shuts-down-questions-on-ex-skipper-virat-kohlis-form-if-you-guys-can-dot-articleshow.html" style={{ width: "100%", display: "flex", padding: "6px", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                <div class="posRelative flex overflowHidden" style={{ minWidth: "80px", height: "60px", position: "relative", overflow: "hidden!important", display: "flex", flex: "initial!important", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                    <img
                                                        class="imghover"
                                                        src={value.placeholder}
                                                        alt="Rohit Sharma shuts down questions on ex-skipper Virat Kohli's form; 'If you guys can...'"
                                                        style={{ transitionProperty: "all", transitionDuration: "0.5s", transitionTimingFunction: "ease", transitionDelay: "0s" }}
                                                    />
                                                </div>
                                                <p class="texthover txtTruncate lineClip3 font16" style={{ transitionProperty: "all", transitionDuration: "0.5s", transitionTimingFunction: "ease", transitionDelay: "0s", margin: "0 0 0 5px!important", letterSpacing: "-.2px", lineHeight: "21px", fontSize: "16px", webkitLineClamp: "3!important", overflow: "hidden", display: "-webkit-box", webkitBoxSizing: "border-box", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif" }}>
                                                    {value.meta_title}
                                                </p>
                                            </a>
                                        </div>

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
                        <CricketNewsCard keyvalue={cricketStories.data.stories} />
                    </div>
                    <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                        <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 class="font25 lineHeight25px">EDITOR'S PICK</h2>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories} />

                    </div>
                    <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                        <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 class="font25 lineHeight25px">MORE CRICKET NEWS</h2>
                            <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                        </div>
                        <CricketNewsCard keyvalue={cricketStories.data.stories} />

                    </div>
                    {/*
             <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                    <h2 class="font25 lineHeight25px">VIDEOS</h2>
                </div>

                <div style={{ padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", border: "1px solid #ddd", display: "flex", flex: "initial!important", webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                    <article class="hover-effect video-inner-container" style={{ width: "50%", marginRight: "20px", webkitBoxSizing: "border-box", display: "block", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                        <Link href="/">
                            <a class="flex flexDirectionCol" style={{ flexDirection: "column", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", webkitBoxSizing: "border-box", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }} /></Link>
                        <div class="overflowHidden posRelative flex" style={{ position: "relative", overflow: "hidden!important", display: "flex", flex: "initial!important", webkitBoxSizing: "border-box", textDecoration: "none!important", border: "none", color: "#000", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                            <img
                                class="imghover"
                                src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/nelza1x0mn3jzzjc_1644139377.jpeg?tr=w-351,h-200"
                                alt="Nishant Sindhu's coach opines on India's strategy post losing toss in U-19 World Cup final"
                                style={{ transition: "all .5s", width: "100%", boxSizing: "border-box", textDecoration: "none!important", border: "none", color: "#000", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }} />
                            <div class="videohover posAbsolute width100 height100p" style={{ background: "rgba(0,0,0,.1)", transition: "all .5s", position: "absolute", height: "100%", width: "100%", boxSizing: "border-box", display: "block", textDecoration: "none!important", border: "none", color: "#000", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                <div class="flex height100p" style={{ height: "100%", display: "flex", flex: "initial!important", boxSizing: "border-box", textDecoration: "none!important", border: "none", color: "#000", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                    <div class="livetv-play-button" style={{ fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px", margin: "auto", width: "35px", height: "35px", content: ("https://www.republicworld.com/assets/images/livetv/play_button.png"), textAlign: "center", boxSizing: "border-box", display: "block", textDecoration: "none!important", border: "none", color: "#000", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}></div>
                                </div>
                            </div>
                        </div>
                        <div class="texthover video-container-text" style={{ transition: "all .5s", boxSizing: "border-box", display: "block", textDecoration: "none!important", border: "none", color: "#000", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                            <p class="txtTruncate" style={{ margin: "10px 0 0 0", color: "#fff", margin: "0", overflow: "hidden", display: "-webkit-box", webkitLineClamp: "2", webkitBoxOrient: "vertical", boxSizing: "border-box", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", textDecoration: "none!important", border: "none", color: "#000", padding: "20px 30px", fontFamily: "Roboto", fontSize: "16px", backgroundColor: "#1a1423", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>Nishant Sindhu's coach opines on India's strategy post losing toss in U-19 World Cup final</p>
                        </div>
                    </article>
                </div>
            </div>
 */}
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
                    <div class="clr-D10014 mrgntop10 pad5 font18 bdr4px-dddddd fontweight700" style={{ color: "#d10014", marginTop: "10px!important", padding: "5px!important", border: "4px solid #ddd", fontSize: "18px", fontWeight: "700!important", boxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                        Disclaimer: None of the advertisers on this page are the official sponsors of the IPL 2021
                    </div>
                </div>
            </div>

            <div class="fxWidth33 width33 grid">
                <div class="r-logo watch-livetv mrgnbtm20" style={{ display: "block", flexWrap: "wrap", display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", background: "#6d1c24", backgroundImage: "url('https://www.republicworld.com/assets/images/youtube/g18.png')", backgroundRepeat: "no-repeat", backgroundSize: "contain", marginBottom: "20px!important", boxSizing: "border-box", fontFamily: "Roboto,sans-serif", webkitTextSizeAdjust: "100%", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                    <div class="flex flexJustifyBetween mrgnbtm10" style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingBottom: "5px", marginBottom: "10px!important", display: "flex", flex: "initial!important", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", webkitTextSizeAdjust: "100%", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                        <div style={{ color: "white", boxSizing: "border-box", display: "block", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }}>WATCH US LIVE</div>
                        <div class="flex" style={{ padding: "0!important", display: "flex", flex: "initial!important", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }}>
                            <div style={{ boxSizing: "border-box", display: "block", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", fontFamily: "Roboto,sans-serif", }}>
                                <img class="livetv-logo" src="https://www.republicworld.com/assets/images/live-tv/tv-logo.png" alt="Live Tv" style={{ width: "22px", height: "auto", width: "28px", height: "20px", marginRight: "5px", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} />
                            </div>
                            <div class="font18 fontweight100" style={{ fontsize: "18px", fontWeight: "500!important", boxSizing: "border-box", display: "block", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }}>LIVE TV</div>
                        </div>
                    </div>
                    <div class="flex flexJustifyBetween" style={{ width: "100%", justifyContent: "space-between", display: "flex", flex: "initial!important", boxSizing: "border-box", display: "block", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }}>
                        <Link href="https://www.republicworld.com/livetv.html">
                            <a target="_blank" class="mrgnright10" spark_ve_preview="none" style={{ marginRight: "10px!important", textDecoration: "none!important", border: "none", color: "#000", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }}>
                                <img class="responsiveImage" width="176" height="35" src="https://img.republicworld.com/republic-prod/logo/tr:w-176,h-35/r-logo-web.png" alt="Republic" style={{ height: "auto", width: "100%", boxSizing: "border-box", width: "176px", aspectRatio: "auto 176 / 35", height: "35px", textDecoration: "none!important", border: "none", color: "#000", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} />
                            </a>
                        </Link>
                        <Link href="https://bharat.republicworld.com/livetv">
                            <a target="_blank" class="mrgnleft10" spark_ve_preview="none" style={{ marginRight: "10px!important", textDecoration: "none!important", border: "none", color: "#000", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} >
                                <img class="responsiveImage" width="146" height="35" src="https://img.republicworld.com/republic-prod/logo/tr:w-146,h-35/rbharat-logo-web.png" alt="R-BHARAT" style={{ height: "auto", width: "100%", boxSizing: "border-box", width: "176px", aspectRatio: "auto 176 / 35", height: "35px", textDecoration: "none!important", border: "none", color: "#000", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} />
                            </a>
                        </Link>
                    </div>
                </div>
                <TeamPointsTable data={pointsTable.rankings} />
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
    await Promise.all([cricketStoriesRequest,pointsTableRequest]).then(function (results) {
        cricketStories = results[0].data;
        pointsTable = results[1]|null;
    });
    return { props: { cricketStories,pointsTable } }

};
