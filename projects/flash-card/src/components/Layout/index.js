import React, { Component } from 'react'
import app from 'firebase/app';
import auth from 'firebase/auth';
import { getFirebase } from '../../config'
import { FirebaseContext } from '../../context'
import SignIn from '../SignIn'
import Header from '../Header'
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
        <Header />
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            }}
        >
            <main>{authenticated ? this.props.children : <SignIn />}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
      </FirebaseContext.Provider>
    )
  }
}

export default Layout
