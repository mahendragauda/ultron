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
        this.state = {};
    
    }
    render() {
        return (
            <div style={this.CSS.section}>
                <div style={this.CSS.section12}>
                    <h1 style={this.CSS.heading}>WE ALSO RECOMMEND</h1>
                    <div style={this.CSS.newshours}>
                        <div style={this.CSS.flex}>
                            <div>
                                <a href="https://www.republicworld.com/shows/arnab-live" alt="Arnab LIVE" title="Arnab LIVE">
                                    <div style={this.CSS.overflowHidden}>
                                        <img style={this.CSS.imghover} width="390" height="214" alt="Arnab LIVE" title="Arnab LIVE" src="https://img.republicworld.com/republic-prod/channels/promolarge/hdpi/164226481661e2f8f00a211.jpeg?tr=w-390,h-214"></img>
                                        <div style={this.CSS.absolute}>
                                            <div style={this.CSS.flexheight}>
                                                <div style={this.CSS.font}>Arnab LIVE</div>
                                            </div>
                                        </div>
									</div>
								</a>
							</div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}
export default Recommend;