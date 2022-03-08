import Link from "next/link";
import styles from "../../../styles/Home.module.css"
import React from "react"
import CardImage from "../../common/CardImage";
import VideoPlayIcon from "../../common/VideoPlayIcon";


export default class Debate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            debate: props.debate,
            poll: props.poll,
            isLoaderVisible: false
        }
        // this.onPollOptionSelection = this.onPollOptionSelection.bind(this)
    }

    async onPollOptionSelection(pollID, submittedPollId) {
        this.setState({
            isLoaderVisible: true
        })
        fetch(`jarvis.republicworld.com/polls/${pollID}`, {
            method: "POST",
            body: JSON.stringify({
                poll_option_id: submittedPollId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <>
                <section className={styles.debatePollContainer}>
                    <div className={styles.debatePollWrapper}>
                        <div className={styles.debateBox}>
                            <div className={styles.debateContainer}>
                                <div className={styles.debateHeadline}>
                                    <h2 style={{ fontWeight: '700', margin: '0', fontSize: '25px', lineHeight: '25px' }}>THE DEBATE</h2>
                                    <Link href={this.state.debate.complete_slug}>
                                        <a style={{ textDecoration: 'underline!important', paddingTop: '5px!important', fontSize: '14px' }}>View more</a>
                                    </Link>
                                </div>
                                <div className={styles.debateWrapper}>
                                    {this.state.debate.debates.slice(0,2).map((item, index) => <div key={item.id} className={styles.debateCard}>
                                        {(index < 2) &&
                                            <Link href={item.complete_slug}>
                                                <a>
                                                    <div className={styles.debateCardImage}>
                                                        <CardImage src={item.promo_large}
                                                            width={283} height={156}
                                                            alt={item.question}
                                                            isResponsive={true} />
                                                        <VideoPlayIcon />
                                                    </div>
                                                    <div style={{ padding: '10px' }}>
                                                        <div className={styles.debateTimeStamp}>{item.updated_on}</div>
                                                        <div className={styles.debateHashTag}>{item.hashtag}</div>
                                                        <div className={styles.debateQuestion}>{item.question}</div>
                                                    </div>
                                                </a>
                                            </Link>
                                        }
                                    </div>)}
                                </div>
                            </div>
                            <div className={styles.pollContainer}>
                                <div className={styles.questionWrapper}>
                                    <div style={{ height: '100%', width: '100%', padding: '4px', background: '#fff' }}>
                                        <div className={styles.pollQuestion}>
                                            <div className={styles.debateHeadline}>
                                                <h2 style={{ fontWeight: '700', margin: '0', color: '#d10014', fontSize: '25px', lineHeight: '25px!important' }}>ARNAB & YOU</h2>
                                            </div>
                                            <h2 style={{ height: '80px', fontWeight: '700', margin: '0', paddingTop: '5px', fontSize: '18px', lineHeight: '23px' }}>{this.state.poll.poll.poll_question}</h2>
                                        </div>
                                        <div className={this.state.isLoaderVisible ? styles.pollLoader : styles.displayNone}>
                                            <div className={styles.loaderContianer}>
                                                {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => <div key={index}></div>)}
                                            </div>
                                        </div>
                                        <div className={styles.pollOptionContainer}>
                                            {this.state.poll.poll.poll_options.map((pollItem, index) =>
                                                <div key={pollItem.poll_option_id} className={styles.pollOption} onClick={()=>this.onPollOptionSelection(this.state.poll.poll.poll_id, pollItem.poll_option_id)}>{pollItem.poll_option}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </>
        )
    }

}