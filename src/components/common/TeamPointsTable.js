import React from "react";
import Link from 'next/link';

class TeamPointsTable extends React.Component {
    CSS = {
        teamRankingContainer: {
            marginTop: "20px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ddd",
            background: "#fff",
            boxSizing: "border-box",
            display: "block",
            fontFamily: "Roboto,sans-serif",
            fontSize: ".8em",
            letterSpacing: "0",
            fontSize: "100%",
            lineHeight: "20px",
            webkitTextSizeAdjust: "100%"
        },
        teamRanking: {
            borderTop: "1px solid #ddd",
            height: "328px",
            overflowY: "scroll",
            boxSizing: "border-box",
            display: "block",
            fontFamily: "Roboto,sans-serif",
            fontSize: ".8em",
            letterSpacing: "0",
            fontSize: "100%",
            lineHeight: "20px",
            webkitTextSizeAdjust: "100%",
            '*::-webkit-scrollbar': {
                width: "3px"
            },
            '*::-webkit-scrollbar-thumb': {
                background: "#c6c6c6",
                borderRadius: "5px",
                border: "1px solid #7777771a",
            },
            '*::-webkit-scrollbar-track': {
                boxShadow: "inset 0 0 5px #ddd",
                borderRadius: "10px"
            },

        }
    }
    render() {
        const data = this.props.data;
        return (
            <div class="homepage-team-ranking" style={{ padding: "20px 10px 10px 10px", boxSizing: "border-box", display: "block", }}>
                <div class="team-ranking-container" style={this.CSS.teamRankingContainer}>
                    <div id="cricket-ipl-standings" class="pad15 padleft10 flex flexJustifyBetween" style={{ paddingLeft: "10px!important", padding: "15px!important", justifyContent: "space-between", display: "flex", flex: "initial!important", boxSizing: "border-box", }}>
                        <h1 class="font25 fontweight700 mrgn0" style={{ margin: "0!important", fontWeight: "700!important", boxSizing: "border-box", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", display: "block", marginInlineStart: "0px", marginInlineEnd: "0px", fontFamily: "Roboto,sans-serif", letterSpacing: "0", fontSize: "100%", lineHeight: "20px", }}>Team Points Table</h1>
                    </div>
                    <div class="team-ranking" style={this.CSS.teamRanking}>
                        <table border="0" cellpadding="0" cellspacing="0" id="team-rankings" style={{ width: "100%", fontFamily: "Roboto,sans-serif", boxSizing: "border-box", borderTopWidth: "0px", borderRightWidth: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px", webkitBorderHorizontalSpacing: "0px", webkitBorderVerticalSpacing: "0px", display: "table", borderCollapse: "separate", boxSizing: "border-box", textIndent: "initial", borderSpacing: "2px", borderColor: "grey" }}>
                            <thead style={{ boxSizing: "border-box", display: "table-header-group", verticalAlign: "middle", borderColor: "inherit", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px" }}>
                                <tr style={{ background: "#f7f7f7", lineHeight: "1.8em", boxSizing: "border-box", display: "table-row", verticalAlign: "inherit", borderColor: "inherit", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px" }}>
                                    <th style={{ width: "12%", lineHeight: "1.8em", borderBottom: "1px solid #ddd ", background: "#f7f7f7", mixBlendMode: "normal", textAlign: "left", padding: "8px 8px 8px 15px", fontWeight: "bold", fontSize: "12px", color: "rgb(70, 70, 70)", boxSizing: "border-box", margin: "0" }}>Pos</th>
                                    <th style={{ lineHeight: "1.8em", textAlign: "left", padding: "8px 45px 8px 10px", fontSize: "12px", borderBottom: "1px solid #ddd", position: "sticky", background: "#f7f7f7", fontWeight: "bold", fontSize: "12px", color: "rgb(70, 70, 70)" }}>Team</th>
                                    <th style={{ lineHeight: "1.8em", width: "25%", fontSize: "12px", borderBottom: "1px solid #ddd", position: "sticky", background: "#f7f7f7", fontWeight: "bold", fontSize: "12px", color: "rgb(70, 70, 70)" }}>Net RR</th>
                                    <th style={{ lineHeight: "1.8em", width: "16%", fontSize: "12px", borderBottom: "1px solid #ddd", position: "sticky", background: "#f7f7f7", fontWeight: "bold", fontSize: "12px", color: "rgb(70, 70, 70)" }}>Points</th>
                                </tr>
                            </thead>
                            <tbody style={{ boxSizing: "border-box", display: "table-row-group", verticalAlign: "middle", borderColor: "inherit", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px",width: "100%",border: "1px solid #ddd"}}>
                                {data.map((value, index) => {
                                    return(
                                    <div data-index={index}>
                                        <tr style={{ lineHeight: "1.8em", boxSizing: "border-box", display: "table-row", verticalAlign: "inherit", borderColor: "inherit", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px",width: "100%",border: "1px solid #ddd" }}>
                                            <td style={{ textAlign: "center", fontSize: "16px", padding: "10px 0", boxSizing: "border-box", display: "table-cell", verticalAlign: "inherit", lineHeight: "1.8em", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px"}}>{value.position}</td>
                                            <td style={{ textAlign: "left", paddingLeft: "20px", fontSize: "16px", padding: "10px 0", boxSizing: "border-box", display: "table-cell", verticalAlign: "inherit", lineHeight: "1.8em", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px" }}>
                                                <div class="flex" style={{ display: "flex", flex: "initial!important", boxSizing: "border-box", textAlign: "left", paddingLeft: "20px", fontSize: "16px", lineHeight: "1.8em", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px" }}>
                                                    <div class="ipl-flag" style={{ background:"#2561AE", width: "40px", height: "22px", borderRadius: "4px", color: "#fff", fontWeight: "700", fontSize: "14px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", marginRight: "10px", boxSizing: "border-box", paddingLeft: "20px", lineHeight: "1.8em", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px"}}>{value.logo_character}</div>
                                                    <div style={{ boxSizing: "border-box", display: "block", textAlign: "left", paddingLeft: "20px", fontSize: "16px", lineHeight: "1.8em", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px" }}>{value.short_name}</div>
                                                </div>
                                            </td>
                                            <td style={{ textAlign: "center", fontSize: "16px", padding: "10px 0", boxSizing: "border-box", display: "table-cell", verticalAlign: "inherit", lineHeight: "1.8em", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px" }}>{value.net_rr}</td>
                                            <td style={{ textAlign: "center", fontSize: "16px", padding: "10px 0", boxSizing: "border-box", display: "table-cell", verticalAlign: "inherit", lineHeight: "1.8em", width: "100%", fontFamily: "Roboto,sans-serif", borderCollapse: "separate", textIndent: "initial", borderSpacing: "2px" }}>{value.points}</td>
                                        </tr>
                                    </div>
                                 ) })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

export default TeamPointsTable;
