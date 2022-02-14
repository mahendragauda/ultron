import React,{PureComponent} from "react";
import Image from "next/image";

class CardImage extends PureComponent {
  constructor(props) {
    super(props);
      this.state = {
      width: `${props.width}px`,
      height: `${props.height}px`,
      src: `${props.src}?tr=w-${props.width},h-${props.height}`,
      alt: props.alt ? props.alt : 'story image',
    };
  }
  render() {
    return (
      <Image
        src={this.state.src}
        alt={this.state.alt}
        width={this.state.width}
        height={this.state.height}
        objectFit="contain"
      />
    );
  }
}

export default CardImage;
