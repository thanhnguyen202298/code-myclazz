/* eslint-disable no-unused-vars */
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router'

import MenuApp from 'src/Menu/Menu';
import Home from 'src/pages/home/Home';

const Routes = () => 
  (<IonReactRouter>
    <MenuApp />
    <IonRouterOutlet id='main_menu'>
      <Route exact path="/home" component={Home} />
      <Redirect exact path="/" to="/home" />
    </IonRouterOutlet>
  </IonReactRouter>)

export default Routes