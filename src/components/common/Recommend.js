import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

class Recommend extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.recommend);
        this.state = {
            recommendShows: props.recommend
        };
    }
    render() {
        console.log(this.state.recommendShows)
        return (
            <section class="padtop15 newshour-wrapper">
                <div class="bg-f0f0f0 pad3010">
                    <div class="section1200">
                        <h1 class="font25 lineHeight25px padbtm15">WE ALSO RECOMMEND</h1>
                        <div class="newshours-recommend">
                            <div class="flex">
                                <div class="hover-effect">
                                    <a href="https://www.republicworld.com/shows/arnab-live" alt="Arnab LIVE" title="Arnab LIVE">
                                        <div class="overflowHidden posRelative flex">
                                            <img class="imghover responsiveImage" width="390" height="214" alt="Arnab LIVE" title="Arnab LIVE" src="https://img.republicworld.com/republic-prod/channels/promolarge/hdpi/164226481661e2f8f00a211.jpeg?tr=w-390,h-214"></img>
                                            <div class="posAbsolute width100 height100p" style={{ background: "rgba(0, 0, 0, 0.6)" }}>
                                                <div class="flex height100p">
                                                    <div class="font24 fontweight500 color-white" style={{ margin: "auto" }}>Arnab LIVE</div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Recommend;