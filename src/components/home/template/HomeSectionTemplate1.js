import Link from 'next/link'
import styles from '../../../styles//Home.module.css'
import CardImage from '../../common/CardImage'
import VideoPlayIcon from '../../common/VideoPlayIcon'

export default function HomeSectionTemplate1({ props }) {
    return (
        <>
            <section className={styles.homepageWrapper}>
                <div className={styles.firstTemplateContainer}>
                    <div className={styles.debateHeadline}>
                        <h2 style={{ fontWeight: '700', margin: '0', fontSize: '25px', lineHeight: '25px!important' }}>{props.title}</h2>
                        <Link href={props.complete_slug}>
                            <a style={{ textDecoration: 'underline!important', paddingTop: '5px!important', fontSize: '14px' }}>View more</a>
                        </Link>
                    </div>
                    <div className={styles.firstTemplateTop}>
                        {props.stories.slice(0, 4).map((story, index) => <div className={styles.hoverEffect}>
                            <Link href={story.complete_slug}>
                                <a style={{ width: '100%' }}>
                                    <div className={styles.templateCard}>
                                        <div className={styles.debateCardImage} >
                                            {props.type != "webstories" && <CardImage src={story.promo_large}
                                                width={282} height={154}
                                                alt={story.title}
                                                isResponsive={true} />}
                                            {story.type === "V" && <VideoPlayIcon />}
                                        </div>
                                        <div>
                                            <div className={styles.templateCardTime}>{story.updated_on}</div>
                                            <div className={styles.templateCardHeadline}>
                                                <h2 style={{ fontWeight: '700', margin: '0', fontSize: '16px', lineHeight: '21px!important' }}>{story.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}