//text box array
var textboxArray = $(".form-control");
//name of array forEach funct that will go through each element in the array
//the function and I am passing in the elements in the array
textboxArray.forEach(function(myElement){{
          if ( this.moment === "ago" ) {
            this.style.color = ".past";
          } 
            else if (this.moment === "from now") {
                this.style.color = ".future";
                }
                else {
                    this.style.color = ".present";
                }
            
        };
      });



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


   