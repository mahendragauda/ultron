import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

class Recommend extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            recommendShows: props.recommendChannels
        };
    }
    render() {
        console.log(this.state.recommendShows);
        return (
            <div class="bg-f0f0f0 pad3010">
                <div class="section1200">
                    <h1 class="font25 lineHeight25px padbtm15">We also Recommend</h1>
                    <div class="newshours-recommend">
                    {this.state.recommendShows.channels.slice(1,4).map((channels, idx) => (
                        <div class="flex">
                            <div class="hover-effect">
                                <a href={channels.complete_slug} alt="Arnab LIVE" title="Arnab LIVE">
                                    <div class="overflowHidden posRelative flex">
                                        <img class="imghover responsiveImage" width="390" height="214" alt="Arnab LIVE" title="Arnab LIVE" src={channels.promo_large}></img>
                                        <div class="posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.6)"}}>
                                            <div class="flex height100p">
                                                <div class="font24 fontweight500 color-white" style={{margin: "auto"}}>{channels.name}</div>
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