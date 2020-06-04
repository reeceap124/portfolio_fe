
const HOST = window.location.host;
const REDIRECT_URI = `http://${HOST}/implicit/callback`;

const config = {
  issuer: `https://dev-294890.okta.com/oauth2/default`,
  clientId: '0oac4kk6zaoD3yOeU4x6',
  redirectUri: REDIRECT_URI,
  scope: ['openid','email'],
  pkce: true
};

  export default config;