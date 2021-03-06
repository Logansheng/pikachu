const string = `
  /*首先准备皮卡丘的皮肤*/
 .skin * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: #ffe600;
  padding: 0;
  margin: 0;
}
.skin {
  position: relative;
}
/*然后固定皮卡丘的鼻子*/
.nose {
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top: 10px solid black;
  position: relative;
  left: 50%;
  top: 300px;
  margin-left: -10px;
}
.nose .yuan {
  border: 1px solid black;
  width: 20px;
  height: 10px;
  position: absolute;
  top: -16px;
  right: -10px;
  border-radius: 50%;
  background-color: black;
}
/*紧接着是眼睛*/
.eyes {
  height: 64px;
  width: 64px;
  border: 2px solid black;
  background: #2e2e2e;
  position: absolute;
  left: 50%;
  top: 260px;
  margin-left: -32px;
  border-radius: 50%;
}
/*伪元素高光*/
.eyes::after {
  content: '';
  z-index: 10;
  width: 28px;
  height: 28px;
  border: 2px solid black;
  background: white;
  position: absolute;
  border-radius: 50%;
  right: 22px;
  top: 2px;
  animation: look-around 3000ms  infinite;

}
/*添加动画*/
@-webkit-keyframes look-around {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  5% {
    -webkit-transform: translate(50%, -25%);
    transform: translate(50%, -25%);
  }
  10% {
    -webkit-transform: translate(50%, -25%);
    transform: translate(50%, -25%);
  }
  15% {
    -webkit-transform: translate(-100%, -25%);
    transform: translate(-100%, -25%);
  }
  20% {
    -webkit-transform: translate(-100%, -25%);
    transform: translate(-100%, -25%);
  }
  25% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
@keyframes look-around {
  0% {
    transform: translate(0);
  }

  50% {

    transform: translate(40%, 20%);
  }
  100% {

    transform: translate(0, 0);
  }
}
/* 下面是加鼻子摇动的动画 */
@keyframes wave {
  0% {
    transform: rotate(-10deg);
  }
  33% {
    transform: rotate(10deg);
  }
  66% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}

.eyes.Right {
  transform: translateX(120px);

}
.eyes.Left {
  transform: translateX(-120px);

}
/*接着是皮卡丘的小嘴巴*/
.mouth {
  height: 200px;
  width: 180px;
  position: absolute;
  right: 50%;
  margin-right: -90px;
  top: 320px;
  overflow: hidden;
}
.kua {
  height: 10px;
  width: 180px;
  background: #ffe600;
  z-index: 0;
}

.mouth .up .r {
  height: 30px;
  width: 90px;
  border: 4px solid black;
  border-top: transparent;
  border-right: transparent;
  border-radius: 0 0 0 90%;
  transform: rotate(-26deg);
  position: absolute;
  background: #ffe600;
  top: 0;
}
.mouth .up .l {
  position: absolute;
  height: 30px;
  width: 90px;
  border: 4px solid #000000;
  border-top: transparent;
  border-left: transparent;
  border-radius: 0 0 90% 0;
  transform: rotate(26deg);
  top: 0;
  left: 90px;
  background: #ffe600;
}
.mouth .down {
  height: 400px;
  width: 120px;
  border: 3px solid black;
  border-radius: 50%;
  position: absolute;
  left: 30px;
  top: -230px;
  overflow: hidden;
  background: #9b000a;
  z-index: -1;
}
.mouth .down .pink {
  height: 400px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  right: -43px;
  top: 260px;
  background: #ff485f;
  z-index: 0;
}
/*最后是两个红红的小脸蛋*/
.face {
  width: 88px;
  height: 88px;
  position: absolute;
  border: 3px solid black;
  right: 50%;
  margin-right: -44px;
  border-radius: 50%;
  background: #ff0000;
}
.face.Rf {
  transform: translateX(180px);
  top: 360px;
}
.face.Lf {
  transform: translateX(-180px);
  top: 360px;
}

.nose:hover {
  animation: wave 250ms infinite;
}
/*最终完成了，用电脑预览效果更佳*/
`;
export default string;
