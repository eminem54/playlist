import LinkAtom from '@/components/atoms/Link/Link.atom';
import React from 'react';
import styles from './NavBarOrganism.module.scss';

const uri = 'https://accounts.google.com/o/oauth2/v2/auth?';
const scope = 'scope=https://www.googleapis.com/auth/youtube&';
const access = 'access_type=online&';
const grant = 'include_granted_scopes=true&';
const state = 'state=state_parameter_passthrough_value&';
const res_type = 'response_type=token&';
const redirect = 'redirect_uri=http://localhost:3000/login&';
const client_id = 'client_id=38775711295-nq3or8dpd2u731jqf0027vqj4ngnoljp.apps.googleusercontent.com';

const NavBarOrganism = () => {
  return (
    <div className={styles.wrap}>
      <LinkAtom href={`${uri + scope + access + grant + state + res_type + redirect + client_id}`} className={styles.login}>
        로 그 인
      </LinkAtom>
    </div>
  );
};

export default NavBarOrganism;
