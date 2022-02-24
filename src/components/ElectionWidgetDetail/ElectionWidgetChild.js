import React from 'react';
import estyle from '/components/ElectionWidgetDetail/style/electionwidget.module.css'

class ElectionWidgetChild extends  React.Component{
    
    out_off_total_seat = {
        padding: "10px 0 0 0",
        fontFamily: "helvetica-font",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "26px"
        
    }
    part_symbol ={
        width: "37px",height:"11px",margin: "5px 0 4px 0"
    }

    total_seat_count={
       
        paddingBottom: "10px",
        fontFamily: "helvetica-font",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "26px"
        
    }

    electionTabLink = {
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "12px",
        lineHeight: "23px",
        letterSpacing: "-0.03em",
        fontFamily: "Helvetica Nueue"
    }

    render(){
        return(
            <div>
                 <div style={{padding:"8px 12px 0 12px"}}>
                            <div className="election-tabs-container">
                                <div style={{display:"flex",justifyContent: "space-between",alignItems: "center"}}>
                                    <div className="election-tabs-a" style={this.electionTabLink} onclick="dashboardTab(this)" id="liveresults" data-tab="liveresults">
                                        <div>Live Results</div>
                                    </div>
                                    <div className="election-tabs-a" style={this.electionTabLink} onclick="dashboardTab(this)" id="exitpolls" data-tab="exitpolls">
                                        <div>Exit Polls</div>
                                    </div>
                                    <div className="election-tabs-a active" style={this.electionTabLink} onclick="dashboardTab(this)" id="justin" data-tab="justin">
                                        <div>Just In </div>
                                    </div>
                                    <div className="election-tabs-a" style={this.electionTabLink} onclick="dashboardTab(this)" id="onground" data-tab="onground">
                                        <div>On Ground</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div className="tabs_Desciption_panel" style={{padding:" 9px 12px 8px 12px"}}>
                    <div className={[estyle.state_tab_desc ,estyle.tab_content,estyle.current].join("")} style={{width:"100%",alignItems: "center"}} id="liveresults_UttarPradesh">
                        <div className="party_tab" style={{display:"flex",width:"78.4%",flexDirection:"column"}}>
                            <div className="party_upper_section" style={{width:"100%",display:"flex"}}>
                                <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">25</div>
                                    <div className="part_symbol" style={{backgroundColor:"#FFAC1F",width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#FFAC1F"}}>NDA</div>
                                    <div style={{backgroundImage:" radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize: "3px 3px",width: "2px",height:"100%",position: "absolute",right:"0"}}></div>
                                </div>
                                <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">110</div>
                                    <div className="part_symbol" style={{backgroundColor:"#1BB934",width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#1BB934"}}>MGB</div>
                                    <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize:" 3px 3px",width: "2px",height:"100%",position: "absolute",right: "0"}}></div>
                                </div>
                                <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">7</div>
                                    <div className="part_symbol" style={{backgroundColor:"#A43EF4",width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#A43EF4"}}>OTH</div>
                                    <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize:" 3px 3px",width: "2px",height:"100%",position: "absolute",right: "0"}}></div>
                                </div>
                                <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">1</div>
                                    <div className="part_symbol" style={{backgroundColor:'#4995FF',width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#4995FF"}}>LJP</div>
                                    <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize:" 3px 3px",width: "2px",height:"100%",position: "absolute",right: "0"}}></div>
                                </div>
                            </div>
                            <div style={{border:"1px solid #E4E4E4", margin: "4px 6px 5px 6px"}}></div>
                            <div class="party_lower_section" style={{width:"100%",display:"flex"}}>
                            <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">25</div>
                                    <div className="part_symbol" style={{backgroundColor:"#FFAC1F",width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#FFAC1F"}}>NDA</div>
                                    <div style={{backgroundImage:" radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize: "3px 3px",width: "2px",height:"100%",position: "absolute",right:"0"}}></div>
                                </div>
                                <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">110</div>
                                    <div className="part_symbol" style={{backgroundColor:"#1BB934",width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#1BB934"}}>MGB</div>
                                    <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize:" 3px 3px",width: "2px",height:"100%",position: "absolute",right: "0"}}></div>
                                </div>
                                <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">7</div>
                                    <div className="part_symbol" style={{backgroundColor:"#A43EF4",width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#A43EF4"}}>OTH</div>
                                    <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize:" 3px 3px",width: "2px",height:"100%",position: "absolute",right: "0"}}></div>
                                </div>
                                <div className="part_cls" style={{width:"25%",display: "flex",alignItems: "center", flexDirection: "column", position: "relative"}}>
                                    <div className="seat_won">1</div>
                                    <div className="part_symbol" style={{backgroundColor:'#4995FF',width: "37px",height:"11px",margin: "5px 0 4px 0"}}></div>
                                    <div className="party_name" style={{color:"#4995FF"}}>LJP</div>
                                    <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize:" 3px 3px",width: "2px",height:"100%",position: "absolute",right: "0"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="total_party_seat" style={{width:"21.49%",display:"flex",flexDirection:"column", textAlign: "center"}}>
                            <div className="total_seat_count" style={this.total_seat_count}>243</div>
                            <div style={{border:"2px solid #000",margin: "0 10px 0 6px"}}></div>
                            <div className="out_off_total_seat" style={this.out_off_total_seat}>243</div>
                        </div>
                    </div>
                    <div className={[estyle.state_tab_desc, estyle.tab_content].join("")} style={{width:"100%"}} id="justin_UttarPradesh">
                        <div style={{overflow: "auto",whiteSpace:"nowrap"}}>
                            <div>
                                <div className="election-dasboard-content-container" style={{marginRight:"18px",width:"85.61%",display:"inline-flex",flexDirection:"column"}}>
                                    <div className="election-panel-dasboard" style={{display:"flex",marginBottom:"8px"}}><a style={{display:"flex",width:"100%",color:"#000"}}>
                                            <div className="election-panel-left-img" style={{width: "35.687%",marginRight: "3.4%"}}>
                                                {/* <img style={{width:"100%"}} src="https://img.republicworld.com/republic-prod/stories/promolarge/hdpi/0penaeledc2wbc5r_1613990755.jpeg?tr=w-220,h-123.75" alt="">
                                                */}
                                                </div> 
                                            <div className="election-panel-right-content" style={{width: "60.62%;"}}>
                                                <div style={{fontFamily:"Helvetica Nueue",fontStyle: "normal",fontWeight: "600",fontSize: "14px",lineHeight:"17px",display: "flex",alignItems: "center",letterSpacing: "-0.03em"}}>
                                                    <div style={{overflow:"hidden"}}>
                                                        <div className={estyle.state_heading} style={{height:"68px"}}>UP Elections: Akhilesh Yadav launches SP manifesto; promises fixed MSP for farmers</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    <div className="election-panel-dasboard" style={{display:"flex",marginBottom:"8px"}}><a style={{display:"flex",width:"100%",color:"#000"}}>
                                            <div className="election-panel-left-img" style={{width: "35.687%",marginRight: "3.4%"}}>
                                                {/* <img style={{width:"100%"}} src="https://img.republicworld.com/republic-prod/stories/promolarge/hdpi/0penaeledc2wbc5r_1613990755.jpeg?tr=w-220,h-123.75" alt="">
                                                     */}
                                                </div>
                                            <div className="election-panel-right-content" style={{width: "60.62%"}}>
                                                <div style={{fontFamily:"Helvetica Nueue",fontStyle: "normal",fontWeight: "600",fontSize: "14px",lineHeight:"17px",display: "flex",alignItems: "center",letterSpacing: "-0.03em"}}>
                                                    <div style={{overflow:"hidden"}}>
                                                        <div className={estyle.state_heading} style={{height:"68px"}}>Meghalaya Congress MLAs Write To CM Sangma, Ask To Join BJP-backed MD</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ElectionWidgetChild