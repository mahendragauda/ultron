import React from 'react';
import BreadCrumb from '../common/BreadCrumb';
import StoryTopContent from '../common/StoryTopContent';
import Recommand from '../common/Recommand'
import RightStoryContainer from '../common/RightStoryContainer'
import Link from 'next/link';
import Image from 'next/image';
import style from '../../../styles/StoryDetailCommon.module.css'
import articleDetailStyle from '../../../styles/ArticleDetail.module.css';
import CardImage from '../../common/CardImage';


class GallaryPage extends React.Component{
    CSS = {
        gallery_item_number : {
            fontFamily: "Roboto, sans-serif",
            minWidth: "42px",
            height: "26px",
            padding: "5px 6px",
            background: "#D10014",
            borderRadius: "2px",
            position: "absolute",
            top: "3%",
            left: "2%",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "16px",
            textAlign: "center",
            color: "#FFFFFF"
        },
        gallery_item_caption :{
            fontFamily: "Roboto, sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#0F0F0F",
            textAlign: "right"
        }
    }


    constructor(props){
        super(props);
        this.state={
            Tags:[],
            published_datetime:'',
            recommand:'',
            story_text:'',
            gallery_list:[],
            complete_slug:'',
            mustReadStories:''
          
            
        }
    }
componentDidMount(){
   
    this.setState({
        Tags:this.props.articlePictureData.data.story.tags,
        published_datetime:this.props.articlePictureData.data.story.pub_datetime,
        recommand:this.props.articlePictureData.data.story.pub_datetime,
        story_text:this.props.articlePictureData.data.story.story_text,
        gallery_list:this.props.articlePictureData.data.story.images,
        complete_slug:this.props.articlePictureData.data.story.complete_slug,
        mustReadStories:this.props.MustReadData,
      
   }) 
   console.warn("uuuuu",this.props.recommandStoryData.data.stories)

//    scrollViewToImage(this.props.articlePictureData.data.story.complete_slug)
this.scrollViewToImage(this.props.articlePictureData.data.story.complete_slug)
window.addEventListener('scroll', this.checkGalleryStorySlug, true);

}


scrollViewToImage = (completeSlug) => {
 
    setTimeout(function () {
        console.log('nnn')
      var imageId = completeSlug.split('imageid-')[1].replace('.html', '')
      document.getElementById('gallery_image' + imageId).scrollIntoView({
        behavior: 'smooth'
      });
     
    })
}

 checkGalleryStorySlug = () => {
   
    var galleryImageElement = document.getElementsByClassName('gallery_image')
    var current_path = ''
    var new_path = ''
    for (var i = 0; i < galleryImageElement.length; i++) {
       
      var current_element_visible = this.elementInViewport(galleryImageElement[i])
      current_path = window.location.pathname;
      let slug = window.location.pathname
      let key = slug.replace('.html', '');
      let imageIdPos = key.lastIndexOf('-imageid');
      key = key.replace(key.substr(imageIdPos), '');
      new_path = key + '-imageid-' + (i + 1) + '.html';
      if (current_element_visible) {
        if (current_path != new_path) {
          window.history.pushState(null, null, new_path);
        }
        return false;
      }
    }
}

elementInViewport = (el) => {
    let top = el.offsetTop;
    let height = el.offsetHeight;
    let vh = window.innerHeight;
    if (height * 3 <= vh) {
      return (top >= window.scrollY) && (top + height) <= (window.scrollY + window.innerHeight)
    } else {
      let minVisibleHeight = vh - height;
      return (top >= window.scrollY || top + height >= window.scrollY + minVisibleHeight) && (top + height) <= (window.scrollY + window.innerHeight);
    }
}



telegramClick = () =>{
    window.open('https://t.me/RepublicLive')
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.checkGalleryStorySlug);
}

 


    render(){
       
        return(
            <>
              
                <main className={[style.width100 ,style.fontRoboto].join(" ")} id="republic-dom">
                    <BreadCrumb breadcrumbArticleData={this.props.articlePictureData}/>
                    
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
                                                    <div className="gallery_items">
                                                        {this.state.gallery_list.map((item,index) =>
                                                            <div key= {index} className='gallery_item gallery_image' id={`gallery_image${index+1}`}>
                                                                <div className="gallery_item_img_wrapper" style={{position:"relative"}}>
                                                                    <div className={style.res_wid100_Img} style={{marginBottom:"10px",display:"flex"}}><CardImage src={item.picture_path} width="758" height="433" alt={item.picture_alt} className="gallary_img"/></div>
                                                                    <div style={this.CSS.gallery_item_number}>{index+1}/{this.state.gallery_list.length}</div>
                                                                    <div style={this.CSS.gallery_item_caption}>{item.picture_source}</div>
                                                                </div>
                                                                <div className={[style.flex,style.flexResponsive,style.flexJustifyBetween,style.flexAlignItemsStart,style.mrgntop15].join(" ")}>
                                                                    <div className={[articleDetailStyle.storytext,style.width100].join(" ")}>
                                                                          <div dangerouslySetInnerHTML={{ __html:item.picture_caption }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                        )}
                                                    </div>
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
                                                            {this.props.recommandStoryData.data.stories.map((recdata)=> 
                                                            <Recommand key={recdata.id} title={recdata.title} complete_slug={recdata.complete_slug} placeholder={recdata.placeholder} image_alt_text={recdata.image_alt_text} image_title={recdata.image_title} />
                                                        )}  
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <RightStoryContainer rightStoryDetailArticle={this.props.articlePictureData} MustReadStories={this.props.MustReadData}/>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default GallaryPage
