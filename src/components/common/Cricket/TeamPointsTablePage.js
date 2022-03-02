import React from "react";
import Link from 'next/link';
import styles from '/styles/Cricket.module.css'
import WatchUsLive from "/components/common/Cricket/WatchUsLive";



class TeamPointsTablePage extends React.Component {
    CSS = {
        teamRankingContainer: {
            marginTop: "20px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ddd",
            background: "#fff",
            boxSizing: "border-box",
            display: "block",
            fontFamily: "Roboto,sans-serif",
            fontSize: ".8em",
            letterSpacing: "0",
            fontSize: "100%",
            lineHeight: "20px",
            webkitTextSizeAdjust: "100%"
        },
        teamRanking: {
            borderTop: "1px solid #ddd",
            height: "328px",
            overflowY: "scroll",
            boxSizing: "border-box",
            display: "block",
            fontFamily: "Roboto,sans-serif",
            fontSize: ".8em",
            letterSpacing: "0",
            fontSize: "100%",
            lineHeight: "20px",
            webkitTextSizeAdjust: "100%",
            '*::-webkit-scrollbar': {
                width: "3px"
            },
            '*::-webkit-scrollbar-thumb': {
                background: "#c6c6c6",
                borderRadius: "5px",
                border: "1px solid #7777771a",
            },
            '*::-webkit-scrollbar-track': {
                boxShadow: "inset 0 0 5px #ddd",
                borderRadius: "10px"
            },

        }
    }
    render() {
        const data = this.props.data;
        const keyvalue = this.props.keyvalue;
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


            <div className={[styles.padtop20, styles.padbtm20, styles.padright20, styles.padleft10].join(" ")}>
                <div className={[styles.flex, styles.cricketPageResponsive].join(" ")}>
                    <div className={[styles.width67, styles.padright20].join(" ")}>
                        <div className={[styles.padbtm15].join(" ")}>
                            <h1 className={[styles.font25, styles.fontweight700, styles.mrgn0, styles.padbtm20].join(" ")}>Team Points Table</h1>
                        </div>
                        <div className={styles.allRankingContainer}>
                            <table cellpadding="0" cellspacing="0" className={styles.allRankings} id="teamRankings">
                                <thead>
                                    <tr>
                                        <th style={{ width: "12%" }}>Pos</th>
                                        <th>Team</th>
                                        <th style={{ width: "16%" }}>Net RR</th>
                                        <th style={{ width: "16%" }}>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((value, index) => {
                                        return (
                                            <tr>
                                                <td>{value.position}</td>
                                                <td>
                                                    <div className={styles.flex}>
                                                        <div className={styles.iplFlag} style={{ background: value.color_code }}>{value.logo_character}</div>
                                                        <div>{value.short_name}</div>
                                                    </div>
                                                </td>
                                                <td>{value.net_rr}</td>
                                                <td>{value.points}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <div className={[styles.mrgntop30, styles.fontRoboto].join(" ")}>
                            <div className={[styles.flex, styles.flexJustifyBetween].join(" ")}>
                                <h1 className={[styles.font25, styles.fontweight700, styles.mrgn0, styles.padbtm20].join(" ")}>MORE CRICKET NEWS</h1>
                                <a href="https://www.republicworld.com/cricket/ipl-2021/1" target="_blank" className={[styles.font14, styles.mrgnbtm10, styles.txtdecorationunderline].join(" ")}>View all</a>
                            </div>
                            <div className={[styles.flex, styles.flexDirectionCol].join(" ")}>
                                {keyvalue.map((value, index) => {
                                    return (

                                        <article className={[styles.hoverEffect, styles.latestNews, styles.oneCl, styles.rightPanelNews, styles.bdrRadius4px, styles.bdrDddddd].join(" ")} style={{ width: "100% !important" }}>
                                            <Link href=" ">
                                                <a>
                                                    <div className={styles.flex}>
                                                        <div style={{ width: "14.5%" }} className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")}>
                                                            <img
                                                                className={styles.imghover}
                                                                src={value.placeholder}
                                                                alt="Netizens suggest Jason Roy replacement for Gujarat Titans who can 'fire the Titan ship'"
                                                            />
                                                        </div>
                                                        <div style={{ width: "85.5%" }} className={[styles.texthover, styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")}>
                                                            <div>
                                                                <p className={[styles.txtTruncate, styles.lineClip3].join(" ")}>
                                                                    {value.meta_title}                                                            </p>
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
                    </div>
                    <div className={styles.width33}>
                        <div className={styles.txtcenter}>
                            <div className={[styles.mrgnbtm20, styles.bgF8f8f8, styles.padtop10, styles.padbtm10].join(" ")} style={{ backgroundColor: "#ddd" ,height:"200px"}}>
                            </div>
                        </div>
                        <WatchUsLive />
                        <div className={styles.txtcenter}>
                            <div className={[styles.mrgnbtm20, styles.bgF8f8f8, styles.padtop10, styles.padbtm10].join(" ")} style={{ backgroundColor: "#ddd" ,height:"600px"}}>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default TeamPointsTablePage;
