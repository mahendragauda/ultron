import React from "react";
import Link from "next/link";
import {getStoryDetailProps} from '../../../apiLib/StoryDetailApi';
import breadCrumbCommonStyle from '../../../styles/StoryDetailCommon.module.css'
import breadCrumbCss from '../../../styles/Breadcrumb.module.css'

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
            <section className={[breadCrumbCommonStyle.padleft10 ,breadCrumbCommonStyle.padright10,breadCrumbCommonStyle.padtop15].join(" ")}>
                <nav id="breadcrumb" className={[breadCrumbCommonStyle.section1200 ,breadCrumbCommonStyle.font14,breadCrumbCommonStyle.fontRoboto,breadCrumbCommonStyle.flex,breadCrumbCommonStyle.flex,breadCrumbCommonStyle.flexAlignItemsCenter].join(" ")}>
                    <span><Link href="/">Home</Link></span>
                    <span className={[breadCrumbCss.txtTruncate ,breadCrumbCss.lineClip1].join(" ")}><Link href={'/'+this.state.breadCrumb_category_slug}>{this.state.breadCrumb_category}</Link></span>
                    <span className={[breadCrumbCss.txtTruncate ,breadCrumbCss.lineClip1].join(" ")}><Link href={'/'+this.state.breadCrumb_subcategory_slug}>{this.state.breadCrumb_subcategory}</Link></span>
                    <span className={[breadCrumbCss.txtTruncate ,breadCrumbCss.lineClip1].join(" ")}><span className={[breadCrumbCommonStyle.fontweight500 ].join(" ")}><Link href={'/'+this.state.complete_slug} ><span style={{color:"#e60000"}}>{this.state.breadCrumb_title}</span></Link></span></span>
                </nav> 
            </section>
        )
    }
}

export default BreadCrumbPage
