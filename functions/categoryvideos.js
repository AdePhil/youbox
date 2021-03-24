const { videos } = require('./data/index');

const payload = [
  {
    title: 'Live Broadcast',
    videos: videos.map((video) => ({ ...video, isLive: true })),
  },
  {
    title: 'Hip Hop Music',
    videos,
  },
  {
    title: 'Entertainment',
    videos,
  },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: payload }),
  };
};
