import React from "react";
import Link from 'next/link';

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
            <div class="flex flexWrap">
                {keyvalue.map((value, index) => {
                    return (
                        <article class="hover-effect latest-news bdr-dddddd" style={{WebkitBoxSizing: "border-box",boxSizing: "border-box",fontFamily: "Roboto,sans-serif"}}>
                                <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                    <div class="flex">
                                        <div class="posRelative flex overflowHidden">
                                            <img class="imghover responsiveImage" src={value.placeholder}/>
                                        </div>
                                        <div class="texthover latest-news-text flex flexDirectionCol" style={{fontFamily: "Roboto,sans-serif"}}>
                                            <div>
                                                <p class="txtTruncate lineClip3" numberoflines={1}>
                                                    {value.meta_title}
                                                </p>
                                            </div>
                                            <div class="mrgntop10">
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
