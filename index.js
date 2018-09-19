var title = "component101",
selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;


Vue.component('task', {
    data: function(){
        return {
            title: 'component101'
        }
    },
    template:'<li><slot></slot></li>'
})

var vm = new Vue({
    el:'#root'
})
