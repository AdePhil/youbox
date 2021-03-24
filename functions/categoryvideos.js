const videos = [
  {
    id: 1,
    thumnail:
      'https://i.ytimg.com/vi/lNsJRM9ga-s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDYZLDQ8-EzdZl5pc197KCPkrxzA',
    username: 'amigo',
    banner:
      'https://yt3.ggpht.com/TdpnF_rLXL-u783mrIbl0KOaqGXKBuWqkUQq3Fr5kfsQQOm6p96zERg7dbvZGIQitM8kM4MA9co=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    channelLogo:
      'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj',
    videoTitle: 'Docker Postgres and DataGrip Tutorial',
    views: '91K views',
    channelName: 'Amigoscode',
    date: '9 hours ago',
    subs: '2k Subscribers',
    url: 'https://www.youtube.com/watch?v=lNsJRM9ga-s',
    isLive: true,
  },
  {
    id: 2,
    thumnail:
      'https://i.ytimg.com/vi/nk_Pfxmqn6g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW1Iq4_dY9c3RIDeUfrFkHV3NOKw',
    username: 'amigo',
    banner:
      'https://yt3.ggpht.com/TdpnF_rLXL-u783mrIbl0KOaqGXKBuWqkUQq3Fr5kfsQQOm6p96zERg7dbvZGIQitM8kM4MA9co=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    channelLogo:
      'https://yt3.ggpht.com/ytc/AAUvwnjTeFYoj5eDtxHLIiF36qp7yCZTp4q8mxIKLjWx=s68-c-k-c0x00ffffff-no-rj',
    videoTitle: 'The book that changed my life',
    channelName: 'Ali Abdaal',
    views: '91K views',
    date: '9 hours ago',
    subs: '2k Subscribers',
    isLive: false,
    url: 'https://www.youtube.com/watch?v=bmVKaAV_7-A',
  },
  {
    id: 3,
    thumnail:
      'https://i.ytimg.com/vi/lNsJRM9ga-s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDYZLDQ8-EzdZl5pc197KCPkrxzA',
    username: 'amigo',
    banner:
      'https://yt3.ggpht.com/TdpnF_rLXL-u783mrIbl0KOaqGXKBuWqkUQq3Fr5kfsQQOm6p96zERg7dbvZGIQitM8kM4MA9co=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    channelLogo:
      'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj',
    videoTitle: 'Docker Postgres and DataGrip Tutorial',
    views: '91K views',
    channelName: 'Amigoscode',
    date: '9 hours ago',
    subs: '2k Subscribers',
    url: 'https://www.youtube.com/watch?v=lNsJRM9ga-s',
    isLive: true,
  },
  {
    id: 4,
    thumnail:
      'https://i.ytimg.com/vi/lNsJRM9ga-s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDYZLDQ8-EzdZl5pc197KCPkrxzA',
    username: 'amigo',
    banner:
      'https://yt3.ggpht.com/TdpnF_rLXL-u783mrIbl0KOaqGXKBuWqkUQq3Fr5kfsQQOm6p96zERg7dbvZGIQitM8kM4MA9co=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    channelLogo:
      'https://yt3.ggpht.com/ytc/AAUvwnjjfvVnm4hIninPJdNRfwQ_QforbmpKGG20LmEj6g=s176-c-k-c0x00ffffff-no-rj',
    videoTitle: 'Docker Postgres and DataGrip Tutorial',
    views: '91K views',
    channelName: 'Amigoscode',
    date: '9 hours ago',
    subs: '2k Subscribers',
    url: 'https://www.youtube.com/watch?v=lNsJRM9ga-s',
    isLive: true,
  },
  {
    id: 5,
    thumnail:
      'https://i.ytimg.com/vi/nk_Pfxmqn6g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW1Iq4_dY9c3RIDeUfrFkHV3NOKw',
    username: 'amigo',
    banner:
      'https://yt3.ggpht.com/TdpnF_rLXL-u783mrIbl0KOaqGXKBuWqkUQq3Fr5kfsQQOm6p96zERg7dbvZGIQitM8kM4MA9co=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    channelLogo:
      'https://yt3.ggpht.com/ytc/AAUvwnjTeFYoj5eDtxHLIiF36qp7yCZTp4q8mxIKLjWx=s68-c-k-c0x00ffffff-no-rj',
    videoTitle: 'The book that changed my life',
    channelName: 'Ali Abdaal',
    views: '91K views',
    date: '9 hours ago',
    subs: '2k Subscribers',
    isLive: false,
    url: 'https://www.youtube.com/watch?v=bmVKaAV_7-A',
  },
  {
    id: 6,
    thumnail:
      'https://i.ytimg.com/vi/lNsJRM9ga-s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDYZLDQ8-EzdZl5pc197KCPkrxzA',
    username: 'amigo',
    banner:
      'https://yt3.ggpht.com/TdpnF_rLXL-u783mrIbl0KOaqGXKBuWqkUQq3Fr5kfsQQOm6p96zERg7dbvZGIQitM8kM4MA9co=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    channelLogo:
      'https://yt3.ggpht.com/ytc/AAUvwniqkVXvK9dEpAu9Mkpyz46oCwFYOgg5ummDXx0c=s176-c-k-c0x00ffffff-no-rj',
    videoTitle: 'Chill lofi beats',
    views: '91K views',
    channelName: 'Joma tech',
    date: '9 hours ago',
    subs: '2k Subscribers',
    isLive: true,
    url: 'https://www.youtube.com/watch?v=bmVKaAV_7-A',
  },
];
const payload = {
  live: {
    title: 'Live Broadcast',
    videos,
  },
  programming: {
    title: 'Programming',
    videos,
  },
  entertainment: {
    title: 'Entertainment',
    videos,
  },
};
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: payload }),
  };
};
