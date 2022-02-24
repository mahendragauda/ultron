import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

class Recommend extends React.Component {
    CSS = {
        section: {
            padding: '30px 10px',
            backgroundColor: '#f0f0f0',
        },
        section12: {
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            position: 'relative',
        },
        heading:{
            margin: '0',
            paddingBottom: '15px',
            fontSize: '25px',
            lineHeight: '25px',
        },
        newshours:{
            display: 'flex',
            justifyContent: 'spaceBetween',
            width: '100%',
        },
        flex:{
            display: '-webkit-box',
            display: '-webkit-flex',
            display: 'flex',
            flex: 'initial',
            paddingRight: '10px',
        },
        a:{
            textDecoration: 'none',
            border: 'none',
            color: '#000',
        },
        overflowHidden:{
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flex: 'initial',
        },
        img:{
            height: 'auto',
            width: '100%',
            width:'390px',
            height:'214px',
            hover:'all .5s',
        },
        imghover:{
            
        },
        absolute:{
            position:'absolute',
            height:'100%',
            width:'100%',
            background: 'rgba(0, 0, 0, 0.6)',
        },
        flexheight:{
            height:'100%',
            display: 'flex',
            flex: 'initial',
        },
        font:{
            fontSize: '24px',
            fontWeight: '600',
            color: '#fff',
            margin: 'auto',
        },
    };
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
                    {this.state.recommendShows.channels.slice(0,3).map((channels, idx) => (
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