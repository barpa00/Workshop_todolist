// TO DO
document.addEventListener('DOMContentLoaded',function(){
  //增加按鈕
  document.querySelector('#addBtn').addEventListener('click',function(){
    let li =document.createElement('li')
    li.innerHTML= document.getElementById('input').value+'<span class="close">x</span>'
    // console.log( li.innerHTML)
    document.querySelector('ul').appendChild(li)
    document.getElementById('input').value=''
  })
  //deleted
  var close = document.getElementsByClassName("close")
  var i 
  for(i=0;i<close.length;i++){
    console.log(close[i])
      close[i].onclick = function(){
      var li = this.parentElement
      li.remove()
    }
  }
  var hover = document.getElementsByTagName('li')
  var i
    // console.log(hover)
  for(i=0;i<hover.length;i++){
    (hover[i]).onclick = function(){
      // hover[i].classList.toggle('.hover')
      // console.log(this)
      this.classList.toggle('checked')
    }
  }
})