import React from "react";
import Link from 'next/link';

class CricketNewsCard extends React.Component {
    CSS = {
        flexWrap: {
            mozBoxWrap: "wrap",
            webkitBoxWrap: "wrap",
            msFlexboxWrap: "wrap",
            flexWrap: "wrap",
            webkitBoxSizing: "border-box",
        },
        flex: {
            display: "-webkit-box",
            display: "-moz-box",
            display: "-ms-flexbox",
            display: "-webkit-flex",
            display: "flex",
            flex: "initial!important;",
        },
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
            <div style={{flexWrap: "wrap",display: "flex",flex: "initial",display: "-webkit-flex",WebkitBoxSizing: "border-box"}}>
                {keyvalue.map((value, index) => {
                    return (
                        <article style={{ flexShrink: '0', marginRight: "20px", maxWidth: "48.68%", padding: "10px", marginBottom: "10px", borderRadius: "4px", flexGrow: "1", flexShrink: "1", flexBasis: "48%", borderTopColor: "rgb(221, 221, 221)", borderTopStyle: "solid", borderTopWidth: "1px", borderRightColor: "rgb(221, 221, 221)", borderRightStyle: "solid", borderRightWidth: "1px", borderBottomColor: "rgb(221, 221, 221)", borderBottomStyle: "solid", borderBottomWidth: "1px", borderLeftColor: "rgb(221, 221, 221)", borderLeftStyle: "solid", borderLeftWidth: "1px", borderImageSource: "initial", borderImageSlice: "initial", borderImageWidth: "initial", borderImageOutset: "initial", borderImageRepeat: "initial", webkitBoxSizing: "border-box" }}>
                            <div data-index={index = 5}>
                                <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html" style={{ webkitBoxSizing: "border-box", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                    <div class="flex" style={{display: "flex",flex: "initial!important"}}>
                                        <div class="posRelative flex overflowHidden" style={{ width: "30%", display: "flex", position: "relative", overflow: "hidden!important", flexGrow: "initial !important", flexShrink: "initial !important", flexBasis: "initial !important" }}>
                                            <img  src={value.placeholder} style={{transition: "all .5s",objectFit: "cover",borderRadius: "2px",minWidth: "80px",height: "100px",width: "100%",WebkitBoxSizing: "border-box"}} />
                                        </div>
                                        <div class="texthover latest-news-text flex flexDirectionCol" style={{ paddingLeft:"10px",width: "70%", flexDirection: "column", display: "flex", flex: "initial!important" }}>
                                            <div style={{ height: "60px", webkitBoxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px" }}>
                                                <p class="txtTruncate lineClip3" style={{fontSize: "16px",fontWeight: "400",margin: "0 0 0 10px",margin: "0",WebkitLineClamp: "3!important",overflow: "hidden",display: "-webkit-box",WebkitBoxOrient: "vertical",WebkitBoxSizing: "border-box",display: "block",marginBlockStart: "1em",marginBlockEnd: "1em",marginInlineStart: "0px",marginInlineEnd: "0px"}}>
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
        )
    }

}

export default CricketNewsCard;
