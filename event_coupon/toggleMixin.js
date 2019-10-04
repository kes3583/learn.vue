export default {
    data() {
        return {
            isShowing: false,
            el:'',
            wh:'',
            mcw:'',
            mcwh:'',
            bch:'',
        }
    },
    mounted(){
        console.log('mixins!')
    },
    methods: {
        //show modal
        showModal: function (el) {
            this.wh = window.innerHeight || 0;
            this.el = document.querySelector('.' + el) || this.el;
            this.mcw = this.el.querySelector('.modal-wrapper') || this.mcw;
            this.mcwh = this.mcw.offsetHeight || this.mcwh;
            this.el.classList.toggle('is-visible');
            document.querySelector('body').classList.add('oh');
            
            /* 쿠폰 팝업 */
            if (el === 'modal-coupon') {
                this.bch = this.mcw.querySelector('.btn-cancel').offsetHeight;
                this.el.querySelector('.modal-content .scroll_').scrollTop = 0;
                this.mcw.querySelector('.modal-content').style.height = (this.wh - this.bch - 90) + 'px';
            }

            /* 컨펌 팝업 */
            //console.log(el === 'modal-confirm' && _this.classList.contains("is-visible"))
            if (el === 'modal-confirm' && this.el.classList.contains("is-visible")) {
                this.mcw.style.marginTop = this.wh / 2 - this.mcwh / 2 + 'px';
            }

            //bodyScrollLock.disableBodyScroll(scrollEl);

        }
        
        
    }
};