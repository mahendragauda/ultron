import styles from "../../../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import CardImage from "../../common/CardImage";
import TopStorySmallCard from "./TopStorySmallCard";

export default class TopStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latestStories: props.latestStories.stories,
            topStories: props.topStories.stories
        };
    }

    render() {
        return (
            <>
                <section className={styles.homepageWrapper}>
                    <div className={styles.mastheadWrapper}>
                        <div className={styles.homepageShadow}>
                            <div className="cardContainer">
                                {this.state.latestStories[0] &&
                                    <Link href='/'>
                                        <a>
                                            <div>
                                                <CardImage src={this.state.latestStories[0].promo_large}
                                                    width={468} height={259}
                                                    alt="story"
                                                />
                                                <div style={{ padding: '15px' }}>
                                                    <div className={styles.hoverEffect} style={{ height: '70px', display: 'flex', justifyContent: 'center', flexDirection: 'column', fontSize: '.8em' }}>
                                                        <h2 style={{ fontWeight: '700', margin: '0', fontFamily: 'Roboto,sans-serif' }}>{this.state.latestStories[0].title}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                }
                            </div>
                            {this.state.latestStories.slice(1).map((item, index) => <TopStorySmallCard story={item} key={item.id} height="79px"></TopStorySmallCard>)}
                            {this.state.topStories.slice(0, 3).map((item, index) => <TopStorySmallCard story={item} key={item.id} height="79px"></TopStorySmallCard>)}
                        </div>
                        <div className={styles.homepageShadow}>
                            <div className="cardContainer">
                                {this.state.topStories[3] &&
                                    <Link href='/'>
                                        <a>
                                            <div>
                                                <CardImage src={this.state.topStories[3].promo_large}
                                                    width={468} height={259}
                                                    alt="story"
                                                />
                                                <div style={{ padding: '10px 10px 15px 10px' }}>
                                                    <div className={styles.hoverEffect} style={{ height: '70px', display: 'flex', justifyContent: 'center', flexDirection: 'column', fontSize: '.8em' }}>
                                                        <h1 className={styles.sectionTopText} style={{ fontWeight: '700', margin: '0', fontFamily: 'Roboto,sans-serif' }}>{this.state.topStories[3].title}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                }
                            </div>
                            {this.state.topStories.slice(4, 10).map((item, index) => <TopStorySmallCard story={item} key={item.id} height="58px"></TopStorySmallCard>)}
                        </div>
                        <div></div>
                    </div>
                </section>
            </>
        )
    }
}