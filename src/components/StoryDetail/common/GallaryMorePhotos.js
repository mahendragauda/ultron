import React from "react";
import Image from "next/image";
import Link from "next/link";

CSS={
    more_photos_item: {
        background: "#FFFFFF",
        border: "1px solid #DDDDDD",
        boxSizing: "border-box"
    }
}

export default function GallaryMorePhotos(props){
    return(
        <div className="hover-effect more-photos-item" style={CSS.more_photos_item}>
            <a href="">
                <div>
                    <div className="overflowHidden posRelative flex" style={{maxHeight: "200px"}}>
                        {/* <Image className="imghover responsiveImage" title="BRIT Awards 2022 in pics: A look at bevy of stars who made style statements on red carpet" alt="BRIT Awards 2022 in pics: A look at bevy of stars who made style statements on red carpet" src="https://img.republicworld.com/republic-prod/stories/promolarge/hdpi/ta3m2lurbda5qa2t_1644381010.jpeg?tr=w-378,h-200" width="378"height="200"/> */}
                    </div>
                </div>
                <div className="pad15">
                    <div style={{height:"70px"}} className="texthover flex flexJustifyCenter flexDirectionCol padtop5">
                        <h2 className="overflowHidden more-photos-t" style={{fontFamily: "Roboto, sans-serif",fontStyle: "normal",fontWeight: "bold",fontSize: "18px",lineHeight: "21px",color: "#0F0F0F",margin: "0px",}}>BRIT Awards 2022 in pics: A look at bevy of stars who made style statements on red carpet</h2>
                    </div>
                </div>
            </a>
        </div>
    )
}