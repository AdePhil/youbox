const cloudinary = require('cloudinary').v2;

const getThumbNail = (url) => {
  const urlSplit = url.split('.');
  const urlWithExtensionArray = urlSplit.slice(0, urlSplit.length - 1);
  return `${urlWithExtensionArray.join('.')}.jpg`;
};
exports.handler = async function (event, context) {
  const options = {
    resource_type: 'video',
    cloud_name: process.env.REACT_APP_CLOUD_NAME,
    api_key: process.env.REACT_APP_CLOUNDINARY_API_KEY,
    api_secret: process.env.REACT_APP_CLOUNDINARY_API_SECRET,
    prefix: 'youbox',
    type: 'upload',
  };
  const videos = await new Promise((resolve, reject) => {
    cloudinary.api.resources(options, function (error, result) {
      resolve(result);
    });
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: videos.resources.map((video, i) => ({
        ...video,
        id: video.public_id,
        thumnail: getThumbNail(video.url),
        videoTitle: `Video ${i + 1}`,
        channelLogo:
          'https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-70x70.png',
        channelName: 'Current User',
        isLive: false,
      })),
    }),
  };
};
