const clientId = '11ebd54b68ea4bc5af182e5f5171a9c2';
const redirectUri = 'http://localhost:3000';
let accessToken;
const Spotify = {

    getAccessToken(){
        if (accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken ="",  expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=R${redirectIri}`
            window.location = accessUrl;
        }

    }
}

export default Spotify;
