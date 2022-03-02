import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import style from '../../styles/Debate.module.css'

class Recommend extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            recommendShows: props.recommendChannels
        };
    }
    render() {
        return (
            <div style={{backgroundColor: "#f0f0f0",padding: "30px 10px!important"}}>
                <div className={style.recommendSection}>
                    <h1 className={style.recommendText}>WE ALSO RECOMMEND</h1>
                    <div className={style.newshoursRecommend}>
                    {this.state.recommendShows.channels.slice(0,3).map((channels, idx) => (
                        <div className={style.flex}>
                            <div className={style.storyWrapper}>
                                <a href={channels.complete_slug} alt="Arnab LIVE" title="Arnab LIVE">
                                    <div className={style.storyDiv}>
                                        <img className={[style.imgHover,style.responsiveImage].join(" ")}  width="390" height="214" alt="Arnab LIVE" title="Arnab LIVE" src={channels.promo_large}></img>
                                        <div className={style.channelDiv} style={{background: "rgba(0, 0, 0, 0.6)"}}>
                                            <div className={style.channelTextDiv}>
                                                <div className={style.channelName}style={{margin: "auto"}}> {channels.name} </div>
                                            </div>
                                        </div>
									</div>
								</a>
							</div>
                        </div>
                    ))}  
                    </div>
                </div>
            </div>
            );
    }
}
export default Recommend;