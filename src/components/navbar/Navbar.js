import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'
import './navbar.scss'
import { RateContext } from '../../context/RateContext';

export const Navbar = () => {

    const {state} = useContext(RateContext)

    return (

            <nav>
                <ul>
                    <li><NavLink to='/'>{state.currentLang ? "Главная" : "Main"}</NavLink></li>
                    <li><NavLink to='/calc'>{state.currentLang ? "Калькулятор" : "Calculate"}</NavLink></li>
                    <li><NavLink to='/sample'>{state.currentLang ? "Выборки" : "Sampling"}</NavLink></li>
                    <li><NavLink to='/info'>{state.currentLang ? "Информация" : "Info"}</NavLink></li>
                </ul>
            </nav>
    )
}
