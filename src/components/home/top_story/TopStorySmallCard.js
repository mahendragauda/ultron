import styles from "../../../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import CardImage from "../../common/CardImage";

export default function TopStorySmallCard({ story,height }) {
    return (
        <>
            <div className={styles.smallCardContainer}>
                <Link href='/'>
                    <a>
                        <div className={styles.flex}>
                            <div className={styles.smallCardImage}>
                                <CardImage src={story.promo_large} className={styles.smallImageTag}
                                    width={142} height={82}
                                    alt={story.title}
                                />
                            </div>
                            <div className={styles.smallCardTitle} style={{height:`${height}`}}>
                                <h2 className={styles.smallCardHeadline}>{story.title}</h2>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}