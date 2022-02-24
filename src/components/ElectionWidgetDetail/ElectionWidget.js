import React from 'react';
// import ElectionWidgetChild from '/components/ElectionWidgetDetail/ElectionWidgetChild'
import {ElectionStore} from '/components/ElectionWidgetDetail/ElectionStore/ElectionStore'
import  '/components/ElectionWidgetDetail/style/electionwidget.module.css'

class ElectionWidget extends  React.Component{
    
    state_menu_a = {
        letterSpacing: "-0.03em",
        fontSize:"14px",
        fontWeight:"500",
        lineHeight:"21px",
        color:"rgba(118,118,118,1)",
        paddingRight:"12px"
    }

    componentDidMount(){
        
        ElectionWidgetsLoad()
        var selectedState = "uttarpradesh"
        var selectedMenu = "live"
        document.getElementById("uttarpradesh").classList.add("active");
        document.getElementById("live").classList.add("active");
        document.getElementById(`${selectedMenu}_${selectedState}`).classList.add("current");
       // stateTab(curval)
        
    }

    render(){
        return(
            <div className="ElectionWidget" id="electionWidgets"></div>
            // <div className="block" style={{margin:"30px 0"}}>
            //    <div style={{padding:"0 15px"}}>
            //     <div style={{padding:"1px",background: "linear-gradient(to bottom left,#A43EF2 0%,#FF0000 83.95%)", borderRadius: "8px",boxShadow: "2px -2px 4px rgba(0, 0, 0, 0.2)"}}>
            //         <div style={{background:"#fff",padding:"11px 0px 0px 0px",borderRadius:"8px"}}>
            //             <div style={{padding:"0 12px"}}>
            //                 <h2 style={{fontFamily: 'helvetica-font',fontSize:"14px",lineHeight:"21.42px",letterSpacing:"-0.03px",color:"rgba(255, 0, 24, 1)",textAlign:"center",margin:"0"}}>ELECTION 2022</h2>
            //                 <div style={{paddingTop:"3px"}}>
            //                     <div style={{border: "4px solid #202020"}}></div>
            //                     <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize: "3px 3px", width: "100%", height: "2px", position: "relative", bottom: "-1px", left: "0px", right: "0px"}}></div>
            //                 </div>
            //                 <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize:" 3px 3px", width: "100%", height: "2px", position: "relative", bottom: "0px", left: "0px", right: "0px"}}></div>
            //                 <div className="state_menu_container" style={{display:"flex",width:"100%"}}>
            //                 <div class="left-menu-scroll" id="slideLeft" style={{paddingRight: "12px",display: "flex",alignItems: "center"}}>
            //                     <svg height="13" width="8">
            //                         <polyline className="leftPath" points="8,0 0,6.5 8,13" style={{fill:"#fff",stroke:"rgba(0, 0, 0, 0.5)",strokeWidth:"2"}}></polyline>
            //                     </svg>
            //                 </div>
            //                 <div class="state-list-menu" id="state-menu-list" style={{display:"flex",overflow: "hidden"}}>
            //                 <div id="state_menulist_package" style={{display:"flex",width:"100%",alignItems:"center",whiteSpace: "nowrap",paddingTop: "2px"}}>
            //                     <div className="state_menu_a" style={this.state_menu_a}>
            //                         <div class="state_menu_a_txt" onclick="stateTab(this)" data-tab="punjab">Punjab</div>
            //                     </div>
            //                     <div className="state_menu_a active" id="UttarPradesh" style={this.state_menu_a}>
            //                         <div className="state_menu_a_txt" data-tab="UttarPradesh" onclick="stateTab(this)">Uttar Pradesh</div>
            //                     </div>
            //                     <div className="state_menu_a" style={this.state_menu_a}>
            //                         <div className="state_menu_a_txt" data-tab="Manipur" onclick="stateTab(this)">Manipur</div>
            //                     </div>
            //                     <div className="state_menu_a" style={this.state_menu_a}>
            //                         <div className="state_menu_a_txt" data-tab="Gujrat" onclick="stateTab(this)">Gujrat</div>
            //                     </div>
            //                     <div className="state_menu_a" style={this.state_menu_a}>
            //                         <div class="state_menu_a_txt" data-tab="Uttarakhand" onclick="stateTab(this)">Uttarakhand </div>
            //                     </div>
            //                     <div className="state_menu_a" style={this.state_menu_a}>
            //                         <div className="state_menu_a_txt" data-tab="Goa" onclick="stateTab(this)">Goa </div>
            //                     </div>
            //                     <div className="state_menu_a" style={this.state_menu_a}>
            //                         <div className="state_menu_a_txt" data-tab="Tripura" onclick="stateTab(this)">Tripura</div>
            //                     </div>
            //                 </div>
            //             </div>
            //                 <div className="right-menu-scroll" id="slideRight" style={{paddingLeft: "12px",display: "flex",alignItems: "center"}}>
            //                     <svg height="13" width="8">
            //                         <polyline className="rightPath" points="0,0 8,6.5 0,13" style={{fill:"#fff",stroke:"rgba(0, 0, 0, 0.5)",strokeWidth:"2"}}></polyline>
            //                     </svg>
            //                 </div>
            //                 </div>
            //                 <div style={{backgroundImage: "radial-gradient(rgb(0, 0, 0) 0.5px, transparent 0px)", backgroundSize: "3px 3px", width: "100%", height: "2px", position: "relative", bottom: "0px", left: "0px", right: "0px"}}></div>
            //             </div>
                       
            //             <ElectionWidgetChild/>
            //         </div>
            //     </div>
            //    </div>
            // </div>
        )
    }
}

export default ElectionWidget