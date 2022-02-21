import React from "react";
import Link from 'next/link';

class CricketMenuBar extends React.Component {
    CSS = {
     navbar: {
            display: "flex",
            width: "100%",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            position: "relative",
            background: "linear-gradient(90deg, #E52D27 0.9%, #D10014 52.42%, #B31217 99.05%)",
            padding: "2px"
        },
        flex: {
            display: "-webkit-box",
            display: "-moz-box",
            display: "-ms-flexbox",
            display: "-webkit-flex",
            display: "flex",
            flex: "initial!important;",
            alignItems: "center"
          },
          menuWrapper: {
            border: "none",
            color: "#FFFFFF"       
          }
      
      
    }    
    render() {
        return (
            <section style={{ position: 'relative', width: '100%' }}>
    <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
        <div style={this.CSS.navbar}>
                <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 10px' }}>Home</div>
                    </a>
                    </Link>
                    <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 10px' }}>Schedule</div>
                    </a>
                    </Link>
                    <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 10px' }}>Points Table</div>
                    </a>
                    </Link>
                    <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 10px' }}>Results</div>
                    </a>
                    </Link>
                        </div>
    </div>
</section>
        )
    }    

}

export default CricketMenuBar;
