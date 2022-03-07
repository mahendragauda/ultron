import React from "react";
import ReactJWPlayer from "react-jw-player";
import Image from "next/image";
import Link from 'next/link';
import style from '../../styles/Show.module.css'
import Show from "./Show";
import Recommend from "../common/Recommend.js";
import LoadMoreShows from "./LoadMoreShows";

class ShowList extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        storyList: props.showData,
        showChannels: props.shows,
        storyListTwo: props.showStorySecondBatch,
        storyListThree: props.showStoryThirdBatch
    };
   }
   componentDidMount() {
    const script = document.createElement("script");
    // script.src = "./public/javascript/dateFormatter.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();
    //this.convertDateTime();
    //console.log(convertDateTime());
    document.head.appendChild(script);
  }
  
   render(){
       const videoUrl = `https://cdn.jwplayer.com/v2/media/${this.state.storyList.shows[0].video_path}`
       return ( 
           <div>
           <section className={style.newshourWrapper} style={{paddingTop: "15px!important"}}>
            <div className={style.topStoryDiv}>
                <div className={style.topStoryContainer} style={{background:"white"}}>
                <div style={{width:"58%"}} className={style.newshourHero}>
                    <div className={style.newshourShow} id="video_player" data-debate_id={this.state.storyList.shows[0].id}>
                        <div className={style.videoWrapper}>
                     <ReactJWPlayer  playerId={this.state.storyList.shows[0].video_path} playerScript='https://cdn.jwplayer.com/libraries/RXQnHIQu.js' playlist={videoUrl} />
                    </div>
                    </div>
                    <div className={style.showTitle} style={{paddingTop: "70px", height:"210px", overflow:"hidden"}}>
                            <div className={style.showHashTagDiv}>
                                <div className={style.hashTagText}> #{this.state.storyList.shows[0].headline}</div> 
                            </div>
                            <div className={style.showDesc }>{this.state.storyList.shows[0].title} </div>
                    </div>
                </div>
                <div style={{width:"42%"}} className={style.newshourHero}>
                    <div className={style.newshourLatest}>
                    {this.state.storyList.shows.slice(1,5).map((stories, idx) => (
                            <div>
                            <div className={style.storyWrapper}>
                                <Link href={stories.complete_slug} >
                                    <a>
                                    <div className={style.storyDiv}>
                                            <img className={[style.imgHover,style.responsiveImage].join(" ")} alt={stories.alt} src={stories.promo_large} />
                                            <div className={[style.playButtonDiv,style.videoHover].join(" ")} style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className={style.playDiv}>
                                                    <div className={style.playButton} style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className={style.dateContainer}>{stories.pub_datetime}</div>
                                    <div className={[style.storyQuestion,style.textHover].join(" ")} style={{height: "68px"}}>{stories.headline}</div>
                                </a>
                                </Link>
                            </div>
                        </div>
                        ))}  
                    </div>
                </div>
                </div>
            </div>
            <div className={style.adContainer}>
                <div className={style.adsWrapper}>
                    <div style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block',border: '1px solid black' }}></div>
                </div>
            </div>
            <div className={style.storyCardContainer}>
                <div className={style.cardSection}>
                    <div className={style.storyCardSection} style={{width:"75%"}}>
                    {this.state.storyList.shows.slice(5,10).map((stories, idx) => (
                        <div className={style.newshourVideo}>
                            <div className={style.storyWrapper}>
                                <Link href={stories.complete_slug}>
                                    <a>
                                    <div className={style.storyDiv}>
                                            <Image width={255} height={143}  className={[style.imgHover,style.responsiveImage].join(" ")} alt={stories.alt} src={stories.placeholder} />
                                            <div className={[style.playButtonDiv,style.videoHover].join(" ")} style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className={style.playDiv}>
                                                    <div className={style.playButton} style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className={style.dateContainer}>{stories.pub_datetime}</div>
                                    <div className={[style.storyQuestion,style.textHover].join(" ")} style={{height: "68px"}}>{stories.headline}</div>
                                </a>
                                </Link>
                            </div>
                        </div>
                        ))}  
                        {this.state.storyListTwo.shows.slice(0,4).map((stories, idx) => (
                        <div className={style.newshourVideo}>
                            <div className={style.storyWrapper}>
                                <Link href={stories.complete_slug}>
                                    <a>
                                    <div className={style.storyDiv}>
                                            <Image width={255} height={143}  class={[style.imgHover,style.responsiveImage].join(" ")} alt={stories.alt} src={stories.promo_large} />
                                            <div className={[style.playButtonDiv,style.videoHover].join(" ")} style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className={style.playDiv}>
                                                    <div className={style.playButton} style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className={style.dateContainer}>{stories.pub_datetime}</div>
                                    <div className={[style.storyQuestion,style.textHover].join(" ")} style={{height: "68px"}}>{stories.headline}</div>
                                </a>
                                </Link>
                            </div>
                        </div>
                        ))}  
                    </div>
                    <div style={{width:"25%;",minWidth: "300px"}}>
                        <div className={style.adsWrapper}>
                            <div id="div-gpt-ad" style={{ position: 'relative', zIndex: '0', width: '300px', height: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'block',border: '1px solid black' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Recommend recommendChannels={this.state.showChannels}/>
            <div className={style.storyContainer}>
                <div className={style.cardSection}>
                <div style={{width:"75%"}} >
                    <div className={style.showStorySection} id="show-load">
                    {this.state.storyListTwo.shows.slice(4,10).map((stories, idx) => (
                        <div className={style.newshourVideo}>
                            <div className={style.storyWrapper}>
                                <Link href={stories.complete_slug}>
                                    <a>
                                    <div className={style.storyDiv}>
                                            <Image width={255} height={143}  class={[style.imgHover,style.responsiveImage].join(" ")} alt={stories.alt} src={stories.placeholder} />
                                            <div className={[style.playButtonDiv,style.videoHover].join(" ")} style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className={style.playDiv}>
                                                    <div className={style.playButton} style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className={style.dateContainer}>{stories.pub_datetime}</div>
                                    <div className={[style.storyQuestion,style.textHover].join(" ")}  style={{height: "68px"}}>{stories.headline}</div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        ))}  
                        {this.state.storyListThree.shows.slice(0,3).map((stories, idx) => (
                        <div className={style.newshourVideo}>
                            <div className={style.storyWrapper}>
                                <Link href={stories.complete_slug}>
                                    <a>
                                    <div className={style.storyDiv}>
                                            <Image width={255} height={143}  class={[style.imgHover,style.responsiveImage].join(" ")} alt={stories.alt} src={stories.placeholder} />
                                            <div className={[style.playButtonDiv,style.videoHover].join(" ")} style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                                <div className={style.playDiv}>
                                                    <div className={style.playButton} style={{margin: "auto"}}></div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className={style.dateContainer}>{stories.pub_datetime}</div>
                                    <div className={[style.storyQuestion,style.textHover].join(" ")} style={{height: "68px"}}>{stories.headline}</div>
                                </a>
                                </Link>
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
                <LoadMoreShows />
            </div>
            </section>
            </div>
       )
   }
}
 
export default ShowList;