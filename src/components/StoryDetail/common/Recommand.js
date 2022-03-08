import React from 'react';
import Image from 'next/image';
import recCommonStyle from '../../../styles/StoryDetailCommon.module.css'

export default function Recommand(props){
    return (
        <article className={[recCommonStyle.hover_effect ,recCommonStyle.padtop15].join(" ")}>
        <a href={"/"+props.complete_clug}>
            <div className={[recCommonStyle.flex ,recCommonStyle.width100].join(" ")}>
                <div style={{width:"150px"}} className={[recCommonStyle.flex ,recCommonStyle.width100,recCommonStyle.overflowHidden].join(" ")}>
                    <Image src={props.placeholder}  className={[recCommonStyle.mrgnbtm10,recCommonStyle.imghover,recCommonStyle.responsiveImage].join(" ")}  alt={props.alt} width="150" height="100" title={props.image_alt}/>
                </div>
                <div className={[recCommonStyle.padleft20,recCommonStyle.width80].join(" ")}>
                    <div className={[recCommonStyle.texthover, recCommonStyle.font16, recCommonStyle.lineHeight21px, recCommonStyle.fontweight700, recCommonStyle.txtTruncate ,recCommonStyle.lineClip3 ,recCommonStyle.color_black].join(" ")}>{props.title}</div>
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