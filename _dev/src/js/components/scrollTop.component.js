import { Component } from '../core/Component'
export class ScrollTopComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        this.$el.addEventListener('click', topFunction)
        window.onscroll = () => scrollHandler()
    }
}

const $scroll = document.getElementById('scrollTop')

const scrollHandler = () =>{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $scroll.style.display = 'flex'
    } else {
        $scroll.style.display = 'none'
    }
}

const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}