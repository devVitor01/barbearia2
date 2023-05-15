import React, { useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Main from './components/main';
import logo from './assets/barbearia-logo.png';
import moon from './assets/moon.png';
import sun from './assets/sun.png';

function App() {
  const fundoClaro = 'claro';
  const fundoEscuro = 'escuro';
  const mostraMoon = moon;
  const mostraSun = sun;
  const mostraLigth = 'Ligth';
  const mostraDark = 'Dark';

  const[corDeFundoAtualizada, setCorDeFundoAtualizada] = useState(true);
  const[imgAtualizada, setImgAtualizada] = useState(true);
  const[textoAtualizado, setTextoAtualizado] = useState(true);

  function trocaCorDeFundo (){
    setCorDeFundoAtualizada(!corDeFundoAtualizada);
    setImgAtualizada(!imgAtualizada);
    setTextoAtualizado(!textoAtualizado);
  }

  return (
    <div className='App' id={corDeFundoAtualizada ? fundoClaro : fundoEscuro}>
        <header className="modo-escuro">
            <div className="header-container largura-limitada">
                <div className="header-box">
                    <img src={logo}/>
                </div>

                <div className="header-box header-box-button">
                  <button onClick={trocaCorDeFundo} className="header-button" id="header-button"><img src={imgAtualizada ? mostraMoon : mostraSun}/>{textoAtualizado ? mostraDark : mostraLigth}</button>
                </div>
            </div>
        </header>

        <Banner />
        <Main />
    </div>
  );
}

export default App;
