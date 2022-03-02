import React from "react";
import Link from 'next/link';
import styles from '/styles/Cricket.module.css'
import TeamPointsTable from '/components/common/Cricket/TeamPointsTable'

class Results extends React.Component {
    render() {
        const data = this.props.data;
        const keyvalue = this.props.keyvalue;
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

                <div className={[styles.padtop20, styles.padbtm20].join(" ")}>
                    <div className={[styles.flex, styles.cricketPageResponsive].join(" ")}>
                        <div className={[styles.width667, styles.padright20].join(" ")}>
                            <div className={styles.resultMatch}>
                                {data.map((value, index) => {
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
                                    {keyvalue.map((value, index) => {
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
                </div>

            </>
        )
    }

}

export default Results;
