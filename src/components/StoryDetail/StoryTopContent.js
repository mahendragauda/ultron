import React from 'react';
import CardImage from "../../components/common/CardImage";
import Link from 'next/link';

export default function StoryTopContentPage({storyTopContentArticle}){
   
        return(
            <div className="storytopcontent_container">
                <span className="time-elapsed">Last Updated: <time datetime={storyTopContentArticle.data.story.updated_on} title="27 mins ago">{storyTopContentArticle.data.story.updated_on}</time></span>
                <h1 className="storytitle">
                    <span style={{color: "rgb(255 0 0"}}>{storyTopContentArticle.data.story.short_title}</span> {storyTopContentArticle.data.story.title}
                </h1>
                <h2 className="storydescription">{storyTopContentArticle.data.story.meta_description}</h2>
                <div className="author" style={{marginBottom: "0"}}>
                    <div className="authortitle">
                        <div className="flex mrgntbauto">
                            <div className="padright5">Written By</div>
                            <Link href={"/"+storyTopContentArticle.data.story.author_slug}>
                                <span>{storyTopContentArticle.data.story.author_name}</span>
                            </Link>
                        </div>
                        {/* <div className="flex share-social-media">
                            <Link rel="nofollow" onclick="" href="" target="_blank" title="Share on Facebook" data-type="facebook">
                                <Image src="https://www.republicworld.com/assets/images/social-share/facebook.png" alt="facebook"  width="70" height="27"   />
                            </Link>
                            <Link rel="nofollow" onclick="window.open(this.href,'_blank', 'width=700, height=300');return false;" href="https://twitter.com/share?text=%27SP%20rule%20was%20anarchy%27%3A%20BJP%20leader%20tells%20Republic%2C%20taunts%20Akhilesh%20over%20400-seat%20target %23REPUBLIC%20%40republic&amp;url=https%3A%2F%2Fwww.republicworld.com%2Findia-news%2Fpolitics%2Fsp-rule-was-anarchy-bjp-leader-tells-republic-taunts-akhilesh-over-400-seat-target-articleshow.html" target="_blank" title="Share on Twitter" data-type="twitter">
                                <Image src="https://www.republicworld.com/assets/images/social-share/twitter.png" alt="twitter" width="70" height="27" style={{marginRight: "10px"}}  />
                            </Link>
                            <Link rel="nofollow" onclick="window.open(this.href,'_blank', 'width=700, height=300');return false;" target="_blank" title="Share on Koo" href="https://www.kooapp.com/create?title=%27SP%20rule%20was%20anarchy%27%3A%20BJP%20leader%20tells%20Republic%2C%20taunts%20Akhilesh%20over%20400-seat%20target https%3A%2F%2Fwww.republicworld.com%2Findia-news%2Fpolitics%2Fsp-rule-was-anarchy-bjp-leader-tells-republic-taunts-akhilesh-over-400-seat-target-articleshow.html&amp;link=https%3A%2F%2Fwww.republicworld.com%2Findia-news%2Fpolitics%2Fsp-rule-was-anarchy-bjp-leader-tells-republic-taunts-akhilesh-over-400-seat-target-articleshow.html&amp;language=en&amp;handle=republic&amp;utm_source=republic&amp;utm_campaign=republic_share">
                                <div style={{borderRadius:"6px",width:"70px",height:"27px",overflow:"hidden"}}>
                                    <Image src="https://www.republicworld.com/assets/images/koo_share_3.svg" alt="" width= "70" height="27"  />
                                </div>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <CardImage
                    src={storyTopContentArticle.data.story.promo_large}
                    alt="image"
                    width="758"
                    height="433"
                />
                
                <p style={{background: "#F0F0F0",marginTop: "-10px",fontWeight:"400",color:"#6C6C6C"}} className="pad10 width758">{storyTopContentArticle.data.story.image_caption}</p>
            </div>
        )
    
}

