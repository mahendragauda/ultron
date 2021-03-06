import styles from "../../../styles/Home.module.css"
import React from "react"
import Link from "next/link"
import { BTF1, BTF2 } from "../../../public/utils/Ads/Ads"
import CardImage from "../../common/CardImage"
import TopStorySmallCard from "./TopStorySmallCard"
import Script from "next/script"
import BannerAd from "../../common/BannerAd"

export default class TopStory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latestStories: props.latestStories.stories,
            topStories: props.topStories.stories,
            liveTv: props.liveTv
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
                            {this.state.latestStories.slice(1).map((item, index) => <TopStorySmallCard story={item} key={item.id} height="79px" />)}
                            {this.state.topStories.slice(0, 3).map((item, index) => <TopStorySmallCard story={item} key={item.id} height="79px" />)}
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
                            {this.state.topStories.slice(4, 10).map((item, index) => <TopStorySmallCard story={item} key={item.id} height="75px" />)}
                        </div>
                        <div>
                            <div className={styles.videoPlayer}>
                                <div className={styles.videoWrapper}>
                                    <div id={this.state.liveTv.video_id} className={styles.liveTv}></div>
                                    <Script src="https://cdn.jwplayer.com/libraries/RTetulgq.js" strategy="lazyOnload" onLoad={() => {
                                        var playerInstance = jwplayer(this.state.liveTv.video_id);
                                        playerInstance.setup({
                                            playlist: `https://cdn.jwplayer.com/v2/media/${this.state.liveTv.video_id}`,
                                            autostart: false,
                                            autoPause: {
                                                viewability: false
                                            }
                                        });
                                    }}
                                    />
                                </div>
                            </div>
                            <div className={styles.telegram} onClick={() => window.open('https://t.me/RepublicLive')}>
                                <CardImage src="/assets/home/telegram.png"
                                    width={330} height={98}
                                    alt="telegram" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', width: '100%', height: '600px' }}><BannerAd adSlot={BTF1["home"]} /></div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', width: '100%', height: '150px', background: '#f0f0f0' }}><div style={{ width: '728px', height: '90px' }}><BannerAd adSlot={BTF2["home"]} /></div></div>
                </section>
            </>
        )
    }
}