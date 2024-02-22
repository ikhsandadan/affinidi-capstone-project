"use client";
import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import UserContext from '../contexts/UserContext';
import { useRouter } from 'next/navigation';
import Session from './Session';
import './Header.css';
import defaultPicture from '../images/profile.png';

const Header = () => {
  const Router = useRouter();
  const { setProfile } = useContext(UserContext);
  const [localProfile, setLocalProfile] = useState(null);
  const [sessions, setSessions] = useState([]);

  let profilePicture = localProfile?.picture || defaultPicture;

  const toCart = () => {
    Router.push("/Cart");
  };

  const toHome = () => {
    Router.push("/");
  };

  useEffect(() => {
    let session = [];
    session = Session();

    session.then((result) => {
      setSessions(result);
    })
  }, []);

  useEffect(() => {
    setLocalProfile(sessions?.user)
    setProfile(sessions?.user);
    console.log(sessions?.user?.nickname)
    console.log(sessions?.user)
  }, [sessions])

  const logout = () => {
    sessionStorage.clear();
    Router.push("/api/auth/signout?callbackUrl=/");
  };

  const renderLoginState = () => {
    if (sessions?.user !== undefined) {
        return (
          <div className="flex auto-rows-auto gap-x-3 pr-3">
            {localProfile && (<span className="self-center text-center">Welcome, {localProfile.nickname}</span>)}
            <img src={profilePicture} alt="picture" className="size-10 rounded-full self-center"></img>
            <button onClick={toCart}>
              <img className="size-6" src="/cart.png" alt="Cart"/>
            </button>
            <button className="self-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700" onClick={logout}>Logout</button>
          </div>
        );
    }
  
  return <Link href="/api/auth/signin"className="self-center pl-3" >
    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Login</button>
  </Link>;
  };
  
    return (
      <header className="Header">
        <button onClick={toHome}>
          <h1 className="font-semibold">StackShop</h1>
        </button>
        <nav>
          {renderLoginState()}
        </nav>
      </header>
    );
};
  
  export default Header;
