<template>
  <div style="text-align: center">
    <div class="div1">
      <a
        ><img
          src="./images/icon-change.png"
          width="30px"
          height="30px"
          style="float: right; margin: 5px; margin-right: 10px; cursor: pointer"
          @click="ToDeepLearning"
      /></a>
      <div class="div2">
        <el-row :gutter="1">
          <el-col :span="6">
            <!-- AC -->
            <el-button @click="AC">AC</el-button>
          </el-col>
          <el-col :span="6">
            <!-- % -->
            <el-button
              style="font-size: 26px; font-weight: 900"
              @click="percent"
              >%</el-button
            >
          </el-col>
          <el-col :span="6">
            <!-- 输出参数 -->
            <el-button @click="sqrt"
              ><svg
                t="1651588455299"
                class="icon"
                viewBox="0 0 1066 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9232"
                width="30"
                height="30"
              >
                <path
                  d="M276.821333 960a125.696 125.696 0 0 1-117.290666-79.402667L105.984 746.666667H64a64 64 0 1 1 0-128h85.333333a64 64 0 0 1 59.434667 40.234666l69.674667 174.165334C347.392 640.64 384 438.826667 384 233.301333A84.053333 84.053333 0 0 1 467.968 149.333333H1002.666667a64 64 0 1 1 0 128H511.488a1828.309333 1828.309333 0 0 1-116.437333 600.704A126.72 126.72 0 0 1 276.821333 960z"
                  fill="#4bcddd"
                  p-id="9233"
                ></path></svg
            ></el-button>
          </el-col>
          <el-col :span="6">
            <!-- 输出下一层shape -->
            <el-button @click="divide"
              ><svg
                t="1651588273968"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7702"
                width="28"
                height="28"
              >
                <path
                  d="M899.9 420.876 478.5 420.876l-22 0L122.051 420.876c-74.384 0-74.384 179.503 0 179.503l334.45 0 22 0 421.4 0C974.285 600.38 974.285 420.876 899.9 420.876z"
                  p-id="7703"
                  fill="#d94c39"
                ></path>
                <path
                  d="M510.977 794.38m-97 0a97 97 0 1 0 194 0 97 97 0 1 0-194 0Z"
                  p-id="7704"
                  fill="#d94c39"
                ></path>
                <path
                  d="M510.977 226.876m-97 0a97 97 0 1 0 194 0 97 97 0 1 0-194 0Z"
                  p-id="7705"
                  fill="#d94c39"
                ></path></svg
            ></el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      transfer: "",
      input: "",
      addNumber: "",
      divideNumber: "",
      reduceNumber: "",
      multiplyNumber: "",
      percentNumber: "",
      flag: 0,
    };
  },
  mounted() {
    /*  console.log(parseFloat(2) / parseFloat(2)); */
  },
  methods: {
    show(e) {
      console.log(e.key, e.keyCode);
    },
    ToDeepLearning() {
      this.$router.push({
        name: "DeepLearning",
      });
    },
    change0() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      if (this.input == "0") {
        this.input = "0";
      } else {
        this.input += "0";
        this.flag = 0;
      }
    },
    change1() {
      //如果这里是由运算符在操作那么 就要重置input
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "1";
      this.flag = 0;
    },
    change2() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "2";
      this.flag = 0;
    },
    change3() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "3";
      this.flag = 0;
    },
    change4() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "4";
      this.flag = 0;
    },
    change5() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "5";
      this.flag = 0;
    },
    change6() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "6";
      this.flag = 0;
    },
    change7() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "7";
      this.flag = 0;
    },
    change8() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "8";
      this.flag = 0;
    },
    change9() {
      if (this.transfer) {
        this.input = "";
        this.transfer = "";
      }
      this.input = this.input + "9";
      this.flag = 0;
    },
    changeDot() {
      /* -1是 不在的意思 */
      if (this.input.indexOf(".") == -1) this.input = this.input + ".";
    },
    add() {
      if (this.flag == 1 || this.flag == 0) {
        this.equal();
        this.addNumber = this.input;
        this.transfer = this.input;
        this.flag = 1;
      } else {
        this.$message("请输入数字在做运算");
      }
    },
    reduce() {
      if (this.flag == 2 || this.flag == 0) {
        this.equal();
        if (!this.input) {
          this.input += "-";
        } else {
          this.reduceNumber = this.input;
          this.transfer = this.input;
          this.flag = 2;
        }
      } else {
        this.$message("请输入数字在做运算");
      }
    },
    multiply() {
      if (this.flag == 3 || this.flag == 0) {
        this.equal();
        this.multiplyNumber = this.input;
        this.transfer = this.input;
        this.flag = 3;
      } else {
        this.$message("请输入数字在做运算");
      }
    },
    divide() {
      if (this.flag == 4 || this.flag == 0) {
        this.equal();
        this.divideNumber = this.input;
        this.transfer = this.input;
        this.flag = 4;
      } else {
        this.$message("请输入数字在做运算");
      }
    },
    //清空所有
    AC() {
      this.input = "";
      this.addNumber = "";
      this.divideNumber = "";
      this.reduceNumber = "";
      this.multiplyNumber = "";
      this.percentNumber = "";
      this.transfer = "";
      this.flag = 0;
    },
    //百分号
    percent() {
      if (!this.input) {
        this.$message("请输入一个数字进行运算");
        this.AC();
      } else {
        if (this.flag == 5 || this.flag == 0) {
          this.percentNumber += "100";
          this.input += "%";
          this.flag = 0;
        } else {
          this.$message("请输入数字在做运算");
        }
      }
    },
    //开根号
    sqrt() {
      if (!this.input) {
        this.$message("请输入一个数字进行运算");
        this.AC();
      } else {
        if (this.flag == 6 || this.flag == 0) {
          this.equal();
          if (this.input < 0) {
            this.$message("负数没有平方根");
            this.input = "";
          } else {
            this.input = Math.sqrt(parseFloat(this.input));
            this.flag = 0;
          }
        } else {
          this.$message("请输入数字在做运算");
        }
      }
    },
    //删除一个字符
    deleteNumber() {
      this.input = this.input.slice(0, -1);
    },
    // 等于
    equal() {
      let {
        addNumber,
        reduceNumber,
        multiplyNumber,
        divideNumber,
        percentNumber,
      } = this;
      /* parseInt把任何形式的字符串转化为整数形式 */
      if (!this.input) {
        this.$message("请输入一个数字进行运算");
        this.AC();
      } else {
        if (addNumber) {
          this.input = `${parseFloat(this.input) + parseFloat(addNumber)}`;
          this.addNumber = "";
        } else if (reduceNumber) {
          this.input = `${parseFloat(reduceNumber) - parseFloat(this.input)}`;
          this.reduceNumber = "";
        } else if (multiplyNumber) {
          this.input = `${parseFloat(this.input) * parseFloat(multiplyNumber)}`;
          this.multiplyNumber = "";
        } else if (divideNumber) {
          if (parseFloat(this.input) == 0) {
            this.$message("除数不能为0");
            this.input = "";
          } else {
            this.input = `${parseFloat(divideNumber) / parseFloat(this.input)}`;
            this.divideNumber = "";
          }
        } else if (percentNumber) {
          this.input = `${parseFloat(this.input) / parseFloat(percentNumber)}`;
          this.percentNumber = "";
        }
      }
    },
  },
};
</script>
 
<style scoped>
* {
  margin: 0px auto;
}

.el-button {
  width: 80px;
  height: 70px;
  border: none;
  font-size: 22px;
  font-weight: 700;
  color: #4bcddd;
}
* >>> .el-textarea__inner {
  overflow-x: hidden;
  overflow-y: hidden;
  border: none;
  border-radius: 20px;
  height: 230px;
  width: 100%;

  margin-top: -8px;
  margin-bottom: 10px;
  position: relative;
  top: 10px;
  font-size: 44px;
  resize: none;
}

.div1 {
  height: 630px;
  width: 350px;
  border: 1px solid sienna;
  border-radius: 20px;
  text-align: center;
}

.div2 {
  border-radius: 30px;
  height: 360px;
  width: 100%;
}
</style>

