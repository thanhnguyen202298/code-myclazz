import { IonItem, IonList, IonListHeader, IonMenu, IonNote, IonText } from '@ionic/react';
import { PropTypes } from 'prop-types';
import 'src/Menu/menu.scss'

import en from 'src/locale/en.json'

const MenuApp = ({ pages }) => (
  <IonMenu contentId="main_menu" type="overlay">
    <IonList>
      <IonListHeader className='fs-1 mt-5 fw-bold ion-align-items-center flex-column'>
        <IonText>{en.app_name}</IonText>
      </IonListHeader>
      <IonNote className="fs-3 ion-align-items-center flex-column d-flex">
        <IonText>{en.start_minds}</IonText>
      </IonNote>
      <IonItem lines='none'/>
      {pages.map((page) => (
        <IonItem key={page.title} lines="full">
          <IonText className='fs-3'>{page.title}</IonText>
        </IonItem>
      ))}
    </IonList>
  </IonMenu>
);
MenuApp.propTypes = {
  pages: PropTypes.array,
};
MenuApp.defaultProps = {
  pages: [
    {
      title: 'Start a class',
    },
    {
      title: 'Groups',
    },
    {
      title: 'About',
    },
  ],
};
export default MenuApp;
