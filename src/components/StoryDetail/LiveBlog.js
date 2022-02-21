import React from 'react';
import BreadCrumb from './BreadCrumb';
import StoryTopContent from './storyTopContent';
import Recommand from '../../components/StoryDetail/Recommand'
import RightStoryDetail from '../../components/StoryDetail/RightStoryDetail'
import Data from "../../components/StoryDetail/dummy.json"
import Link from 'next/link';
import Image from 'next/image';
// import {getStoryDetailProps} from "../../apiLib/StoryDetailApi"

class LiveBlogPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            story:[],
            tags:[]
        }
    }
    // componentDidMount(){
    //     getStoryDetailProps()
    //     .then((res) => {
    //         this.setState({
    //             id:res.props.articleStoryData.data.story.id,
    //             story:res.props.articleStoryData.data.story,
    //             also_watch:res.props.articleStoryData.data.story.also_watch
    //         })
    //         console.log("sneha")
           
    //        // console.log(res.props.articleStoryData.data.story.id)
    //     })
    // }
  

    render(){
        return(
                <main className="width100 fontRoboto" id="republic-dom">
                    <BreadCrumb/>
                    <section className="section1200 pad10">
	                    <div className="overflowHidden">
                            <div className="padtop20 txtcenter minheight90">ad</div>
                        </div>
                    </section>
                    <section style={{padding: "20px 10px 0px 10px"}}>
                        <div className="section1200">
                            <div id="paginated-stories">
                                <div className="flex flexStoryResponsive flexJustifyBetween">
                                    <div className="storycontainer">
                                        <div className="storywrapper">
                                            <div className="storyContent">
                                                <div className="storypicture">
                                                    <StoryTopContent/>
                                                    <div className='flex flexResponsive flexJustifyBetween flexAlignItemsStart padtop10'>
                                                        <div className="width100 storytext" id="live-blog-container"> 
                                                        <div className="flex" id="98325">
                                                            <div className="flex flexDirectionCol">
                                                                <Image className=" ls-is-cached" style={{maxWidth:"none",marginBottom:"0px"}} width="21" height="21" alt="pointer" src="/assets/live-blog/pointer.png" />
                                                                <div className="red-line"></div>
                                                            </div>
                                                            <div className="storytext-wrapper mrgnleft10 mrgnbtm20">
                                                                <span className="font14 fontweight500" style={{color:"#464646"}}>
                                                                    21:43 IST, February 20th 2022                        </span>
                                                                <div className="storytextlist mrgn0 mrgntop10" style="padding:10px 10px 0px 10px">
                                                                    <div className="flex flexAlignItemsStart mrgnbtm10">
                                                                        <div className="lineHeightNormal">
                                                                            <div className="font18 fontweight500 mrgn0 pad0">
                                                                                'Condition of goons and criminals in UP is that they feel jail is the safest place for them': Rajnath Singh in Lucknow                                    
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="storytextbody font16">
                                                                        <p>The condition of goons and criminals in the state is that they feel jail is the safest place for them. Yogi Adityanath has worked on improving the condition of law and order in Uttar Pradesh: Defence Minister Rajnath Singh at Bakshi Talab in Lucknow</p>                            </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="padtop10">
                                                        Tags:
                                                        <Link href="">Congress</Link>, 
                                                        <Link href="">Smriti Irani</Link>, 
                                                        <Link href="">Manipur elections</Link>
                                                    </div>
                                                    <div>
                                                        <div style={{cursor:"pointer",marginTop:"15px"}} onclick="window.open('https://t.me/RepublicLive');">
                                                            <Image style={{marginBottom:"0px"}}  src="/assets/storydetail/telegram-wdiget.png"  width="330" height="104" />
                                                        </div>
                                                    </div>
                                                    <div className="r-logo youtube-subscribe font-roboto">
                                                        <div className="flex flexDirectionCol">
                                                            <div>SUBSCRIBE TO US</div>
                                                            <div className="padtop5">
                                                                <Image width="80" height="18" className="youtube-logo" src="/assets/storydetail/youtube.png" alt="youtube" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flexDirectionCol flexJustifyCenter">
                                                            <div className="flex">
                                                                <Link target="_blank" href="https://www.youtube.com/channel/UCwqusr8YDwM-3mEYTDeJHzw">
                                                                    <Image width="156" height="31" className="mrgnright20" src="/assets/storydetail/r-logo-web.png" alt="REPUBLIC"/>
                                                                </Link>
                                                                <Link target="_blank" href="https://www.youtube.com/channel/UC7wXt18f2iA3EDXeqAVuKng">
                                                                    <Image width="156" height="31" src="/assets/storydetail/rbharat-logo-web.png" alt="R-BHARAT" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="r-logo watch-livetv font-roboto mrgntop15">
                                                            <div className="flex flexDirectionCol">
                                                                <div style={{color:"white"}}>WATCH US LIVE</div>
                                                                <div className="flex padtop5">
                                                                    <div>
                                                                        <Image width="28" height="20" class="livetv-logo" src="/assets/storydetail/tv-logo.png" alt="Live Tv" />
                                                                    </div>
                                                                    <div className="font18 fontweight100">LIVE TV</div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flexDirectionCol flexJustifyCenter">
                                                                <div className="flex">
                                                                    <Link href="" spark_ve_preview="none">
                                                                        <Image width="156" height="31" class="mrgnright20" src="/assets/storydetail/r-logo-web.png" alt="REPUBLIC" />
                                                                    </Link>
                                                                    <Link href="https://bharat.republicworld.com/livetv" spark_ve_preview="none">
                                                                        <Image width="156" height="31" src="/assets/storydetail/rbharat-logo-web.png" alt="R-BHARAT" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div className="follow-us padtop20">
                                                        <div>FOLLOW US</div>
                                                        <div className="flex">
                                                            <a href="https://twitter.com/republic?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" style={{marginRight:"15px"}}  target="_blank">
                                                                <Image className="follow_us_img" src="/assets/followus/twitter.png" alt="twitter" width="25" height="21" />
                                                            </a>
                                                            <a href="https://www.facebook.com/RepublicWorld/" style={{marginRight:"15px"}}  target="_blank">
                                                                <Image className="follow_us_img" src="/assets/followus/facebook.png" alt="facebook" width="21" height="21" />
                                                            </a>
                                                            <a href="https://www.instagram.com/republicworld/?hl=en" style={{marginRight:"15px"}}  target="_blank">
                                                                <Image className="follow_us_img"  src="/assets/followus/instagram_small.png" alt="instagram" width="21" height="21" />
                                                            </a>
                                                            <a href="https://www.youtube.com/channel/UCwqusr8YDwM-3mEYTDeJHzw" target="_blank" style={{marginRight:"15px"}} >
                                                                <Image className="follow_us_img" src="/assets/followus/youtube.png" alt="youtube" width="29" height="21" />
                                                            </a>
                                                            <a href="https://www.kooapp.com/profile/republic?utm_source=republic&amp;utm_campaign=republic_share" target="_blank">
                                                                <Image className="follow_us_img"  style={{marginTop:"-7px",marginLeft: "15px"}} src="/assets/followus/koo_share_4.svg" width="25" height="21"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="relatedstory mrgnbtm10">
                                                        <div className="font25 fontweight700 padtop30 lineHeight30px">WE RECOMMEND</div>
                                                        <div className="recommend-wrapper">
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
                                    <div className="rightpane">
                                        <RightStoryDetail/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            
        );
    }
}

export default LiveBlogPage