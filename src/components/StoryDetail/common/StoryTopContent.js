import React,{useState} from 'react';
import CardImage from "../../common/CardImage";
import ReactJWPlayer from "react-jw-player";;
import SocialShare from './SocialShare';
import Link from 'next/link';
import storyTopCommonstyle from '../../../styles/StoryDetailCommon.module.css';
import storytopCSS from '../../../styles/StoryTopContent.module.css'
import Script from "next/script";
import Head from "next/head";
import dynamic from 'next/dynamic'
// import '../../../static/dateFormatter.js'



export default function StoryTopContentPage({storyTopContentArticle}){
        const videoPath = `https://cdn.jwplayer.com/v2/media/${storyTopContentArticle.data.story.video_path}`
        
  
       
            // import('../../../public/utils/Utils.js').then(script => {
            //     script.loadScript({ src: '../../javascript/dateFormatter.js', isLoaded: false, id: 'DateFormatter_id', attribute: 'async' }, () => {
            //          timeDifference(data,true)
            //     })
            //  })
        
        
        
       

        return(
            <>
            {/* <Head>
                <script id="dateformatter_cdn" src="../../javascript/dateFormatter.js"  strategy='lazyOnload'
                onLoad={
                    `convertDateTime(timeToConvert, withTime, dateBeforeMonth, s = false)`
                    // ... code here
                   }
                ></script>
            </Head> */}
           
            <div className={storytopCSS.storytopcontent_container}>

                <span className={storytopCSS.timeelapsed}>Last Updated: 
                
                <time datetime={storyTopContentArticle.data.story.updated_on} title="27 mins ago">
                {/* {timeDifference(storyTopContentArticle.data.story.updated_on,true) } */}
                
                    {/* {
                    () => {
                        {timeDifference(storyTopContentArticle.data.story.updated_on,true) }
                    }
                    } */}
                </time></span>
                <h1 className={storytopCSS.storytitle}>
                    <span style={{color: "rgb(255 0 0"}}>{storyTopContentArticle.data.story.short_title}</span> {storyTopContentArticle.data.story.title}
                </h1>
                <h2 className={storytopCSS.storydescription}>{storyTopContentArticle.data.story.meta_description}</h2>
                <div className={storytopCSS.author} style={{marginBottom: "0"}}>
                    <div className={storytopCSS.authortitle}>
                        <div className={[storyTopCommonstyle.flex,storyTopCommonstyle.mrgntbauto].join(" ")}>
                            <div className={storyTopCommonstyle.padright5}>Written By</div>
                            <Link href={"/"+storyTopContentArticle.data.story.author_slug}>
                                <span style={{color:"#e60000"}}>{storyTopContentArticle.data.story.author_name}</span>
                            </Link>
                        </div>
                        <SocialShare slugUrl={storyTopContentArticle}/>
                    </div>
                </div>
                {storyTopContentArticle.data.story.type == "V"?
                    <div style={{position:"relative"}}>
                        <ReactJWPlayer  playerId={storyTopContentArticle.data.story.video_path} playerScript='https://cdn.jwplayer.com/libraries/RXQnHIQu.js' playlist={videoPath}/>
                        {/* <div className={[storyTopCommonstyle.videohover,storyTopCommonstyle.posAbsolute,storyTopCommonstyle.width100,storyTopCommonstyle.height100p].join(" ")} style={{background:" rgba(0, 0, 0, 0.5)",top:"0"}}>
                            <div class={[storyTopCommonstyle.flex,storyTopCommonstyle.height100p].join(" ")}>
                                <div className={storyTopCommonstyle.livetv_play_button} style={{margin:"auto",width:"45px",height:"45px"}}></div>
                            </div>
		                </div> */}
                        <div style={{background: "#F0F0F0",marginTop: "-10px",fontWeight:"400",color:"#6C6C6C"}} className={[storyTopCommonstyle.pad10,storyTopCommonstyle.width758].join(" ")}>{storyTopContentArticle.data.story.image_caption}</div>
                    </div>
                :
               ""
        }
        {storyTopContentArticle.data.story.type == "P" && storyTopContentArticle.data.story.type == "LB"?
            <div>
            <CardImage
             src={storyTopContentArticle.data.story.promo_large}
             alt="image"
             width="758"
             height="433"
         />
         <div style={{background: "#F0F0F0",marginTop: "-10px",fontWeight:"400",color:"#6C6C6C"}} className={[storyTopCommonstyle.pad10,storyTopCommonstyle.width758].join(" ")}>{storyTopContentArticle.data.story.image_caption}</div>
         </div>
         :
         ""
        }
                
            </div>
            </>
        )
    
}

