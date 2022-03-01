import React from 'react';
import Link from 'next/Link';
import MustRead from "../../components/StoryDetail/MustRead";
// import GallaryMorePhotos from "../../components/StoryDetail/GallaryMorePhotos"
import rightStoryCss from  "../../styles/RightStoryDetail.module.css"
import style from '../../styles/StoryDetailCommon.module.css'

class RightStroyDetailPage extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className={rightStoryCss.rightpane}>
                <div style={{width:"100%",background:"#F0F0F0",marginBottom:"30px"}}>
                    <div className={[style.pad3010,style.txtcenter].join(" ")}></div>
                </div>
                {/* for gallary */}
                <div className="more-photos">
                    <div className={[style.flex,style.flexJustifyBetween,style.padbtm15].join(" ")}>
                        <div className="more-photos-l">More Photos</div>
                        <a href="https://www.republicworld.com/entertainment-news" className="font14 txtdecorationunderline">View all</a>
                    </div>
                    <div className="more-photos-container">
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
                        {this.props.rightStoryDetailArticle.data.story.must_read_stories.map((mustread)=>
                        <MustRead mustReadSrc={mustread.promo_large}  mustReadType={mustread.type} mustReadComplete_Slug={mustread.complete_slug} mustReadTitle={mustread.title}/>
                        )}
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
