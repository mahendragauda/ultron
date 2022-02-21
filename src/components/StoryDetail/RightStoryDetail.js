import React from 'react';
import Link from 'next/Link';
import MustRead from "../../components/StoryDetail/MustRead";
// import GallaryMorePhotos from "../../components/StoryDetail/GallaryMorePhotos"

class RightStroyDetailPage extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div style={{width:"100%",background:"#F0F0F0",marginBottom:"30px"}}>
                    <div className="pad3010 txtcenter"></div>
                </div>
                {/* for gallary */}
                <div class="more-photos">
                    <div class="flex flexJustifyBetween padbtm15">
                        <div class="more-photos-l">More Photos</div>
                        <a href="https://www.republicworld.com/entertainment-news" class="font14 txtdecorationunderline">View all</a>
                    </div>
                    <div class="more-photos-container">
                        {/* <GallaryMorePhotos/> */}
                    </div>
                </div>
                {/* end */}
                <div className="rightpane-latest-news">
                    <div className="flex flexJustifyBetween padbtm15">
                        <div className="font25 fontweight700 lineHeight30px">MUST READ</div>
                        <Link href="https://www.republicworld.com/india-news/politics"  className="font14 txtdecorationunderline">View all</Link>
                    </div>
                    <div className="rightpane-news-container">
                        <MustRead />
                    </div>
                </div>
                <div style={{width: "100%",background: "#F0F0F0",marginTop:"30px"}}>
                    <div className="pad3010 txtcenter"></div>
                </div>
                <div style={{position: "sticky",top: "100px"}}>
                <div style={{width: "100%",background: "#F0F0F0",marginTop:"30px"}}>
                    <div className="pad3010 txtcenter"></div>
                </div>
                </div>
            </div>
        )
    }
}
export default RightStroyDetailPage