import React from "react";
import Image from "next/image";
import Link from 'next/link';
import Sidebar from "./Sidebar";


class Menu extends React.Component {
  CSS = {
    desktopVisible: {
      display: "flex",
      justifyCcontent: "center",
      letterSpacing: "0",
      fontSize: ".8em",
    },
    mainHeader: {
      zIndex: "1000",
      padding: "0 20px",
      background: "#fff",
      marginTop: "-1px",
      top: "0",
      left: "0",
      width: "100%",
      borderBottom: "1px solid #ddd",
      boxShadow: "0 0 18px 0 #0000002b",
    },
    flex: {
      display: "-webkit-box",
      display: "-moz-box",
      display: "-ms-flexbox",
      display: "-webkit-flex",
      display: "flex",
      flex: "initial",
      alignItems: "center"
    },
    header: {
      fontFamily: "Roboto,sans-serif",
      paddingTop: "10px",
      maxWidth: "1200px",
      width: "100%",
      margin: "0 auto",
      position: "relative",
      WebkitJustifyContent: "space-between",
      MsFlexPack: "space-between",
      justifyContent: "space-between",
      display: "flex",
      flex: "initial",
      letterSpacing: "0",
      fontSize: ".8em",
    },
  
    republicLogo: {
      width: '60%',
      margin: 'auto 0',
      WebkitJustifyContent: 'center',
      MsFlexPack: 'center',
      justifyContent: 'center',
      display: "-webkit-box",
      display: "-moz-box",
      display: "-ms-flexbox",
      display: "-webkit-flex",
      display: "flex",
      flex: "initial",
    },
    liveTv: {
      width: '20%',
      WebkitJustifyContent: 'flex-end',
      MsFlexPack: 'flex-end',
      justifyContent: 'flex-end',
      display: '-webkit-box',
      display: '-moz-box',
      display: '-ms-flexbox',
      display: '-webkit-flex',
      display: 'flex',
      flex: 'initial',
    },  
  };

  render() {
    return (
      <>
      <div style={this.CSS.desktopVisible}>
        <div style={this.CSS.mainHeader}>
        <Sidebar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <div style={this.CSS.flex}>
            <header style={this.CSS.header}>
              <div style={this.CSS.republicLogo}>
                <Link href="/" style={this.CSS.flex}>
                  <a>
                    <Image src="/assets/header/header_image.svg" width={400} height={38} alt="Republic" />
                  </a>
                </Link>
                
              </div>
              <div style={this.CSS.liveTv}>
                <Link href='/testing'>
                  <a style={this.CSS.flex}>
                    <div style={{ width: '30px', height: '20px' }}>
                      <Image src="/assets/header/live-tv.png" width={30} height={20} alt="Live TV" />
                    </div>
                    <div style={{ marginLeft: '5px', fontSize: '18px', fontWeight: '700', color: '#000' }}>LIVE TV</div>
                  </a>
                </Link>
              </div>
            </header>
          </div>
          
        </div>
      </div>
      </>
    );
  }
}

export default Menu;
