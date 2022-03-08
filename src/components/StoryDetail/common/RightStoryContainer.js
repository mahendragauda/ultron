import React from 'react';
import Link from 'next/link';
import MustRead from "./MustRead";
import GallaryMorePhotos from "./GallaryMorePhotos"
import rightStoryCss from  "../../../styles/RightStoryContainer.module.css"
import rightStoryStyle from '../../../styles/StoryDetailCommon.module.css'

class RightStoryContainerPage extends React.Component{
    CSS = {
        more_photos_l :{
            fontFamily: "Roboto, sans-serif",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "29px",
            textTransform: "uppercase",
            color:"#0F0F0F"
        }
    }
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
                <div className="more_photos" style={{marginBottom:"35px"}}>
                    <div className={[rightStoryStyle.flex,rightStoryStyle.flexJustifyBetween,rightStoryStyle.padbtm15].join(" ")}>
                        <div style={this.CSS.more_photos_l}>More Photos</div>
                        <Link href="/entertainment-news" className={[rightStoryStyle.font14,rightStoryStyle.txtdecorationunderline].join(" ")}>View all</Link>
                    </div>
                    <div className="more_photos_container">
                        <GallaryMorePhotos/>
                    </div>
                </div>
                {/* end */}
                <div className="rightpane-latest-news">
                    <div className={[rightStoryStyle.flex ,rightStoryStyle.flexJustifyBetween, rightStoryStyle.padbtm15].join(" ")}>
                        <div className={[rightStoryStyle.font25, rightStoryStyle.fontweight700, rightStoryStyle.lineHeight30px].join(" ")}>MUST READ</div>
                        <Link href="/india-news/politics"  className={[rightStoryStyle.font14,rightStoryStyle.txtdecorationunderline].join(" ")}>View all</Link>
                    </div>
                    <div className="rightpane_news_container" style={{display: "flex",flexDirection: "column",width: "100%",background: "#fff",border: "1px solid #ddd",boxShadow:" 2px 2px 10px rgb(221 221 221 / 50%)"}}>
                        {this.props.MustReadStories.data.stories.slice(0, 5).map((mustread,index)=>
                        <MustRead mustReadSrc={mustread.placeholder}  mustReadType={mustread.type} mustReadComplete_Slug={mustread.complete_slug} mustReadTitle={mustread.title}/>
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
