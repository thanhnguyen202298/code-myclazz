import { IonContent, IonMenuButton, IonPage } from '@ionic/react';
import { PropTypes } from 'prop-types';

const Page = ({ children }) => (
  <IonPage>
    <IonMenuButton />
    <IonContent>{children}</IonContent>
  </IonPage>
);
Page.propTypes = {
  children: PropTypes.any,
};
Page.defaultProps = {
  children: null,
};

export default Page;
