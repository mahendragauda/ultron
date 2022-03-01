import styles from "../../../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import CardImage from "../../common/CardImage";

export default function TopStorySmallCard({ story, height }) {
    return (
        <>
            <div className={styles.smallCardContainer}>
                <Link href='/'>
                    <a>
                        <div className={styles.flex}>
                            <div className={height == '79px' ? styles.smallCardImage : ''}>
                                <CardImage src={story.promo_large} className={styles.smallImageTag}
                                    alt={story.title} width={132} height={75}
                                />
                            </div>
                            <div className={height == '75px' ? styles.smallCardTitleCenter : styles.smallCardTitle} style={{ height: `${height}` }}>
                                <h2 className={styles.smallCardHeadline}>{story.title}</h2>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}