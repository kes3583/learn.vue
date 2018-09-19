var title = "componentsWithinComponents",
selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;


Vue.component('task-list', {
    template:`
    <ul class="">
        <task v-for="task in tasks">{{ task.task }}</task>
    </ul>
    `,
    data(){
        return {
            tasks:[

                { task:'go to the store', completed: true },
                { task:'Finish the homework', completed: false },
                { task:'vacume the house', completed: false },
                { task:'throw the rubbish away', completed: true }
            ]
        }
    }

})

Vue.component('task', {
    template:'<li><slot></slot></li>'
})

var vm = new Vue({
    el:'#root'
})
