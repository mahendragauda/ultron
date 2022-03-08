import Head from 'next/head'
import Menu from '../../../components/common/Menu'
import Shows from '../../../components/Shows'
import { Router, useRouter } from "next/router";
export const config = { amp: 'hybrid' }
const axios = require('axios');

function ShowPage({show,channelName}) {
  const router = useRouter();
  return (
      <div>
    <Head>
    <title>Nation Wants To Know</title>
  </Head>
  <Menu/>
  <Shows showData={show} channelName={channelName} slug= {router.query.showname}/>
  </div>
  )
}

export async function getServerSideProps(context) {
  var show
  var channelName
  var footer
  const {params} = context
  const {showname} = params
  const showRequest = axios.get(`https://jarvis.republicworld.com/shows?sub_category_slug=${showname}&limit=10&page_no=1`)
  const ShowChannels = axios.get(`https://jarvis.republicworld.com/shows/home`)
  await Promise.all([showRequest,  ShowChannels]).then(function (results) {
    show = results[0].data.data;
    channelName= results[1].data.data;   
});
  return { props: { show,channelName} }
};

export default ShowPage
