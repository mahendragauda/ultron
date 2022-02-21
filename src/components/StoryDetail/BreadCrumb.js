import React from "react";
import Link from "next/link";
import {getStoryDetailProps} from '../../apiLib/StoryDetailApi'


class BreadCrumbPage extends React.Component {
    constructor(){
        super();
        this.state={Data:null};
    }
componentDidMount(){
    // getStoryDetailProps();
    // console.warn(getStoryDetailProps())
    // this.setState({storyDetail:articleStoryData})
}
    render(){
        return (
            <section className="padleft10 padright10 padtop15">
                <nav id="breadcrumb" className="section1200  font14 fontRoboto flex flexAlignItemsCenter">
                    <span><Link href="">Home</Link></span>
                    <span className="txtTruncate lineClip1"><Link href="">Elections</Link></span>
                    <span className="txtTruncate, styles.lineClip1"><Link href="">Punjab</Link></span>
                    <span className="txtTruncate, styles.lineClip1"><Link href=""><span className="fontweight500 color_e60000">Punjab election: BJP slams CM Channi, Priyanka Vadra for 'humiliating' people of UP, Bihar</span></Link></span>
                </nav> 
            </section>
        )
    }
}

export default BreadCrumbPage