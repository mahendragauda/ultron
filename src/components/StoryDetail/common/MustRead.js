import React from "react";
// import Image from "next/Image";
import CardImage from "../../../components/common/CardImage";
import Link from "next/link";
import mustReadCommonCss from '../../../styles/StoryDetailCommon.module.css'

export default function MustRead(props){
   


    return(
        <article className={[mustReadCommonCss.rightpane_news_wrapper,mustReadCommonCss.hover_effect].join(" ")}>
            <a href={"/"+props.mustReadComplete_Slug}>
                <div className={[mustReadCommonCss.flex, mustReadCommonCss.width100].join(" ")}>
                    <div style={{width:"29%",maxWidth:"150px",maxHeight:"100px"}} className={[mustReadCommonCss.overflowHidden, mustReadCommonCss.posRelative,mustReadCommonCss.flex].join(" ")}>
                        <div className={[mustReadCommonCss.res_wid100_Img,mustReadCommonCss.objectCover].join(" ")}>
                            <CardImage  src={props.mustReadSrc} alt="image" width="150" height="138"/>
                        </div>
                        {props.mustReadType == "V"?
                        <div className={[mustReadCommonCss.videohover,mustReadCommonCss.posAbsolute,mustReadCommonCss.posAbsolute,mustReadCommonCss.width100,mustReadCommonCss.height100p].join(" ")} style={{background: "rgba(0,0,0,0.5)"}}>
                            <div className={[mustReadCommonCss.flex, mustReadCommonCss.width100,mustReadCommonCss.height100p].join(" ")}>
                                <div className={mustReadCommonCss.livetv_play_button} style={{margin: "auto"}}></div>
                            </div>
                        </div>
                        :""}
                    </div>
                    <div className={[mustReadCommonCss.padleft10,mustReadCommonCss.width80].join(" ")}>
                        <div className={[mustReadCommonCss.texthover, mustReadCommonCss.font16 ,mustReadCommonCss.lineHeight21px ,mustReadCommonCss.fontweight700,mustReadCommonCss.txtTruncate ,mustReadCommonCss.lineClip3].join(" ")}>
                           {props.mustReadTitle}
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}
