const axios = require('axios');
import Header from '/components/common/Header'
import Cricket from '/components/common/Cricket/CricketMenuBar'
import TeamPointsTable from '/components/common/Cricket/TeamPointsTable'
import styles from '/styles/Topic.module.css'
import Link from 'next/link';

export default function topicDetailsAmp() {
    return (
        <>
            <div class="headerStyle"><div class="row" style={{height:"60px", justifyContent: "space-between",display: "flex", width:"100%", alignItems: "center"}}>

                <button data-vars-event-category="AMP - Header Breadcrumb Menu" data-vars-event-action="click" data-vars-event-label="not set" data-vars-event-value="0" class="rbutton ga_track_anchor" style={{background: "#fff", border:"none", width: "43px", paddingLeft: "15px"}} on="tap:rsidebar"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="black"></path>
                </svg></button>

                <div class={[styles.republiclogo, styles.ga_track_anchor].join(" ")} data-vars-event-category="AMP - Header Republic Logo" data-vars-event-action="click" data-vars-event-label="not set" data-vars-event-value="0" style={{position: "inherit", left: "inherit", padding: "0px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "60px"}}>
                    <a href="https://www.republicworld.com/amp">
                        <div style={{display: "flex",alignItems: "center",justifyContent: "center",maxWidth: "calc(100vw - 120px)",width: "100%",height: "60px"}}>
                        <svg width="253" height="25" viewBox="0 0 253 25"><path d="M45.14 21L41.86 15.44C43.72 14.68 44.56 12.98 44.56 11.24C44.56 9.82 43.98 8.5 42.88 7.7C41.98 7.04 40.88 6.74 39.46 6.74L33.22 6.74L33.22 21H36.8L36.8 15.96H38.42L41.24 21H45.14ZM41.08 11.42C41.08 12.58 40.28 13.32 39 13.32H36.78V9.54L39 9.54C40.2 9.54 41.08 10.1 41.08 11.42ZM57.2952 21V18.08L50.3152 18.08V15.24H56.1552V12.36H50.3152V9.64L57.2552 9.64V6.74L46.7552 6.74L46.7552 21L57.2952 21ZM70.9491 11.32C70.9491 8.68 69.1091 6.74 65.9491 6.74L59.5091 6.74V21H63.0691V16.06H66.0291C69.5091 16.06 70.9491 13.66 70.9491 11.32ZM67.4491 11.4C67.4491 12.68 66.5891 13.32 65.3691 13.32L63.0691 13.32V9.54H65.3691C66.6491 9.54 67.4491 10.16 67.4491 11.4ZM84.5513 15.8V6.74H81.0513V15.72C81.0513 17.4 80.1713 18.3 78.6713 18.3C77.0913 18.3 76.2513 17.3 76.2513 15.7V6.74L72.6713 6.74V15.96C72.6713 19.54 74.9513 21.24 78.5713 21.24C81.9113 21.24 84.5513 19.36 84.5513 15.8ZM98.7514 16.92C98.7514 15.42 97.9114 14.04 96.3114 13.6V13.56C97.8114 12.98 98.4514 11.7 98.4514 10.36C98.4514 8.18 96.9914 6.74 94.1914 6.74L86.9314 6.74V21H94.3914C97.0114 21 98.7514 19.28 98.7514 16.92ZM94.9114 10.88C94.9114 11.78 94.3314 12.42 93.2114 12.42H90.4914V9.5H93.1314C94.0514 9.5 94.9114 9.82 94.9114 10.88ZM95.1314 16.58C95.1314 17.54 94.4714 18.2 93.3314 18.2H90.4914V15.08H93.3114C94.4914 15.08 95.1314 15.64 95.1314 16.58ZM111.002 21V18.08H104.202V6.74L100.642 6.74V21H111.002ZM116.253 21V6.74L112.673 6.74V21H116.253ZM130.109 16.56V15.86L126.749 15.86V16.2C126.749 17.7 125.529 18.32 124.429 18.32C122.969 18.32 121.909 17.48 121.909 16.02V11.7C121.909 10.08 123.129 9.42 124.389 9.42C125.489 9.42 126.749 10.06 126.749 11.54V11.88L130.109 11.88V11.2C130.109 7.9 127.089 6.5 124.309 6.5C121.169 6.5 118.329 8.26 118.329 11.76V16.1C118.329 19.66 121.269 21.24 124.409 21.24C127.169 21.24 130.109 19.84 130.109 16.56ZM149.527 6.74L146.107 6.74L144.127 15.44H144.107L141.987 6.74L138.847 6.74L136.667 15.42H136.607L134.647 6.74L131.087 6.74L134.687 21.02H137.927L140.247 12.02H140.307L142.587 21.02H145.927L149.527 6.74ZM162.734 15.84V11.88C162.734 8.2 159.774 6.5 156.594 6.5C153.534 6.5 150.594 8.3 150.594 11.92V16.02C150.594 19.72 153.494 21.24 156.694 21.24C159.674 21.24 162.734 19.56 162.734 15.84ZM159.154 11.74V15.96C159.154 17.58 157.934 18.32 156.694 18.32C155.234 18.32 154.174 17.46 154.174 15.94V11.76C154.174 10.1 155.354 9.42 156.634 9.42C157.974 9.42 159.154 10.24 159.154 11.74ZM176.742 21L173.462 15.44C175.322 14.68 176.162 12.98 176.162 11.24C176.162 9.82 175.582 8.5 174.482 7.7C173.582 7.04 172.482 6.74 171.062 6.74L164.822 6.74V21H168.402V15.96H170.022L172.842 21H176.742ZM172.682 11.42C172.682 12.58 171.882 13.32 170.602 13.32H168.382V9.54H170.602C171.802 9.54 172.682 10.1 172.682 11.42ZM188.717 21V18.08L181.917 18.08V6.74L178.357 6.74V21L188.717 21ZM202.168 15.78V11.76C202.168 8.44 199.508 6.74 196.328 6.74L190.388 6.74V21H196.368C199.368 21 202.168 19.32 202.168 15.78ZM198.588 11.9L198.568 15.82C198.568 17.28 197.448 18.1 196.148 18.1H193.948V9.66H196.048C197.468 9.66 198.588 10.5 198.588 11.9ZM206.989 21V17.58H203.609V21H206.989ZM220.773 16.56V15.86H217.413V16.2C217.413 17.7 216.193 18.32 215.093 18.32C213.633 18.32 212.573 17.48 212.573 16.02V11.7C212.573 10.08 213.793 9.42 215.053 9.42C216.153 9.42 217.413 10.06 217.413 11.54V11.88H220.773V11.2C220.773 7.9 217.753 6.5 214.973 6.5C211.833 6.5 208.993 8.26 208.993 11.76V16.1C208.993 19.66 211.933 21.24 215.073 21.24C217.833 21.24 220.773 19.84 220.773 16.56ZM234.551 15.84V11.88C234.551 8.2 231.591 6.5 228.411 6.5C225.351 6.5 222.411 8.3 222.411 11.92V16.02C222.411 19.72 225.311 21.24 228.511 21.24C231.491 21.24 234.551 19.56 234.551 15.84ZM230.971 11.74V15.96C230.971 17.58 229.751 18.32 228.511 18.32C227.051 18.32 225.991 17.46 225.991 15.94V11.76C225.991 10.1 227.171 9.42 228.451 9.42C229.791 9.42 230.971 10.24 230.971 11.74ZM251.018 21V6.74L246.578 6.74L243.858 14.14L241.058 6.74L236.638 6.74V21H239.938V11.94H239.978L242.598 19.08H245.058L247.658 11.92H247.718V21H251.018Z" fill="black"></path><path d="M28.125 25L0 25L0 0L28.125 0L28.125 25Z" fill="#D10014"></path><path d="M26.0076 18.4777C26.0076 19.8946 24.8234 21.0433 23.3624 21.0433C21.9015 21.0433 20.7171 19.8946 20.7171 18.4777C20.7171 17.0607 21.9015 15.912 23.3624 15.912C24.8234 15.912 26.0076 17.0607 26.0076 18.4777Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2015 12.7939C17.574 13.6599 16.6735 14.342 15.5244 14.8216L19.8403 20.9378L13.9963 20.9378L13.9878 20.9254L10.3615 15.6372H8.2144V20.9378H3.15607L3.15607 3.38046H11.7174C14.3525 3.38046 16.3368 4.0226 17.6153 5.28904C18.6811 6.2975 19.2218 7.67534 19.2218 9.38384V9.43384C19.2218 10.7292 18.8785 11.8597 18.2015 12.7939ZM14.1378 9.73392V9.68391C14.1378 8.36358 13.1867 7.63649 11.4597 7.63649L8.21449 7.63649L8.21449 11.7813L11.4855 11.7813C13.1463 11.7813 14.1378 11.016 14.1378 9.73392Z" fill="white"></path></svg></div>
                    </a>
                </div>

                <div style={{paddingRight: "15px"}}>
                    <a data-vars-event-category="AMP - Header Live TV" data-vars-event-action="click" data-vars-event-label="not set" data-vars-event-value="0" class={styles.ga_track_anchor} href="https://www.republicworld.com/amp/livetv.html"><svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 18.1078V36.1892C7 36.7966 7.43624 37.2612 8.04027 37.2969H35.9597C36.5302 37.2969 37 36.7966 37 36.1892V18.1078C37 17.5003 36.5302 17 35.9597 17H8.04027C7.4698 17 7 17.5003 7 18.1078ZM8.71136 18.2865H35.255C35.4899 18.2865 35.7248 18.5009 35.7248 18.7868V35.5103C35.7248 35.7961 35.5234 36.0105 35.255 36.0105H8.71136C8.44291 36.0105 8.24156 35.7961 8.24156 35.5103V18.7868C8.24156 18.5009 8.44291 18.2865 8.71136 18.2865Z" fill="#D10014"></path><path d="M29.8859 38.69C30.2215 38.69 30.4899 38.9759 30.4899 39.3332C30.4899 39.6906 30.2215 39.9407 29.8859 39.9407H14.1476C13.7449 39.9407 13.4429 39.762 13.4429 39.3332C13.4429 38.8329 13.7449 38.69 14.1812 38.69H29.8859Z" fill="#D10014"></path><path d="M19.4163 23.111C19.5169 23.1824 19.6512 23.2539 19.7854 23.3254C21.7988 24.5761 23.8458 25.791 25.8592 27.0417C26.4968 27.4348 26.4968 27.7206 25.8257 28.1137C23.8122 29.3644 21.8324 30.5794 19.819 31.7943C19.1814 32.1874 18.9465 32.0445 18.9465 31.2583C18.9465 28.7569 18.9465 26.2913 18.9465 23.7899C18.9465 23.4683 18.9465 23.1467 19.4163 23.111Z" fill="#D10014"></path><path d="M2.70898 9.58789H6.44141V11H0.951172V2.46875H2.70898V9.58789ZM9.32422 11H7.56641V2.46875H9.32422V11ZM14.1113 8.88477L16.0449 2.46875H18.002L15.0312 11H13.1973L10.2383 2.46875H12.1895L14.1113 8.88477ZM23.9434 7.30273H20.5684V9.58789H24.5293V11H18.8105V2.46875H24.5176V3.89258H20.5684V5.92578H23.9434V7.30273ZM34.6191 3.89258H32.0059V11H30.248V3.89258H27.6699V2.46875H34.6191V3.89258ZM38.873 8.88477L40.8066 2.46875H42.7637L39.793 11H37.959L35 2.46875H36.9512L38.873 8.88477Z" fill="#D10014"></path></svg></a>
                </div>

            </div></div>

            <div style={{ top: "60px", marginTop: "60px", zIndex: "1" }}>
                <div
                    style={{
                        background: "rgb(255, 255, 255) none repeat scroll 0% 0%",
                        border: "1px solid rgb(231, 231, 231)",
                        fontFamily: "Roboto, sans-serif",
                        padding: "10px 15px",
                        alignItems: "center",
                        zIndex: "1",
                        top: "60px",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "14px",
                        lineHeight: "16px"
                    }}>
                    <a
                        href="https://www.republicworld.com/amp"
                        style={{
                            padding: "10px 3px",
                            margin: "0px",
                            border: "medium none",
                            background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                            cursor: "pointer",
                            alignItems: "center",
                            width: "85px",
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "14px",
                            lineHeight: "16px"
                        }}
                    >
                        <svg width="12" height="12">
                            <path id="iconColorCanvas-bezier" stroke="none" fill="rgb(29, 29, 29)" d="M 12,5.25 L 2.87,5.25 7.07,1.06 6,-0 0,6 6,12 7.06,10.94 2.87,6.75 12,6.75 12,5.25 Z M 12,5.25"></path>
                        </svg>
                    </a>
                    <div style={{ alignItems: "flex-end", flexDirection: "column", width: "65vw", display: "flex", justifyContent: "space-between", fontSize: "14px", lineHeight: "16px" }}>
                        <div style={{ color: "rgb(70, 70, 70)", fontSize: "10px", lineHeight: "12px" }}>YOU ARE HERE:</div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", lineHeight: "16px" }}>
                            <a style={{ color: "rgb(15, 15, 15)" }} href="https://www.republicworld.com/amp">
                                <div style={{ maxWidth: "21.6667vw", color: "rgb(15, 15, 15)", textOverflow: "ellipsis", height: "16px", whiteSpace: "nowrap", overflow: "hidden" }}>..</div>
                            </a>
                            <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>/</span>
                            <div style={{ maxWidth: "21.6667vw", color: "rgb(15, 15, 15)", textOverflow: "ellipsis", height: "16px", whiteSpace: "nowrap", overflow: "hidden" }}>Topics</div>
                            <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>/</span>
                            <a style={{ color: "rgb(15, 15, 15)" }} href="https://www.republicworld.com/amp/topics/ipl-2020">
                                <div style={{ maxWidth: "21.6667vw", color: "rgb(15, 15, 15)", textOverflow: "ellipsis", height: "16px", whiteSpace: "nowrap", overflow: "hidden" }}>IPL 2020: News, Schedule, Teams, Results, and Updates</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class={styles.storyTitle}><h1 style={{ fontSize: "20px", color: "#000", fontWeight: "600", lineHeight: "1.1", letterSpacing: "0.5px", fontFamily: "sans-serif" }}>IPL 2020: News, Schedule, Teams, Results, and Updates</h1></div>
            <div style={{ padding: "0 3px" }}><h2 class={styles.storyDescription}>Get the full IPL 2020 schedule, teams list, points table, cricket live score, news and updates. Full IPL coverage, players and team stats on Republic World.</h2></div>
            <div class={styles.detailsContainer}>
                <div><span class={styles.smallestText}>Republic World</span></div>
                <div style={{ marginTop: "3px" }}><span class={styles.smallText}>Updated On: <time datetime="2020-09-11 23:49:23" title="1 year ago">September 11, 2020 23:49 IST</time></span></div>
            </div>

            <div class={styles.content}>
                <div class={styles.republicDiv}>
                    <div class={styles.republicText}>
                        <amp-img
                            alt="Republic World"
                            src="https://www.republicworld.com/ampassets/images/rlogo1.png"
                            width="125"
                            height="25"
                            layout="fixed"
                            class={[styles.iAmphtmlElement, styles.iAmphtmlLayoutFixed, styles.iAmphtmlLayoutSizeDefined, styles.iAmphtmlBuilt, styles.iAmphtmlLayout].join(" ")}
                            i-amphtml-layout="fixed"
                            style={{ width: "125px", height: "25px", loaderDelayOffset: "270ms !important" }}
                            i-amphtml-auto-lightbox-visited=""
                        >
                            <img decoding="async" alt="Republic World" src="https://www.republicworld.com/ampassets/images/rlogo1.png" class={[styles.iAmphtmlFillContent, styles.iAmphtmlReplacedContent].join(" ")} iAmphtmlAutoLightboxVisited="" />
                        </amp-img>
                    </div>

                    <div class={styles.socialShare}>
                        <div style={{ margin: "6px" }}>
                            <amp-social-share class={[styles.rounded, styles.iAmphtmlElement, styles.iAmphtmlLayoutFixed, styles.iAmphtmlLayoutSizeDefined, styles.ampSocialShareWhatsapp, styles.iAmphtmlBuilt, styles.iAmphtmlLayout].join(" ")} data-param-text="IPL 2020: News, Schedule, Teams, Results, and Updates - https://www.republicworld.com/topics/ipl-2020" type="whatsapp" width="25px" height="25px" i-amphtml-layout="fixed" style={{ width: "25px", height: "25px" }} role="button" tabindex="0" aria-label="Share by whatsapp">
                            </amp-social-share>
                        </div>
                        <div style={{ margin: "6px" }}>
                            <amp-social-share data-param-href="https://www.republicworld.com/topics/ipl-2020" data-param-app_id="1923161321262442" class="rounded i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined amp-social-share-facebook i-amphtml-built i-amphtml-layout" type="facebook" width="25px" height="25px" i-amphtml-layout="fixed" style={{ width: "25px", height: "25px" }} role="button" tabindex="0" aria-label="Share by facebook"></amp-social-share>
                        </div>
                        <div style={{ margin: "6px" }}>
                            <amp-social-share data-param-text="IPL 2020: News, Schedule, Teams, Results, and Updates" data-param-url="https://www.republicworld.com/topics/ipl-2020" class="rounded i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined amp-social-share-twitter i-amphtml-built i-amphtml-layout" type="twitter" width="25px" height="25px" i-amphtml-layout="fixed" style={{ width: "25px", height: "25px" }} role="button" tabindex="0" aria-label="Share by twitter"></amp-social-share>
                        </div>
                        <div style={{ margin: "4px 0px 0px 5px" }}>
                            <a target="_blank" title="Share on Koo" rel="nofollow" href="https://www.kooapp.com/create?title=IPL%202020%3A%20News%2C%20Schedule%2C%20Teams%2C%20Results%2C%20and%20Updates https%3A%2F%2Fwww.republicworld.com%2Ftopics%2Fipl-2020&amp;link=https%3A%2F%2Fwww.republicworld.com%2Ftopics%2Fipl-2020&amp;language=en&amp;handle=republic&amp;utm_source=republic&amp;utm_campaign=republic_share"><amp-img src="https://www.republicworld.com/ampassets/images/koo1.png" width="28" height="28" layout="fixed" class="i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" i-amphtml-layout="fixed" style={{ width: "28px", height: "28px", loaderDelayOffset: "270ms !important" }} i-amphtml-auto-lightbox-visited=""><img decoding="async" src="https://www.republicworld.com/ampassets/images/koo1.png" class={[styles.iAmphtmlFillContent, styles.iAmphtmlReplacedContent].join(" ")} i-amphtml-auto-lightbox-visited="" /></amp-img></a>
                        </div>
                    </div>
                    <div class={styles.MainStory}>

                        <div class={styles.innerStoryContainer}>
                            <div class={styles.StoryContainer} id={styles.StoryContainer}>

                                <p>Get the full IPL 2020 schedule, teams list, points table, cricket live score, news and updates. Full IPL coverage, players and team stats on Republic World.</p><div>

                                    <h2>IPl 2020 Teams:</h2>
                                    <ul>
                                        <li>
                                            <p>Chennai Super Kings (CSK)</p>
                                        </li>
                                        <li>
                                            <p>Chennai Super Kings (CSK)</p>
                                        </li>

                                    </ul>
                                    <p><a href="https://www.republicworld.com/topics/ipl-2020/schedule.html">Full IPL Schedule</a></p>
                                    <p>
                                        With just two weeks to go for the IPL 2020, the schedule for the 13th edition of the tournament has been announced. Defending champions Mumbai Indians will face MS Dhoni-led Chennai Super Kings in the opening clash of the
                                        tournament on September 19 in Abu Dhabi. Compared to the regular 8 pm IST start, the games will start half an hour earlier in the upcoming edition. The afternoon matches are set to begin at 3:30 PM IST while the evening
                                        games will commence at 7:30 PM IST.
                                    </p>
                                    <div style={{ marginTop: "10px" }}>
                                        <span class={styles.smallText}> First Published: <time datetime="2020-09-11 23:49:23" title="1 year ago">September 11, 2020 23:49 IST</time></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ border: "0.5px solid rgb(225, 225, 225)", marginLeft: "15px", marginRight: "15px" }}></hr>

                </div>
            </div>

            <div class={styles.WeRecommend}>
                <span style={{ fontWeight: "600", marginLeft: "15px", fontFamily: "arial, sans-serif", letterSpacing: "0.5px", fontSize: "16px", color: "rgb(230, 0, 0)" }}>Related Stories</span>
                <amp-carousel controls="" height="310" layout="fixed-height" type="slides" style={{ marginTop: "15px", marginBottom: "15px", height: "310px" }} class={[styles.iAmphtmlElement, styles.iAmphtmlLayoutFixedHeight, styles.iAmphtmlLayoutSizeDefined, styles.iAmphtmlBuilt, styles.iAmphtmlLayout].join(" ")} i-amphtml-layout="fixed-height">

                    <div class={styles.iAmphtmlCarouselContent}>
                        <div class={styles.iAmphtmlCarouselScroll} mixed-length="false" user-scrollable="true" hide-scrollbar="true" horizontal="true" loop="false" snap="true" aria-live="polite" style={{ visibleCount: "1 !important" }}><div class={[styles.iAmphtmlCarouselSlotted, styles.iAmphtmlCarouselWrapper, styles.iAmphtmlCarouselSlideItem].join(" ")} aria-hidden="false" style={{ scrollSnapAlign: "center", transform: "translate(0px, 0px)", contentTransform: "translate(0px, 0px) !important" }}>
                            <div class={styles.ampCarouselSlide}>
                                <a href="https://www.republicworld.com/amp/sports-news/ipl-2022/lucknow-super-giants-ipl-2022-full-schedule-fixtures-match-timings-full-squad-and-venues-articleshow.html" style={{ display: "block", width: "425px", height: "233px" }}>
                                    <amp-img src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/vjmm7cyuikfc9cxw_1646623357.jpeg?tr=w-425,h-233" width="425" height="233" class={[styles.iAmphtmlElement, styles.iAmphtmlLayoutFixed, styles.iAmphtmlLayoutSizeDefined, styles.iAmphtmlBuilt, styles.iAmphtmlLayout].join(" ")} i-amphtml-layout="fixed" style={{ width: "425px", height: "233px" }} i-amphtml-auto-lightbox-visited=""><img decoding="async" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/vjmm7cyuikfc9cxw_1646623357.jpeg?tr=w-425,h-233" class={[styles.iAmphtmlFillContent, styles.iAmphtmlReplacedContent].join(" ")} i-amphtml-auto-lightbox-visited="" /></amp-img>
                                    <span class={styles.RecommendCaptionOne} style={{
                                        fontWeight: "600", fontSize: "16px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "pre-wrap",
                                        color: "black", display: "inline-block", padding: "0.5rem 9px 2.5rem", width: "350px"
                                    }}>Lucknow Super Giants IPL 2022: Full schedule, fixtures, match timings, full squad &amp; venues</span>
                                </a>
                            </div></div>
                            <div class={[styles.iAmphtmlCarouselSlotted, styles.iAmphtmlCarouselWrapper, styles.iAmphtmlCarouselSlideItem].join(" ")} aria-hidden="true" style={{ scrollSnapAlign: "center", transform: "translate(0px, 0px)", contentTransform: "translate(0px, 0px) !important" }}><div class={styles.ampCarouselSlide}>
                                <a href="https://www.republicworld.com/amp/sports-news/ipl-2022/gujarat-titans-ipl-2022-full-schedule-fixtures-match-timings-full-squad-and-venues-articleshow.html" style={{ display: "block", width: "425px", height: "233px" }}>
                                    <amp-img src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/hm1jviwsuvojp1id_1646624370.jpeg?tr=w-425,h-233" width="425" height="233" class={[styles.iAmphtmlElement, styles.iAmphtmlLayoutFixed, styles.iAmphtmlLayoutSizeDefined, styles.iAmphtmlBuilt, styles.iAmphtmlLayout].join(" ")} i-amphtml-layout="fixed" style={{ width: "425px", height: "233px" }} i-amphtml-auto-lightbox-visited=""><img decoding="async" src="https://img.republicworld.com/republic-prod/stories/promolarge/mdpi/hm1jviwsuvojp1id_1646624370.jpeg?tr=w-425,h-233" class={[styles.iAmphtmlFillContent, styles.iAmphtmlReplacedContent].join(" ")} i-amphtml-auto-lightbox-visited="" /></amp-img>
                                    <span class={styles.RecommendCaptionOne} style={{ fontWeight: "600", fontSize: "16px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "pre-wrap", color: "black", display: "inline-block", padding: "0.5rem 9px 2.5rem", width: "350px" }}>Gujarat Titans IPL 2022: Full schedule, fixtures, match timings, full squad and venues</span>
                                </a>
                            </div></div>
                        </div><div class={styles.iAmphtmlCarouselArrows}><div tabindex="-1" class={[styles.ampCarouselButton, styles.ampCarouselButtonPrev, styles.ampDisabled].join(" ")} role="button" aria-disabled="true" title="Previous item in carousel (1 of 40)" dir="ltr"></div><div tabindex="0" class={[styles.ampCarouselButton, styles.ampCarouselButtonNext].join(" ")} role="button" aria-disabled="false" title="Next item in carousel (2 of 40)" dir="ltr"></div></div></div></amp-carousel>
            </div>


        </>
    )
}


