import React from 'react'
import naverLogin from '../../assets/login/naver_login.png'
import {LoginButton} from '../../styles/login/login.style';

function NaverLogin() {

    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:3000/oauth";
    const STATE = "false";
    const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
    console.log(NAVER_CLIENT_ID)
    const onClickNaverLogin = () => {
        window.location.href = NAVER_LOGIN_URL;
    }

  return (
    <div>
        <LoginButton src={naverLogin} onClick={onClickNaverLogin}></LoginButton>
    </div>
  )
}

export default NaverLogin

