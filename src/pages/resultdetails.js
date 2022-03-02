const axios = require('axios');
import Header from '/components/common/Header'
import Cricket from '/components/common/Cricket/CricketMenuBar'
import TeamPointsTable from '/components/common/Cricket/TeamPointsTable'
import styles from '/styles/Cricket.module.css'
import Link from 'next/link';

export default function Testing({ pointsTable, cricketStories }) {
    return (
        <>
            <Header />
            <Cricket slug="" />
            <nav id="breadcrumb" className={[styles.font14, styles.fontRoboto, styles.font14, styles.flex, styles.flexAlignItemsCenter].join(" ")} style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;", paddingRight: "5px" }}> <span> Home  </span></a></Link></span> /
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important", paddingRight: "5px", paddingLeft: "5px" }}> <span> Cricket </span></a></Link></span> /
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important", paddingRight: "5px", paddingLeft: "5px" }}> IPL 2021</a></Link></span> /
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ color: "#e60000", paddingRight: "5px", paddingLeft: "5px" }} className="color-e60000 fontweight500"> HYDERABAD VS MUMBAI</a></Link></span>
            </nav>

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


            <div className={[styles.padtop20, styles.padbtm20].join(" ")}>
                <div className={[styles.cricketPageResponsive, styles.flex].join(" ")} style={{ padding: "10px" }}>
                    <div className={[styles.width667, styles.padright20, styles.noMargin, styles.scoreDetails].join(" ")}>
                        <div className={styles.scoreCard}>
                            <div className={styles.scoreCardTitle}>
                                <div>
                                    <h3>Hyderabad vs Mumbai - 31st Match - Indian Premier League 2021</h3>
                                    <h3>May 4, 2021</h3>
                                </div>
                                <div className={styles.flex}><div className={styles.msText}>SCHEDULED</div></div>
                            </div>
                            <div id="score-card-detail" style={{ paddingTop: "10px" }}>
                                <div className={[styles.width100, styles.pad1510].join(" ")}>
                                    <div className={[styles.width100, styles.flexJustifyBetween, styles.flex].join(" ")}>
                                        <div className={styles.flex}>
                                            <div>
                                                <div className={styles.scheduleTeamFlag} style={{ margin: "0 auto", width: "56px", height: "33px", background: "#e3263b" }}>H</div>
                                                <h2 style={{ paddingTop: "3px" }} className={styles.teamName}>Hyderabad</h2>
                                            </div>
                                            <div className={styles.padleft15}></div>
                                        </div>
                                        <div className={styles.vs}><p>VS</p></div>
                                        <div className={styles.flex}>
                                            <div style={{ textAlign: "end" }}></div>
                                            <div className={styles.padleft15}>
                                                <div className={styles.scheduleTeamFlag} style={{ margin: "0 auto", width: "56px", height: "33px", background: "#004ba0" }}>M</div>
                                                <h2 style={{ paddingTop: "3px" }} className={styles.teamName}>Mumbai</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.matchStatus} style={{ padding: "10px" }}>On 04 May 2021, Hyderabad playing against Mumbai in Arun Jaitley Stadium, Delhi, India. Match (Hyderabad vs Mumbai - 31st Match - Indian Premier League 2021) will begin at 14:00 GMT.</div>
                        </div>


                        <div style={{ marginTop: "15px" }} id="currentTeamDetailsA">
                            <div className={[styles.padtop15, styles.padbtm10].join(" ")}>
                                <span style={{ color: "#d61014" }} className={[styles.txtTransformUp, styles.fontweight700, styles.font20, styles.padright5, styles.cTeamName].join(" ")}>Hyderabad</span> <span className={[styles.fontweight700, styles.font20, styles.padright5].join(" ")}>165/8</span>
                                <span style={{ color: "gray" }} className={[styles.cTeamOver, styles.font16, styles.padright5].join(" ")}>(20 OVER)</span> <span style={{ color: "#555555;" }} className={[styles.font16, styles.cTeamRr].join(" ")}>RR 8.25</span>
                            </div>
                        </div>
                        <div className={styles.scoreDetailWrapper} style={{ display: "block" }}>
                            <div className={[styles.padtop10, styles.bdrTopDddddd, styles.bdrLeftDddddd, styles.bdrRightDddddd, styles.navbarContainer, styles.scoreBoardWrapper].join(" ")}>
                                <ul>
                                    <li className={[styles.navLink, styles.activeLink].join(" ")} onclick="location.href='https://www.republicworld.com/cricket/ipl-2021/rajasthan-vs-hyderabad-live-score/iplt20-2021-g28.html'">
                                        <div className={styles.mrgnbtm10}>Scorecard</div>
                                        <div className={styles.underline}></div>
                                    </li>
                                    <li className={styles.navLink} onclick="location.href='https://www.republicworld.com/cricket/ipl-2021/rajasthan-vs-hyderabad-ball-by-ball-live-score/iplt20-2021-g28.html'">
                                        <div className={styles.mrgnbtm10}>Ball by Ball Commentary</div>
                                        <div className={styles.underline}></div>
                                    </li>
                                </ul>
                            </div>
                            <div id="scoreBoardContainer">
                                <div className={[styles.bdrDddddd, styles.scoreDetailPage].join(" ")}>
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <th style={{ textAlign: "left", width: "375px" }}>Batting</th>
                                                <th style={{ width: "75px" }}>R</th>
                                                <th style={{ width: "75px" }}>B</th>
                                                <th style={{ width: "75px" }}>6s</th>
                                                <th style={{ width: "75px" }}>4s</th>
                                                <th style={{ width: "75px" }}>S/R</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h3>Abdul Samad</h3>
                                                    <h4>c Anuj Rawat b Chris Morris</h4>
                                                </td>
                                                <td>10</td>
                                                <td>8</td>
                                                <td>1</td>
                                                <td>0</td>
                                                <td>125</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className={styles.pendingPlayers}>
                                        <h4>Did not bat</h4>
                                        <h3>Khaleel Ahmed</h3>
                                    </div>
                                    <div className={styles.totalInfo}>
                                        <div className={[styles.width40, styles.fontweight700, styles.font18].join(" ")} style={{ margin: "auto 0" }}>TOTAL</div>
                                        <div className={[styles.width60, styles.txtright].join(" ")}>
                                            <div className={[styles.padbtm5, styles.fontweight700, styles.font18].join(" ")}>165/8</div>
                                            <div className={styles.font14}>(20.0 overs, 8.25 runs per overs)</div>
                                        </div>
                                    </div>
                                    <div className={styles.extraInfo}>
                                        <h3>EXTRAS</h3>
                                        <h4>(b - 0, w - 7, no - 0, lb - 1, penalty - 0)</h4>
                                    </div>
                                    <div className={styles.extraInfo}>
                                        <h3>FALL OF WICKETS</h3>
                                        <h4>
                                            1-57 (Manish Pandey, 6.1 overs), 2-70 (Jonny Bairstow, 7.6 overs), 3-85 (V Shankar, 10.4 overs), 4-105 (KS Williamson, 12.5 overs), 5-127 (Mohammad Nabi, 14.2 overs), 6-142 (Abdul Samad, 16.3 overs), 7-142 (Kedar Jadhav,
                                            16.6 overs), 8-143 (Rashid Khan, 17.2 overs)
                                        </h4>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th style={{ textAlign: "left", width: "375px" }}>Bowling</th>
                                                <th style={{ width: "75px" }}>R</th>
                                                <th style={{ width: "75px" }}>B</th>
                                                <th style={{ width: "75px" }}>6s</th>
                                                <th style={{ width: "75px" }}>4s</th>
                                                <th style={{ width: "75px" }}>S/R</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={[styles.pad15, styles.bdrDddddd].join(" ")} style={{ borderTop: "0" }}>
                                    <div className={styles.venueDetails}><span>Toss: </span>Hyderabad won the toss and chose to bowl first</div>
                                    <div className={[styles.venueDetails, styles.padtop5].join(" ")}><span>Stadium: </span>Arun Jaitley Stadium, Delhi, India</div>
                                </div>
                            </div>
                        </div>


                        <div className={styles.mrgntop30} id="not-started-match">
                            <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")}>
                                <h2 className={[styles.font25, styles.lineHeight25px, styles.fontweight700].join(" ")}>MORE CRICKET NEWS</h2>
                                <a href="https://www.republicworld.com/sports-news/cricket-news/1" className={[styles.font14, styles.padtop5, styles.txtdecorationunderline].join(" ")}>View more</a>
                            </div>
                            <div className={[styles.flex, styles.flexDirectionCol].join(" ")}>
                                <article className={[styles.hoverEffect, styles.latestNews, styles.oneCl, styles.rightPanelNews, styles.bdrRadius4px, styles.bdrDddddd].join(" ")} style={{ width: "100% !important" }}>
                                    <a href="https://www.republicworld.com/sports-news/cricket-news/ashwin-hopes-tide-will-turn-for-seriously-good-india-domestic-star-sends-best-wishes-articleshow.html">
                                        <div className={styles.flex}>
                                            <div style={{ width: "14.5%" }} className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")}>
                                                <img
                                                    className={styles.imghover}
                                                    src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/acbyltvg16qzrzv8_1646214678.jpeg?tr=w-110,h-90"
                                                    alt="Ashwin hopes 'tide will turn' for 'seriously good' India domestic star, sends best wishes"
                                                />
                                            </div>
                                            <div style={{ width: "85.5%" }} className={[styles.texthover, styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")}>
                                                <div>
                                                    <p className={[styles.txtTruncate, styles.lineClip3]}>
                                                        Ashwin hopes 'tide will turn' for 'seriously good' India domestic star, sends best wishes
                                                    </p>
                                                </div>
                                                <div className={styles.mrgntop10}>
                                                    <p>17 mins ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                        </div>
                        <div className={styles.mrgntop30}>
                            <div className={[styles.flex, styles.flexJustifyBetween].join(" ")}>
                                <h2 className={[styles.font25, styles.fontRoboto, styles.fontweight700, styles.mrgn0, styles.mrgnbtm15].join(" ")}>LATEST NEWS</h2>
                            </div>
                            <div className={[styles.flex, styles.flexWrap].join(" ")}>
                                <a href="https://www.republicworld.com/sports-news/cricket-news/team-india-to-have-new-physios-trainers-nca-to-hire-rehab-specialists-for-injury-care-articleshow.html" className={[styles.latestNews, styles.bdrRadius4px, styles.bdrDddddd].join(" ")}>
                                    <div className={[styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")}>
                                        <div>
                                            <p className={[styles.font16, styles.fontweight500, styles.mrgn0, styles.txtTruncate, styles.lineClip3].join(" ")}>
                                                Team India to have new physios, trainers; NCA to hire 'rehab specialists' for injury care
                                            </p>
                                        </div>
                                        <div className={styles.padtop5}>
                                            <p className={[styles.font14, styles.mrgn0].join(" ")}>3 hours ago</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.width333}>
                        <div className={styles.txtcenter}>
                            <div className={[styles.mrgnbtm20, styles.bgF8f8f8, styles.padtop10, styles.padbtm10].join(" ")} style={{ backgroundColor: "#ddd", height: "200px" }}>
                            </div>
                        </div>
                        <div className={styles.txtcenter}>
                            <div className={[styles.mrgnbtm20, styles.bgF8f8f8, styles.padtop10, styles.padbtm10].join(" ")} style={{ backgroundColor: "#ddd", height: "600px" }}>
                            </div>
                        </div>

                        <TeamPointsTable data={pointsTable[0].rankings} />
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

                <div id={styles.cricketVideos} style={{ padding: "10px" }}>
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

            </div>
        </>
    )
}


export async function getServerSideProps() {
    var home
    var footer
    var pointsTable
    var cricketStories
    const homePageRequest = axios.get(`https://jarvis.republicworld.com/v1/homepage-complete`)
    const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
    const cricketStoriesRequest = axios.get(`https://jarvis.mynationvoice.com/sub-category/cricketstories?sub_category_slug=cricket-news&page_no=1&limit=12&event=ipl-2021`)
    const pointsTableRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/ipl_rankings_2021.json`)
    await Promise.all([homePageRequest, footerRequest, pointsTableRequest, cricketStoriesRequest]).then(function (results) {
        home = results[0].data.data;
        footer = results[1].data.data;
        pointsTable = results[2].data;
        cricketStories = results[3].data;


    });
    return { props: { home, pointsTable, cricketStories } }

};