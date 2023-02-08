import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { hashURLToObject } from '@/utils/util';

const Login = () => {
  const { asPath } = useRouter();
  const { access_token: accessToken } = hashURLToObject(asPath);

  return (
    <div>
      <strong>{accessToken}</strong>
    </div>
  );
};

export default Login;
