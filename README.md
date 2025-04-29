
# 🎵 Spotify OAuth Login Example

This is a simple Node.js app that demonstrates the OAuth 2.0 Authorization Code Flow with Spotify using [Express](https://expressjs.com/) and [spotify-web-api-node](https://github.com/thelinmichael/spotify-web-api-node). The app allows users to log in via Spotify, retrieve their profile, and manage access tokens.

## 🚀 Features

- User login via Spotify OAuth
- Retrieves user profile after successful login
- Prints access and refresh tokens to the console

## 🛠 Requirements

- Node.js (v14 or later)
- A Spotify Developer account
- A registered app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)

## 🔧 Setup

### 1. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/spotify-login-example.git
cd spotify-login-example
```

### 2. Install dependencies

Install the required dependencies using `npm`:

```bash
npm install
```

### 3. Set your Spotify credentials

Create a Spotify Developer app at the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

Then, update the `index.js` file with your **Client ID**, **Client Secret**, and the **Redirect URI** you configured in your Spotify Developer app:

```js
const spotifyApi = new SpotifyWebApi({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  redirectUri: 'http://127.0.0.1:8000/callback'
});
```

### 4. Run the app

Start the server with:

```bash
node index.js
```

You can now open your browser and go to [http://localhost:8000/login](http://localhost:8000/login) to start the login process.

## 📡 Endpoints

- **GET /login** – Redirects the user to Spotify’s authorization page.
- **GET /callback** – Handles the OAuth callback, retrieves access tokens, and fetches the user’s profile.

## 🧪 Example Flow

1. Navigate to [http://localhost:8000/login](http://localhost:8000/login) in your browser.
2. You will be redirected to the Spotify login page. After logging in and granting permissions, Spotify will redirect you back to `http://127.0.0.1:8000/callback`.
3. The app retrieves the access token, refresh token, and user profile. You will see something like this on the page:

    ```
    Logged in as YourSpotifyUsername
    ```

4. The terminal will display the access token:

    ```
    Access Token: BQD123...
    ```


## 📝 License

MIT
