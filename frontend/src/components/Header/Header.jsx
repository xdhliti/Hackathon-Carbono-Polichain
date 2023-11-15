import { useState } from 'react'
import './Header.css'

function Header() {


  return (
    <>
      <div className='Wrapper'>
        <div className="itens">
            <div className="CCWrapper"><button className='botao' onClick= "./../../pages/quemSomosNos.jsx" >TELA INICIAL</button></div>
            <div className="CCWrapper"><button className='botao'>QUEM <br></br>SOMOS NÓS?</button></div>
            <div className="CCWrapper"><button className='botao'>O QUE É <br></br>BLOCKCHAIN?</button></div>
            <div className="CCWrapper"><button className='botao'>CRÉDITO<br></br> DE CARBONO</button></div>
            <div className="CCWrapper"><button className='botao'>BOLSA VERDE</button></div>
            <div className="CCWrapper"><button className='botao'>DOAÇÕES<br></br> SUSTENTÁVEIS</button></div>
        </div>
        <div className="perfil">
            <div className="CCWrapper"><button className='botao'>LOGIN</button></div>
        </div>
      </div>
    </>
  )
}

export default Header;
