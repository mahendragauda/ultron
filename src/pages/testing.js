const axios = require('axios');

export default function Testing({home}) {
return (
    <h1>Hii Redirecting To {home.meta_title}</h1>
)
}


export async function getServerSideProps() {
    var home
    var footer
    const homePageRequest = axios.get(`https://jarvis.republicworld.com/v1/homepage-complete`)
    const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
    await Promise.all([homePageRequest, footerRequest]).then(function (results) {
      home = results[0].data.data;
      footer = results[1].data.data;
    });
    return { props: { home } }
  
  };