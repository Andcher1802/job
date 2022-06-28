import { Component } from "../core/Component"
export class BurgerComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        this.$el.addEventListener('click', burgerHandler.bind(this))
    }
}
const $popup = document.getElementById('popup')
const $body = document.body

function burgerHandler(event){
    event.preventDefault()
    this.$el.classList.toggle('active')
    $popup.classList.toggle('open')
}
