import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Text from './components/text'

ReactDOM.render(
    <div className='body'>
        <NavBar btn1="Sobre" btn2="Contato" btn3="Login" btn4="Cadastro"/>

        <Text/>

        <Footer/>
    </div>,
    document.getElementById('root')
)