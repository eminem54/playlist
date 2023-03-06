'use client';

import React, { useEffect } from 'react';
import useAccessTokenRecoil from '@/hooks-recoil/useAccessTokenRecoil';
import { hashURLToObject } from '@/utils/util';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { access_token } = hashURLToObject(window.location.href);
  console.log(access_token);
  const { isEmptyToken, accessToken, setAccessToken } = useAccessTokenRecoil();

  useEffect(() => {
    if (isEmptyToken()) {
      setAccessToken(access_token);
    }

    router.push('/');
  }, [isEmptyToken, setAccessToken, accessToken, access_token, router]);

  return (
    <div>
      <strong>1</strong>
    </div>
  );
};

export default Login;
