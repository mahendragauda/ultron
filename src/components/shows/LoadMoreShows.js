import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import style from '../../styles/Debate.module.css';

function LoadMoreShows() {
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(3);


  const [showStory, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserList = () => {
      setLoading(true);
      fetch(`https://jarvis.republicworld.com/shows?sub_category_slug=nation-wants-to-know&limit=10&page_no=${page}`)
        .then(res => res.json())
        .then(res => {
          setTotalPages(res.data.total_pages);
          setUserList([...showStory, ...res.data.shows]);
          setLoading(false);
        });
    }
    getUserList();
  }, [page]);
  return (
        <div class={style.cardSection}>
            <div style={{width:"75%"}} >
                  <div class={style.debateStorySection} id="debate-load">
    {showStory.slice(4).map((stories, i) => {
    return <div key={i} class={style.newshourVideo}>
        <div class={style.storyWrapper}>
            <Link href={stories.complete_slug}>
              <a>
                <div class={style.storyDiv}>
                        <img width="255" height="144" class={[style.imgHover,style.responsiveImage].join(" ")} alt={stories.alt} src={stories.promo_large} />
                        <div class={[style.playButtonDiv,style.videoHover].join(" ")} style={{background: "rgba(0, 0, 0, 0.5)"}}>
                            <div class={style.playDiv}>
                           <div class={style.playButton} style={{margin: "auto"}}></div>
                            </div>
                        </div>
                </div>
                <div class={style.dateContainer}>{stories.pub_datetime}</div>
                <div class={[style.storyQuestion,style.textHover].join(" ")} style={{height: "68px"}}>{stories.headline}</div>
            </a>
            </Link>
        </div>
    </div>
    })}
    </div>
   {totalPages !== page && <div class={style.loadMoreBtn} onClick={() => setPage(page + 1)} id="debate-loadmore"> Load More </div>}
    </div>
    </div>
    );
}

export default LoadMoreShows;