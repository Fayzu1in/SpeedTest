<template>
  <div id="app">
    <div id="wrapper">
      <div id="alertBox">
        <p id="alertBox__text">IP copied</p>
      </div>
      <div id="mainDiv">
        <div id="upperDiv">
          <a href="https://allplay.uz/">
            <img id="logoImg" src="./assets/img/allplayLogoWhite.png" alt=""
          /></a>
          <div class="speedChecker">
            <p :class="{ finished }" id="speed-text">{{ speed + " Mb/s" }}</p>
            <div class="ring">
              <span class="span"></span>
            </div>
            <button @click="checkSpeed" id="checkBtn">
              Check Internet Speed
            </button>
          </div>
        </div>

        <div id="downDiv">
          <div class="listView">
            <p id="ipSection">IP address:</p>
            <div id="serverList" class="list first">
              <div class="leftSide">Server:</div>
              <div id="serverRight">91.234.218.52</div>
            </div>
            <div id="clientList" class="list">
              <div class="leftSide">Client:</div>
              <div id="clientRight">{{ clientIP }}</div>
            </div>
            <div id="xIpList" class="list">
              <div class="leftSide">X-Ip-Region:</div>
              <div id="xIpRight">{{ ipRegion }}</div>
            </div>
            <div id="xSiteList" class="list">
              <div class="leftSide">X-Site-Region:</div>
              <div id="xSiteRight">{{ siteRegion }}</div>
            </div>
          </div>
        </div>
        <button class="copyBtn" @click="copyText('clientRight')">
          Copy IP
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      clientIP: "Client IP",
      ipRegion: "IP Region",
      siteRegion: "Site Region",
      fileUrl: "https://st16.allmovies.uz/test.bin",
      // downloadSize: 2147483648,
      loaded: 0,
      timestamp: 0,
      speed: 0,
      finished: false,
      // size: 2147483648,
    };
  },
  methods: {
    copyText(elementId) {
      let aux = document.createElement("input");
      aux.setAttribute("value", document.getElementById(elementId).innerHTML);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
      document.getElementById("alertBox").style.opacity = "1";
      setTimeout(function () {
        document.getElementById("alertBox").style.opacity = "0";
      }, 2000);
    },
    checkSpeed() {
      let xhr = new XMLHttpRequest();
      xhr.responseType = "arraybuffer";
      xhr.onprogress = (data) => {
        const bytes = data.loaded - this.loaded;
        const time = data.timeStamp - this.timestamp;
        // this.speed = Math.round(bytes / time / 1024);

        this.speed = bytes / time / 1024;
        if (this.speed <= 10) {
          this.speed = this.speed.toFixed(2);
        } else if (this.speed > 10) {
          this.speed = Math.round(bytes / time / 1024);
        }

        this.loaded = data.loaded;
        this.timestamp = data.timeStamp;
      };
      xhr.open("GET", "https://st16.allmovies.uz/test.bin");

      xhr.send();
      setTimeout(() => {
        xhr.abort();
        this.finished = true;
      }, 7000);
    },
  },
  async mounted() {
    const response = await fetch("https://api.allplay.uz/api/v1/region");
    if (response.ok) {
      let data = await response.json();

      this.clientIP = data.data.ip;
      this.ipRegion = data.data.ip_region;
      this.siteRegion = data.data.site_region;
    }
  },
};
</script>

<style lang="scss">
body {
  background: url(./assets/img/spiderManBckgr.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
}
#wrapper {
  height: 100vh;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
}

#alertBox {
  opacity: 0;
  font-size: 1.125rem;
  color: #fff;
  position: fixed;
  right: 150px;
  top: 4rem;
  width: 200px;
  background: rgba(50, 50, 50, 0.5);
  -webkit-backdrop-filter: blur(1.5rem);
  backdrop-filter: blur(1.5rem);
  border-left: 0.5rem solid #2fb14b;
  transition: all 0.5s;
  z-index: 1;
}

#alertBox__text {
  padding: 0 15px;
}
#mainDiv {
  background: rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(1.5rem);
  -webkit-backdrop-filter: blur(1.5rem);
  color: #fff;
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.finished {
  transform: scale(1.2);
}
#upperDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  padding: 70px;
  min-height: 200px;
}
#logoImg {
  display: block;
  height: 5rem;
}

