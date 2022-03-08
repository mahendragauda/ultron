import React from "react";
import Link from 'next/link';
import styles from '/styles/Cricket.module.css'
import TeamPointsTable from '/components/common/Cricket/TeamPointsTable'

class Schedule extends React.Component {
    render() {
        const data = this.props.data;
        const keyvalue = this.props.keyvalue;
        const videos = this.props.videos;
        const points = this.props.points;

        return (
            <>
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

                <div className={[styles.flex, styles.cricketPageResponsive].join(" ")} style={{ padding: "10px" }}>
                    <div className={[styles.width667, styles.padright20].join(" ")}>
                        <div id="scheduleMatch">
                            <div className={styles.mrgntop20}>
                                <div className={[styles.fontweight500, styles.font18, styles.mrgntop20].join(" ")}>Indian Premier League 2021</div>
                                <div className={[styles.mrgntop, styles.flex, styles.flexWrap].join(" ")}>
                                    {data.map((value, index) => {
                                        return (
                                            <div className={styles.scheduleMatchWrapper}>
                                                <Link href={value.short_name.toLowerCase().replace(/ /g, '-') + "-live-score" + "/" + value.key + ".html"}>
                                                    <a>
                                                        <div className={[styles.flex, styles.flexJustifyBetween, styles.padbtm20].join(" ")}>
                                                            <div className={[styles.font14, styles.fontweight700].join(" ")}>{value.start_date_f}</div></div>
                                                        <div className={[styles.flex, styles.flexJustifyBetween].join(" ")}>
                                                            <div className={styles.flex}>
                                                                <div className={styles.scheduleTeamFlag} style={{ background: value.teams.a.color_code }}>{value.teams.a.logo_character}</div>
                                                                <div className={[styles.padleft10, styles.font16].join(" ")} style={{ paddingTop: "5px" }}>{value.teams.a.name}</div>
                                                            </div>
                                                            <div className={styles.vsContainerRed} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>vs</div>
                                                            <div className={styles.flex}>
                                                                <div className={[styles.padright10, styles.font16]} style={{ paddingTop: "5px", paddingRight: "10px" }}>{value.teams.b.name}</div>
                                                                <div className={styles.scheduleTeamFlag} style={{ background: value.teams.b.color_code }}>{value.teams.b.logo_character}</div>
                                                            </div>
                                                        </div>
                                                        <div className={[styles.padtop20, styles.flex].join(" ")}>
                                                            <div className={[styles.padright2, styles.padtop3].join(" ")}>
                                                                <img style={{ width: "14px" }} src="https://www.republicworld.com/assets/images/place.png" /></div>
                                                            <div className={styles.font12} style={{ paddingTop: "4px" }}>{value.venue}</div>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "30px", lineHeight: "20px" }}>
                            <div className={[styles.flex, styles.flexJustifyBetween].join(" ")} style={{ padding: "10px", justifyContent: "space-between", display: "flex", flex: "initial!important" }}>
                                <h2 style={{ marginBottom: "15px", margin: "0", fontSize: "25px", fontWeight: "700", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", marginInlineStart: "0px", marginInlineEnd: "0px", dispaly: "block" }}>LATEST IPL 2021 NEWS</h2>
                            </div>
                            <div className={[styles.flex, styles.flexWrap].join(" ")} style={{ padding: "10px" }}>
                                {keyvalue.map((value, index) => {
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
                                {keyvalue.slice(0, 5).map((value, index) => {
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

                        <TeamPointsTable data={points} />
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
                        {videos.slice(0, 2).map((value, index) => {
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
        )
    }

}

export default Schedule;
