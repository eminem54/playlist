import React from 'react';
import styles from './HomeTemplate.module.scss';

const uri = 'https://accounts.google.com/o/oauth2/v2/auth?';
const scope = 'scope=https://www.googleapis.com/auth/youtube&';
const access = 'access_type=online&';
const grant = 'include_granted_scopes=true&';
const state = 'state=state_parameter_passthrough_value&';
const res_type = 'response_type=token&';
const redirect = 'redirect_uri=http://localhost:3000/login&';
const client_id = 'client_id=38775711295-nq3or8dpd2u731jqf0027vqj4ngnoljp.apps.googleusercontent.com';

const HomeTemplate = () => {
  return (
    <div>
      <a href={`${uri + scope + access + grant + state + res_type + redirect + client_id}`} className={styles.link}>
        로 그 인
      </a>
    </div>
  );
};

export default HomeTemplate;

`
http://localhost:3000/#state=state_parameter_passthrough_value
&access_token=ya29.a0AVvZVspK23ktRuulKVL3P61TiubmfBI78OZVPGeVXkDm4LvEpvBQxOE0_Q0j78JNUXDGfUmmU8snJNJ1PFdLbPsltPCY0bLiw2r5NiHgTRIit9tYR5s0CS_D1TNQS1G9hmhUpAoWyAyeYErcBK-F6-iYYfMgaCgYKATASARMSFQGbdwaIyr6-sTv1RzTOVbBloxa6iA0163
&token_type=Bearer
&expires_in=3599
&scope=https://www.googleapis.com/auth/youtube
`;
