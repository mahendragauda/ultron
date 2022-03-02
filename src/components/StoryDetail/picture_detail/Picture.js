import React from 'react';
import BreadCrumb from '../common/BreadCrumb';
import StoryTopContent from '../common/StoryTopContent';
import Recommand from '../common/Recommand'
import RightStoryContainer from '../common/RightStoryContainer'
import Data from "../dummy.json"
import Link from 'next/link';
import Image from 'next/image';
import style from '../../../styles/StoryDetailCommon.module.css'
import articleDetailStyle from '../../../styles/ArticleDetail.module.css'

class PicturePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Tags:[],
            published_datetime:'',
            recommand:'',
            story_text:''
            
        }
    }
componentDidMount(){
   console.warn(this.props.articlePictureData.data.story.id)
    this.setState({
        Tags:this.props.articlePictureData.data.story.tags,
        published_datetime:this.props.articlePictureData.data.story.pub_datetime,
        recommand:this.props.articlePictureData.data.story.pub_datetime,
        story_text:this.props.articlePictureData.data.story.story_text
   }) 
}

telegramClick = () =>{
    window.open('https://t.me/RepublicLive')
}
 

    render(){
       
        return(
                <main className={[style.width100 ,style.fontRoboto].join(" ")} id="republic-dom">
                    <BreadCrumb breadcrumbArticleData={this.props.articlePictureData}/>
                    {/* <p>{this.state.pictureData.data.story.id}</p> */}
                  <section className={[style.section1200 ,style.pad10].join(" ")}>
	                    <div className={style.overflowHidden}>
                            <div className={[style.padtop20 ,style.txtcenter,style.minheight90].join(" ")}>ad</div>
                        </div>
                    </section>
                    <section style={{padding: "20px 10px 0px 10px"}}>
                        <div className={style.section1200}>
                            <div id="paginated-stories">
                                <div className={[style.flex ,style.flexStoryResponsive,style.flexJustifyBetween].join(" ")}>
                                    <div className={articleDetailStyle.storycontainer}>
                                        <div className={articleDetailStyle.storywrapper}>
                                            <div className={articleDetailStyle.storyContent}>
                                                <div className="storypicture">
                                                    <StoryTopContent  storyTopContentArticle={this.props.articlePictureData}/>
                                                    <br/>
                                                    <div style={{width:"100%"}} className={articleDetailStyle.storytext}>
                                                        <div dangerouslySetInnerHTML={{ __html: this.state.story_text }} />
                                                    </div>
                                                    <div className={[articleDetailStyle.fontpoint8em,articleDetailStyle.tags_a,style.padtop10].join(" ")}>
                                                        <span style={{paddingRight:"5px"}}>Tags:</span>
                                                        {this.state.Tags.map((tagdata) =>
                                                        <Link href={"/"+tagdata.toLowerCase().split(/\s+/).join('-')}>{tagdata}</Link>
                                                        )}
                                                    </div>
                                                    <div className={[style.padtop20,articleDetailStyle.fontpoint8em].join(" ")}>
                                                        First Published:
                                                        <time datetime="2022-02-18T22:59:00+05:30" title="53 secs ago">{this.state.published_datetime}</time>
                                                    </div>
                                                    <div>
                                                        <div style={{cursor:"pointer",marginTop:"15px"}} onClick={this.telegramClick}>
                                                            
                                                            <Image style={{marginBottom:"0px"}}  src="/assets/storydetail/telegram-wdiget.png"  width="330" height="104" />
                                                        </div>
                                                    </div>
                                                    <div className={[articleDetailStyle.r_logo,articleDetailStyle.youtube_subscribe,style.fontRoboto].join(" ")}>
                                                        <div className={[style.flex,style.flexDirectionCol].join(" ")}>
                                                            <div>SUBSCRIBE TO US</div>
                                                            <div className={style.padtop5}>
                                                                <Image width="80" height="18" className={articleDetailStyle.youtube_logo} src="/assets/storydetail/youtube.png" alt="youtube" />
                                                            </div>
                                                        </div>
                                                        <div className={[style.flex,style.flexDirectionCol,style.flexJustifyCenter].join(" ")}>
                                                            <div className={style.flex}>
                                                                <Link target="_blank" href="https://www.youtube.com/channel/UCwqusr8YDwM-3mEYTDeJHzw">
                                                                   <div className={style.mrgnright20}> 
                                                                       <Image width="156" height="31"  src="/assets/storydetail/r-logo-web.png" alt="REPUBLIC"/>
                                                                    </div>
                                                                </Link>
                                                                <Link target="_blank" href="https://www.youtube.com/channel/UC7wXt18f2iA3EDXeqAVuKng">
                                                                   <div> <Image width="156" height="31" src="/assets/storydetail/rbharat-logo-web.png" alt="R-BHARAT" /></div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={[style.fontRoboto,style.mrgntop15,articleDetailStyle.r_logo,articleDetailStyle.watch_livetv].join(" ")}>
                                                            <div className={[style.flex,style.flexDirectionCol].join(" ")}>
                                                                <div style={{color:"white"}}>WATCH US LIVE</div>
                                                                <div className={[style.flex,style.padtop5].join(" ")}>
                                                                    <div className={style.mrgnright5}>
                                                                        <Image width="28" height="20" className={articleDetailStyle.livetv_logo} src="/assets/storydetail/tv-logo.png" alt="Live Tv" />
                                                                    </div>
                                                                    <div className={[style.font18,style.fontweight100].join(" ")}>LIVE TV</div>
                                                                </div>
                                                            </div>
                                                            <div className={[style.flex,style.flexDirectionCol,style.flexJustifyCenter].join(" ")}>
                                                                <div className={style.flex}>
                                                                    <Link href="" spark_ve_preview="none">
                                                                    <div className={style.mrgnright20}>  
                                                                        <Image width="156" height="31"  src="/assets/storydetail/r-logo-web.png" alt="REPUBLIC" />
                                                                    </div>
                                                                    </Link>
                                                                    <Link href="https://bharat.republicworld.com/livetv" spark_ve_preview="none">
                                                                        <div><Image width="156" height="31" src="/assets/storydetail/rbharat-logo-web.png" alt="R-BHARAT" /></div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div className={[style.flex,style.padtop20,style.fontRoboto,articleDetailStyle.follow_us].join(" ")}>
                                                        <div>FOLLOW US</div>
                                                        <div className={style.flex}>
                                                            <Link href="https://twitter.com/republic?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" style={{marginRight:"15px"}}  target="_blank">
                                                                <div style={{marginRight:"15px"}}>
                                                                    <Image className={articleDetailStyle.follow_us_img} src="/assets/followus/twitter.png" alt="twitter" width="25" height="21" />
                                                                </div>
                                                            </Link>
                                                            <a href="https://www.facebook.com/RepublicWorld/" style={{marginRight:"15px"}}  target="_blank">
                                                                <Image className={articleDetailStyle.follow_us_img} src="/assets/followus/facebook.png" alt="facebook" width="21" height="21" />
                                                            </a>
                                                            <a href="https://www.instagram.com/republicworld/?hl=en" style={{marginRight:"15px"}}  target="_blank">
                                                                <Image className={articleDetailStyle.follow_us_img}  src="/assets/followus/instagram_small.png" alt="instagram" width="21" height="21" />
                                                            </a>
                                                            <a href="https://www.youtube.com/channel/UCwqusr8YDwM-3mEYTDeJHzw" target="_blank" style={{marginRight:"15px"}} >
                                                                <Image className={articleDetailStyle.follow_us_img} src="/assets/followus/youtube.png" alt="youtube" width="29" height="21" />
                                                            </a>
                                                            <a href="https://www.kooapp.com/profile/republic?utm_source=republic&amp;utm_campaign=republic_share" target="_blank">
                                                                <Image className={articleDetailStyle.follow_us_img}  style={{marginTop:"-7px",marginLeft: "15px"}} src="/assets/followus/koo_share_4.svg" width="30" height="30"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="relatedstory mrgnbtm10">
                                                        <div className={[style.font25, style.fontweight700 ,style.padtop30 , style.lineHeight30px].join(" ")}>WE RECOMMEND</div>
                                                        <div className={style.recommend_wrapper}>
                                                        {/* {cars.map((car) => <Car key={car.id} brand={car.brand} />)} */}
                                                        {Data.map((recdata)=>
                                                            <Recommand key={recdata.id} heading={recdata.heading}/>
                                                        )}  
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <RightStoryContainer rightStoryDetailArticle={this.props.articlePictureData}/>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            
        );
    }
}

export default PicturePage
