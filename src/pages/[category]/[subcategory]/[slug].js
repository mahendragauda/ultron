const axios = require('axios');
import { useRouter } from 'next/router';
import Header from '../../../components/common/Header';
import Picture from '../../../components/StoryDetail/picture_detail/Picture'
import Video from '../../../components/StoryDetail/video_detail/Video'

var articleStoryData,slugData;
export default function slug({articleStoryData}) {
      
     return (
        <div>
            <Header/>
            
            <Picture articlePictureData={articleStoryData } slugValue={slugData}/>
           
            {(() => {
                // var type = articleStoryData.data.story.id;
                switch(articleStoryData.data.story.id) {
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
            })()}
        </div>
    )
}



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
                articleStoryData:articleStoryData
                
              }
            };
        }    
