import React from "react";

class BannerAd extends React.Component {
    CSS = {
        bannerContainer: {
            display: 'flex',
            justifyContent: 'center',
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            width: props.adSlot.size[0],
            height: props.adSlot.size[1],
            adSlot: props.adSlot
        };
    }
    componentDidMount() {
        if (window !== undefined) {
            this.defineAdSlot(this.state.adSlot)
        }
    }

    defineAdSlot = (adSlot) => {
        window.googletag.cmd.push(function () {
            googletag.defineSlot(adSlot.slot, adSlot.size, adSlot.id).addService(googletag.pubads());
            googletag.pubads().setTargeting("devicetype", "Mobile");
            googletag.pubads().setTargeting("domain", "https://www.republicworld.com/");
            googletag.pubads().setTargeting("category", "Home");
            googletag.pubads().enableSingleRequest();
            googletag.pubads().enableLazyLoad();
            googletag.enableServices();
            googletag.display(adSlot.id);
        });
    }

    render() {
        return (
            <div id={this.state.adSlot.id}>
            </div >
        )
    }

}

export default BannerAd;
