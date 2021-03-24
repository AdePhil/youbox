# YouBox App

YouBox is a video sharing and streaming platform. The web app is accessible from the web browser,
Android and iOS phones. Musicians and influencers use this to create content for their significant
number of subscribers.

## Features Covered

- List of videos that can be watched by the user.
- Upload videos **(mp4,mov,mkv,webm)** of file size limit of 200MB. **Note. Cloundinary Max video size is 100MB**.
- View Channels subscribed to.
- View Recommended channels.
- Play videos on the system (Simulated with youtube links) and the ones uploaded by the user.
- Like Videos.
- Share Videos **(Click the share button to copy the video link)**.
- Display a discount banner for users from the US. **(Location is detected using the IP Address of the user)**
- Comment on Videos.
- Testing...Not done because of strict adherence rule (Prefered testing framework is react testing library).

## Technologies Used

- React - Framework recommended.
- Scss for styling.
- Redux for state management.
- Redux thunk, axios, apisauce for fetching data from the backend.
- Netlify for hosting.
- Netlify Functions for bakend APIs.
- Nprogress used as a loading indicator.
- React router for navigation.
- Cloudinary used as the video upload service.

### Video Upload

To upload videos, go to the profile page by clicking on the plus icon in the header, or the profile icon in the header and navigating to the add video tab. To see uploaded videos navigate to the videos tab on the same profile page.

### Testing Locally

Run Yarn install to install dependencies and Yarn dev to run the app locally.

### Hosted Application

[Click here](https://youbox-video.netlify.app/)
