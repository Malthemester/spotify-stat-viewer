import { useEffect } from "react";

const client_id = `8388f4a4228342fa9111a25e71147bdd`
const urlEndPoint = 'https://accounts.spotify.com/authorize'
const redirect_uri = 'http://localhost:3000/callback'
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-read-private", "user-read-private", "user-top-read"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

function AuthButton() {

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", new Date().getTime() + ((expires_in - 300) * 1000))

      window.location = window.origin
    }
  });

  function handleAuth() {

    let url = `${urlEndPoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`

    window.location = url
  }

  return (
    <div className="login">
      <button className="button-33" onClick={() => handleAuth()} >Login to spotify</button>
    </div>
  )
}

export default AuthButton;
