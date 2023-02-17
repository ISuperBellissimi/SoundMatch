


function play(title, file, artist) {
    var container = document.getElementById("music_container");
    container.innerHTML = `
    <style>
    .container {
        width: 800px;
        margin: 30px auto;
      }
      
      .mejs__container {
        margin-top: 10px;
      }
      .mejs__controls {
        display: block;
      }
      .mejs__controls, .mejs__container {
        background: none !important;
      }
      .mejs__time {
        color: #777;
        font-weight: normal;
      }
      
      .podcast {
        background: #f0f0f0;
        padding: 30px;
        border-radius: 3px;
        position: absolute;
        bottom: 0;
        right: 0;
        width: calc(100% - 275px);
      }
      .podcast__episode_title {
        font-size: 28px;
        font-weight: bold;
        line-height: 1.5;
        margin-bottom: 0;
        padding-bottom: 0;
        margin-top: 0;
        color: #333;
      }
      .podcast__title {
        margin-top: 10px;
        text-transform: uppercase;
        font-size: 11px;
        color: #555;
      }
      .podcast__title i {
        font-style: normal;
        font-weight: normal;
        text-transform: capitalize;
        margin-left: 10px;
      }
      .podcast__meta {
        background: #ddd;
        margin: 40px -30px -30px -30px;
        padding: 0 30px 30px 30px;
        display: flex;
        justify-content: space-between;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
      }
      .podcast__meta .artwork {
        margin-right: 0;
        transform: translateY(-70px);
      }
      .podcast__meta .artwork > img {
        border-radius: 3px;
        width: 150px;
        height: 150px;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
        margin-bottom: -80px;
      }
      
      .mejs-prepended-buttons {
        display: flex;
      }
      
      .mejs-appended-buttons {
        display: flex;
        justify-content: space-evenly;
      }
      
      .mejs__play > button {
        background: transparent url("https://cdn.jsdelivr.net/gh/ivorpad/images-src/mediaplayer-sprite-gray.svg") no-repeat;
      }
      
      .mejs__pause > button {
        background: transparent url("https://cdn.jsdelivr.net/gh/ivorpad/images-src/mediaplayer-sprite-gray.svg") no-repeat;
        background-position: -20px 0;
      }
      
      .mejs__mute > button {
        background: transparent url("https://cdn.jsdelivr.net/gh/ivorpad/images-src/mediaplayer-sprite-gray.svg") no-repeat;
        background-position: -60px 0;
      }
      
      .mejs__unmute > button {
        background: transparent url("https://cdn.jsdelivr.net/gh/ivorpad/images-src/mediaplayer-sprite-gray.svg") no-repeat;
        background-position: -40px 0;
      }
      
      .mejs-skip-back-button > button,
      .mejs__skip-back-button > button {
        background: transparent url("https://cdn.jsdelivr.net/gh/ivorpad/images-src/skipback.svg");
      }
      
      .mejs-jump-forward-button > button, .mejs__jump-forward-button > button {
        background: url("https://cdn.jsdelivr.net/gh/ivorpad/images-src/jumpforward.svg") no-repeat;
      }
      
      .mejs__button > button {
        color: #555;
      }
      
      .mejs__horizontal-volume-slider {
        display: none !important;
      }

      @media only screen and (max-width: 1000px){
        .podcast {
            background: #f0f0f0;
            padding: 30px;
            border-radius: 3px;
            position: absolute;
            bottom: 0;
            right: 0;
            width: calc(100% - 70px);
        }
    }
        </style>
    <div class="container">
    <div class="podcast">
      <h3 class="podcast__episode_title">${title}</h3>
      <h5 class="podcast__title">
        <a href="">Artista</a>
        
      </h5>
  
      <div class="podcast__meta">
        <audio controls width="100%" autoplay>
    <source src="${file}">
    Your browser does not support the audio tag.
  </audio>
        <a href="#" class="artwork">
   <img src="https://source.unsplash.com/random/500×500" alt="">
  </a>
      </div>
    </div>
  </div>`
}
