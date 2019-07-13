import React, { Component } from 'react'
import app from 'firebase/app';
import auth from 'firebase/auth';
import { getFirebase } from '../../config'
import { FirebaseContext } from '../../context'
import SignIn from '../SignIn'
import Dashboard from '../Dashboard';
import "./index.css"

class Layout extends Component {
  state = {
    firebase: null,
    authenticated: false,
  }

  componentDidMount() {
    // const database = import('firebase/database')
    const firebase = getFirebase(app)
    this.setState({ firebase })

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({ authenticated: false })
      } else {
        this.setState({ authenticated: true })
      }
    })
  }

  render = () => {
    const { firebase, authenticated } = this.state

    if (!firebase) return null

    return (
      <FirebaseContext.Provider value={firebase}>
        {authenticated ? <Dashboard>{this.props.children}</Dashboard> : <SignIn />}
      </FirebaseContext.Provider>
    )
  }
}

export default Layout
