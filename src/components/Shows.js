import React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import style from '../styles/amp/Shows.module.css'
import Channels from '../components/Channels'
import StoryList from "./StoryList";

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: props.showData,
            showChannels: props.channelName,
            showSlug: props.slug
        };
    }

    render() {
        return (
            <>
                <div className={style.adContainer}>
                    <div className={style.mainAdSection}>
                        <span className={style.adTextDiv}>Advertisement</span>
                    </div>
                </div>
                {/* View Start */}
                <div className={style.showsHeader}>
                    <img src="/assets/shows/showHeader.svg" />
                </div>
                <Channels channelData={this.state.showChannels} slug={this.state.showSlug} />
                <div className={style.showHeadingContainer}>
                    <div className={style.headingWrapper}>
                        <div className={style.showName}>Nation Wants To Know</div>
                        <div className={style.showBy}>Show By Mr.Arnab Goswami</div>
                    </div>
                </div>
                <StoryList shows={this.state.shows} />
            </>
           
        )}

}

export default Show;