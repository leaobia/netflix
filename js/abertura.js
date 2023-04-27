'use strict'

 class cards extends HTMLElement {
    constructor() {

        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do Aluno'
        this.foto = null
        this.cor = '#00587A';
        this.turma = 'Turma'

    }

    static get observedAttributes(){
        return ['nome', 'foto', 'cor', 'turma']
    }

    
    attributeChangedCallback (nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }



    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        
        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }


        .user{
            width: 200px;
            height: 200px;
            transition: .3s ease-in-out;
        }

        .user__img{
            background: url(${this.foto});
            height: 200px;
            width:200px;
            background-size: cover;
            background-position: center;
        }

        .user:hover{
            transform: scale(1.2);
           }
           
        
        `

        return css;
    }

    component() {

        const user = document.createElement('div')
        user.classList.add('user')

        const imgAluno = document.createElement('div')
        imgAluno.classList.add('user__img')


        user.append( imgAluno)
        return user
    }

}

// isso cria a propia tag chamada card-bibi
customElements.define('card-login', cards)