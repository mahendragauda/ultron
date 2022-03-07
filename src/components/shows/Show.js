import React from "react";
import ShowList from "./ShowList";
import Image from "next/image";
import Link from 'next/link';
import style from '../../styles/Show.module.css'



class Show extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showStory: props.showData,
            StoryBatchTwo: props.showSecondPage,
            StoryBatchThree: props.showThirdPage,
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
                            <span className={style.flexNoShrink}><Link href="/"><a>Shows</a></Link></span>
                            <span className={style.breadCrumbText}><Link href="/"><a style={{color:"#d10014"}}>{this.state.showStory.aboutShow.name}</a></Link></span>
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
                    <div className={style.adContainer}>
                        <div className={style.adsWrapper} style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: '1px solid black' }}>
                        </div>
                    </div>
                    <ShowList showData={this.state.showStory} shows={this.state.shows} showStorySecondBatch={this.state.StoryBatchTwo} showStoryThirdBatch={this.state.StoryBatchThree} />
                    <div className={style.adContainer}>
                        <div className={style.adsWrapper} style={{ position: 'relative', zIndex: '0', width: '728px', height: '90px', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: '1px solid black' }}>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Show;