import React, {Fragment, useContext} from 'react';
import './layout.scss';
import {Route, Switch} from 'react-router-dom'
import { AddClass } from '../../hoc/AddClass';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { Calc } from '../../pages/calc/Calc';
import { Info } from '../../pages/info/Info';
import { Sample } from '../../pages/sample/Sample';
import { Sidebar } from '../sidebar/Sidebar';
import { RateContext } from '../../context/RateContext';

const Layout = () => {

    const {state} = useContext(RateContext)

    return(
        <Fragment>
            <Header/>
            <div className='content'>
                <div className='routes'>
                    { state.auth ? <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/calc' render={()=> <Calc/>}/>
                        <Route path='/sample' render={()=> <Sample/>}/>
                        <Route path='/info' render={()=> <Info/>}/>
                    </Switch> : 
                    <Switch>
                        <Route path='/'  component={Home}/>
                    </Switch>
                }

                    
                </div>
                <Sidebar/>
            </div>
        </Fragment>
    )
}

export default AddClass(Layout, 'layout')