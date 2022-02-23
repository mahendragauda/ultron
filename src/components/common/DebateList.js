import React from "react";
import Image from "next/image";
import Link from 'next/link';
import TheDebate from "./TheDebate";


class DebateList extends React.Component {
   constructor(props){
    super(props);
    this.state = {};
   }
   componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "../public/javascript/debate.js";
    script.onload = () => this.scriptLoaded();

    //For head
    document.head.appendChild(script);

  }
   render(){
    console.log(this.props.debateData) 
       return ( 
            <div class="bdr-dddddd section1200 flex flexWrap flexJustifyBetween flexAlignItemsStart" style={{background:"white"}}>
               <div style={{width:"58%"}} class="newshour-hero">
                   <div class="loadVideoPlayer newshour-debate" id="video_player" data-debate_id="7627">
                       <div class="videoWrapper">
                        <script src="https://cdn.jwplayer.com/libraries/RXQnHIQu.js"></script>
                       </div>
                   </div>
                   <div class="debateTitle" style={{paddingTop: "70px", height:"210px", overflow:"hidden"}}>
                        <div class="flex flexJustifyBetween">
                            <div class="debate-hastag"> #JusticeForHarsha</div> 
                            <div class="debate-time"> 21st February 2022 </div>
                        </div>
                        <div class="debate-question"> Will they take responsibility? </div>
                        <div class="debate-desc">As a Bajrang Dal activist has been murdered, will politicians own up now? </div>
                   </div>
               </div>
               <div style={{width:"42%"}} class="newshour-hero">
                   <div class="newshour-latest">
                        <div>
                           <div class="hover-effect">
                               <a href="https://www.republicworld.com/the-debate/2563/7630/is-there-pfi-role-in-harsha-murder.html">
                                   <div class="overflowHidden posRelative flex">
                                        <Image width="222" height="144" class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src="https://img.republicworld.com/republic-prod/debates/large/ldpi/16454665156213d3936e3dd.jpeg?tr=w-222,h-124" />
                                        <div class="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                            <div class="flex height100p">
                                                <div class="livetv-play-button" style={{margin: "auto"}}></div>
                                            </div>
                                        </div>
                                   </div>
                                   <div class="font14 padtop5"> 21st February 2022</div>
                                   <div class="font16 padtop5 clr-D10014 fontweight500 txtTruncate lineClip1"> #RepublicVsPFI</div>
                                   <div class="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}> Is there PFI role in Harsha murder?</div>
                               </a>
                           </div>
                       </div>
                       <div>
                           <div class="hover-effect">
                               <a href="https://www.republicworld.com/the-debate/2563/7630/is-there-pfi-role-in-harsha-murder.html">
                                   <div class="overflowHidden posRelative flex">
                                        <Image width="222" height="144" class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src="https://img.republicworld.com/republic-prod/debates/large/ldpi/16454665156213d3936e3dd.jpeg?tr=w-222,h-124" />
                                        <div class="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                            <div class="flex height100p">
                                                <div class="livetv-play-button" style={{margin: "auto"}}></div>
                                            </div>
                                        </div>
                                   </div>
                                   <div class="font14 padtop5"> 21st February 2022</div>
                                   <div class="font16 padtop5 clr-D10014 fontweight500 txtTruncate lineClip1"> #RepublicVsPFI</div>
                                   <div class="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}> Is there PFI role in Harsha murder?</div>
                               </a>
                           </div>
                       </div>
                       <div>
                           <div class="hover-effect">
                               <a href="https://www.republicworld.com/the-debate/2563/7630/is-there-pfi-role-in-harsha-murder.html">
                                   <div class="overflowHidden posRelative flex">
                                        <Image width="222" height="144" class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src="https://img.republicworld.com/republic-prod/debates/large/ldpi/16454665156213d3936e3dd.jpeg?tr=w-222,h-124" />
                                        <div class="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                            <div class="flex height100p">
                                                <div class="livetv-play-button" style={{margin: "auto"}}></div>
                                            </div>
                                        </div>
                                   </div>
                                   <div class="font14 padtop5"> 21st February 2022</div>
                                   <div class="font16 padtop5 clr-D10014 fontweight500 txtTruncate lineClip1"> #RepublicVsPFI</div>
                                   <div class="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}> Is there PFI role in Harsha murder?</div>
                               </a>
                           </div>
                       </div>
                       <div>
                           <div class="hover-effect">
                               <a href="https://www.republicworld.com/the-debate/2563/7630/is-there-pfi-role-in-harsha-murder.html">
                                   <div class="overflowHidden posRelative flex">
                                        <Image width="222" height="144" class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src="https://img.republicworld.com/republic-prod/debates/large/ldpi/16454665156213d3936e3dd.jpeg?tr=w-222,h-124" />
                                        <div class="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                                            <div class="flex height100p">
                                                <div class="livetv-play-button" style={{margin: "auto"}}></div>
                                            </div>
                                        </div>
                                   </div>
                                   <div class="font14 padtop5"> 21st February 2022</div>
                                   <div class="font16 padtop5 clr-D10014 fontweight500 txtTruncate lineClip1"> #RepublicVsPFI</div>
                                   <div class="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}> Is there PFI role in Harsha murder?</div>
                               </a>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
       )
   }
}
    
export default DebateList;