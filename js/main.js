 /*
<!--   
 <div class="container">
   <div id="header">
     <h1>BREAKING BAD API</h1>
   </div>
   <div id="content"></div>
  
 </div>
-->
 */  
  
/*

const api = "https://www.breakingbadapi.com/api/characters";

async function getdata(){
  try{const response = await fetch(api);
    const  data = await response.json();
          
          printdata(data)
   
  }catch(e){ console.log("Error",e.message)

  }
}


getdata()

function printdata(data){

const header = document.querySelector("#header")  

 header.innerHTML += ` <select class = "form-control" onchange="hanza(this.value)" >
 <option>please select</option>
 ${ Object.values(data).map(ele =>`<option>${ele.name}</option>`)}
  </select> `
  
}

async function hanza(name){
   const content =document.querySelector("#content")
 if(name!=="please select"){
  const response = await fetch( ` ${api}?name=${name}`)
  const  data = await response.json();
 console.log(data)
  content.innerHTML = `
  <h1>${data[0].name} (${data[0].nickname})</h1>
  <h2>${data[0].portrayed}<h2>
  <h2>${data[0].birthday}</h2>

  <img src="${data[0].img}" width="250px">`

 }else{
   content.innerHTML = `<h1>please select the person</h1>`

 }
}
 */
 
 

//  $("#areaCode").on("change", function() { 

//   $('#dialCode').val($('option:selected',this).data('dialcode'));
// });



 
// contryCode.onchange = function () {
//   phone.value=this.value
//     sessionStorage.setItem("dialCode",this.value)
     
//   };
 
/*---------------------------------------------------------------------------------*/
 

window.onscroll = function () {

    if (window.scrollY >= sectionSkills.offsetTop - 150) {

      mySkills.forEach((skill) => skillRatio(skill));

    }
    
    if (window.scrollY >= sectionStats.offsetTop) {

      if (time) {
        myStats.forEach((el) => statsCount(el));
      }
      time = false;
      
    }
    
}


 
/* start section Skills */

  let mySkills = document.querySelectorAll("#Skills .progress span");
  let sectionSkills = document.querySelector("#Skills");

  function skillRatio(ele) {

    ele.style.width = `${ele.dataset.width}%`;
    
  }

/* end section Skills */


/* start section Stats */

  let myStats = document.querySelectorAll("#Stats .container .number");
  let sectionStats = document.querySelector("#Stats");
  let time = true;

  function statsCount(ele) {

    let countEnd = ele.dataset.number;
    let mycunte = setInterval(() => {
      ele.textContent++

      if (ele.textContent == countEnd) {
        ele.classList.add("finish");

        clearInterval(mycunte);
      }
    }, 1000/countEnd);
  
  }

/* end section Stats */


/* start section events */

  let Days = document.querySelector(".Events .Days span");
  let Hours = document.querySelector(".Events .Hours span");
  let Minutes = document.querySelector(".Events .Minutes span");
  let Seconds = document.querySelector(".Events .Seconds span");

  let d = 1000*60*60*24;
  let h = 1000*60*60;
  let m = 1000*60;
  let s = 1000;

  let counteddown = setInterval(() => {
    
    let lastDay = new Date("Feb 13, 2023 23:59:59")
    let now = new Date;
    let remainingTime = lastDay - now;

    let remainingDays = Math.floor((remainingTime / d));
    let remainingHours  = Math.floor((remainingTime % d ) / h);
    let remainingMinutes  = Math.floor((remainingTime % h ) / m);
    let remainingSeconds  = Math.floor((remainingTime % m ) / s);

    Days.textContent = remainingDays < 0 ? `00` : remainingDays < 10 ? `0${remainingDays}` : remainingDays;
    Hours.textContent = remainingHours < 0 ? `00` : remainingHours < 10 ? `0${remainingHours}` : remainingHours;
    Minutes.textContent =  remainingMinutes < 0 ? `00` : remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
    Seconds.textContent =  remainingSeconds < 0 ? `00` : remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;


    if(lastDay - now <= 0 ) {
      clearInterval(counteddown);

    }
    
  }, 1000);







