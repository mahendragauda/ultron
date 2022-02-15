import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/Cricket'
import Link from 'next/link';
import Image from "next/image";
import styles from '/styles/LatestCricketNews.module.css';


export default function ipl(){
    const router = useRouter()
    let isIpl2021 = router.query.ipl === "ipl-2021"
    // if(isIpl2021){
    return (
        <>
       <Header/>
       <Cricket/>
       <nav id="breadcrumb" class="font14 font-roboto font14 flex flexAlignItemsCenter" style={{paddingTop:"15px",paddingLeft:"10px",paddingRight:"10px"}}>
            <span><Link href="/"><a style={{textDecoration: "underline !important;"}}>Home / </a></Link></span>
            <span class="txtTransformCaps"><Link href="/"><a style={{textDecoration: "underline !important;"}}> Cricket / </a></Link></span>
            <span class="txtTransformCaps"><Link href="/"><a href={{textDecoration: "underline !important;"}}  class="color-e60000 fontweight500"> IPL 2021</a></Link></span>
        </nav>
        {/* <div class="flex padtop20 flexJustifyCenter" style={{display: "flex;"}}>
            <div class="width100 bdr-dddddd flex">
                <div class="flex mrgnright10" style={{width:"76%"}}>
                    <Image style={{width:"100%"}} src="https://www.republicworld.com/assets/images/cricket/cricket_banner_logo.jpeg" alt="Cricket" title="Cricket" width={100} height={60}/>
                </div>
                <div style={{width:"24%"}} class="flex flexJustifyCenter padleft10">
                    <div class="flex flexJustifyCenter flexDirectionCol font14 txtcenter">Supported by</div>
                    <a rel="nofollow" style={{margin:"auto 0"}} href="https://www.cricketapi.com/?ref=republicworld.com" target="_blank">
                        <Image style={{width:"120px",height:"60px"}} src="https://www.republicworld.com/assets/images/cricket/roanuz_logo.png" alt="Roanuz Cricket API" title="Roanuz Cricket API" width={120} height={60}/>
                    </a>
                </div>
            </div>
        </div>         */}

<section style={{padding: "20px 10px 10px 10px"}}>
            <h1 class="font25 lineHeight25px" title="IPL 2021">Indian Premier League 2021</h1>
        </section>

        <div class="padtop20 flex cricket-page-responsive" style={{padding: "20px 10px 10px 10px",flexDirection:"column"}}>
    <div class="width67 padright20">
        <div class="flex">
            <article class="hover-effect top-news bdr-dddddd" style={{width: "56%;"}}>
                <a href="https://www.republicworld.com/sports-news/cricket-news/india-vs-west-indies-t20i-why-was-rishabh-pant-appointed-as-team-indias-vice-captain-articleshow.html">
                    <div class="posRelative flex overflowHidden">
                        <img
                            class="imghover"
                            src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/jcsdscxwx8skai4i_1644913784.jpeg?tr=w-430,h-281"
                            style={{width: "100%;"}}
                            alt="India vs West Indies T20I: Why was Rishabh Pant appointed as Team India's vice-captain?"
                        />
                    </div>
                    <p class="texthover txtTruncate lineClip3">
                        India vs West Indies T20I: Why was Rishabh Pant appointed as Team India's vice-captain?
                    </p>
                </a>
            </article>

            <div class="flex flexDirectionCol bdrRight-dddddd bdrTop-dddddd bdrBtm-dddddd" style={{width:"44%;"}}>
                <article class="hover-effect recent-news">
                    <a href="https://www.republicworld.com/sports-news/cricket-news/rohit-sharma-shuts-down-questions-on-ex-skipper-virat-kohlis-form-if-you-guys-can-dot-articleshow.html">
                        <div class="posRelative flex overflowHidden" style={{minWidth: "80px", height: "60px"}}>
                            <img
                                class="imghover"
                                src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/8oshjkptmnuh7a4s_1644915998.jpeg?tr=w-80,h-60"
                                alt="Rohit Sharma shuts down questions on ex-skipper Virat Kohli's form; 'If you guys can...'"
                            />
                        </div>
                        <p class="texthover txtTruncate lineClip3 font16">
                            Rohit Sharma shuts down questions on ex-skipper Virat Kohli's form; 'If you guys can...'
                        </p>
                    </a>
                </article>
                </div>
</div>
</div>
   </div>
   <div class="padtop30" style={{padding: "20px 10px 10px 10px"}}>
                        <div class="flex flexJustifyBetween padbtm15" style={{display: "flex",justifyContent: "space-between"}}>
                            <h2 class="font25 lineHeight25px">LATEST CRICKET NEWS</h2>
                            <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{textDecoration: "underline!important",fontSize: "14px",paddingTop: "25px"}}>View more</a>
                        </div>
                        <div class="flex flexWrap">
                        <article className={styles.latest-news,styles.bdr-dddddd}>
                                    <a href="https://www.republicworld.com/sports-news/cricket-news/ipl-2022-from-csk-to-srh-heres-predicted-playing-xis-of-all-10-teams-after-mega-auction-articleshow.html">
                                        <div class="flex">
                                            <div class="posRelative flex overflowHidden">
                                                <img class="imghover responsiveImage" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/qxbnaoffzgkttsp4_1644836282.jpeg?tr=w-110,h-90" alt="IPL 2022: From CSK to SRH, here's predicted playing XIs of all 10 teams after mega auction"/>
                                                                                            </div>
                                            <div class="texthover latest-news-text flex flexDirectionCol">
                                                <div>
                                                    <p class="txtTruncate lineClip3">
                                                                                                                IPL 2022: From CSK to SRH, here's predicted playing XIs of all 10 teams after mega auction                                                    </p>
                                                </div>
                                                <div class="mrgntop10">
                                                    <p>22 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                                                            <article class="hover-effect latest-news bdr-dddddd">
                                    <a href="https://www.republicworld.com/sports-news/cricket-news/work-begins-on-new-nca-in-bengaluru-foundation-stone-laid-by-bcci-brass-articleshow.html">
                                        <div class="flex">
                                            <div class="posRelative flex overflowHidden">
                                                <img class="imghover responsiveImage" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/238nazykqvskk8gi_1644836618.jpeg?tr=w-110,h-90" alt="Work begins on new NCA in Bengaluru, foundation stone laid by BCCI brass"/>
                                                                                            </div>
                                            <div class="texthover latest-news-text flex flexDirectionCol">
                                                <div>
                                                    <p class="txtTruncate lineClip3">
                                                                                                                Work begins on new NCA in Bengaluru, foundation stone laid by BCCI brass                                                    </p>
                                                </div>
                                                <div class="mrgntop10">
                                                    <p>23 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                                                            <article class="hover-effect latest-news bdr-dddddd">
                                    <a href="https://www.republicworld.com/sports-news/cricket-news/ind-vs-wi-t20i-who-will-replace-kl-rahul-will-rishabh-pant-open-alongside-rohit-sharma-articleshow.html">
                                        <div class="flex">
                                            <div class="posRelative flex overflowHidden">
                                                <img class="imghover responsiveImage" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/jkz6ojgi90kpncvh_1644834455.jpeg?tr=w-110,h-90" alt="IND vs WI T20I: Who will replace KL Rahul? Will Rishabh Pant open alongside Rohit Sharma?"/>
                                                                                            </div>
                                            <div class="texthover latest-news-text flex flexDirectionCol">
                                                <div>
                                                    <p class="txtTruncate lineClip3">
                                                                                                                IND vs WI T20I: Who will replace KL Rahul? Will Rishabh Pant open alongside Rohit Sharma?                                                    </p>
                                                </div>
                                                <div class="mrgntop10">
                                                    <p>23 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                                                            <article class="hover-effect latest-news bdr-dddddd">
                                    <a href="https://www.republicworld.com/sports-news/cricket-news/kl-rahul-is-all-hearts-for-ladylove-athiya-shetty-in-blurry-valentines-day-mirror-selfie-articleshow.html">
                                        <div class="flex">
                                            <div class="posRelative flex overflowHidden">
                                                <img class="imghover responsiveImage" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/pptio9rgeijbad1o_1644831820.jpeg?tr=w-110,h-90" alt="KL Rahul is all hearts for ladylove Athiya Shetty in blurry Valentine's Day mirror selfie"/>
                                                                                            </div>
                                            <div class="texthover latest-news-text flex flexDirectionCol">
                                                <div>
                                                    <p class="txtTruncate lineClip3">
                                                                                                                KL Rahul is all hearts for ladylove Athiya Shetty in blurry Valentine's Day mirror selfie                                                    </p>
                                                </div>
                                                <div class="mrgntop10">
                                                    <p>1 day ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                                                            <article class="hover-effect latest-news bdr-dddddd">
                                    <a href="https://www.republicworld.com/sports-news/cricket-news/preview-india-seek-to-sort-out-batting-fielding-woes-in-2nd-womens-odi-vs-new-zealand-articleshow.html">
                                        <div class="flex">
                                            <div class="posRelative flex overflowHidden">
                                                <img class="imghover responsiveImage" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/dkzut6metfwyxzku_1644824142.jpeg?tr=w-110,h-90" alt="Preview: India seek to sort out batting, fielding woes in 2nd women's ODI vs New Zealand"/>
                                                                                            </div>
                                            <div class="texthover latest-news-text flex flexDirectionCol">
                                                <div>
                                                    <p class="txtTruncate lineClip3">
                                                                                                                Preview: India seek to sort out batting, fielding woes in 2nd women's ODI vs New Zealand                                                    </p>
                                                </div>
                                                <div class="mrgntop10">
                                                    <p>1 day ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                                                            <article class="hover-effect latest-news bdr-dddddd">
                                    <a href="https://www.republicworld.com/sports-news/cricket-news/steve-smith-okay-after-suffering-concussion-in-desperate-attempt-to-save-six-articleshow.html">
                                        <div class="flex">
                                            <div class="posRelative flex overflowHidden">
                                                <img class="imghover responsiveImage" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/hyxbkodkkfpleduq_1644818270.jpeg?tr=w-110,h-90" alt="Steve Smith 'okay' after suffering concussion in desperate attempt to save six"/>
                                                                                            </div>
                                            <div class="texthover latest-news-text flex flexDirectionCol">
                                                <div>
                                                    <p class="txtTruncate lineClip3">
                                                                                                                Steve Smith 'okay' after suffering concussion in desperate attempt to save six                                                    </p>
                                                </div>
                                                <div class="mrgntop10">
                                                    <p>1 day ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                                                    </div>
                    </div> 

        </>
    )
    // }
}   
