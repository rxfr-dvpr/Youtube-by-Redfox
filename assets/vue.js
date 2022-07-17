const app = {
    data() {
        return {
            container: "container",
            containerFluid: "container-fluid",
            containerMax: "container-max",
            row: "row",
            tagValue: "",
            tagTitle: this.tagValue,
            showHide: false
        }
    },
    methods: {
        showHideNav() {
            this.showHide = !this.showHide
        }
    }
}

Vue.createApp(app).mount('#app')

class AddActiveNew {
    constructor(option) {
        this.btns = document.querySelectorAll(option.el)
        
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                
                this.btns.forEach(btn => {
                    btn.classList.remove('active')
                });
                
                btn.classList.add('active')
            })
        });
    }
}

const tagBtnActive = new AddActiveNew({
    el: ".tags-btn"
});

const userSectionsBtn = new AddActiveNew({
    el: ".user__section-item"
})

const userBottomBtn = new AddActiveNew({
    el: ".user__bottom-item"
})

// loader hide 

const loader = document.querySelector('.loader')

setTimeout(() => {
    loader.classList.remove('active')
}, 1500);

// loader hide 
