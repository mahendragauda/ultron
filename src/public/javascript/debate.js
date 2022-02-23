vid = document.getElementById("video_player").innerHTML;
    jwplayer("video_player").setup({
    "playlist": "https://cdn.jwplayer.com/v2/media/" + vid,
    "autostart": "viewable",
});