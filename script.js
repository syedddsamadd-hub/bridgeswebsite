   document.addEventListener("DOMContentLoaded", function() {
  let s = document.querySelectorAll(".nav-link");
  links.forEach((i) => {
    i.addEventListener("click", function() {
      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded",function(){


   let data=[
    {
        img:"b1.jpg"
    },
    {
        img:"b2.jpg"
    },
    {
        img:"b3.jpg"
    },
    {
        img:"b4.jpg"
    },
    {
        img:"b5.jpg"
    },
    {
        img:"b6.jpg"
    }
   ]
   let row=document.getElementById("row1");
   let container=document.getElementById("con1");
  //  console.log(container);
   data.forEach(i=>{
   let card="";
    card=`
    <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <div class="cards m-3">
                <img  data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="img/${i.img}" alt="">
            </div>
        </div>
    `
    row.innerHTML+=(card);
   });
     }); 

    document.addEventListener("DOMContentLoaded",function(){

     
   let data1=[
    {
        img:"bt1.jpg",
        name:"Bridge Alexandre",
        locate:"Hotel des Invalides in Paris",
        btn:"learn more"
    },
    {
        img:"bt2.jpg",
        name:"Brooklyn Bridge",
        locate:"New York City, USA",
        btn:"learn more"
    },
    {
        img:"bt3.jpeg",
        name:"Akashi-Kaikyo Bridge",
        locate:"Awaji Island",
        btn:"learn more"
    },
    {
        img:"bt4.jpeg",
        name:"charles bridges",
        locate:"Prague",
        btn:"learn more"
    },
    {
        img:"bt5.jpg",
        name:"Kanchey Bridge",
        locate:"Gilgit-Baltistan, Pakistan",
        btn:"learn more"
    },
    {
        img:"bt6.jpg",
        name:"Lansdowne Bridge",
        locate:"Sukkur in Sindh",
        btn:"learn more"
    }
   ]

   let row2=document.getElementById("row2");
   let container2=document.getElementById("con2");
  //  console.log(container);
   data1.forEach(a=>{
   let card1="";
    card1=`
     <div class="col-lg-4 col-md-6 col-sm-12 col-12">
       <div class="content-card"> 
      <img src="img/${a.img}" alt="">
      <h3 class="ms-3 my-3">${a.name}</h3>
      <p class="ms-3 my-3"><i class="fa-solid fa-location-dot"></i>${a.locate}</p>
      <button class="btn btn-primary d-block ms-3 mt-3 mb-2">${a.btn}</button>
       </div>
     </div>
    `
    row2.innerHTML+=(card1);
      });
      });

      function submit(){
       let inp1=document.getElementById("inp1");
       let inp2=document.getElementById("inp2");
       let inp3=document.getElementById("inp3");
        
       if (inp1.value==""||inp2.value==""||inp3.value==""){
        alert("first fill all the field")
       } else {
        alert("Thanks for contacting us we will take up yo soon.")

       }

      };

      // let link=document.querySelectorAll(".nav-link");
      
      // Array.from(link).forEach((i),function(){
        
      // })