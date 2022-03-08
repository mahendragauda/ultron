import React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import Shows from './Shows'
import style from '../styles/amp/Shows.module.css'

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Channels: props.channelData,
            slug: props.slug
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.slug !== state.slug) {
          return {
            slug: props.slug
          };
        }
        return null;
      }
    render() {
        console.log(this.state.Channels)
        return (
            <>
            <div className={style.menuContainer}>
                <div className={style.selectShow}>Select a Show</div>
                <div className={style.navMenuWrapper}>
                {this.state.Channels.channels.map((channels, index) => (
                        <Link href={channels.complete_slug.split("/")[1]} >
                        <a className={channels.complete_slug.split("/")[1] === this.state.slug ? style.showActive : style.channelText}>
                            {channels.name}
                        </a>
                        </Link>
                    ))}  
                </div>
            </div>
            </>
        )}

}

export default Channels;