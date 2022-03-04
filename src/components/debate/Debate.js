import React from "react";
import DebateList from "./DebateList"
import Image from "next/image";
import Link from 'next/link';
import style from '../../styles/Debate.module.css'

class Debate extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            debateStory: props.debateData,
            StoryBatchTwo: props.debateSecondPage,
            StoryBatchThree: props.debateThirdPage,
            shows: props.recommendShows
        };
    }

    render() {
        return (
            <main className={style.pageWrapper}>
                <section className={style.topContainer}>
                    <section className={style.breadCrumbSection}>
                        <nav id="breadcrumb" className={style.breadCrumbNav}>
                            <span><Link href="/"><a>Home</a></Link></span>
                            <span className={style.flexNoShrink}><Link href="/"><a>The Debate</a></Link></span>
                            <span className={style.breadCrumbText}><Link href="/"><a style={{color:"#d10014"}}>{this.state.debateStory.debates[0].question}</a></Link></span>
                        </nav>
                    </section>
                    <div className={style.breakingNewsContainer}>
                        <div className={style.breakingNewsDiv}>
                            <div style={{display: "table",width: "100%"}}>
                                <Link href="/" id="breaking-news-url">
                                    <div className={style.breakingWrapper} style={{ display: "none" }}>
                                        <div className="breakingTitle">
                                            <span>Breaking News</span>
                                        </div>
                                        <div className="breakingNews">
                                            <marquee className={style.breakingNewsText} id="marqueeAction" behavior="scroll" direction="left" scrollamount="10">
                                                <span className="breakingText" style={{ textTransform: "none" }}></span>
                                            </marquee>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.adsWrapper} style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: '1px solid black' }}>
                    </div>
                    <section className={[style.titleSection,style.newshourWrapper].join(" ")}>
                        <div className={style.debateTitleWrapper}>
                            <h1 style={{ fontWeight: "400",fontSize: "14px"}}> ARNAB GOSWAMI ON</h1>
                            <h1 className={style.titleText}> THE DEBATE </h1>
                        </div>
                    </section>
                    <DebateList debateData={this.state.debateStory} shows={this.state.shows} debateStoryTwo={this.state.StoryBatchTwo} debateStoryThree={this.state.StoryBatchThree} />
                    <div className={style.adContainer}>
                        <div className={style.adsWrapper} style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: '1px solid black' }}>
                        </div>
                    </div>
                </section>
                <section className={[style.debateDescription,style.footerContent].join(" ")}>
                    <div className={[style.descriptionDiv,style.debateParagraph].join(" ")}>
                        <h1 style={{ margin: "0in 0in 0.0001pt" }}>
                            <strong>
                                <span style={{ fontSize: "11pt" }}>
                                    <span style={{ fontFamily: "Calibri,sans-serif" }}>The Debate with Arnab Goswami</span></span></strong></h1>
                        <p style={{ margin: "0in 0in 0.0001pt" }}>&nbsp;</p>
                        <p style={{ margin: "0in 0in 0.0001pt" }}>
                            <span style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: "Calibri,sans-serif" }}>If there is a definitive debate on issues that matter to the people of India and the world, then it is The Debate with Arnab Goswami.&nbsp;<br />
                                    Living up to our core belief of 'People first, no compromise' this is the destination on the Republic TV website where you can watch all of Arnab Goswami’s Debates.</span></span></p>
                        <p style={{ margin: "0in 0in 0.0001pt" }}><br />
                            <span style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: "Calibri,sansSerif" }}>
                                    Here you can join Arnab Goswami in fighting for the people and getting them the answers the nation wants to know, every day between the super prime time newshour of 9pm and 10pm on Live TV as well in streaming high definition vertical video for mobile. The page also includes a section titled 'Talk to Arnab' which allows users to directly interact with Arnab Goswami. Simply log in and join the debate by entering your comments. Ranging between and beyond social, political, economic and current issues, The Debate page is your own platform to ensure that you stand with Arnab and make certain that YOUR voice is heard.</span></span></p>
                        <p style={{ margin: "0in 0in 0.0001pt" }}><br />
                            <span style={{ fontSize: "11pt" }}>
                                <span style={{ fontFamily: "Calibri,sansSerif" }}>
                                    Most importantly, don't forget it is all about, "Your News, Your Language, Your Habits"</span></span></p>
                    </div>
                </section>
            </main>
        )
    }
}

export default Debate;