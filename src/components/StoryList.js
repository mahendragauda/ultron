import React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import style from '../styles/amp/Shows.module.css'


class StoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: props.shows,
        };
    }

    render() {
        console.log(this.state.showList)
        return (
            <>
               <div className={style.storyWrapper}>
                    <Link href="https://www.republicworld.com/amp/shows/nation-wants-to-know/nirmala-sitharaman-speaks-to-arnab-about-indias-economy-takes-on-budget-2022s-critics.html">
                        <a>
                            <div className={style.hashTagContainer}>
                                <div className={style.showTitleWrapper}>
                                    <div className={style.showTitleDiv}>
                                        <div className={style.showTitleText}>Nation wants to know</div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className={style.headLine}>#NirmalaSpeaksToArnab</h3>
                                </div>
                            </div>
                            <div className={style.imgContainer}>
                                <div className={[style.imgDiv,style.progressive].join(" ")}>
                                    <img src="https://img.republicworld.com/republic-prod/shows/promolarge/hdpi/164408197961feb33b42b1f.jpeg?tr=w-425,h-233"></img>
                                    </div>
                            </div>
                            <div className={style.showDescription}>
                        <div className={style.descriptionText}>Nirmala Sitharaman speaks to Arnab about India's economy; takes on Budget 2022's critics</div>
                    </div>
                        </a>
                    </Link>
                </div> 
            </>
           
        )}

}

export default StoryList;