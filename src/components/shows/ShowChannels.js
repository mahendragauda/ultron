import React, { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import style from '../../styles/Show.module.css'

class ShowChannels extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            showChannels: props.recommendChannels,
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
    onLeftArwClicked = () => {
        const navShowsContainer= document.getElementById('navShowsContainer')
        const leftArrow = document.getElementById('leftArrowIcon')
        if (navShowsContainer) {
          navShowsContainer.scrollLeft -= 400
        }
        if (navShowsContainer.scrollLeft == 0) {
          leftArrow.style.borderLeftColor = "rgb(221, 221, 221)"
          leftArrow.style.borderTopColor = "rgb(221, 221, 221)"
        }
        const rightArrow = document.getElementById('rightArrowIcon')
        if (!(navShowsContainer.scrollWidth >navShowsContainer.clientWidth +navShowsContainer.scrollLeft)) {
          rightArrow.style.borderRightColor = "#000"
          rightArrow.style.borderBottomColor = "#000"
        }
      }
    
      onRightArwClicked = () => {
        const navShowsContainer = document.getElementById('navShowsContainer')
        const leftArrow = document.getElementById('leftArrowIcon')
        leftArrow.style.borderLeftColor = "#000"
        leftArrow.style.borderTopColor = "#000"
        if (navShowsContainer) {
          navShowsContainer.scrollLeft += 400
        }
        const rightArrow = document.getElementById('rightArrowIcon')
        if (!(navShowsContainer.scrollWidth >navShowsContainer.clientWidth +navShowsContainer.scrollLeft)) {
          rightArrow.style.borderRightColor = "rgb(221, 221, 221)"
          rightArrow.style.borderBottomColor = "rgb(221, 221, 221)"
        }else {
          rightArrow.style.borderRightColor = "#000"
          rightArrow.style.borderBottomColor = "#000"
        }
      }
    render() {
        return (
            <div className={style.navWrapper}>
                <div className={style.menusDiv}>
                    <div className={style.navShowsContainer} id="navShowsContainer">
                        <div className={style.navShowsWrapper}>
                        {this.state.showChannels.channels.map((channels, idx) => (
                        <Link href={channels.complete_slug.split("/")[1]} >
                        <a className={style.channelText}>
                            <div className={channels.complete_slug.split("/")[1] === this.state.slug ? style.showActive : style.navMenuText}>{channels.name}</div>
                            <div className={channels.complete_slug.split("/")[1] === this.state.slug ? style.highlightLine : ""}></div>
                        </a>
                        </Link>
                    ))}  
                        </div>
                    </div>
                    <div className={style.arrowIconWrapper}>
                    <div onClick={this.onLeftArwClicked} id='leftArrowIcon' style={{ transform: 'rotate(-45deg)', width: '8px', height: '8px', cursor: 'pointer', borderLeft: '2px solid #000', borderTop: '2px solid #000', borderColor: 'rgb(221, 221, 221)' }}></div>
                    <div onClick={this.onRightArwClicked} id='rightArrowIcon' style={{ borderRight: '2px solid #000', borderBottom: '2px solid #000', transform: 'rotate(-45deg)', width: '8px', height: '8px', cursor: 'pointer',borderColor: 'rgb(221, 221, 221)'}}></div>
                    </div>
                </div>
            </div>
        )
}
}
export default ShowChannels;