const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
const port = 8000;

const spotifyApi = new SpotifyWebApi({
  clientId: 'clientId',
  clientSecret: 'clientSecret',
  redirectUri: 'http://127.0.0.1:8000/callback' 
});

const scopes = ['user-read-private', 'user-read-email'];
const state = 'some-state-of-my-choice';

app.get('/login', (req, res) => {
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
  res.redirect(authorizeURL);
});

app.get('/callback', (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.send('No code found in callback');
  }

  spotifyApi.authorizationCodeGrant(code)
    .then(data => {
      const accessToken = data.body['access_token'];
      const refreshToken = data.body['refresh_token'];

      console.log('Access Token:', accessToken);
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.setRefreshToken(refreshToken);

      spotifyApi.getMe()
        .then(data => {
          res.send(`Logged in as ${data.body.display_name}`);
        })
        .catch(err => {
          res.send(`Error getting user data: ${err}`);
        });
    })
    .catch(err => {
      res.send(`Error getting tokens: ${err}`);
    });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://localhost:${port}`);
});
