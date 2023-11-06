"use strict"

let Data=document.createElement("div");
    Data.id="Data";
let Data_1=document.getElementById("Data")

  let hr=document.createElement("hr");
  Data.append(hr)

  let h_2=document.getElementsByTagName("h2")
      // h_2.addEventListener('click',function(){add(this)})
      console.log(h_2[0]);
  
let p_content=["Lorem ipsum, or lipsum as it is sometimes known, is dummy "+
"text used in laying out print, graphic or web designs.","Get the ultimate"+
" creative toolkit including." +
"Now includes generative AI apps and features– powered by Adobe Firefly.",
"The word 'lorem', for example, isn't a real Latin word, it's a shortened version "+
"of the word 'dolorem', meaning pain. "]

function add(x){
console.log(x.parentElement);
  if(x.parentElement.lastChild.innerHTML == Data.innerHTML){
      x.parentElement.lastChild.remove()
      x.innerHTML="+"
  
  }else{
    if(h_2[0]==x){
      Data.lastChild.remove()
      Data.append(hr,p_content[0])
      x.parentElement.append(Data)
      x.innerHTML="-"
      h_2[1].innerHTML="+"

      h_2[2].innerHTML="+"
    }
   else if(h_2[1]==x){
    Data.lastChild.remove()
      Data.append(hr,p_content[1])
      x.parentElement.append(Data)
      x.innerHTML="-"
      h_2[0].innerHTML="+"

      h_2[2].innerHTML="+"
    }
    else{
      Data.lastChild.remove()
      Data.append(hr,p_content[2])
      x.parentElement.append(Data)
      x.innerHTML="-"
      h_2[1].innerHTML="+"
      h_2[0].innerHTML="+"
    }
  }

}

