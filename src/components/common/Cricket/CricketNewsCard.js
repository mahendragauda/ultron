import React from "react";
import Link from 'next/link';
import styles from '/styles/Cricket.module.css'


class CricketNewsCard extends React.Component {
    CSS = {
        body: {
            fontFamily: "Roboto,sans-serif",
            letterSpacing: "0",
            fontSize: "100%",
            lineHeight: "20px"
        },
        hoverEffect: {
            webkitTransition: "all .5s",
            mozTransition: "all .5s",
            oTransition: "all .5s",
            msTransition: "all .5s",
            transition: "all .5s"

        },
        latestnewsimg: {
            objectFit: "cover",
            borderRadius: "2px",
            minWidth: "80px"
        },
        responsiveImage: {
            height: "auto",
            width: "100%"
        },
        latestNewsText: {
            fontSize: "16px",
            fontWeight: "400!important",
            margin: "0 0 0 10px",
            margin: "0",
            webkitLineClamp: "3!important",
            webkitBoxSizing: "border-box",
            mozBoxSizing: "border-box"


        },
        txtTruncate: {
            overflow: "hidden",
            display: "-webkit-box",
            webkitLineClamp: "2",
            webkitBoxOrient: "vertical"
        },
        pmargin: {
            display: "block",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px"
        },
        a: {
            textDecoration: "none!important",
            border: "none",
            color: "#000"
        },
        bodyhtml: {
            fontFamily: "Roboto,sans-serif",
            letterSpacing: "0",
            fontSize: "100%",
            lineHeight: "20px"
        }
    }
    render() {
        const keyvalue = this.props.keyvalue;
        return (
            <div className={[styles.flex, styles.flexWrap].join(" ")}>
                {keyvalue.map((value, index) => {
                    return (
                        <article className={[styles.hoverEffect, styles.latestNews, styles.bdrDddddd].join(" ")} style={{WebkitBoxSizing: "border-box",boxSizing: "border-box",fontFamily: "Roboto,sans-serif"}}>
                                <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                    <div className={styles.flex}>
                                        <div className={[styles.posRelative, styles.flex, styles.overflowHidden].join(" ")}>
                                            <img className={[styles.imghover, styles.responsiveImage].join(" ")} src={value.placeholder}/>
                                        </div>
                                        <div className={[styles.texthover, styles.latestNewsText, styles.flex, styles.flexDirectionCol].join(" ")} style={{fontFamily: "Roboto,sans-serif"}}>
                                            <div>
                                                <p className={[styles.txtTruncate, styles.lineClip3].join(" ")} numberoflines={1}>
                                                    {value.meta_title}
                                                </p>
                                            </div>
                                            <div className={styles.mrgntop10}>
                                                <p>{value.pub_datetime}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                        </article>
                    )
                })}
            </div>
        )
    }

}

export default CricketNewsCard;
