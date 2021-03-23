import './index.scss';
import { myChannel } from '../../data';

const Profile = () => {
  const { banner } = myChannel;
  return (
    <div className="profile">
      <div className="profile__banner" />
    </div>
  );
};

export default Profile;
