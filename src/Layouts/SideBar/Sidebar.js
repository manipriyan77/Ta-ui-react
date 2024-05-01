import React from 'react';
import {
  Group1,
  Group2,
  Group3,
  Group4,
  Group5,
  Group6,
  Group7,
  Group8,
  Group9,
} from '../../assets/SvgIcons/Svg';
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div>
          <Group1 />
        </div>
        <div>
          <Group2 />
        </div>

        <div>
          <Group3 />
        </div>
        <div>
          <Group4 />
        </div>
        <div>
          <Group5 />
        </div>
        <div>
          <Group6 />
        </div>
        <div>
          <Group7 />
        </div>
        <div>
          <Group8 />
        </div>
        <div>
          <Group9 />
        </div>
      </div>
    </>
  );
}
