import React from 'react';
import Image from 'next/image';
import recCommonStyle from '../../../styles/StoryDetailCommon.module.css'

export default function Recommand(props){
    return (
        <article className={[recCommonStyle.hover_effect ,recCommonStyle.padtop15].join(" ")}>
            <a href="/">
                <div className={[recCommonStyle.flex ,recCommonStyle.width100].join(" ")}>
                    <div style={{width:"150px"}} className={[recCommonStyle.flex ,recCommonStyle.width100,recCommonStyle.overflowHidden].join(" ")}>
                        <Image  className={[recCommonStyle.mrgnbtm10,recCommonStyle.imghover,recCommonStyle.responsiveImage].join(" ")} src="https://img.republicworld.com/republic-prod/stories/promolarge/hdpi/9t0rmtjrqmf6jenl_1644476328.jpeg?tr=w-150,h-100" alt="UP Election 2022 voting percentage: Check district-wise vote percentage for phase 1 polls"   width="150" height="100"/>
                    </div>
                    <div className={[recCommonStyle.padleft20,recCommonStyle.width80].join(" ")}>
                        <div className={[recCommonStyle.texthover, recCommonStyle.font16, recCommonStyle.lineHeight21px, recCommonStyle.fontweight700, recCommonStyle.txtTruncate ,recCommonStyle.lineClip3 ,recCommonStyle.color_black].join(" ")}>{props.heading}</div>
                    </div>
                </div>
            </a>
        </article>
    )
}

// class RecommandPage extends React.Component{
//     constructor(){
//         super()
//     }
//     render(){
//         return(
            
//         )
//     }
// }
// export default RecommandPage