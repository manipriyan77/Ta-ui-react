import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';
import settings from '../../assets/images/Component 2.png';
import notify from '../../assets/images/notification 1.png';
import mesg from '../../assets/images/Component 1.png';
import daylight from '../../assets/images/day-mode 1.png';

import FormInputs from '../../Component/Forms';

export default function Header() {
  return (
    <>
      <div className="main_header">
        <div className="lh_header">
          <img src={logo} alt="logo" />

          <FormInputs type={'text'} name={'search'} id={'search'} placeholder={'Search'} />
        </div>

        <div className="rh_header">
          <img src={daylight} alt="logo" />
          <img src={mesg} alt="logo" />
          <img src={notify} alt="logo" />
          <img src={settings} alt="logo" />

          <img src={user} alt="logo" className="user" />
        </div>
      </div>
    </>
  );
}
