import { Component } from '../core/Component'
export class SelectorComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        this.$el.addEventListener('click',select.bind(this))
    }
}
// const $selector = document.querySelector('.fa-circle-check')

const select = (event) => {
    console.log(event.target);
    // Array.from($selector).forEach(s=>{})
    
    if(event.target.classList.contains('fa-circle-check')){
              event.target.classList.toggle('active')
            }
}
