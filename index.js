let reviews =[ {id:1,
name: "Estella Roman",
job: "Porduct Manager",
img: "https://i.ibb.co/89CfxZ8/pic-1.png",
text: "This book is absolutly inspirtational. Got my eyes all red. Loved it. "
},
{ id:2,
    name: "Jene Dom",
    job: "Font-end developer",
    img: "https://i.ibb.co/QkvYQ0G/pic-2.jpg",
    text: " Loved it. "
    }
    ,  {id:3,
        name: "Jesse Roy",
        job: "CEO of roy textiles",
        img: "https://i.ibb.co/9qwGRR2/pic-3.png",
        text: "I am speech. I loved it. "
        }   ,
{id:4,
  name: "Imogen Fate",
    job: "Student",
    img: "https://i.ibb.co/hmYW75N/pic-4.png" ,
    text: "Amazing. I can't wait for the sequel. "
 }]
 const img = document.getElementById("person-img");
 const author = document.getElementById ("author")
 const job = document.getElementById ("job")
 const info = document.getElementById ("info")
 // btn
const prevBtn = document.querySelector ("#prev-btn")
const nextBtn = document.querySelector ("#next-btn")
const randomBtn = document.querySelector ("#random-btn")

// starting item
let firstItem = 0
window.addEventListener ("DOMContentLoaded", function (){
    showPerson()})

function showPerson () {
    const item = reviews [firstItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

nextBtn.addEventListener ("click", function () {
    firstItem++
    if (firstItem > reviews.length -1){
        firstItem = 0}
    showPerson()
})

prevBtn.addEventListener ("click", function () {
    firstItem-- 
    if (firstItem < 0 ){
        firstItem = reviews.length -1;
    }
    showPerson()
})
randomBtn.addEventListener ("click", function(){
    firstItem = Math.floor(Math.random() * reviews.length)
    showPerson()
}
)