import React from "react";
import Link from 'next/link';
import styles from '/styles/Cricket.module.css'


class WatchUsLive extends React.Component {

    render() {
        return (
            <div className={[styles.rLogo, styles.watchLivetv, styles.mrgnbtm20].join(" ")} style={{display: "block"}}>
                <div className={[styles.flex, styles.flexJustifyBetween, styles.mrgnbtm10].join(" ")}>
                    <div style={{ color: "white"}}>WATCH US LIVE</div>
                    <div className={styles.flex}>
                        <div>
                            <img className={styles.livetvLogo} src="https://www.republicworld.com/assets/images/live-tv/tv-logo.png" alt="Live Tv"/>
                        </div>
                        <div className={[styles.font18, styles.fontweight100].join(" ")}>LIVE TV</div>
                    </div>
                </div>
                <div className={[styles.flex, styles.flexJustifyBetween].join(" ")}>
                    <Link href="https://www.republicworld.com/livetv.html">
                        <a target="_blank" className={styles.mrgnright10} spark_ve_preview="none">
                            <img className={styles.responsiveImage} width="176" height="35" src="https://img.republicworld.com/republic-prod/logo/tr:w-176,h-35/r-logo-web.png" alt="Republic"/>
                        </a>
                    </Link>
                    <Link href="https://bharat.republicworld.com/livetv">
                        <a target="_blank" className={styles.mrgnleft10} spark_ve_preview="none">
                            <img className={styles.responsiveImage} width="146" height="35" src="https://img.republicworld.com/republic-prod/logo/tr:w-146,h-35/rbharat-logo-web.png" alt="R-BHARAT"/>
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default WatchUsLive;

