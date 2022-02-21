const axios = require('axios');
import { useRouter } from 'next/router';
import Header from '../../../components/common/Header';
import Picture from '../../../components/StoryDetail/Picture'
import Video from '../../../components/StoryDetail/Video'

var articleStoryData;
export default function slug() {
    const router = useRouter()
    const { subcategory } = router.query
    return (
        <div>
            <Header/>
            {checkType()}
        </div>
    )
}

function checkType(){
    var type= "V";
    switch(type) {
        case "P":  
            return <Picture/>
        case "V":  
            return <Video/>
        case "LiveBlog":
            return <LiveBlog/>
        case "G":
            return <Gallary/>
        default:
    }
}


// export async function getStaticPaths() {
//     const StoryDetailApi = axios.get(`https://jarvis.republicworld.com/v1/story-details?complete_slug=world-news/russia-ukraine-crisis/indian-embassy-issues-advisory-on-ukraine-russia-conflict-asks-nationals-to-evacuate-articleshow.html`)
//     await Promise.all([StoryDetailApi]).then(function (results) {
//         articleStoryData = results[0].data;
//     });

//    const paths = () => {
//     const router = useRouter()
//     const { subcategory } = router.query
//         return{
//             params:{
//                 category:router.query,
//                 subcategory:router.query,
//                 slug:router.query
//             }
//         }
//    }

//     return {
//        paths,
//       fallback: false // false or 'blocking'
//     };
//   }

//   export async function getStaticProps(context) {
//     const category =context.params.category;const subcategory =context.params.subcategory;const slug =context.params.subcategory;
//     const StoryDetailApi = axios.get(`https://jarvis.republicworld.com/v1/story-details?complete_slug=${category}/${subcategory}/${slug}`)
//     await Promise.all([StoryDetailApi]).then(function (results) {
//         articleStoryData = results[0].data;
//     });
//     return {
//       props:{
//         articleStoryData,
//       }
//     };
//   }

