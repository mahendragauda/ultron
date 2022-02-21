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
                <span class="txtTransformCaps"><Link href="/"><a href={{ textDecoration: "underline !important;" }}> IPL 2021 /</a></Link></span>
                <span class="txtTransformCaps"><Link href="/"><a href={{ textDecoration: "underline !important;" }} class="color-e60000 fontweight500"> Schedule</a></Link></span>
            </nav>
            <div style={{ marginTop: "20px!important", boxSizing: "border-box", display: "block", fontFamily: "Roboto,sans-serif", fontSize: ".8em" }}>
                <div style={{ padding: "10px 10px", marginTop: "20px!important", fontSize: "18px", fontWeight: "700!important", fontFamily: "Roboto,sans-serif" }}>Indian Premier League 2021</div>
                <div style={{ flexWrap: "wrap", display: "flex", flex: "initial!important", boxSizing: "border-box", fontFamily: "Roboto,sans-serif", fontSize: ".8em", letterSpacing: "0", lineHeight: "20px", height: "100%" }}>
                    <div class="schedule-match-wrapper" style={{marginRight: "20px",width: "48.65%",maxWidth: "48.65%",borderRadius: "5px",border: "1px solid #ddd",padding: "10px",marginTop: "10px",flex: "1 1 48%",fontFamily: "Roboto,sans-serif",fontSize: ".8em"}}>
                        <a href="https://www.republicworld.com/cricket/ipl-2021/hyderabad-vs-mumbai-live-score/iplt20-2021-g31.html" style={{textDecoration: "none!important",border: "none",color: "#000"}}>
                            <div class="flex padbtm20 flexJustifyBetween"><div class="font14 fontweight700">May 4 2021 | 19:30:00 IST</div></div>
                            <div class="flex flexJustifyBetween">
                                <div class="flex">
                                    <div class="schedule-team-flag" style="background: #e3263b;">H</div>
                                    <div class="padleft10 font16" style="margin: auto;">Hyderabad</div>
                                </div>
                                <div class="vs-container-red">vs</div>
                                <div class="flex">
                                    <div class="padright10 font16" style="margin: auto;">Mumbai</div>
                                    <div class="schedule-team-flag" style="background: #004ba0;">M</div>
                                </div>
                            </div>
                            <div class="padtop20 flex">
                                <div class="padright2 padtop3"><img width="14" src="https://www.republicworld.com/assets/images/place.png" /></div>
                                <div class="font12">Arun Jaitley Stadium, Delhi, India</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}