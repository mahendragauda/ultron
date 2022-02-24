const axios = require('axios');
import { useRouter } from 'next/router';
import Header from '../../../components/common/Header';
import Picture from '../../../components/StoryDetail/Picture'
import Video from '../../../components/StoryDetail/Video'

var articleStoryData;
export default function slug({articleStoryData}) {
      
     return (
        <div>
            <Header/>
            
            <Picture articlePictureData={articleStoryData}/>
           
            {/* {(() => {
                var type = articleStoryData.data.story.id;
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
            })()} */}
        </div>
    )
}

// function checkType(){
//      console.log(articleStoryData.data.story.type)
//     console.log(type)
//     switch(type) {
//         case "P":  
//             return <Picture/>
//         case "V":  
//             return <Video/>
//         case "LiveBlog":
//             return <LiveBlog/>
//         case "G":
//             return <Gallary/>
//         default:
//     }
// }

export async function getServerSideProps(context){
    
    const {params} = context
    const { category ,subcategory,slug} = params
    const StoryDetailApi = axios.get(`https://jarvis.republicworld.com/v1/story-details?complete_slug=${category}/${subcategory}/${slug}`)
    await Promise.all([StoryDetailApi]).then(function (results) {
        articleStoryData = results[0].data;
        console.log(`https://jarvis.republicworld.com/v1/story-details?complete_slug=${category}/${subcategory}/${slug}`)
    });
  
    // checkType(articleStoryData.data.story.id)
    return {
              props:{
                articleStoryData:articleStoryData,
              }
            };
        }    

