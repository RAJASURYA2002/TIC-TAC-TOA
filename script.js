"use strict";

//API Connection///
/////////////////////////////////////////////////////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyCTxhogyPrRrpiRcxvTabvfOeD84EUXk-k",
  authDomain: "tictactoe-59275.firebaseapp.com",
  databaseURL: "https://tictactoe-59275-default-rtdb.firebaseio.com",
  projectId: "tictactoe-59275",
  storageBucket: "tictactoe-59275.appspot.com",
  messagingSenderId: "913472511152",
  appId: "1:913472511152:web:693a6d14dca4881adfef75"
};
firebase.initializeApp(firebaseConfig);
var formdb = firebase.database().ref("User Control");
/////////////////////////////////////////////////////////////////////////
//Html Class--------------------------------------------------
const gameContainer = document.querySelector(".game_container");
const box = document.querySelector(".small_box_container");
const winListBox = document.querySelector(".winlist");
//----------------------------------------------------
//global declare//
let userClick = 1;
const winCheckP1 = [];
const winCheckP2 = [];
let arr=[0];
//function//

//add image---------------------------------------
const addImageStore=function(x,y)
{
  formdb.update({
    userArrayx:arr,
    userArrayy:[1]
}).then(function() {
  // Update successful
}).catch(function(error) {
  // An error occurred
});  
}
const addImage = function (x, y) {
  const img = document.querySelector(`.img_${x}_${y}`);
  img.classList.remove("display");
};
// addImageStore();
// --------------------------------------------------

//WinListCheck------------------------------------
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
    winList(x);
  }
};
// ---------------------------------------

//winListDisplay----------------------
const winList = function (x) {
  console.log(x);
  winListBox.classList.remove("display");
  gameContainer.classList.add("display");
  const img = document.querySelector(`.img_3`);
  img.src = `/image/${x}.png`;
};
// ----------------------------------------------

//AddEventListener--------------------------------
gameContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".box");
  let n = clicked.dataset.set;
  clicked.dataset.set = "22";
  if (userClick === 1) {
    userClick = 2;
    if (n != "22") {
      addImage(n, 1);
      winCheckP1.push(n);
      winCheck(winCheckP1, 1);
    } else {
      userClick = 1;
      alert("no");
    }
    return;
  }
  if (userClick === 2) {
    userClick = 1;
    if (n !== "22") {
      addImage(n, 2);
      winCheckP2.push(n);
      winCheck(winCheckP2, 2);
    } else {
      userClick = 2;
      alert("no");
    }
    return;
  }
});
//-----------------------------------------------

//--------------powerTool---------------------
// setInterval(function(){
//   location.reload();
// }, 5000);
// -----------------------------------------------
//checking------------------\var newContactForm = formdb.push();
const check=document.querySelector('.check');
check.addEventListener('click',function(){
  // var newContactForm = formdb.push();
  //   newContactForm.set({
  //     userArray:arr,
  //   });
  addImageStore();
  })
  formdb.on("value", function (snapshot) {
    snapshot.forEach(function (element) {
      //  element.val().userArrayx.push(20);
       console.log(element.val());
    });
  });

