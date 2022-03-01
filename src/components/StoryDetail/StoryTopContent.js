import React from 'react';
import CardImage from "../../components/common/CardImage";
import SocialShare from './SocialShare';
import Link from 'next/link';
import storyTopCommonstyle from '../../styles/StoryDetailCommon.module.css';
import storytopCSS from '../../styles/StoryTopContent.module.css'

export default function StoryTopContentPage({storyTopContentArticle}){
    // colorRed={
    //     color:"#e60000"
    // }
        return(
            <div className={storytopCSS.storytopcontent_container}>
                <span className={storytopCSS.timeelapsed}>Last Updated: <time datetime={storyTopContentArticle.data.story.updated_on} title="27 mins ago">{storyTopContentArticle.data.story.updated_on}</time></span>
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
                        <SocialShare slugUrl={storyTopContentArticle.data.story.complete_slug.split('/')[2]}/>
                    </div>
                </div>
                <CardImage
                    src={storyTopContentArticle.data.story.promo_large}
                    alt="image"
                    width="758"
                    height="433"
                />
                
                <div style={{background: "#F0F0F0",marginTop: "-10px",fontWeight:"400",color:"#6C6C6C"}} className={[storyTopCommonstyle.pad10,storyTopCommonstyle.width758].join(" ")}>{storyTopContentArticle.data.story.image_caption}</div>
            </div>
        )
    
}

