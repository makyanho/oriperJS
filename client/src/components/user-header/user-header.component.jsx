import React from 'react';

import {
  Profile,
  Img,
  Buttons,
  Tabs,
  Tab,
  SocialButtons,
  Button
} from './user-header.styles';
import { SectionHolder } from '../../common.styles';
import ProfileBox from '../profile-box/profile-box.component';
import ReportDropdown from '../report-dropdown/report-dropdown.component';

const UserHeader = () => {
  const tabs = ['作者簡介', '作品集', '關注的'];
  const socials = [
    {
      type: 'plurk',
      img: '/images/socialMedia_plurk.png',
      imgHover: '/images/socialMedia_plurk_hover.png',
      link: '#'
    },
    {
      type: 'facebook',
      img: '/images/socialMedia_facebook.png',
      imgHover: '/images/socialMedia_facebook_hover.png',
      link: '#'
    },
    {
      type: 'twitter',
      img: '/images/socialMedia_twitter.png',
      imgHover: '/images/socialMedia_twitter_hover.png',
      link: '#'
    }
  ];
  return (
    <SectionHolder>
      <Img src="/images/dummy/top_slider.jpg" />
      <Buttons>
        <Tabs>
          {tabs.map(tab => (
            <Tab key={tab}>{tab}</Tab>
          ))}
        </Tabs>
        <SocialButtons>
          <ReportDropdown pos="right" />
          {socials.map(({ type, link, img, imgHover }) => (
            <Button key={type} href={link} img={img} imghover={imgHover} />
          ))}
        </SocialButtons>
      </Buttons>
      <Profile>
        <ProfileBox />
      </Profile>
    </SectionHolder>
  );
};

export default UserHeader;
