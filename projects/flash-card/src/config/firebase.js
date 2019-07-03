const config = {
  apiKey: "AIzaSyAKdkAVCj8jHlMCPp9ajx56CIfw2JXjss0",
  authDomain: "forefront-ux.firebaseapp.com",
  databaseURL: "https://forefront-ux.firebaseio.com",
  projectId: "forefront-ux",
  storageBucket: "forefront-ux.appspot.com",
  messagingSenderId: "961203647181",
  appId: "1:961203647181:web:78084feba276b046",
}

let firebaseCache

export const getUiConfig = firebase => ({
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
})

const getFirebase = firebase => {
  if (firebaseCache) {
    return firebaseCache
  }

  firebase.initializeApp(config)
  firebaseCache = firebase
  return firebase
}

export default getFirebase
