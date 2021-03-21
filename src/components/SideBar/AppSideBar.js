import './index.scss';
import Channel from '../Channel/Channel';

const subscriptions = [
  {
    id: 1,
    name: 'Joma Tech',
    img:
      'https://yt3.ggpht.com/ytc/AAUvwniqkVXvK9dEpAu9Mkpyz46oCwFYOgg5ummDXx0c=s88-c-k-c0x00ffffff-no-rj',
    isLive: true,
    hasNewVideo: false,
  },
  {
    id: 2,
    name: 'FreecodeCamp',
    img:
      'https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj',
    isLive: false,
    hasNewVideo: false,
  },
  {
    id: 3,
    name: 'Amigos Code',
    img:
      'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s88-c-k-c0x00ffffff-no-rj',
    isLive: false,
    hasNewVideo: true,
  },
  {
    id: 4,
    name: 'Andres Vildoza',
    img:
      'https://yt3.ggpht.com/ytc/AAUvwniqkVXvK9dEpAu9Mkpyz46oCwFYOgg5ummDXx0c=s88-c-k-c0x00ffffff-no-rj',
    isLive: true,
    hasNewVideo: false,
  },
  {
    id: 5,
    name: 'Wesbos',
    img:
      'https://yt3.ggpht.com/ytc/AAUvwniqkVXvK9dEpAu9Mkpyz46oCwFYOgg5ummDXx0c=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 6,
    name: 'CNBC',
    img:
      'https://yt3.ggpht.com/ytc/AAUvwniqkVXvK9dEpAu9Mkpyz46oCwFYOgg5ummDXx0c=s88-c-k-c0x00ffffff-no-rj',
    isLive: false,
    hasNewVideo: true,
  },
];
const AppSideBar = () => (
  <div className="app__sidebar">
    <div className="app__sidebar-title">CHANNEL SUGGESTIONS</div>
    <div className="channels">
      {subscriptions.map((subscription) => (
        <Channel {...subscription} key={subscription.id} />
      ))}
    </div>
    <div className="app__sidebar-title">SUBSCRIPTIONS</div>
    <div className="channels">
      {subscriptions.map((subscription) => (
        <Channel {...subscription} key={subscription.id} />
      ))}
    </div>
  </div>
);

export default AppSideBar;
