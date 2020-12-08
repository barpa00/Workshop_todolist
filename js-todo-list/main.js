// TO DO
document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('#addBtn').addEventListener('click',function(){
    // console.log("oo")
    let li =document.createElement('li')
    // li.innerHTML='<span class="close">x</span>'
    li.innerHTML= document.getElementById('input').value+'<span class="close">x</span>'
    console.log( li.innerHTML)
    // li.textContent = document.getElementById('input').value
    // const oo = document.getElementById('input').value
    // console.log(oo)
    document.querySelector('ul').appendChild(li)
    document.getElementById('input').value=''
  })
  // document.getElementsByClassName('close').addEventListener('click',function(){
  //   alert("ppp")
  //   console.log("close")
  // })
  // document.getElementsByClassName("close")
})