#downDiv {
  padding: 0 30px;
  text-align: center;
  font-size: 1.375rem;
}
#ipSection {
  color: rgb(255, 153, 0);
  font-weight: 600;
  font-size: 1.375rem;
}
#checkBtn {
  font-size: 1.375rem;
  line-height: 2rem;
  border: none;
  background-color: rgb(255, 153, 0);
  color: #fff;
  padding: 0.75rem 2rem;
  cursor: pointer;
  margin-bottom: 0;
}

.list {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  padding-top: 24px;
  padding-bottom: 24px;
}
.first {
  border-top: none;
  padding-top: 16px;
}
.leftSide {
  color: hsla(0, 0%, 100%, 0.6);
}
.speedChecker {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.copyBtn {
  border: none;
  font-size: 1.375rem;
  line-height: 2rem;

  margin-top: 15px;
  background-color: rgb(255, 153, 0);
  color: #fff;
  padding: 0.75rem 2rem;
  cursor: pointer;
  width: 100%;
}
.progress-bar {
  height: 10px;
  width: 300px;
  background-color: #fff;
}
.progress-bar .progress {
  height: 100%;
  width: 0;
  background-color: rgb(255, 153, 0);
  box-shadow: 0 0px 6px rgb(255 153 0);
  transition: width 0.15s;
}

#speed-text {
  font-size: 26px;
  color: rgb(255, 153, 0);
  text-shadow: 0 0 10px rgb(255, 153, 0);
  text-transform: uppercase;
  transition-duration: 0.5s;
}
.finished

/* LOADER */

// .ring {
//   display: none;
//   position: absolute;
//   top: 22%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 170px;
//   height: 170px;
//   background: transparent;
//   border-radius: 50%;
//   text-align: center;
//   line-height: 120px;
//   font-family: sans-serif;
//   font-size: 20px;
//   letter-spacing: 4px;
//   text-transform: uppercase;
//   text-shadow: 0 0 10px rgb(255, 153, 0);
// }

// .ring:before {
//   content: "";
//   position: absolute;
//   top: -3px;
//   left: -3px;
//   width: 100%;
//   height: 100%;
//   border: 3px solid transparent;
//   border-top: 3px solid rgb(255, 153, 0);
//   border-right: 3px solid rgb(255, 153, 0);
//   border-radius: 50%;
//   animation: animateC 2s linear infinite;
// }

// .span {
//   display: block;
//   position: absolute;
//   top: calc(50% - 2px);
//   left: 50%;
//   width: 50%;
//   height: 4px;
//   background: transparent;
//   transform-origin: left;
//   animation: animate 2s linear infinite;
// }

.span:before {
  content: "";

  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgb(255, 153, 0);
  top: -6px;
  right: -8px;
  box-shadow: 0 0 20px rgb(255, 153, 0);
}
@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}

@media (max-width: 420px) {
  .ring {
    top: 24%;
  }
  html {
  }
  body {
    /* background: #000; */
    background-size: cover;
    height: 100%;
    min-height: 100%;
    background-repeat: no-repeat;
    height: unset;
    backdrop-filter: blur(1.5rem);
  }
  #wrapper {
    height: 100%;
    min-height: 100%;

    backdrop-filter: blur(1.5rem);
    -webkit-backdrop-filter: blur(1.5rem);
  }
  #mainDiv {
    margin-top: 0;
    width: none;
    box-shadow: none;
    backdrop-filter: unset;
    background: unset;
  }
  #upperDiv {
    min-height: 220px;
    padding: 40px;
    padding-bottom: 15px;
  }
  #checkBtn {
    font-size: 1.104rem;
    padding: 0.75rem 2rem;
    line-height: 1.5rem;
  }

  #downDiv {
    padding: 0 15px;
    font-size: 18px;
  }
  #ipSection {
    font-size: 20px;
  }
  .copyBtn {
    font-size: 1.125rem;
    padding: 0.75rem 2rem;
    line-height: 1.5rem;
  }
  #screenShot {
    font-size: 18px;
  }
  .list {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .first {
    padding-top: 10px;
  }
  #alertBox__text {
    padding: 0 15px;
  }
}
</style>
