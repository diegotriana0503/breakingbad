import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {NavegacionP} from '../components/NavegacionP';
import {NavegacionF} from '../components/NavegacionF';
import {NavegacionC} from '../components/NavegacionC';
import {Error} from '../components/Error';
export const MainRouter = () =>{
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={NavegacionP}/>
                        <Route exact path="/personajes" component={NavegacionP}/>
                        <Route exact path="/frases" component={NavegacionF}/>
                        <Route exact path="/capitulos" component={NavegacionC}/>
                        <Route  component={Error}/>
                    </Switch>
                </Router>


            </div>
        )
}