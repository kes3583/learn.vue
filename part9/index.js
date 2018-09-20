const title = "practical component Exercise 1 message",
selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;


// Vue.component('message', {
//     props: ['title'],
//     template:`
//     <article class="message">
//       <div class="message-header">
//         <p>{{title}}</p>
//         <button class="delete" aria-label="delete"></button>
//       </div>
//       <div class="message-body">
//         <slot></slot>
//       </div>
//     </article>
//     `
// })

Vue.component('message-box', {
  props: ['msg'],
  template: `
  <article class="message">
    <div class="message-header">
      <p>{{msg.title}}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      <slot>{{msg.body}}</slot>
    </div>
  </article>
  `,
  data(){
      return {}
  }
})


new Vue({
  el: '#root',
  data:{

        messages: [
          { id: 1, className:'is-info', title: 'My journey with Vue', body:'info' },
          { id: 2, className:'is-link', title: 'Blogging with Vue', body:'lik'},
          { id: 3, className:'is-warning', title: 'Why Vue is so fun', body:'warning'}
        ]

  }
})
