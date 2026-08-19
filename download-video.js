import fs from 'fs';
import https from 'https';
import path from 'path';

const url = 'https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-4322-large.mp4';
const dest = path.join(process.cwd(), 'public', 'assets', 'videos', 'hero-campus.mp4');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Referer': 'https://mixkit.co/'
  }
};

console.log('Downloading video from Mixkit...');

const file = fs.createWriteStream(dest);
https.get(url, options, (response) => {
  if (response.statusCode === 301 || response.statusCode === 302) {
    const redirectUrl = response.headers.location;
    console.log('Following redirect to:', redirectUrl);
    https.get(redirectUrl, options, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log('Video download complete! Saved to:', dest);
        });
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        console.log('Video download complete! Saved to:', dest);
      });
    });
  }
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading video:', err.message);
});
