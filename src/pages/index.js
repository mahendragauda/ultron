import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardImage from "../components/common/CardImage";
import Header from "../components/common/Header";
const axios = require('axios');

export default function HomePage({ home }) {
  return (
    <div>
      <Header />
      <CardImage
        src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/dywsixvmpxnkrm5v_1644731015.jpeg"
        alt="image"
        width="300"
        height="200"
      />
      <div>{home.meta_title}</div>
    </div>
  );
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