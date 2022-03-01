import React from "react";
import Link from 'next/link';
import styles from '../../styles/Cricket.module.css'

class CricketMenuBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: props.slug
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.slug !== state.slug) {
      return {
        slug: props.slug
      };
    }
    return null;
  }

  CSS = {
    navbar: {
      display: "flex",
      width: "100%",
      maxWidth: "1200px",
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
    // const value = this.props.value;
    var ui;

    // if (this.state.slug== "") {
    //   ui = <Link href="/cricket/ipl-2021">
    //     <a style={this.CSS.menuWrapper}>
    //       <div class="nav-bar nav-selected" style={{ flexShrink: '0', padding: '5px 10px' }}>Schedule</div>
    //     </a>
    //   </Link>

    // } else {
    //   ui = <Link href="/cricket/ipl-2021">
    //     <a style={this.CSS.menuWrapper}>
    //       <div class="nav-bar" style={{ flexShrink: '0', padding: '5px 10px' }}>Schedule</div>
    //     </a>
    //   </Link>
    // }
    return (
      <section style={{ position: 'relative', width: '100%' }}>
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <div class="bihar-nav-bar nav-bar flex section1200" style={{ background: "linear-gradient(90deg, #E52D27 0.9%, #D10014 52.42%, #B31217 99.05%)", padding: "2px" }}>

            <Link href="/cricket/ipl-2021">
              <a style={this.CSS.menuWrapper}>
                <div className={this.state.slug === "" ? styles.navSelected : styles.navBar} style={{ flexShrink: '0', padding: '5px 10px' }}>Home</div>
              </a>
            </Link>
            {/* {ui} */}
            <Link href="/cricket/ipl-2021/schedule.html">
              <a style={this.CSS.menuWrapper}>
                <div className={this.state.slug === "schedule.html" ? styles.navSelected : styles.navBar} style={{ flexShrink: '0', padding: '5px 10px' }}>Schedule</div>
              </a>
            </Link>
            <Link href="/cricket/ipl-2021/ipl-points-table.html">
              <a style={this.CSS.menuWrapper}>
                <div className={this.state.slug === "ipl-points-table.html" ? styles.navSelected : styles.navBar} style={{ flexShrink: '0', padding: '5px 10px' }}>Points Table</div>
              </a>
            </Link>
            <Link href="/cricket/ipl-2021/result.html">
              <a style={this.CSS.menuWrapper}>
                <div className={this.state.slug === "result.html" ? styles.navSelected : styles.navBar} style={{ flexShrink: '0', padding: '5px 10px' }}>Results</div>
              </a>
            </Link>
          </div>
        </div>
      </section>
    )
  }

}

export default CricketMenuBar;
