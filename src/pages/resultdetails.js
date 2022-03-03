const axios = require('axios');
import Header from '/components/common/Header'
import Cricket from '/components/common/Cricket/CricketMenuBar'
import TeamPointsTable from '/components/common/Cricket/TeamPointsTable'
import styles from '/styles/Cricket.module.css'
import Link from 'next/link';
var indexes;
var battingTeam, bowlingTeam, key;
var waitingBatsmen = [];
var isPlayerMatching = false;



export default function Testing({ pointsTable, cricketStories, scheduleMatch }) {
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
                                    <h3>{scheduleMatch.title}</h3>
                                    <h3>{scheduleMatch.start_date_f}</h3>
                                </div>
                                <div className={styles.flex}><div className={styles.msText}>SCHEDULED</div></div>
                            </div>
                            <div id="score-card-detail" style={{ paddingTop: "10px" }}>
                                <div className={[styles.width100, styles.pad1510].join(" ")}>
                                    <div className={[styles.width100, styles.flexJustifyBetween, styles.flex].join(" ")}>
                                        <div className={styles.flex}>
                                            <div>
                                                <div className={styles.scheduleTeamFlag} style={{ margin: "0 auto", width: "56px", height: "33px", background: "#e3263b" }}>{scheduleMatch.teams.a.logo_character}</div>
                                                <h2 style={{ paddingTop: "3px" }} className={styles.teamName}>{scheduleMatch.teams.a.name}</h2>
                                            </div>
                                            <div className={styles.padleft15}></div>
                                        </div>
                                        <div className={styles.vs}><p>VS</p></div>
                                        <div className={styles.flex}>
                                            <div style={{ textAlign: "end" }}></div>
                                            <div className={styles.padleft15}>
                                                <div className={styles.scheduleTeamFlag} style={{ margin: "0 auto", width: "56px", height: "33px", background: "#004ba0" }}>{scheduleMatch.teams.b.logo_character}</div>
                                                <h2 style={{ paddingTop: "3px" }} className={styles.teamName}>{scheduleMatch.teams.b.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.matchStatus} style={{ padding: "10px" }}>{scheduleMatch.description}</div>
                        </div>

                        {[scheduleMatch.now.innings].reverse().map((value, index) => {
                            //   [0,1].map((index) => {
                            battingTeam = scheduleMatch.now.bowling_team
                            bowlingTeam = scheduleMatch.now.batting_team
                            return (
                                <>
                                    <div style={{ marginTop: "15px" }} id="currentTeamDetailsA">
                                        <div className={[styles.padtop15, styles.padbtm10].join(" ")}>
                                            <span style={{ color: "#d61014" }} className={[styles.txtTransformUp, styles.fontweight700, styles.font20, styles.padright5, styles.cTeamName].join(" ")}>{scheduleMatch.teams[bowlingTeam].name}</span> <span className={[styles.fontweight700, styles.font20, styles.padright5].join(" ")}>{scheduleMatch.innings[`${bowlingTeam}_${value}`].run_str}</span>
                                            <span style={{ color: "gray" }} className={[styles.cTeamOver, styles.font16, styles.padright5].join(" ")}>(20 OVER)</span> <span style={{ color: "#555555;" }} className={[styles.font16, styles.cTeamRr].join(" ")}>{"RR " + scheduleMatch.innings[`${bowlingTeam}_${value}`].run_rate}</span>
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
                                                        {scheduleMatch.innings[`${bowlingTeam}_${value}`].batting_order.map((value1, index1) => {
                                                            key = scheduleMatch.innings[`${bowlingTeam}_${value}`].batting_order[index1]
                                                            return (
                                                                <tr>
                                                                    <td>
                                                                        <h3 style={{padding:"10px"}}>{scheduleMatch.players[key].name}</h3>
                                                                        <h4 style={{padding:"10px"}}>{scheduleMatch.players[key].match.innings[1].batting.out_str}</h4>
                                                                    </td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].batting.runs}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].batting.balls}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].batting.sixes}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].batting.fours}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].batting.strike_rate}</td>
                                                                </tr>
                                                            )
                                                        })}

                                                    </tbody>
                                                </table>
                                                {scheduleMatch.teams[bowlingTeam].match.playing_xi.map((value2, index2) => {
                                                    {scheduleMatch.innings[`${bowlingTeam}_${value}`].batting_order.map((value3, index3) => {
                                                        if(scheduleMatch.teams[bowlingTeam].match.playing_xi[index2] === scheduleMatch.innings[`${bowlingTeam}_${value}`].batting_order[index3]){
                                                        isPlayerMatching = true}
                                                        if(!isPlayerMatching){
                                                        waitingBatsmen.push(scheduleMatch.players[scheduleMatch.teams[bowlingTeam].match.playing_xi[index2]].name)}
                                                                    return (
                                                                        <div className={styles.pendingPlayers}>
                                                                        <h4>Did not bat</h4>
                                                                        <h3>{waitingBatsmen}</h3>
                                                                    </div>
                    
                                                                )
                                                        })
                                                    }
                                                })}
                                                <div className={styles.totalInfo}>
                                                    <div className={[styles.width40, styles.fontweight700, styles.font18].join(" ")} style={{ margin: "auto 0" }}>TOTAL</div>
                                                    <div className={[styles.width60, styles.txtright].join(" ")}>
                                                        <div className={[styles.padbtm5, styles.fontweight700, styles.font18].join(" ")}>{scheduleMatch.innings[`${bowlingTeam}_${value}`].runs+'/'+scheduleMatch.innings[`${bowlingTeam}_${value}`].wickets}</div>
                                                        <div className={styles.font14}>(20.0 overs, 8.25 runs per overs)</div>
                                                    </div>
                                                </div>
                                                <div className={styles.extraInfo}>
                                                    <h3>EXTRAS</h3>
                                                    <h4>{"(b-" + scheduleMatch.innings[`${bowlingTeam}_${value}`].bye + ",w-" + scheduleMatch.innings[`${bowlingTeam}_${value}`].wide + ", no-" + scheduleMatch.innings[`${bowlingTeam}_${value}`].noball + ", lb-" + scheduleMatch.innings[`${bowlingTeam}_${value}`].legbye + ", penalty-" + scheduleMatch.innings[`${bowlingTeam}_${value}`].penalty + ")"}</h4>
                                                </div>
                                                <div className={styles.extraInfo}>
                                                    <h3>FALL OF WICKETS</h3>
                                                    <h4>
                                                        {scheduleMatch.innings[`${bowlingTeam}_${value}`].fall_of_wickets}
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
                                                        {scheduleMatch.innings[`${battingTeam}_${value}`].bowling_order.map((value1, index1) => {
                                                            key = scheduleMatch.innings[`${battingTeam}_${value}`].bowling_order[index1]
                                                            return (
                                                                <tr>
                                                                    <td>
                                                                        <h3 style={{padding:"10px"}}>{scheduleMatch.players[key].name}</h3>
                                                                    </td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].bowling.overs}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].bowling.maiden_overs}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].bowling.runs}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].bowling.wickets}</td>
                                                                    <td>{scheduleMatch.players[key].match.innings[1].bowling.economy}</td>
                                                                </tr>
                                                            )
                                                        })}


                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className={[styles.pad15, styles.bdrDddddd].join(" ")} style={{ borderTop: "0" }}>
                                                <div className={styles.venueDetails}><span>Toss: </span>{scheduleMatch.toss.str}</div>
                                                <div className={[styles.venueDetails, styles.padtop5].join(" ")}><span>Stadium: </span>{scheduleMatch.venue}</div>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                            // })
                        })}



                        <div className={styles.mrgntop30}>
                            <div className={[styles.flex, styles.flexJustifyBetween].join(" ")}>
                                <h2 className={[styles.font25, styles.fontRoboto, styles.fontweight700, styles.mrgn0, styles.mrgnbtm15].join(" ")}>LATEST NEWS</h2>
                            </div>
                            <div className={[styles.flex, styles.flexWrap].join(" ")}>
                                {cricketStories.data.stories.slice(0, 6).map((value, index) => {
                                    return (
                                        <Link href="">
                                            <a className={[styles.latestNews, styles.bdrRadius4px, styles.bdrDddddd].join(" ")}>
                                                <div className={[styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")}>
                                                    <div>
                                                        <p className={[styles.font16, styles.fontweight500, styles.mrgn0, styles.txtTruncate, styles.lineClip3].join(" ")}>
                                                            {value.meta_title}
                                                        </p>
                                                    </div>
                                                    <div className={styles.padtop5}>
                                                        <p className={[styles.font14, styles.mrgn0].join(" ")}>{value.pub_datetime}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.width333}>
                        <div className={styles.txtcenter}>
                            <div className={[styles.mrgnbtm20, styles.bgF8f8f8, styles.padtop10, styles.padbtm10].join(" ")} style={{ backgroundColor: "#ddd", height: "200px" }}>
                            </div>
                        </div>
                        <div className={styles.padtop30}>
                            <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm15].join(" ")}>
                                <h2 className={[styles.font25, styles.lineHeight25px, styles.fontweight700].join(" ")}>MORE CRICKET NEWS</h2>
                                <Link href="">
                                    <a className={[styles.font14, styles.padtop5, styles.txtdecorationunderline].join(" ")}>View more</a>
                                </Link>
                            </div>
                            <div className={[styles.flex, styles.flexDirectionCol].join("")}>
                                {cricketStories.data.stories.slice(0, 5).map((value, index) => {
                                    return (
                                        <article className={[styles.hoverEffect, styles.latestNews, styles.oneCl, styles.rightPanelNews, styles.bdrRadius4px, styles.bdrDddddd].join(" ")} style={{ width: "100% !important%" }}>
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
    var scheduleMatch
    const homePageRequest = axios.get(`https://jarvis.republicworld.com/v1/homepage-complete`)
    const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
    const cricketStoriesRequest = axios.get(`https://jarvis.mynationvoice.com/sub-category/cricketstories?sub_category_slug=cricket-news&page_no=1&limit=12&event=ipl-2021`)
    const pointsTableRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/ipl_rankings_2021.json`)
    const scheduleMatchRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/iplt20_2021_g27.json`)
    await Promise.all([homePageRequest, footerRequest, pointsTableRequest, cricketStoriesRequest, scheduleMatchRequest]).then(function (results) {
        home = results[0].data.data;
        footer = results[1].data.data;
        pointsTable = results[2].data;
        cricketStories = results[3].data;
        scheduleMatch = results[4].data;



    });
    return { props: { home, pointsTable, cricketStories, scheduleMatch } }

};