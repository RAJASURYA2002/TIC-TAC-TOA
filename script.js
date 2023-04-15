"use strict";
const gameContainer = document.querySelector(".game_container");
const box = document.querySelector(".small_box_container");
const winListBox = document.querySelector(".winlist");
//global declare//
let userClick = 1;
let clickCheck = [];
const winCheckP1 = [];
const winCheckP2 = [];
//function//
//add image
const addImage = function (x, y) {
  const img = document.querySelector(`.img_${x}_${y}`);
  img.classList.remove("display");
};
const winCheck = function (userList, x) {
  console.log(userList);
  const valuesToCheck1 = ["1", "2", "3"];
  const valuesToCheck2 = ["4", "5", "6"];
  const valuesToCheck3 = ["7", "8", "9"];
  const valuesToCheck4 = ["1", "4", "7"];
  const valuesToCheck5 = ["2", "5", "8"];
  const valuesToCheck6 = ["3", "6", "9"];
  const valuesToCheck7 = ["1", "5", "9"];
  const valuesToCheck8 = ["3", "5", "7"];
  const result1 = valuesToCheck1.every((val) => userList.includes(val));
  const result2 = valuesToCheck2.every((val) => userList.includes(val));
  const result3 = valuesToCheck3.every((val) => userList.includes(val));
  const result4 = valuesToCheck4.every((val) => userList.includes(val));
  const result5 = valuesToCheck5.every((val) => userList.includes(val));
  const result6 = valuesToCheck6.every((val) => userList.includes(val));
  const result7 = valuesToCheck7.every((val) => userList.includes(val));
  const result8 = valuesToCheck8.every((val) => userList.includes(val));
  if (
    result1 === true ||
    result2 === true ||
    result3 === true ||
    result4 === true ||
    result5 === true ||
    result6 === true ||
    result7 === true ||
    result8 === true
  ) {
    // console.log(x);
    winList(x);
  }
};
const winList = function (x) {
  console.log(x);
  winListBox.classList.remove("display");
  gameContainer.classList.add("display");
  const img = document.querySelector(`.img_3`);
  img.src = `/image/${x}.png`;
  // console.log(img);
  // img.classList.remove("display");
};
gameContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".box");
  let n = clicked.dataset.set;

  if (userClick === 1) {
    let c = 0;
    userClick = 2;
    let a = n + 1;
    let b = n + 2;
    clickCheck.forEach((mov) => {
      if (a === mov || b === mov) {
        c = 1;
      }
    });
    if (c === 0) {
      addImage(n, 1);
      clickCheck.push(a);
      clickCheck.push(b);
      winCheckP1.push(n);
      winCheck(winCheckP1, 1);
    } else {
      userClick = 1;
      alert("no");
    }
    return;
  }
  if (userClick === 2) {
    let c = 0;
    userClick = 1;
    let a = n + 1;
    let b = n + 2;
    clickCheck.forEach((mov) => {
      if (a === mov || b === mov) {
        c = 1;
      }
    });
    if (c === 0) {
      addImage(n, 2);
      clickCheck.push(a);
      clickCheck.push(b);
      winCheckP2.push(n);
      winCheck(winCheckP2, 2);
    } else {
      userClick = 2;
      alert("no");
    }
    return;
  }
});
