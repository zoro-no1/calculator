let num = document.querySelectorAll(".box");
let vale = document.querySelector("#val");

let str = "";
let arr = Array.from(num);
for (let i of arr) {
  i.addEventListener("click", () => {
    if (i.innerHTML == "Enter") {
      str = eval(str);
      vale.value = str;
    }
    else if(i.innerHTML=="Clear"){
      str=""
      vale.value = str;
    }
    else if(i.innerHTML=="AC"){
      str = str.slice(0,-1)
      vale.value = str;
    }

    else {t = i.innerHTML;
    str = str + t;
    vale.value = str;}

    
  });
}
