import './index.scss';

const VideoUpload = () => {
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUD_NAME,
      uploadPreset: process.env.REACT_APP_PRESET_NAME,
      maxFileSize: 200000000,
    },
    (error, result) => {
      if (!error && result && result.event === 'success') {
        console.log('Done uploading..: ', result.info);
      }
    }
  );
  return (
    <div className="upload">
      <div>
        <h4 className="upload__title">Upload a video</h4>
        <p className="upload__sub-title">
          Start sharing your story and connecting with viewers. Videos you
          upload will show up here.
        </p>
        <button
          type="button"
          id="upload_widget"
          className="cloudinary-button"
          onClick={() => widget.open()}
        >
          UPLOAD VIDEO
        </button>
      </div>
    </div>
  );
};

export default VideoUpload;
