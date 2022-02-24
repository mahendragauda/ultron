import React from "react";
import Link from "next/link";
import {getStoryDetailProps} from '../../apiLib/StoryDetailApi'


class BreadCrumbPage extends React.Component {
    constructor(){
        super();
        this.state={
            breadCrumb_title:'',
            breadCrumb_category:'',
            breadCrumb_category_slug:'',
            breadCrumb_subcategory_slug:'',
            breadCrumb_subcategory:'',
            complete_slug:''
            
        };
    }
componentDidMount(){
  this.setState({
    breadCrumb_title:this.props.breadcrumbArticleData.data.story.title,
    breadCrumb_category:this.props.breadcrumbArticleData.data.story.category_name,
    breadCrumb_category_slug:this.props.breadcrumbArticleData.data.story.category_slug,
    breadCrumb_subcategory_slug:this.props.breadcrumbArticleData.data.story.sub_category_slug,
    breadCrumb_subcategory:this.props.breadcrumbArticleData.data.story.sub_category_name,
    complete_slug:this.props.breadcrumbArticleData.data.story.complete_slug
  })
}
    render(){
        return (
            <section className="padleft10 padright10 padtop15">
                <nav id="breadcrumb" className="section1200  font14 fontRoboto flex flexAlignItemsCenter">
                    <span><Link href="/">Home</Link></span>
                    <span className="txtTruncate lineClip1"><Link href={'/'+this.state.breadCrumb_category_slug}>{this.state.breadCrumb_category}</Link></span>
                    <span className="txtTruncate, styles.lineClip1"><Link href={'/'+this.state.breadCrumb_subcategory_slug}>{this.state.breadCrumb_subcategory}</Link></span>
                    <span className="txtTruncate, styles.lineClip1"><span className="fontweight500 color_e60000 link_a_txt"><Link href={'/'+this.state.complete_slug}>{this.state.breadCrumb_title}</Link></span></span>
                </nav> 
            </section>
        )
    }
}

export default BreadCrumbPage