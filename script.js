
var add =document.getElementById("add-popupbox")
var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup-box")

add.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display ="block"
    popup.style.display ="block"
})
var cancelpopup = document.getElementById("book-cancel")
cancelpopup.addEventListener("click",function(event)
{
    event.preventDefault() 
     overlay.style.display ="none"
    popup.style.display ="none"
})
var addbook = document.getElementById("add-book")
var outer = document.querySelector(".outer")
var bookname = document.getElementById("bookname")
var bookid = document.getElementById("bookid")
var bookdesc =document.getElementById("bookdesc")
var close = document.getElementById("delete")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","inner")
    div.innerHTML=`<h2>${bookname.value}</h2> <h3>${bookid.value}</h3> <p>${bookdesc.value}</p> <button class ="Close" onclick="del()">Close</button>`
    outer.append(div)
})
function del()
{
    event.target.parentElement.remove()
}