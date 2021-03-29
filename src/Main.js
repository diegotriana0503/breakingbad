import React from 'react';
import {Footer} from './components/Footer';
import { MainRouter } from './router/MainRouter';
export const Main = () =>{
    return(
        <div>
           <MainRouter/>
          <Footer />
        </div>
    )
}