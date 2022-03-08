import React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import style from '../styles/amp/Shows.module.css'
import VideoPlayIcon from "./common/VideoPlayIcon";


class StoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: props.shows,
        };
    }

    render() {
        return (
            <>
             {this.state.showList.shows.map((stories, idx) => (
               <div className={style.storyWrapper}>
                    <Link href={stories.complete_slug}>
                        <a>
                            <div className={style.hashTagContainer}>
                                <div className={style.showTitleWrapper}>
                                    <div className={style.showTitleDiv}>
                                        <div className={style.showTitleText}>{stories.sub_category_name}</div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className={style.headLine}>{stories.headline}</h3>
                                </div>
                            </div>
                            <div className={style.imgContainer}>
                                <div className={style.progressive}>
                                    <img src={stories.placeholder} className={style.imgDiv} />
                                </div>
                                <VideoPlayIcon />
                            </div>
                            <div className={style.showDescription}>
                        <div className={style.descriptionText}>{stories.title}</div>
                    </div>
                        </a>
                    </Link>
                </div> 
                 ))}  
            </>
           
        )}

}

export default StoryList;