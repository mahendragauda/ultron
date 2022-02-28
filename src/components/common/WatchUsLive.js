import React from "react";
import Link from 'next/link';

class WatchUsLive extends React.Component {

    render() {
        return (
            <div class="r-logo watch-livetv mrgnbtm20" style={{ fontFamily: "Roboto,sans-serif", style: "block", padding: "10px" }}>
                <div class="flex flexJustifyBetween mrgnbtm10">
                    <div style={{ color: "white", fontFamily: "Roboto,sans-serif" }}>WATCH US LIVE</div>
                    <div class="flex">
                        <div>
                            <img class="livetv-logo" src="https://www.republicworld.com/assets/images/live-tv/tv-logo.png" alt="Live Tv" style={{ width: "22px", height: "auto", width: "28px", height: "20px", marginRight: "5px", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} />
                        </div>
                        <div class="font18 fontweight100">LIVE TV</div>
                    </div>
                </div>
                <div class="flex flexJustifyBetween">
                    <Link href="https://www.republicworld.com/livetv.html">
                        <a target="_blank" class="mrgnright10" spark_ve_preview="none" style={{ marginRight: "10px!important", textDecoration: "none!important", border: "none", color: "#000", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }}>
                            <img class="responsiveImage" width="176" height="35" src="https://img.republicworld.com/republic-prod/logo/tr:w-176,h-35/r-logo-web.png" alt="Republic" style={{ height: "auto", width: "100%", boxSizing: "border-box", width: "176px", aspectRatio: "auto 176 / 35", height: "35px", textDecoration: "none!important", border: "none", color: "#000", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} />
                        </a>
                    </Link>
                    <Link href="https://bharat.republicworld.com/livetv">
                        <a target="_blank" class="mrgnleft10" spark_ve_preview="none" style={{ marginRight: "10px!important", textDecoration: "none!important", border: "none", color: "#000", boxSizing: "border-box", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} >
                            <img class="responsiveImage" width="146" height="35" src="https://img.republicworld.com/republic-prod/logo/tr:w-146,h-35/rbharat-logo-web.png" alt="R-BHARAT" style={{ height: "auto", width: "100%", boxSizing: "border-box", width: "176px", aspectRatio: "auto 176 / 35", height: "35px", textDecoration: "none!important", border: "none", color: "#000", display: "flex", padding: "10px 20px 5px 20px", justifyContent: "space-between", fontSize: "18px", fontWeight: "700", color: "#fff", borderRadius: "6px", fontFamily: "Roboto,sans-serif", }} />
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default WatchUsLive;

