import React from 'react';
import Link from 'next/link';
import MustRead from "./MustRead";
// import GallaryMorePhotos from "../../components/StoryDetail/GallaryMorePhotos"
import rightStoryCss from  "../../../styles/RightStoryContainer.module.css"
import rightStoryStyle from '../../../styles/StoryDetailCommon.module.css'

class RightStoryContainerPage extends React.Component{
    
    constructor(){
        super()
    }
    render(){
        return(
            <div className={rightStoryCss.rightpane}>
                <div style={{width:"100%",background:"#F0F0F0",marginBottom:"30px"}}>
                    <div className={[rightStoryStyle.pad3010,rightStoryStyle.txtcenter].join(" ")}></div>
                </div>
                {/* for gallary */}
                <div className="more-photos">
                    <div className={[rightStoryStyle.flex,rightStoryStyle.flexJustifyBetween,rightStoryStyle.padbtm15].join(" ")}>
                        <div className="more-photos-l">More Photos</div>
                        <Link href="/entertainment-news" className={[rightStoryStyle.font14,rightStoryStyle.txtdecorationunderline].join(" ")}>View all</Link>
                    </div>
                    <div className="more-photos-container">
                        {/* <GallaryMorePhotos/> */}
                    </div>
                </div>
                {/* end */}
                <div className="rightpane-latest-news">
                    <div className={[rightStoryStyle.flex ,rightStoryStyle.flexJustifyBetween, rightStoryStyle.padbtm15].join(" ")}>
                        <div className={[rightStoryStyle.font25, rightStoryStyle.fontweight700, rightStoryStyle.lineHeight30px].join(" ")}>MUST READ</div>
                        <Link href="/india-news/politics"  className={[rightStoryStyle.font14,rightStoryStyle.txtdecorationunderline].join(" ")}>View all</Link>
                    </div>
                    <div className="rightpane_news_container" style={{display: "flex",flexDirection: "column",width: "100%",background: "#fff",border: "1px solid #ddd",boxShadow:" 2px 2px 10px rgb(221 221 221 / 50%)"}}>
                        {this.props.rightStoryDetailArticle.data.story.must_read_stories.map((mustread)=>
                        <MustRead mustReadSrc={mustread.promo_large}  mustReadType={mustread.type} mustReadComplete_Slug={mustread.complete_slug} mustReadTitle={mustread.title}/>
                        )}
                    </div>
                </div>
                <div style={{width: "100%",background: "#F0F0F0",marginTop:"30px"}}>
                    <div className={[rightStoryStyle.pad3010, rightStoryStyle.txtcenter].join(" ")}></div>
                </div>
                <div style={{position: "sticky",top: "100px"}}>
                <div style={{width: "100%",background: "#F0F0F0",marginTop:"30px"}}>
                    <div className={[rightStoryStyle.pad3010, rightStoryStyle.txtcenter].join(" ")}></div>
                </div>
                </div>
            </div>
        )
    }
}
export default RightStoryContainerPage
