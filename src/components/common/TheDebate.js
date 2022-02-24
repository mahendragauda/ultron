import React from "react";
import DebateList from "../../components/common/DebateList"
import Image from "next/image";
import Link from 'next/link';



class TheDebate extends React.Component {
    CSS = {
        desktop: {
            width: '100%',
            fontFamily: 'Roboto,sans-serif',
        },
        section1: {
            fontFamily: 'Roboto,sans-serif',
            letterSpacing: '0',
            backgroundColor: '#f8f8f8',
        },
        menu1: {
            paddingTop: '15px',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '14px',
        },
        section12: {
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
        },
        a: {
            textDecoration: "none",
            border: "none",
            color: "#000",
        },
        sub1: {
            flexShrink: '0',
        },
        item: {
            webkitLineclamp: "1",
            fontWeight: "600",
            overflow: 'hidden',
            display: 'webkit-box',
            webkitBoxOrient: 'vertical',
            color: '#d10014',
        },
        menu2: {
            paddingTop: '20px',
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        menu3: {
            paddingTop: '25px',
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        hGrid: {
            display: 'table',
            width: '100%',
        },
        bar: {
            borderBottom: '1px solid #ddd',
            paddingBottom: '15px',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
        },
        h1: {
            fontWeight: '400',
            margin: '0',
            fontSize: '14px',
        },
        h2: {
            fontSize: '38px',
            lineHeight: '36px',
            paddingTop: '5px',
            margin: '0',
            fontWeight: '700',
            color: '#d10014',
        },
        ads1: {
            textAlign: 'center',
        },
        minheight: {
            minHeight: '90px',
            padding: '30px 10px',
            backgroundColor: '#f0f0f0',
            margin: 'auto',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        ads2: {
            paddingTop: '50px',
            paddingBottom: '50px',
        },
        menu4: {
            paddingTop: '15px',
            paddingRight: '10px',
            paddingLeft: '10px',
        },
        section2: {
            padding: '10px',
            paddingBottom: '100px',
            fontFamily: 'Roboto,sans-serif',
            letterSpacing: '0',
            fontSize: '12px',
        },
        flex: {
            background: 'white',
            border: '1px solid #ddd',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            display: 'flex',
            flex: 'initial',
        },
        newshourLatest: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        cardtxt: {
            fontSize: '16px',
            paddingTop: '5px',
            color: 'D10014',
            fontWeight: '500',
            lineClip: '1',
        },
        txt: {
            text: 'hover',
            fontSize: '18',
            lineHeight: '21px',
            fontWeight: '500',
            paddingTop: '5',
            lineClip: '3',
            height: '68px',
        }
    };
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
            <div style={this.CSS.desktop}>
                <div style={this.CSS.section1}>
                    <div style={this.CSS.menu1}>
                        <div style={this.CSS.tab}>
                            <div style={this.CSS.section12}>
                                <span><a href="">Home</a></span>
                                <span style={this.CSS.sub1}><a href="https://www.republicworld.com/the-debate"> / The Debate /</a></span>
                                <span style={this.CSS.item}><a href="https://www.republicworld.com/the-debate/2554/7597/hijab-protests-becoming-a-washout.html"> Hijab protests becoming a washout? </a></span>
                            </div>
                        </div>
                    </div>
                    <div style={this.CSS.menu2}>
                        <div class="section12">
                            <div class="hGrid"></div>
                        </div>
                    </div>
                    <div class="ads1">
                        <div style={this.CSS.minheight}>
                            <div style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block', }}>ads</div>
                        </div>
                    </div>
                    <div style={this.CSS.menu3}>
                        <div style={this.CSS.bar}>
                            <h1 style={this.CSS.h1}>ARNAB GOSWAMI ON</h1>
                            <h1 style={this.CSS.h2}>THE DEBATE</h1>
                        </div>
                    </div>
                    <div>
                        <DebateList debateData= {this.state.debateStory} shows= {this.state.shows} debateStoryTwo={this.state.StoryBatchTwo} debateStoryThree={this.state.StoryBatchThree} />
                    </div>
                    <div style={this.CSS.ads2}>
                        <div style={this.CSS.minheight}>
                            <div style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block', }}>ads</div>
                        </div>
                    </div>
                    <div style={this.CSS.section2}>
                        <div style={this.CSS.section12}>
                            <h1 style={{ margin: '0in 0in 0.0001pt', }}>
                                <strong>
                                    <span style={{ fontSize: '11pt', }}>
                                        <span style={{ fontFamily: 'Calibri,sans-serif', fontSize: '18px', fontWeight: '700', }}>The Debate with Arnab Goswami</span></span></strong></h1>
                            <p style={{ margin: '0in 0in 0.0001pt', }}>&nbsp;</p>
                            <p style={{ margin: '0in 0in 0.0001pt', }}>
                                <span style={{ fontSize: '11pt', }}>
                                    <span style={{ fontFamily: 'Calibri,sans-serif', fontSize: '16px', lineHeight: '22px', }}>If there is a definitive debate on issues that matter to the people of India and the world, then it is The Debate with Arnab Goswami.&nbsp;<br />
                                        Living up to our core belief of 'People first, no compromise' this is the destination on the Republic TV website where you can watch all of Arnab Goswami’s Debates.</span></span></p>
                            <p style={{ margin: '0in 0in 0.0001pt', }}><br />
                                <span style={{ fontSize: '11pt', }}>
                                    <span style={{ fontFamily: 'Calibri,sans-serif', fontSize: '16px', lineHeight: '22px', }}>Here you can join Arnab Goswami in fighting for the people and getting them the answers the nation wants to know, every day between the super prime time newshour of 9pm and 10pm on Live TV as well in streaming high definition vertical video for mobile. The page also includes a section titled 'Talk to Arnab' which allows users to directly interact with Arnab Goswami. Simply log in and join the debate by entering your comments. Ranging between and beyond social, political, economic and current issues, The Debate page is your own platform to ensure that you stand with Arnab and make certain that YOUR voice is heard.</span></span>
                            </p>
                            <p style={{ margin: '0in 0in 0.0001pt', }}><br />
                                <span style={{ fontSize: '11pt', }}>
                                    <span style={{ fontFamily: 'Calibri,sans-serif', fontSize: '16px', lineHeight: '22px', }}>Most importantly, don't forget it is all about, "Your News, Your Language, Your Habits"</span></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TheDebate;