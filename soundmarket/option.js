let onOff = document.querySelectorAll(".option_onoff");
let clickOnoff = document.querySelectorAll(".option_onoff_btn");

for (let i = 0; i < clickOnoff.length; i++) {
  clickOnoff[i].onclick = function () {
    if (onOff[i].style.display == "none") {
      onOff[i].style.display = "inline-block";
      document.querySelector("#whole_wrap2").style.height = "600px";
      document.querySelector("#bottom_buy_ul").style.bottom = "-140px";
    } else {
      onOff[i].style.display = "none";
      document.querySelector("#whole_wrap2").style.height = "500px";
      document.querySelector("#bottom_buy_ul").style.bottom = "0";
    }
  };
}

if (document.querySelectorAll(".onOff")[0].style.display == "none") {
  document.querySelector("#bottom_buy_ul").style.bottom = "0";
  document.querySelector("#whole_wrap2").style.height = "500px";
}
