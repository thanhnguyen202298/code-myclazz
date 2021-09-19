import { IonApp } from '@ionic/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
import Routes from 'src/routes'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/typology.scss';

const Loading = () => (<>Loading</>)

const App = () => (
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <IonApp>
                <Routes />
            </IonApp>
        </PersistGate>
    </Provider>

);

export default App;
