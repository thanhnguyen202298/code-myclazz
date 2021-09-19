/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
import { IonCard, IonImg, IonText } from '@ionic/react';
import {PropTypes} from 'prop-types';

const UserItem = ({ avatar, username, id, peerId, videoVisible }) => (
  <IonCard className="">
      <IonText>{username}</IonText>
    <IonImg src={avatar} alt="" />
    <video id="user-video" />
  </IonCard>
);

export default UserItem;

UserItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    peerId: PropTypes.string.isRequired,
    videoVisible: PropTypes.bool,
}

UserItem.defaultProps = {videoVisible: false}