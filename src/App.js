import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login/login.component';
import RegisterPage from './pages/register/register.component';
import Dashboard from './pages/dashboard/dashboard.component';

import { auth, createUserProfileDoc } from './firebase/firebase';

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({ currentUser: userAuth })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={this.state.currentUser ? <Navigate to="/dashboard" /> : <LoginPage />} />
          <Route path='/register' element={this.state.currentUser ? <Navigate to="/dashboard" /> : <RegisterPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    );
  }
}

export default App;
