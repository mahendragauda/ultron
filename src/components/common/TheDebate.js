import React from "react";
import DebateList from "../../components/common/DebateList"
import Image from "next/image";
import Link from 'next/link';



class TheDebate extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            debateStory: props.debateData,
            StoryBatchTwo: props.debateDataTwo,
            StoryBatchThree: props.debateDataThree,
            shows: props.recommendShows
        };
    }
    
    render() {
        return (
            <main class="font-roboto width100">
            <section className="font-roboto letterSpacing0px bg-f8f8f8">
                <section className="padtop15 font14 padleft10 padright10">
                    <nav id="breadcrumb" className="section1200 flex flexAlignItemsCenter">
                        <span><a href="https://www.republicworld.com/">Home</a></span>
                        <span className="flexNoShrink"><a href="https://www.republicworld.com/the-debate">The Debate</a></span>
                        <span className="txtTruncate lineClip1 fontweight500"><a href="/" class="clr-D10014">Murder not worthy of outrage?
                        </a></span>
                    </nav>
                </section>
                <div className="padtop20 padleft10 padright10">
                    <div className="section1200">
                        <div className="h-grid">
                            <a href="#" id="breaking-news-url">
                                <div className="breaking-wrapper" style={{display:"none"}}>
                                    <div class="breaking-title">
                                        <span>Breaking News</span>
                                    </div>
                                    <div class="breaking-news">
                                        <marquee class="width100 font20 mrgnleft10" id="marqueeAction" behavior="scroll" direction="left" scrollamount="10">
                                            <span className="breaking-text" style={{textTransform:"none"}}></span>
                                        </marquee>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" minheight90">
                <div style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: '1px solid black'}}>
                </div>
                </div>
                <section class="padtop25 newshour-wrapper padleft10 padright10">
                    <div className="section1200 padbtm15 bdrBtm-dddddd">
                        <h1 className="font14 fontweightNormal"> ARNAB GOSWAMI ON</h1>
                        <h1 className="font38 fontweight700 padtop5 clr-D10014 lineHeight36px"> THE DEBATE </h1>
                    </div>

                </section>
                <DebateList debateData= {this.state.debateStory} shows= {this.state.shows} debateStoryTwo={this.state.StoryBatchTwo} debateStoryThree={this.state.StoryBatchThree} />                                                              
                <div class="padtop50 padleft10 padright10">
                    <div class="section1200 flex">
                    </div></div>
                <div className="flex flexJustifyBetween padtop50 padbtm50">
                    <div className="ads-wrapper minheight90" style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block',border: '1px solid black' }}>
                    </div>
                </div>	
            </section>
            <section className="font-roboto letterSpacing0px pad10 padbtm100 footerContent bg-f8f8f8">
                <div className="section1200 debate-footer">
                    <h1 style={{margin: "0in 0in 0.0001pt"}}>
                        <strong>
                            <span style={{fontSize:"11pt"}}>
                                <span style={{fontFamily:"Calibri,sans-serif"}}>The Debate with Arnab Goswami</span></span></strong></h1>
                    <p style={{margin:"0in 0in 0.0001pt"}}>&nbsp;</p>
                    <p style={{margin:"0in 0in 0.0001pt"}}>
                        <span style={{fontSize:"11pt"}}>
                            <span style={{fontFamily:"Calibri,sans-serif"}}>If there is a definitive debate on issues that matter to the people of India and the world, then it is The Debate with Arnab Goswami.&nbsp;<br />
                                Living up to our core belief of 'People first, no compromise' this is the destination on the Republic TV website where you can watch all of Arnab Goswami’s Debates.</span></span></p>
                    <p style={{margin:"0in 0in 0.0001pt"}}><br />
                        <span style={{fontSize:"11pt"}}>
                            <span style={{fontFamily:"Calibri,sansSerif"}}>
                                Here you can join Arnab Goswami in fighting for the people and getting them the answers the nation wants to know, every day between the super prime time newshour of 9pm and 10pm on Live TV as well in streaming high definition vertical video for mobile. The page also includes a section titled 'Talk to Arnab' which allows users to directly interact with Arnab Goswami. Simply log in and join the debate by entering your comments. Ranging between and beyond social, political, economic and current issues, The Debate page is your own platform to ensure that you stand with Arnab and make certain that YOUR voice is heard.</span></span></p>
                    <p style={{margin:"0in 0in 0.0001pt"}}><br />
                        <span style={{fontSize:"11pt"}}>
                            <span style={{fontFamily:"Calibri,sansSerif"}}>
                                Most importantly, don't forget it is all about, "Your News, Your Language, Your Habits"</span></span></p>
                </div>
            </section>
        </main>
    )}
}

export default TheDebate;