import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './NavBar.css';


const NavBar = () => {
    return (
        
        <header>
            
                <div class="empresa"><h1>Distribuidora</h1></div>
                <div class="greeting"><ItemListContainer greeting={'Bienvenido'}/></div>
                <nav class="nav-bar">
                <a href="" className="nav-link">inicio</a>
                <a href="" className="nav-link">productos</a>
                <a href="" className="nav-link">contacto</a>
                </nav>   
                <div class="cartwidget"><CartWidget/></div> 
                
            
        </header>
        
        
    );
};

export default NavBar;