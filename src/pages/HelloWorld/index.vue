<template>
  <div class="container" :class="changeStyle ? 'sun' : 'moon'">
    <!-- 添加样式 鼠标悬停变成小手 -->
    <div class="ChangeStyle">
      <el-button
        :type="changeStyle ? '' : 'goon'"
        @click="changeStyle = !changeStyle"
        circle
      >
        <svg
          v-show="!changeStyle"
          t="1651676396575"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6881"
          width="18"
          height="18"
        >
          <path
            d="M861 656.7l144.6-144.6L861 367.6V163.1H656.6L512 18.6 367.4 163.1H163v204.5L18.4 512.1 163 656.7v204.4h204.4L512 1005.7l144.6-144.6H861z"
            fill="#FCD170"
            p-id="6882"
          ></path>
          <path
            d="M512 1015.7c-2.6 0-5.1-1-7.1-2.9L363.3 871.1H163c-5.5 0-10-4.5-10-10V660.8L11.4 519.2c-1.9-1.9-2.9-4.4-2.9-7.1 0-2.7 1.1-5.2 2.9-7.1L153 363.4V163.1c0-5.5 4.5-10 10-10h200.3L504.9 11.5c1.9-1.9 4.4-2.9 7.1-2.9s5.2 1.1 7.1 2.9l141.6 141.6H861c5.5 0 10 4.5 10 10v200.3L1012.6 505c1.9 1.9 2.9 4.4 2.9 7.1 0 2.7-1.1 5.2-2.9 7.1L871 660.8v200.3c0 5.5-4.5 10-10 10H660.7l-141.6 141.6c-2 2-4.5 3-7.1 3zM173 851.1h194.4c2.7 0 5.2 1.1 7.1 2.9L512 991.6l137.5-137.5c1.9-1.9 4.4-2.9 7.1-2.9H851V656.7c0-2.7 1.1-5.2 2.9-7.1l137.5-137.5-137.5-137.5c-1.9-1.9-2.9-4.4-2.9-7.1V173.1H656.6c-2.7 0-5.2-1.1-7.1-2.9L512 32.7 374.5 170.2c-1.9 1.9-4.4 2.9-7.1 2.9H173v194.4c0 2.7-1.1 5.2-2.9 7.1L32.6 512.1l137.5 137.5c1.9 1.9 2.9 4.4 2.9 7.1v194.4z"
            fill=""
            p-id="6883"
          ></path>
          <path
            d="M512 512.1m-257.8 0a257.8 257.8 0 1 0 515.6 0 257.8 257.8 0 1 0-515.6 0Z"
            fill="#F7DDAD"
            p-id="6884"
          ></path>
          <path
            d="M512 779.9c-71.5 0-138.8-27.9-189.4-78.4-50.6-50.6-78.4-117.8-78.4-189.4s27.9-138.8 78.4-189.4c50.6-50.6 117.8-78.4 189.4-78.4 71.5 0 138.8 27.9 189.4 78.4 50.6 50.6 78.4 117.8 78.4 189.4S752 650.9 701.4 701.5 583.5 779.9 512 779.9z m0-515.6c-66.2 0-128.4 25.8-175.2 72.6-46.8 46.8-72.6 109-72.6 175.2s25.8 128.4 72.6 175.2c46.8 46.8 109 72.6 175.2 72.6 66.2 0 128.4-25.8 175.2-72.6 46.8-46.8 72.6-109 72.6-175.2S734 383.7 687.2 336.9c-46.8-46.8-109-72.6-175.2-72.6z"
            fill=""
            p-id="6885"
          ></path>
        </svg>
      </el-button>
      <el-button
        :type="!changeStyle ? 'goup' : ''"
        @click="changeStyle = !changeStyle"
        circle
        ><svg
          v-show="changeStyle"
          t="1651676084600"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4362"
          width="18"
          height="18"
        >
          <path
            d="M185.335 178.178l-2.742-2.384c-13.39-11.534-14.895-31.74-3.36-45.13a32 32 0 0 1 4.324-4.158C249.354 74.17 337.575 48 448.22 48 704.358 48 912 255.74 912 512l-0.062 7.673C907.842 772.394 701.797 976 448.22 976c-110.645 0-198.866-26.169-264.663-78.506a32 32 0 0 1-4.325-4.159c-11.419-13.256-10.058-33.192 2.962-44.78l0.399-0.35 2.742-2.383c89.13-78.201 134.016-188.043 134.66-329.525L320 512c0.253-143.557-44.635-254.831-134.665-333.822z"
            fill="#2c2c2c"
            p-id="4363"
          ></path></svg
      ></el-button>
    </div>
    <div class="div1">
      <span
        class="animate__animated animate__zoomIn animate__delay-0.1s"
        @click="intoCalculator"
        style="cursor: pointer"
        >Welcome AI World</span
      >
      <h1 class="animate__animated animate__zoomIn animate__delay-0.5s">
        a useful tool
      </h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      changeStyle: true,
    };
  },
  methods: {
    //进入计算机页面
    intoCalculator() {
      this.$router.push({
        name: "Calculator",
      });
    },
  },
};
</script>


<style scoped>
.el-button--goon {
  background-color: #080808;
}
.el-button--goup {
  background-color: #080808;
}
.container {
  height: 100%;
  width: 100%;
  position: fixed;
}
.sun {
  background-color: rgb(253, 246, 246);
}

.moon {
  background-color: rgb(9, 9, 9);
}
.moon span{
    color:#4672FE
}
.el-button {
  height: 40px;
  width: 40px;
  border: None;
  margin: 0px;
}
.ChangeStyle {
  float: right;
  margin: 70px 90px;
  padding: 2px;
  display: flex;
  justify-content: space-around;
  width: 80px;
  border-radius: 40px;
  border: 3px solid #4672FE;
}
.animate__animated.animate__zoomIn {
  --animate-duration: 3s;
}
span {
  font-size: 78px;
  font-weight: 600;
  color: sandybrown;
}
h1 {
  font-size: 40px;
  color: #ddd;
}
.div1 {
  text-align: center;
  margin-top: 230px;
}
</style>