import React from "react";
import Image from "next/image";
import Link from 'next/link';
import CardImage from '../common/CardImage';

class Box extends React.Component {
  CSS = {
    

   AddBox: {
     width:"100%",
     height:"300px",
     backgroundColor:"rgb(219, 221, 227)",

    },
    Center: {
        display:"block",
  marginLeft: "auto",
  marginRight: "120px",
  paddingTop:"70px",
  width: "50%",
   
       },
  };
 

  
  
  render() {
    return (
        <div style={this.CSS.AddBox}>
<div style={this.CSS.Center}>

<CardImage
        src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/dywsixvmpxnkrm5v_1644731015.jpeg"
        alt="image"
        width="300"
        height="200"
      />

</div>
        </div>



    );
  }
}

export default Box;
