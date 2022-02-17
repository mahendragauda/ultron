import React from "react";
import Image from "next/image";
import Link from 'next/link';

class Header extends React.Component {
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
    headerHamburger: {
      width: "20%",
      minWidth: "250px",
      margin: "auto 0",
      display: "flex",
      flex: "initial",
      letterSpacing: "0",
    },
    hamburgerIcon: {
      borderRadius: "3px",
      padding: "8px 4px",
      width: "32px",
      height: "32px",
      position: "relative",
      WebkitTransform: "rotate(0)",
      MozTransform: "rotate(0)",
      OTransform: "rotate(0)",
      transform: "rotate(0)",
      WebkitTransition: ".5s ease-in-out",
      MozTransition: ".5s ease-in-out",
      OTransition: ".5s ease-in-out",
      transition: ".5s ease-in-out",
      cursor: "pointer",
      margin: "auto 0",
      letterSpacing: "0",
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
    headerMenuContainer: {
      overflow: 'hidden',
      width: '92%',
      paddingBottom: '5px'
    },
    headerMenuWrapper: {
      display: 'flex',
      fontSize: '16px',
      fontFamily: 'Roboto,sans-serif',
      alignItems: 'center',
      transition: 'all .5s',
    },
    menuWrapper: {
      textTransform: 'capitalize',
      flexShrink: '0'
    },
    menuArrowContainer: {
      width: '8%',
      paddingLeft: '40px',
      WebkitJustifyContent: 'space-between',
      MsFlexPack: 'space-between',
      justifyContent: 'space-between',
      display: '-webkit-box',
      display: '-moz-box',
      display: '-ms-flexbox',
      display: '-webkit-flex',
      display: 'flex',
      flex: 'initial',
      alignItems: 'center'
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLeftArrowClicked = () => {
    const menuContainer = document.getElementById('menuContainer')
    const leftArrow = document.getElementById('leftArrow')
    if (menuContainer) {
      menuContainer.scrollLeft -= 400
    }
    if (menuContainer.scrollLeft == 0) {
      leftArrow.style.borderLeftColor = "rgb(221, 221, 221)"
      leftArrow.style.borderTopColor = "rgb(221, 221, 221)"
    }
    const rightArrow = document.getElementById('rightArrow')
    if (menuContainer.scrollWidth > menuContainer.clientWidth + menuContainer.scrollLeft) {
      rightArrow.style.borderRightColor = "#000"
      rightArrow.style.borderBottomColor = "#000"
    }
  }

  onRightArrowClicked = () => {
    const menuContainer = document.getElementById('menuContainer')
    const leftArrow = document.getElementById('leftArrow')
    leftArrow.style.borderLeftColor = "#000"
    leftArrow.style.borderTopColor = "#000"
    if (menuContainer) {
      menuContainer.scrollLeft += 400
    }
    const rightArrow = document.getElementById('rightArrow')
    if (!(menuContainer.scrollWidth > menuContainer.clientWidth + menuContainer.scrollLeft)) {
      rightArrow.style.borderRightColor = "rgb(221, 221, 221)"
      rightArrow.style.borderBottomColor = "rgb(221, 221, 221)"
    }else {
      rightArrow.style.borderRightColor = "#000"
      rightArrow.style.borderBottomColor = "#000"
    }
  }

  render() {
    return (
      <div style={this.CSS.desktopVisible}>
        <div style={this.CSS.mainHeader}>
          <div style={this.CSS.flex}>
            <header style={this.CSS.header}>
              <div style={this.CSS.headerHamburger}>
                <div style={this.CSS.hamburgerIcon}>
                  <div style={{ width: '24px', height: '15px', position: 'relative' }}>
                    <Image src="/assets/header/Header_nav.svg" width={24} height={15} />
                  </div>
                </div>
                <div style={{ paddingLeft: "1.4vw", margin: "auto 0" }}>
                  <a href="https://bharat.republicworld.com/" title="R-BHARAT" style={this.CSS.flex}>
                    <div style={{ display: "flex", lineHeight: '20px' }}>
                      <div style={{ fontSize: "14px", marginRight: "5px" }}>
                        View in Hindi:
                      </div>
                      <div style={this.CSS.flex}>
                        <Image
                          src="https://img.republicworld.com/republic-prod/logo/tr:w-95,h-20/r-bharat-web.png"
                          alt="R-BHARAT"
                          width={95}
                          height={20}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
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
          <section style={{ position: 'relative', width: '100%' }}>
            <div style={this.CSS.header}>
              <div style={this.CSS.headerMenuContainer} id='menuContainer'>
                <div style={this.CSS.headerMenuWrapper}>
                  <Link href="/the-debate">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px 5px 0px' }}>The Debate</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>India News</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>Election 2022</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>IPL 2022</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>Arnab Online</div>
                    </a>
                  </Link>
                  <Link href="/testing">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>Web Stories</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>World News</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>Entertainment News</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>Sports News</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>Technology News</div>
                    </a>
                  </Link>
                  <Link href="/">
                    <a style={this.CSS.menuWrapper}>
                      <div style={{ flexShrink: '0', padding: '5px 20px' }}>Business News</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div style={this.CSS.menuArrowContainer}>
                <div onClick={this.onLeftArrowClicked} id='leftArrow' style={{ transform: 'rotate(-45deg)', width: '8px', height: '8px', cursor: 'pointer', borderLeft: '2px solid #000', borderTop: '2px solid #000', borderColor: 'rgb(221, 221, 221)' }}></div>
                <div onClick={this.onRightArrowClicked} id='rightArrow' style={{ borderRight: '2px solid #000', borderBottom: '2px solid #000', transform: 'rotate(-45deg)', width: '8px', height: '8px', cursor: 'pointer' }}></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;
