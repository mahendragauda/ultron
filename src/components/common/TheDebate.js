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
        console.log(this.state.shows)
        return (
            <main class="font-roboto width100">
            <section class="font-roboto letterSpacing0px bg-f8f8f8">
                <section class="padtop15 font14 padleft10 padright10">
                    <nav id="breadcrumb" class="section1200 flex flexAlignItemsCenter">
                        <span><a href="https://www.republicworld.com/">Home</a></span>
                        <span class="flexNoShrink"><a href="https://www.republicworld.com/the-debate">The Debate</a></span>
                        <span class="txtTruncate lineClip1 fontweight500"><a href="https://www.republicworld.com/the-debate/2565/7635/murder-not-worthy-of-outrage.html" class="clr-D10014">Murder not worthy of outrage?
                        </a></span>
                    </nav>
                </section>
                <div class="padtop20 padleft10 padright10">
                    <div class="section1200">
                        <div class="h-grid">
                            <a href="#" id="breaking-news-url">
                                <div class="breaking-wrapper" style={{display:"none"}}>
                                    <div class="breaking-title">
                                        <span>Breaking News</span>
                                    </div>
                                    <div class="breaking-news">
                                        <marquee class="width100 font20 mrgnleft10" id="marqueeAction" behavior="scroll" direction="left" scrollamount="10">
                                            <span class="breaking-text" style={{textTransform:"none"}}></span>
                                        </marquee>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <DebateList debateData= {this.state.debateStory} shows= {this.state.shows} debateStoryTwo={this.state.StoryBatchTwo} debateStoryThree={this.state.StoryBatchThree} />                                                              
                <div class="padtop50 padleft10 padright10">
                    <div class="section1200 flex">
                    </div></div>
                <div class="flex flexJustifyBetween padtop50 padbtm50">
                    <div class="ads-wrapper minheight90">Ads
                    </div>
                </div>	
            </section>
            <section class="font-roboto letterSpacing0px pad10 padbtm100 footerContent bg-f8f8f8">
                <div class="section1200 debate-footer">
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