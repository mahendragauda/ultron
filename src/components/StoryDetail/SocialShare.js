import React from "react";
import Link from "next/link";
import Image from "next/image";

class SocialShare extends React.Component
{
constructor(props){
    super(props)
    this.state ={ slug_url:null} 
}

componentDidMount(){
    this.setState({
        slug_url:this.props.slugUrl
    })
}

kooWindow = () =>{
    let kooWindow = window.open('https://www.kooapp.com/create?title=https://www.republicworld.com/'+this.state.slug_url, "Koo App is the Voice of India, in Indian Languages. Welcome to Koo, India's Aatmanirbhar App." ,'height=350,width=600')
    if (kooWindow.focus) {
        kooWindow.focus()
    }
    return false
}


render() {
    return(
        <div>
            <div className="flex share-social-media">
                {/* <Link rel="nofollow"  target="_blank" title="Share on Facebook" data-type="facebook">
                    <Image src="/assets/social_share/facebook.png" alt="facebook"  width="70" height="27"   />
                </Link>
                <Link rel="nofollow" onclick="window.open(this.href,'_blank', 'width=700, height=300');return false;" href="https://twitter.com/share?text=%27SP%20rule%20was%20anarchy%27%3A%20BJP%20leader%20tells%20Republic%2C%20taunts%20Akhilesh%20over%20400-seat%20target %23REPUBLIC%20%40republic&amp;url=https%3A%2F%2Fwww.republicworld.com%2Findia-news%2Fpolitics%2Fsp-rule-was-anarchy-bjp-leader-tells-republic-taunts-akhilesh-over-400-seat-target-articleshow.html" target="_blank" title="Share on Twitter" data-type="twitter">
                    <Image src="/assets/social_share/twitter.png" alt="twitter" width="70" height="27" style={{marginRight: "10px"}}  />
                </Link> */}
                <a rel="nofollow" onClick={this.kooWindow}>
                    <div style={{borderRadius:"6px",width:"70px",height:"27px",overflow:"hidden"}}>
                        <Image src="/assets/social_share/koo_share_3.svg" alt="" width= "70" height="27"  />
                    </div>
                </a>
            </div>
        </div>
    )
}
}

export default SocialShare