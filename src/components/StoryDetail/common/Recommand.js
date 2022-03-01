import React from 'react';
import Image from 'next/image';

export default function Recommand(props){
    return (
        <article className="hover-effect padtop15">
            <a href="https://www.republicworld.com/elections/uttar-pradesh/up-election-2022-voting-percentage-check-district-wise-vote-percentage-for-phase-1-polls-articleshow.html" title="UP Election 2022 voting percentage: Check district-wise vote percentage for phase 1 polls">
                <div className="flex width100">
                    <div style={{width:"150px"}} className="overflowHidden posRelative flex">
                        <Image className="imghover responsiveImage" src="https://img.republicworld.com/republic-prod/stories/promolarge/hdpi/9t0rmtjrqmf6jenl_1644476328.jpeg?tr=w-150,h-100" alt="UP Election 2022 voting percentage: Check district-wise vote percentage for phase 1 polls"  width="150" height="100"/>
                    </div>
                    <div className="padleft20 width80">
                        <div className="texthover font16 lineHeight21px fontweight700 txtTruncate lineClip3 color-black">{props.heading}</div>
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