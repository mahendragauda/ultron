import React, { useEffect, useState } from 'react';

function LoadMoreStory() {
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [debateStory, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserList = () => {
      setLoading(true);
      fetch(`https://jarvis.republicworld.com/debates/cards?limit=10&page_no=${page}`)
        .then(res => res.json())
        .then(res => {
          setTotalPages(res.data.total_pages);
          setUserList([...debateStory, ...res.data.debates]);
          setLoading(false);
          console.log(debateStory.question);
        });
    }
    getUserList();
  }, [page]);
  return (
  <div>
        <div class="section1200 flex">
            <div style={{width:"75%"}} >
                    <div class="width100 flex flexWrap padbtm30" id="debate-load">
    {debateStory.map((stories, i) => {
    return <div key={i} class="newshour-video">
        <div class="hover-effect">
            <a href="https://www.republicworld.com/the-debate/2563/7630/is-there-pfi-role-in-harsha-murder.html">
                <div class="overflowHidden posRelative flex">
                        <img width="222" height="144" class="width100 imghover responsiveImage" alt="Is there PFI role in Harsha murder?" src={stories.promo_large} />
                        <div class="videohover posAbsolute width100 height100p" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                            <div class="flex height100p">
                                <div class="livetv-play-button" style={{margin: "auto"}}></div>
                            </div>
                        </div>
                </div>
                <div class="font14 padtop5">{stories.pub_datetime}</div>
                <div class="font16 padtop5 clr-D10014 fontweight500 txtTruncate lineClip1"> #{stories.hashtag}</div>
                <div class="texthover font18 lineHeight21px bold padtop5 txtTruncate lineClip3" style={{height: "68px"}}>{stories.question}</div>
            </a>
        </div>
    </div>
    })}
    </div>
    </div>
    </div>
   {totalPages !== page && <div class="cursorPtr font18 txtcenter txtdecorationunderline" onClick={() => setPage(page + 1)} id="debate-loadmore"> Load More </div>}
    </div>
    );
}

export default LoadMoreStory;