const axios = require('axios');
import { useRouter } from 'next/router';
import Header from '../../../components/common/Header';
import Picture from '../../../components/StoryDetail/picture_detail/Picture'
import Video from '../../../components/StoryDetail/video_detail/Video'
import Gallery from '../../../components/StoryDetail/gallery_detail/Gallery'

var articleStoryData,MustReadStory,recommandStory;
export default function slug({articleStoryData,MustReadStory,recommandStory}) {
    console.log(recommandStory)
     return (
         
        <div>
            <Header/>
           




            <Gallery articlePictureData={articleStoryData} MustReadData={MustReadStory} recommandStoryData={recommandStory}/>
           
            
            {/* {(() => {
                // var type = articleStoryData.data.story.id;
                switch(articleStoryData.data.story.id) {
                    case 'P':
                        console.warn("picture")
                        return <Picture articlePictureData={articleStoryData }/>
                    case 'V':
                    console.warn("video")
                        return <Video articlePictureData={articleStoryData }/>
                    case 'LB':
                        console.warn("LiveBlog")
                     return <LiveBlog/>
                    case 'G':
                        console.warn("G")
                        return <Gallery articlePictureData={articleStoryData } />
                    default:
                }
            })()} */}
        </div>
    )
}



export async function getServerSideProps(context){

    const {params} = context
    const { category ,subcategory,slug} = params
    const StoryDetailApi = axios.get(`https://jarvis.republicworld.com/v1/story-details?complete_slug=${category}/${subcategory}/${slug}`)
    const MustReadApi = axios.get(`https://jarvis.republicworld.com/story-recommendations?category_slug=${category}&sub_category_slug=${subcategory}`)
  
    await Promise.all([StoryDetailApi,MustReadApi]).then(function (results) {
        articleStoryData = results[0].data;
        MustReadStory = results[1].data;
    })
    .then(function(){
        const WeRecommandApi = axios.get(`https://jarvis.republicworld.com/recommended/stories?story_id=${articleStoryData.data.story.id}&type=${articleStoryData.data.story.Type}`)
        return WeRecommandApi
    })
    .then(function (recommandResults) {
        recommandStory = recommandResults.data;
        console.log(recommandStory)
    })
    
    
    // ;

    // checkType(articleStoryData.data.story.id)
    return {
              props:{
                articleStoryData:articleStoryData,
                MustReadStory:MustReadStory,
                recommandStory:recommandStory

              }
            };
        }
