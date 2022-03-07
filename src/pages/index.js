import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Home from "../components/home/home";
const axios = require('axios');

export default function HomePage({ home,footer }) {
  return (
    <>
    <Home props={home}></Home>
    </>
  );
}

export async function getServerSideProps() {
  var home
  var footer
  const homePageRequest = axios.get(`https://jarvis.republicworld.com/v1/homepage-complete`)
  const footerRequest = axios.get(`https://jarvis.republicworld.com/homecontent/footer-links`)
  await Promise.all([homePageRequest, footerRequest]).then(function (results) {
    home = results[0].data.data;
    footer = results[1].data;
  });
  return { props: { home,footer } }

};