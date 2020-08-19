import React, {useContext} from 'react';
import './header.scss'
import { Navbar } from '../navbar/Navbar';
import { RateContext } from '../../context/RateContext';

export const Header = () =>{

    const {state, changeLang, modalShowHandler} = useContext(RateContext)

    return(
        <div className='header'>
            <div className='headerWrap'>
                <div className='logo'>
                    <a href='/'><h2>RateApp</h2></a>
                </div>
                <div className='navBar'><Navbar/></div>
                <div className='person'>
                    <i className='fa fa-user' aria-hidden = 'true' onClick={modalShowHandler} style={{cursor:'pointer'}}/>
                    <div className='changeLang'>                        
                        <button onClick={changeLang}>{state.currentLang ? "ru" : "eng"}</button>
                        {/* <img src={state.currency.USD.flag} alt='lang'/>
                        <img src={state.currency.RUB.flag} alt='lang'/> */}
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}


