import React, {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from "./Feed.js"
import { useSelector , useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import { auth } from "./firebase";



function App() {

const user = useSelector(selectUser);
const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">


      <Header />

      {!user ? (
        <Login />
      
      ) : (
      <div className="appBody">

        
        <Sidebar />
        <Feed />

        {/* Widget */}



      </div>
      )}

    </div>
  );
}

export default App;
