import React from "react";
import Link from "next/link";
import Image from "next/image";
import socialShareCommonStyle from '../../../styles/StoryDetailCommon.module.css'

class SocialShare extends React.Component
{
constructor(props){
    super(props)
    this.state ={ slug_url:null} 
}

componentDidMount(){
    this.setState({
        slug_url:this.props.slugUrl.data.story.complete_slug
    })
}

facebook =() =>{
    let facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.republicworld.com/' + this.state.slug_url, 'facebook-popup', 'height=350,width=600')
    if (facebookWindow.focus) {
        facebookWindow.focus()
    }
    return false
}

kooWindow = () =>{
    let kooWindow = window.open('https://www.kooapp.com/create?title=https://www.republicworld.com/'+this.state.slug_url, 'https://www.kooapp.com/create?title=https://www.republicworld.com/'+this.state.slug_url ,"height=350,width=600")
    if (kooWindow.focus) {
        kooWindow.focus()
    }
    return false
}

twitterWindow = () =>{
     window.open('https://twitter.com/share?text=https://www.republicworld.com/'+this.state.slug_url,'https://twitter.com/share?text=https://www.republicworld.com/'+this.state.slug_url,'height=350,width=600');
}
 
 
render() {
    return(
        <div>
            <div className={socialShareCommonStyle.flex}>
                <a rel="nofollow" className={socialShareCommonStyle.cursorPtr} style={{marginRight: "10px"}}  target="_blank" title="Share on Facebook" onClick={this.facebook} >
                    <Image src="/assets/social_share/facebook.png" alt="facebook"  width="70" height="27"   />
                </a>
                <a rel="nofollow" className={socialShareCommonStyle.cursorPtr} style={{marginRight: "10px"}}  onClick={this.twitterWindow}>
                    <Image src="/assets/social_share/twitter.png" alt="twitter" width="70" height="27"  />
                </a>
                <a rel="nofollow" className={socialShareCommonStyle.cursorPtr} onClick={this.kooWindow}>
                    {/* <div style={{borderRadius:"6px",width:"70px",height:"27px",overflow:"hidden"}}> */}
                        <Image src="/assets/social_share/koo_share_3.svg" alt="Koo" width= "70" height="27" />
                    {/* </div> */}
                </a>
            </div>
        </div>
    )
}
}

export default SocialShare