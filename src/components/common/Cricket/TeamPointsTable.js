import React from "react";
import Link from 'next/link';
import styles from '/styles/Cricket.module.css'


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
            <div className={styles.homepageTeamRanking}>
                <div className={styles.teamRankingContainer}>
                    <div id="cricket-ipl-standings" className={[styles.pad15, styles.padleft10, styles.flex, styles.flexJustifyBetween].join(" ")}>
                        <h1 className={[styles.font25, styles.fontweight700, styles.mrgn0].join(" ")}>Team Points Table</h1>
                    </div>
                    <div className={styles.teamRanking}>
                        <table border="0" cellPadding="0" cellSpacing="0" id={styles.teamRankings}>
                            <thead>
                                <tr>
                                    <th style={{ width: "12%"}}>Pos</th>
                                    <th>Team</th>
                                    <th style={{width: "25%" }}>Net RR</th>
                                    <th style={{ width: "16%"}}>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => {
                                    return(
                                        <tr>
                                            <td>{value.position}</td>
                                            <td>
                                                <div className={styles.flex}>
                                                    <div className={styles.iplFlag} style={{ background:value.color_code}}>{value.logo_character}</div>
                                                    <div>{value.short_name}</div>
                                                </div>
                                            </td>
                                            <td>{value.net_rr}</td>
                                            <td>{value.points}</td>
                                        </tr>
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
