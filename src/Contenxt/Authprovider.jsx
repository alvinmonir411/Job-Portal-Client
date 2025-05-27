import React, { useEffect, useState } from "react";
import { authcontext } from "./Authcontext";
import { auth } from "./../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Authprovider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [Loadign, setLoadign] = useState(true);
  // google sign in
  const provider = new GoogleAuthProvider();
  const googlesignIn = () => {
    setLoadign(true);
    return signInWithPopup(auth, provider);
  };
  const userWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // 🔄 Observe user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadign(false);
    });
    // 🧹 Cleanup observer on unmount
    return () => unsubscribe();
  }, []);
  const signout = () => {
    return signOut(auth);
  };
  const Userinfo = {
    User,
    setUser,
    userWithEmail,
    googlesignIn,
    signout,
    Loadign,
    setLoadign,
  };

  return (
    <authcontext.Provider value={Userinfo}>{children}</authcontext.Provider>
  );
};

export default Authprovider;
