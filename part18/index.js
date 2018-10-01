const title = "fetch data with Axios",
  selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;

Vue.component('placeholder', {
  template:`
  <div class="placeholder">
    <h1>learning Axios</h1>
    <button class="button" type="button" name="button" @click="fetchPosts">fetch data</button>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else class="fetch-data">
      <div v-if="loading">
        <div class="pageloader"><span class="title">Pageloader</span></div>
      </div>
      <div v-else>
        <div v-for="post in posts">
          <h2>{{post.title}}</h2>
          <p>{{post.body}}</p>
        </div>
      </div>
    </section>
  </div>
  `,
  data(){
    return {
      placeholder:[],
      loading: false,
      errored: false
    }
  },
  methods:{
    fetchPosts(){
      this.loading = true;
      // using JSONPlaceholder
      const baseURI = 'https://jsonplaceholder.typicode.com';
      axios.get(`${baseURI}/posts`)
     .then((response) => {
       console.log(response)
       this.loading = false;
       this.posts = response.data
     })
     .catch(error => {
        console.log(error)
        this.loading = false;
        this.errored = true
      })


    }

  }
})

// Vue.component('placeholder-user', {
//   props: ['title'],
//   template:`
//   <div class="placeholder">
//     <h1>{{title}}</h1>
//     <button class="button" type="button" name="button" @click="fetchUsers">fetch users</button>
//     <section v-if="errored">
//       <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
//     </section>
//     <section v-else class="fetch-data">
//       <div v-if="loading">
//         <div class="pageloader"><span class="title">Pageloader</span></div>
//       </div>
//       <div v-else>
//         <div class="" v-for="user in users" >
//           <h2>{{user.id}}</h2>
//           <p>{{user.username}}</p>
//           <p>{{user.email}}</p>
//         </div>
//       </div>
//     </section>
//   </div>
//   `,
//   name : 'Users',
//   data(){
//     return {
//       posts:[],
//       users:[],
//       loading: false,
//       errored: false
//     }
//   },
//   methods:{
//     fetchUsers(){
//       this.loading = true;
//       // using JSONPlaceholder
//       const baseURI = 'https://jsonplaceholder.typicode.com';
//       axios.get(`${baseURI}?id=1`)
//      .then((response) => {
//        console.log(response)
//        this.loading = false;
//        this.users = response.data
//      })
//      .catch(error => {
//         console.log(error)
//         this.loading = false;
//         this.errored = true
//       })
//
//     }
//   }
// })

new Vue({
  el: '#root'
})
