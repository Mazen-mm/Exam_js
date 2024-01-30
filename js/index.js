/////// side bar - start ///////
document.addEventListener("DOMContentLoaded", function (){
  let width = $(".links").outerWidth()
  $("#sidebar").animate({ left: `-${width}px`}, 400)
  $("#setting").on("click", function () {
    let left = $("#sidebar").css("left")
    if (left == "0px") {
      let width = $(".links").outerWidth()
      $("#sidebar").animate({ left: `-${width}px` }, 700)
      $("#sidebar ul").animate({ top: `100%` }, 1000)
      $("#setting").html(`<i class="fa-solid fa-bars fa-2xl"></i>`)
    }
    else {
      $("#sidebar").animate({ left: `0px` }, 700)
      $("#sidebar ul").animate({ top: `0%` }, 1000)
      $("#setting").html(`<i class="fa-solid fa-x fa-2xl"></i>`)
    }
  })
})
/////// side bar - end ///////

///////  -  ///////
let meals = document.querySelector('.container')
let search = document.querySelector('.search')
let details = document.querySelector('.details')
let categorees = document.querySelector('#category')
let contact = document.querySelector('.contact-us')

let imgDetails = document.querySelector('.img-details')
let title = document.querySelector('.title')
let insInfo = document.querySelector('.ins-info')
let area = document.querySelector('.area')
let category = document.querySelector('.category')
let recipes = document.querySelector('.recipes')

/////// getMeals - start ///////
async function getMealDetails(id) {
  let myReq = await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).catch()
  let data = await myReq.json()
  meals.style.display="none"
  search.style.display="none"
  contact.style.display="none"

  imgDetails.src=data.meals[0].strMealThumb
  title.textContent=data.meals[0].strMeal
  insInfo.textContent=data.meals[0].strInstructions
  area.textContent=data.meals[0].strArea
  category.textContent=data.meals[0].strCategory
  details.style.display="block"
  console.log(data);
  return data
}
/////// getMeals - end ///////

/////// search - start ///////
function searchIn() {
  meals.style.display="none"
  categorees.style.display="none"
  contact.style.display="none"
  search.style.display="block"
}
/////// search - end ///////

/////// category - start ///////
async function categ() {
  let myReq = await fetch(`http://www.themealdb.com/api/json/v1/1/categories.php`).catch()
  let data = await myReq.json()
  console.log(data);
  let temp = ''
  for(let i = 0 ; i < data.categories.length ; i++){
    temp += `<div onclick="getMealDetails('52977')" class="meal position-relative col-md-3 p-3 overflow-hidden">
    <img class="  w-100" src="${data.categories[i].strCategoryThumb}" alt=""></img>
    <div class="meal-layer position-absolute text-center overflow-auto text-black p-2">
      <h2 class="cat-title  ">${data.categories[i].strCategory}</h2>
      <p class="cat-info">${data.categories[i].strCategoryDescription}</p>
    </div>
  </div>`
  }
  document.getElementById("rowCategory").innerHTML = temp
  meals.style.display="none"
  search.style.display="none"
  contact.style.display="none"
  categorees.style.display="block"
}
/////// category - end ///////

/////// contact us - start ///////
function contactUs() {
  meals.style.display="none"
  search.style.display="none"
  categorees.style.display="none"
  details.style.display="none"
  contact.style.display="block"
}
/////// contact us - end ///////
