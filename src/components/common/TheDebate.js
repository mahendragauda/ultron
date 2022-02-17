import React from "react";
import Image from "next/image";
import Link from 'next/link';

class TheDebate extends React.Component {
    CSS = {
        desktop: {
            width: "100%",
            fontfamily: "sans-serif",
        },
        navbar: {
            fontfamily: "Roboto,sans-serif",
            letterspacing: "0",
            backgroundcolor: "#f8f8f8",
        },
        nav: {
            paddingtop: "15px!important",
            paddingleft: "10px!important",
            paddingright: "10px!important",
            fontsize: '14px',
        },
        breadcrumb: {
            maxwidth: "1200px",
            width: "100%",
            margin: " 0 auto",
            position: "relative",
        },
        a: {
            textdecoration: "none",
            border: "none",
            color: "#000",
        },
        sub1: {
            flexshrink: '0',
        },
        sub2: {
            fontweight: " 500",
            webkitlineclamp: "1",
        },
        section: {
            paddingtop: '25px',
            paddingleft: '10px',
            paddingright: '10px',
        },
        bar: {
            borderbottom: '1px solid #ddd',
            paddingbottom: '15px',
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
                            <span class="sub1"><a href="https://www.republicworld.com/the-debate"> / The Debate</a></span>
                            <span class="sub2"><a href="https://www.republicworld.com/the-debate/2554/7597/hijab-protests-becoming-a-washout.html"> / Hijab protests becoming a washout? </a></span>
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