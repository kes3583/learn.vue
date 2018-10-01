const title = "inline templates",
  selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;

Vue.component('progress-view', {
  data(){
    return{
      completetionRate : 50
    }
  }
})

new Vue({
  el: '#root'
})
