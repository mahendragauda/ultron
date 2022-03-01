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
        return (
            <div className="bg-f0f0f0 pad3010">
                <div className="section1200">
                    <h1 className="font25 lineHeight25px padbtm15">WE ALSO RECOMMEND</h1>
                    <div className="newshours-recommend">
                    {this.state.recommendShows.channels.slice(0,3).map((channels, idx) => (
                        <div className="flex">
                            <div className="hover-effect">
                                <a href={channels.complete_slug} alt="Arnab LIVE" title="Arnab LIVE">
                                    <div className="overflowHidden posRelative flex">
                                        <img className="imghover responsiveImage" width="390" height="214" alt="Arnab LIVE" title="Arnab LIVE" src={channels.promo_large}></img>
                                        <div className="posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.6)"}}>
                                            <div className="flex height100p">
                                                <div className="font24 bold color-white" style={{margin: "auto"}}> {channels.name} </div>
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