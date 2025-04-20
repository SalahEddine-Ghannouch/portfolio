import { SocialLink, ContactInfo } from '../types';

export const socialLinks: SocialLink[] = [
  {
    id: 'social-1',
    name: 'GitHub',
    url: 'https://github.com/salaheddine-ghannouch',
    icon: 'github'
  },
  {
    id: 'social-2',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/salaheddine-ghannouch',
    icon: 'linkedin'
  },
  {
    id: 'social-3',
    name: 'Twitter',
    url: 'https://twitter.com/salaheddine',
    icon: 'twitter'
  },
  {
    id: 'social-4',
    name: 'Email',
    url: 'mailto:contact@salaheddine.dev',
    icon: 'mail'
  }
];

export const contactInfo: ContactInfo = {
  email: 'contact@salaheddine.dev',
  location: 'Morocco',
  phone: '+212 612345678'
};