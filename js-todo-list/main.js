// TO DO
document.addEventListener('DOMContentLoaded',function(){
  //增加按鈕
  document.querySelector('#addBtn').addEventListener('click',function(){
    let li =document.createElement('li')
    li.innerHTML= document.getElementById('input').value+'<span class="close">x</span>'
    li.setAttribute('draggable', true)
    // document.querySelectorAll('li')[4].setAttribute('draggable', true)
    console.log(li)
    document.querySelector('ul').appendChild(li)
    document.getElementById('input').value=''
    
  })
  var list = document.querySelector('ul')
  //deleted
  list.addEventListener('click', function(ev) {
      if(ev.target.className === 'close'){
        var li = ev.target.parentElement
        li.remove()
      }
    })
  //hover
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked')
    }
  })
  //draggle
  var li = list.querySelectorAll('li')
  console.log(li)
  li.forEach(function(o){
    o.setAttribute('draggable', true)
    console.log(o)
  })
  // list.addEventListener(forEach(function(o){
  //   console.log(li)
  // }))
})
