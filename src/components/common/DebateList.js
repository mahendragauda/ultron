import React from "react";
import ReactJWPlayer from "react-jw-player";
import Image from "next/image";
import Link from 'next/link';
import TheDebate from "./TheDebate";
import Recommend from "../../components/common/Recommend.js";
import LoadMoreStory from "../../components/LoadMoreStory";

class DebateList extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        storyList: props.debateData,
        showChannels: props.shows,
        storyListTwo: props.debateStoryTwo,
        storyListThree: props.debateStoryThree,
        debateStory: []
    };
   }

   render(){
       return ( 
           <div>
           <section className="padtop15 newshour-wrapper">
            <div className="padtop10 padleft10 padright10">
                <div className="bdr-dddddd section1200 flex flexWrap flexJustifyBetween flexAlignItemsStart" style={{background:"white"}}>
                <div style={{width:"58%"}} class="newshour-hero">
                    <div className="loadVideoPlayer newshour-debate" id="video_player" data-debate_id={this.state.storyList.debates[0].id}>
                        <div className="videoWrapper">
                        <ReactJWPlayer  playerId={this.state.storyList.debates[0].video_path} playerScript='https://cdn.jwplayer.com/libraries/RXQnHIQu.js' playlist='"https://cdn.jwplayer.com/v2/media/4Ym5H2TS' />
                    </div>
                    </div>
                    <div className="debateTitle" style={{paddingTop: "70px", height:"210px", overflow:"hidden"}}>
                            <div className="flex flexJustifyBetween">
                                <div className="debate-hastag"> #{this.state.storyList.debates[0].hashtag}</div> 
                                <div className="debate-time"> {this.state.storyList.debates[0].pub_datetime} </div>
                            </div>
                            <div className="debate-question"> {this.state.storyList.debates[0].question} </div>
                            <div className="debate-desc">{this.state.storyList.debates[0].short_desc} </div>
                    </div>
                </div>
                <div style={{width:"42%"}} className="newshour-hero">
                    <div className="newshour-latest">
                    {this.state.storyList.debates.slice(1,5).map((stories, idx) => (
                            <div>
                            <div className="hover-effect">
                                <a href={stories.complete_slug} >
                                    <div className="overflowHidden posRelative flex">
                                            <img className="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src={stories.promo_large} />
                                            <div className="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className="flex height100p">
                                                    <div className="livetv-play-button" style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="font14 padtop5">{stories.pub_datetime}</div>
                                    <div className="font16 padtop5 clr-D10014 fontweight700 txtTruncate lineClip1"> #{stories.hashtag}</div>
                                    <div className="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}>{stories.question}</div>
                                </a>
                            </div>
                        </div>
                        ))}  
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flexJustifyBetween padtop50 padbtm50">
                <div className="ads-wrapper minheight90">
                    <div style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block',border: '1px solid black' }}></div>
                </div>
            </div>
            <div className="padbtm30 padleft10 padright10">
                <div className="section1200 flex">
                    <div className="flex flexWrap" style={{width:"75%"}}>
                    {this.state.storyList.debates.slice(5,10).map((stories, idx) => (
                        <div className="newshour-video">
                            <div className="hover-effect">
                                <a href={stories.complete_slug}>
                                    <div className="overflowHidden posRelative flex">
                                            <Image width={255} height={143}  class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src={stories.placeholder} />
                                            <div className="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className="flex height100p">
                                                    <div className="livetv-play-button" style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="font14 padtop5">{stories.pub_datetime}</div>
                                    <div className="font16 padtop5 clr-D10014 fontweight700 txtTruncate lineClip1"> #{stories.hashtag}</div>
                                    <div className="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}>{stories.question}</div>
                                </a>
                            </div>
                        </div>
                        ))}  
                        {this.state.storyListTwo.debates.slice(0,4).map((stories, idx) => (
                        <div className="newshour-video">
                            <div className="hover-effect">
                                <a href={stories.complete_slug}>
                                    <div className="overflowHidden posRelative flex">
                                            <Image width={255} height={143}  class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src={stories.promo_large} />
                                            <div className="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className="flex height100p">
                                                    <div className="livetv-play-button" style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="font14 padtop5">{stories.pub_datetime}</div>
                                    <div className="font16 padtop5 clr-D10014 fontweight700 txtTruncate lineClip1"> #{stories.hashtag}</div>
                                    <div className="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}>{stories.question}</div>
                                </a>
                            </div>
                        </div>
                        ))}  
                    </div>
                    <div style={{width:"25%;",minWidth: "300px"}}>
                        <div className="ads-wrapper">
                            <div id="div-gpt-ad" style={{ position: 'relative', zIndex: '0', width: '300px', height: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'block',border: '1px solid black' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Recommend recommendChannels={this.state.showChannels}/>
            <div className="padtop50 padleft10 padright10">
                <div className="section1200 flex">
                <div style={{width:"75%"}} >
                    <div className="width100 flex flexWrap padbtm30" id="debate-load">
                    {this.state.storyListTwo.debates.slice(4,10).map((stories, idx) => (
                        <div className="newshour-video">
                            <div className="hover-effect">
                                <a href={stories.complete_slug}>
                                    <div className="overflowHidden posRelative flex">
                                            <Image width={255} height={143}  class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src={stories.placeholder} />
                                            <div className="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className="flex height100p">
                                                    <div className="livetv-play-button" style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="font14 padtop5">{stories.pub_datetime}</div>
                                    <div className="font16 padtop5 clr-D10014 fontweight700 txtTruncate lineClip1"> #{stories.hashtag}</div>
                                    <div className="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}>{stories.question}</div>
                                </a>
                            </div>
                        </div>
                        ))}  
                        {this.state.storyListThree.debates.slice(0,3).map((stories, idx) => (
                        <div className="newshour-video">
                            <div className="hover-effect">
                                <a href={stories.complete_slug}>
                                    <div className="overflowHidden posRelative flex">
                                            <Image width={255} height={143}  class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src={stories.placeholder} />
                                            <div className="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className="flex height100p">
                                                    <div className="livetv-play-button" style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="font14 padtop5">{stories.pub_datetime}</div>
                                    <div className="font16 padtop5 clr-D10014 fontweight700 txtTruncate lineClip1"> #{stories.hashtag}</div>
                                    <div className="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}>{stories.question}</div>
                                </a>
                            </div>
                        </div>
                        ))} 
                    </div>
                    </div>
                    <div style={{width:"25%;",minWidth: "300px"}}>
                        <div className="ads-wrapper">
                            <div id="div-gpt-ad" style={{ position: 'relative', zIndex: '0', width: '300px', height: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'block',border: '1px solid black' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <LoadMoreStory />
            </div>
            </section>
            </div>
       )
   }
}
 
export default DebateList;