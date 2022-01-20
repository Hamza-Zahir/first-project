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
    
    let lastDay = new Date("Feb 13, 2022 23:59:59")
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



/* emd section events */





// .........................................................................................
 

/*----------------17 week exercises js from #123 to #133 :   */
 

  //.............exercises 1:
console.log(`.............exercises 1:`)


let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size)

console.log(setOfNumbers)

console.log([...setOfNumbers][2])

 //.............exercises 2:

console.log(`.............exercises 2:`)


 let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];


console.log([...new Set(myFriends)].sort())

 //.............exercises 3:

 console.log(`.............exercises 3:`)


 let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

myInfo = new Map()
.set(Object.keys(myInfo)[0], myInfo.username)
.set(Object.keys(myInfo)[1], myInfo.role)
.set(Object.keys(myInfo)[2], myInfo.country)

console.log(myInfo)

console.log(myInfo.size)

console.log(myInfo.has("role"))


 //.............exercises 4:

console.log(`.............exercises 4:`)
  
let theNumber = 100020003000;

 
 console.log(+[...(theNumber.toString())].sort().join(""))

 

 //.............exercises 5:

 console.log(`.............exercises 5:`)

let theName = "Elzero";


console.log(theName.split(""))

console.log([...theName])

console.log([...new Set(theName)])

console.log(Array.from(theName))

console.log(Array.from(new Set(theName)))

 


 //.............exercises 6:

console.log(`.............exercises 6:`)
 
let resalt = 0;

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

 

let copy = function (arr) {
  
 arr.sort().forEach(function (e) {

  if (typeof(e) === "number") {

    resalt++
   }  
  arr.copyWithin(0,resalt,resalt*2)

 }) 
  return arr;
}
 console.log(copy(chars)) 
 console.log(copy(chars2)) 
 console.log(copy(chars3)) 




//  .............exercises 7:

 console.log(`.............exercises 7:`)


 let numsOne = [1, 2, 3];
 let numsTwo = [4, 5, 6];
 
  
//  metod 1 
console.log([...numsOne, ...numsTwo] )

//  metod 2
console.log([numsOne, numsTwo].flat())

//  metod 3 
console.log(numsOne.concat(numsTwo))

console.log(Array.of(...numsOne,...numsTwo))


//  metod 4 
numsTwo. unshift(...numsOne)
console.log(numsTwo)

 

 //.............exercises 8:

 console.log(`.............exercises 8:`)

console.log(`Map And Set Challenge #133:`)


let n1 = [10,30,10,20]
let n2 = [30, 20, 10]


//  metod 1
console.log(new Set(n2).keys().next().value * [...n1, ...n2].length);

//  metod 2
console.log(Math.max(...n1)* [...n1, ...n2].length);















// let nextday = new Date(2021, 11, 27) / 1000 / 60 / 60 / 24;

// let now = new Date()/ 1000 / 60 / 60 / 24;

// console.log(Math.floor(nextday));

// console.log(Math.floor(now)); 

// console.log(Math.floor(nextday - now));  // 30 ?









