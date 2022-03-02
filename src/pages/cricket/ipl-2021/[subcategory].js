import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/Cricket/CricketMenuBar'
import CricketNewsCard from '/components/common/Cricket/CricketNewsCard'
import TeamPointsTable from '/components/common/Cricket/TeamPointsTable'
import TeamPointsTablePage from '/components/common/Cricket/TeamPointsTablePage'
import Schedule from '/components/common/Cricket/Schedule'
import Results from '/components/common/Cricket/Results'
import Link from 'next/link';
const axios = require('axios');
var keyvalue;
import styles from '/styles/Cricket.module.css'

export default function ipl({ cricketStories, pointsTable, scheduleData, resultData }) {
    const router = useRouter()
    return (
        <>
            <Header />
            <Cricket slug={router.query.subcategory} />
            <nav id="breadcrumb" className={[styles.font14, styles.fontRoboto, styles.font14, styles.flex, styles.flexAlignItemsCenter].join(" ")} style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;", paddingRight: "5px" }}> <span> Home  </span></a></Link></span> /
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important", paddingRight: "5px", paddingLeft: "5px" }}> <span> Cricket </span></a></Link></span> /
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ textDecoration: "underline !important", paddingRight: "5px", paddingLeft: "5px" }}> IPL 2021</a></Link></span> /
                <span className={styles.txtTransformCaps}><Link href="/"><a style={{ color: "#e60000", paddingRight: "5px", paddingLeft: "5px" }} className="color-e60000 fontweight500"> {router.query.subcategory.charAt(0).toUpperCase() + router.query.subcategory.replace(".html", "").slice(1)}</a></Link></span>
            </nav>
            {(() => {
                switch (router.query.subcategory) {
                    case 'schedule.html':
                        return <>
                            <Schedule data={scheduleData.seasons[0].matches} keyvalue={cricketStories.data.stories.slice(0, 6)} videos={cricketStories.data.video_stories.slice(0, 2)} points={pointsTable[0].rankings}/>
                        </>
                    case 'ipl-points-table.html':
                        return <>
                            <TeamPointsTablePage data={pointsTable[0].rankings} keyvalue={cricketStories.data.stories.slice(0, 5)}/>
                            
                        </>
                    case 'result.html':
                        return <>
                            <Results data={resultData.matches} keyvalue={cricketStories.data.stories.slice(0, 5)} points={pointsTable[0].rankings}/>
                        </>
                    default:
                        return null
                }
            })()}
        </>
    )
}

export async function getServerSideProps() {
    var cricketStories
    var pointsTable
    var scheduleData
    var resultData
    const cricketStoriesRequest = axios.get(`https://jarvis.mynationvoice.com/sub-category/cricketstories?sub_category_slug=cricket-news&page_no=1&limit=12&event=ipl-2021`)
    const pointsTableRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/ipl_rankings_2021.json`)
    const scheduleDataRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/schedule_iplt20_2021.json`)
    const resultDataRequest = axios.get(`https://groot.republicworld.com/behtarindia/cricket/results_iplt20_2021.json`)
    await Promise.all([cricketStoriesRequest, pointsTableRequest, scheduleDataRequest, resultDataRequest]).then(function (results) {
        cricketStories = results[0].data;
        pointsTable = results[1].data;
        scheduleData = results[2].data;
        resultData = results[3].data;

    });
    return { props: { cricketStories, pointsTable, scheduleData, resultData } }
};
