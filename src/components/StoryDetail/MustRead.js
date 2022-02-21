import React from "react";
import Image from "next/Image";
import Link from "next/Link";

export default function MustRead(){
    return(
        <article className="rightpane-news-wrapper hover-effect">
            <a href="">
                <div className="flex width100">
                    <div style={{width:"29%",maxWidth:"150px",maxHeight:"100px"}} className="overflowHidden posRelative flex">
                        {/* <Image src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ydjsmcddasmksfkv_1644904560.jpeg" alt="UP Election 2022 voting percentage: Check district-wise vote percentage for phase 1 polls" width="150" height="100"/> */}
                        image
                    </div>
                    <div className="padleft10 width80">
                        <div className="texthover font16 lineHeight21px fontweight700 txtTruncate lineClip3">
                           test
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}