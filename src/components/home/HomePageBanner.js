import CardImage from "../common/CardImage"
import Image from "next/image";
import Link from 'next/link';


export default function HomePageBanner() {
    var HomeBannerCss = {
        bannerParentContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            flexFlow: 'column',
            height: '100%',
            alignItems: 'center',
            padding: '5px 10px',
            perspective: '50000px'
        },
        bannerContainerWrapper: {
            minHeight: '200px',
            maxWidth: '1200px',
            position: 'relative',
            width: '100%',
            height: '100%'
        },
        imageContainer: {
            maxWidth: '100%',
            background: '#f8f8f8',
            height: 'auto',
            position: 'relative',
            height: '200px'
        },
        bannerOverlay: {
            display: 'flex',
            flex: 'initial !important',
            top: '0px',
            height: '97%',
            width: '100%',
            position: 'absolute'
        }
    }
    return (
        <div style={HomeBannerCss.bannerParentContainer}>
            <div style={HomeBannerCss.bannerContainerWrapper}>
                <div style={HomeBannerCss.imageContainer}>
                    <Image
                        src="https://img.republicworld.com/republic-prod/logo/1644908869620b51457f0e1.jpg"
                        alt="Banner"
                        objectFit="contain"
                        layout="fill"
                        priority
                    />
                    <div style={HomeBannerCss.bannerOverlay}>
                        <Link href="/anchor/arnab-goswami">
                            <a style={{ width: '45%', height: '100%' }}>
                            </a>
                        </Link>
                        <Link href="/elections">
                            <a style={{ width: '55%', height: '100%' }}>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}