import { useRouter } from "next/router";
import Header from '/components/common/Header'
import Cricket from '/components/common/CricketMenuBar'
import CricketNewsCard from '/components/common/CricketNewsCard'
import TeamPointsTable from '/components/common/TeamPointsTable'
import Link from 'next/link';
import Image from "next/image";


export default function ipl() {
    const router = useRouter()
    let isIpl2021 = router.query.ipl === "ipl-2021"
    // if(isIpl2021){
    return (
        <>
            <Header />
            <Cricket />
            <nav id="breadcrumb" class="font14 font-roboto font14 flex flexAlignItemsCenter" style={{ paddingTop: "15px", paddingLeft: "10px", paddingRight: "10px" }}>
                <span><Link href="/"><a style={{ textDecoration: "underline !important;" }}>Home / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important;" }}> Cricket / </a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ textDecoration: "underline !important;" }}> IPL 2021 /</a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a style={{ color: "#e60000" }} class="color-e60000 fontweight500"> {router.query.subcategory}</a></Link></span>
            </nav>
            {(() => {
                switch (router.query.subcategory) {
                    case 'schedule.html':
                        return <>
                            <div style={{ marginTop: "20px!important", boxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", fontSize: ".8em" }}>
                                <div style={{ padding: "10px 10px", marginTop: "20px!important", fontSize: "18px", fontWeight: "700!important", fontFamily: "Roboto,sans-serif" }}>Indian Premier League 2021</div>
                                <div style={{ padding: "10px 10px", display: "flex", flex: "initial!important", boxSizing: "border-box", fontFamily: "Roboto,sans-serif", fontSize: ".8em", letterSpacing: "0", lineHeight: "20px", height: "100%" }}>
                                    <div class="schedule-match-wrapper" style={{ marginRight: "20px", width: "48.65%", maxWidth: "48.65%", borderRadius: "5px", border: "1px solid #ddd", padding: "10px", marginTop: "10px", flex: "1 1 48%", fontFamily: "Roboto,sans-serif", fontSize: ".8em" }}>
                                        <a href="https://www.republicworld.com/cricket/ipl-2021/hyderabad-vs-mumbai-live-score/iplt20-2021-g31.html" style={{ textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                            <div class="flex padbtm20 flexJustifyBetween" style={{ paddingBottom: "20px!important", justifyContent: "space-between", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                <div style={{ fontSize: "14px", fontWeight: "700", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>May 4 2021 | 19:30:00 IST</div></div>
                                            <div style={{ paddingTop:"15px",justifyContent: "space-between", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                <div class="flex" style={{ display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                    <div class="schedule-team-flag" style={{ background: "#004BA0", width: "45px", height: "32px", boxShadow: "0 0 2px 2px #00000007", borderRadius: "2px", color: "#fff", fontSize: "20px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>H</div>
                                                    <div class="padleft10 font16" style={{ margin: "auto", paddingLeft: "10px", fontSize: "16px", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>Hyderabad</div>
                                                </div>
                                                <div class="vs-container-red" style={{ background: "#d10014", borderRadius: "50px", color: "#fff", width: "22px", height: "22px", textAlign: "center", fontSize: "12px!important", textDecoration: "none!important", border: "none", color: "#ffffff", fontFamily: "Roboto,sans-serif" }}>vs</div>
                                                <div class="flex" style={{ display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                    <div class="padright10 font16" style={{ margin: "auto", paddingRight: "10px", fontSize: "16px", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>Mumbai</div>
                                                    <div class="schedule-team-flag" style={{ background: "#004BA0", width: "45px", height: "32px", boxShadow: "0 0 2px 2px #00000007", borderRadius: "2px", color: "#fff", fontSize: "20px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>M</div>
                                                </div>
                                            </div>
                                            <div style={{ paddingTop: "20px", display: "flex", flex: "initial" }}>
                                                <div style={{ paddingTop: "3px", paddingRight: "2px" }}>
                                                    <img style={{ boxSizing: "border-box", width: "14px" }} src="https://www.republicworld.com/assets/images/place.png" /></div>
                                                <div style={{ fontSize: "12px", boxSizing: "border-box", display: "block" }}>Arun Jaitley Stadium, Delhi, India</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="schedule-match-wrapper" style={{ marginRight: "20px", width: "48.65%", maxWidth: "48.65%", borderRadius: "5px", border: "1px solid #ddd", padding: "10px", marginTop: "10px", flex: "1 1 48%", fontFamily: "Roboto,sans-serif", fontSize: ".8em" }}>
                                        <a href="https://www.republicworld.com/cricket/ipl-2021/hyderabad-vs-mumbai-live-score/iplt20-2021-g31.html" style={{ textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                            <div class="flex padbtm20 flexJustifyBetween" style={{ paddingBottom: "20px!important", justifyContent: "space-between", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                <div style={{ fontSize: "14px", fontWeight: "700", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>May 4 2021 | 19:30:00 IST</div></div>
                                            <div style={{ paddingTop:"15px", justifyContent: "space-between", display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                <div class="flex" style={{ display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                    <div class="schedule-team-flag" style={{ background: "#004BA0", width: "45px", height: "32px", boxShadow: "0 0 2px 2px #00000007", borderRadius: "2px", color: "#fff", fontSize: "20px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>H</div>
                                                    <div style={{margin: "auto", paddingLeft: "10px", fontSize: "16px", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>Hyderabad</div>
                                                </div>
                                                <div class="vs-container-red" style={{ background: "#d10014", borderRadius: "50px", color: "#fff", width: "22px", height: "22px", textAlign: "center", fontSize: "12px!important", textDecoration: "none!important", border: "none", color: "#ffffff", fontFamily: "Roboto,sans-serif" }}>vs</div>
                                                <div class="flex" style={{ display: "flex", flex: "initial!important", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>
                                                    <div class="padright10 font16" style={{ margin: "auto", paddingRight: "10px", fontSize: "16px", display: "block", textDecoration: "none!important", border: "none", color: "#000", fontFamily: "Roboto,sans-serif", }}>Mumbai</div>
                                                    <div class="schedule-team-flag" style={{ background: "#004BA0", width: "45px", height: "32px", boxShadow: "0 0 2px 2px #00000007", borderRadius: "2px", color: "#fff", fontSize: "20px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>M</div>
                                                </div>
                                            </div>
                                            <div style={{ paddingTop: "20px", display: "flex", flex: "initial" }}>
                                                <div style={{ paddingTop: "3px", paddingRight: "2px" }}>
                                                    <img style={{ boxSizing: "border-box", width: "14px" }} src="https://www.republicworld.com/assets/images/place.png" /></div>
                                                <div style={{ fontSize: "12px", boxSizing: "border-box", display: "block" }}>Arun Jaitley Stadium, Delhi, India</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="padtop30" style={{ padding: "20px 10px 10px 10px" }}>
                                    <div class="flex flexJustifyBetween padbtm15" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h2 class="font25 lineHeight25px">MORE CRICKET NEWS</h2>
                                        <a href="https://www.republicworld.com/cricket/ipl-2021/1" style={{ textDecoration: "underline!important", fontSize: "14px", paddingTop: "25px" }}>View more</a>
                                    </div>
                                    <CricketNewsCard />

                                </div>
                                <TeamPointsTable />
                            </div>


                        </>
                    case 'ipl-points-table.html':
                        return <>
                        <TeamPointsTable />
                        </>

                    default:
                        return null
                }
            })()}
        </>
    )
}