import React from "react";
import Image from "next/image";
import Link from 'next/link';

class TheDebate extends React.Component {
    CSS = {
        desktop: {
            width: "100%",
            fontFamily: "sans-serif",
        },
        navbar: {
            fontFamily: "Roboto,sans-serif",
            letterSpacing: "0",
            backgroundColor: "#f8f8f8",
        },
        nav: {
            paddingTop: "15px!important",
            paddingLeft: "10px!important",
            paddingRight: "10px!important",
            fontSize: '14px',
        },
        breadcrumb: {
            maxWidth: "1200px",
            width: "100%",
            margin: " 0 auto",
            position: "relative",
        },
        a: {
            textDecoration: "none",
            border: "none",
            color: "#000",
        },
        sub1: {
            flexShrink: '0!important',
        },
        sub2: {
            fontWeight: " 500",
            webkitLineClamp: "1",
        },
        section: {
            paddingTop: '25px',
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        bar: {
            borderBottom: '1px solid #ddd',
            paddingBottom: '15px',
        },
        h1: {

        },
        h2: {

        },
    };
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={this.CSS.desktop}>
                <div style={this.CSS.navbar}>
                    <div style={this.CSS.nav}>
                        <nav style={this.CSS.breadcrumb}>
                            <span><a href="">Home</a></span>
                            <span class="sub1"><a href="https://www.republicworld.com/the-debate"> / The Debate /</a></span>
                            <span class="sub2"><a href="https://www.republicworld.com/the-debate/2554/7597/hijab-protests-becoming-a-washout.html" style={{color:"#d10014"}}> Hijab protests becoming a washout? </a></span>
                        </nav>
                    </div>
                </div>
                <div style={this.CSS.section}>
                    <div style={this.CSS.bar}>
                        <h1 style={this.CSS.h1}>ARNAB GOSWAMI ON</h1>
                        <h1 style={this.CSS.h2}>THE DEBATE</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default TheDebate;