import Head from 'next/head'
import { useAmp } from 'next/amp'
import Menu from '../../components/common/Menu'
import Box from '../../components/common/Box'
import Link from 'next/link'
import styles from '../../styles/amp/India.module.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import CardImage from '../../components/common/CardImage'



export const config = {
  amp: 'hybrid',
}
const axios = require('axios');

// export async function getServerSideProps() {
//   const res = await axios.get('https://jarvis.republicworld.com/v1/category/subcategory-stories?category_slug=india-news&limit=10&page_no=1');


//   return {
//     props: { indiaNews: res.data.data.sub_categories },
//   };
// };

export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  const page = query.page || 1
  let indiaNews = null

  // Fetch data from external API
  try {
    const res = await fetch(`https://jarvis.republicworld.com/v1/category/subcategory-stories?category_slug=india-news&limit=10&page_no=${page}`)
    if (res.status !== 200) {
      throw new Error("Failed to fetch")
    }
    indiaNews = await res.json()
  } catch (err) {
    indiaNews = { error: { message: err.message } }
  }

  // Pass data to the page via props
  return { props: { indiaNews:indiaNews.data.sub_categories } }
  
}









export default function IndiaNews(indiaNews) {

  const [ toDos, setToDos ] = useState([])
  const [ lawOrder, setLawOrder ] = useState([])
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
      setIsLoading(true)
      fetch('https://jarvis.republicworld.com/v1/category/subcategory-stories?category_slug=india-news&limit=10&page_no=2')
          .then(response => response.json())
          .then(data => {
              setToDos(data.data)
              setIsLoading(false)
          })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jarvis.republicworld.com/v1/category/subcategory-stories?category_slug=india-news&limit=10&page_no=3')
        .then(response => response.json())
        .then(data => {
          setLawOrder(data.data)
            setIsLoading(false)
        })
}, [])



  const isAmp = useAmp()
console.log(indiaNews)
console.log(toDos)
console.log(lawOrder)
const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  
  return (
    <div>
 <Head>
        <title>Indain News</title>
      </Head>

      {/* <Header /> */}
      <Menu/>

      <Box/>


<div className={styles.newsItem}>
      <a onClick={() => router.push('/amp')}> <svg width="12" height="12">
                    <path id="iconColorCanvas-bezier" stroke="none" fill="rgb(29, 29, 29)" d="M 12,5.25 L 2.87,5.25 7.07,1.06 6,-0 0,6 6,12 7.06,10.94 2.87,6.75 12,6.75 12,5.25 Z M 12,5.25"></path>
                </svg></a>
     </div> 
      
      <p className={styles.newsItem}>{
        indiaNews.indiaNews.map((item)=> <><h2 className={styles.title}>{item.title}</h2><p>
          {item.stories.map((sub) => <p><Link href={sub.complete_slug}><a className={styles.sub} >{sub.title}<hr/></a></Link></p>
          )}</p></>
        )}
        
        <div style={{ height: 1650 }}> {/* just added to make scrollbar available */}
      <div >
        {scrollY > 1550
          ?   <p >{
            toDos.sub_categories.map((items)=> <><h2 className={styles.title}>{items.title}</h2><p>
          {items.stories.map((subs) => <p><Link href={subs.complete_slug}><a className={styles.sub} >{subs.title}<hr/></a></Link></p>
          )}</p></>
        )}</p>
       
          :"" }
      </div>
    </div>


    <div  style={{ height: 1000 }}> {/* just added to make scrollbar available */}
      <div >
        {scrollY > 3200
          ?   <p >{
            lawOrder.sub_categories.map((itemss)=> <><h2 className={styles.title}>{itemss.title}</h2><p>
          {itemss.stories.map((subss) => <p><Link href={subss.complete_slug}><a className={styles.sub} >{subss.title}<hr/></a></Link></p>
          )}</p></>
        )}</p>
       
          :"" }
      </div>
    </div>
        
        </p>
    </div>




    
  )
}
