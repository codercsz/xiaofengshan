//拿到操作的元素
let oBtn_0 = document.querySelector(".switch_0");
let oBtn_1= document.querySelector(".switch_1");
let oBtn_2 = document.querySelector(".switch_2");
let oBtn_3 = document.querySelector(".switch_3");
let oLeaf = document.querySelector(".leafs");
//  定时器
let timerId = null;
let step = 0;

oBtn_1.onclick = function () {
  rotate(2);
};
oBtn_2.onclick = function () {
  rotate(3);
};
oBtn_3.onclick = function () {
  rotate(5);
};

/*  oBtn_1.onclick = function () {
    rotate(4);
  };
  oBtn_2.onclick = function () {
    rotate(8);
  };
  oBtn_3.onclick = function () {
    rotate(10);
  };*/

function rotate(speed) {
  clearInterval(timerId);
  timerId = setInterval(function () {
    step += 1;
    if (step > 360) {
      step = 1;
    }
    oLeaf.style.transform = `rotate(${step * speed}deg)`;
  }, 1);
}

//按下0键清理定时器，关闭风扇
oBtn_0.onclick = function () {
  clearInterval(timerId);
  console.log("关闭风扇");
};