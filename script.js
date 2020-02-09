//query selectors 
/*var time9 = document.querySelector("#time9");
var time10 = document.querySelector("#time10");
var time11 = document.querySelector("#time11");
var time12 = document.querySelector("#time12");
var time1 = document.querySelector("#time1");
var time2 = document.querySelector("#time2");
var time3 = document.querySelector("#time3");
var time4 = document.querySelector("#time4");*/

/*function calendar() {
    //Time at 9AM
    var timeat9 = m.format("9 [AM]").toString();
    time9.append(timeat9);
  
    var col9 = document.querySelector("#col9");
    x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("class", "input9");
    if (timeat9 == m.format("H [AM]").toString()) {
      x.setAttribute("placeholder", "Current time");
      x.style.backgroundColor = "red";
      col9.append(x);
    } else if (m.format("H") < m.format("09")) {
      x.setAttribute("placeholder", "Coming time");
      x.style.backgroundColor = "green";
      col9.append(x);
    } else {
      x.setAttribute("placeholder", "Passed time");
      x.style.backgroundColor = "silver";
      col9.append(x);
    }*/


//text box array
var textboxArray = $(".form-control");
for (let i = 0; i < textboxArray.length; i++) {
    let val = getCookie("box" + i);
    textboxArray[i].value = val != null ? val : "";
  }
   
  document.getElementById("date").innerHTML = moment();
   
  console.log(moment())
  function test(box) {
    setCookie("box" + box, textboxArray[box].value);
  }

  function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/;";

  }
   
  function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }


   