const title = "Custom Events",
  selectTitle = document.querySelector('title');
selectTitle.innerHTML = title;

Vue.component('coupon', {
  //props: ['title'],
  template: `
  <div class="coupon">
    <input  type="input" placeholder="Enter your coupon code!" @blur="onCouponApplied"/>
  </div>
  `,
  methods:{
    onCouponApplied(){ //after removing focus from the text field.
      this.$emit('applied')
    }
  }

})

new Vue({
  el: '#root',
  data:{
    couponApplied: false
  },
  methods:{
    onCouponApplied(){
      this.couponApplied = true
    }
  }
})
