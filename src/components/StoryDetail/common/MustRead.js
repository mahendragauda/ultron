import React from "react";
// import Image from "next/Image";
import CardImage from "../../../components/common/CardImage";
import Link from "next/link";

export default function MustRead(props){
    return(
        <article className="rightpane-news-wrapper hover-effect">
            <a href={"/"+props.mustReadComplete_Slug}>
                <div className="flex width100">
                    <div style={{width:"29%",maxWidth:"150px",maxHeight:"100px"}} className="overflowHidden posRelative flex">
                        <CardImage  src={props.mustReadSrc} alt="image" width="150" height="100"/>
                        {props.mustReadType == "V"?
                        <div className="videohover posAbsolute width100 height100p">
                            <div className="flex height100p">
                                <div className="mustarticleread livetv-play-button" style={{margin: "auto"}}></div>
                            </div>
                        </div>
                        :""}
                    </div>
                    <div className="padleft10 width80">
                        <div className="texthover font16 lineHeight21px fontweight700 txtTruncate lineClip3">
                           {props.mustReadTitle}
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}
