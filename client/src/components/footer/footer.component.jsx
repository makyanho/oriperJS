import React from 'react';
import {
  FooterContainer,
  FooterList,
  FooterLink,
  FooterItem,
  FooterNav,
  FooterBreakLine,
  FooterExtLinks,
  FooterExtLink
} from './footer.styles';
import { GreyBackground } from '../../common.styles';

const footerLinks = [
  {
    title: '最新消息'
  },
  {
    title: '關於我們'
  },
  {
    title: '常見問題'
  },
  {
    title: '聯絡我們'
  }
];

const footerExtLinks = [
  {
    img: '/images/socialMedia_plurk.png',
    imgHover: '/images/socialMedia_plurk_hover.png',
    link: '#'
  },
  {
    img: '/images/socialMedia_facebook.png',
    imgHover: '/images/socialMedia_facebook_hover.png',
    link: '#'
  },
  {
    img: '/images/socialMedia_twitter.png',
    imgHover: '/images/socialMedia_twitter_hover.png',
    link: '#'
  }
];

const Footer = () => (
  <GreyBackground>
    <FooterContainer>
      <FooterNav>
        <FooterList>
          {footerLinks.map((link, index) => (
            <FooterItem key={index}>
              <FooterLink href="#">{link.title}</FooterLink>
            </FooterItem>
          ))}
        </FooterList>
      </FooterNav>
      <FooterBreakLine />
      <FooterExtLinks>
        {footerExtLinks.map((link, index) => (
          <FooterExtLink
            key={index}
            href={link.link}
            target="_blank"
            img={link.img}
            imgHover={link.imgHover}
          />
        ))}
      </FooterExtLinks>
    </FooterContainer>
  </GreyBackground>
);

export default Footer;
