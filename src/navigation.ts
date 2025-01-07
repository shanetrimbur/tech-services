import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Newsletter',
      links: [
        {
          text: 'January 2025',
          href: getPermalink('/homes/personal'),
        },

        //-{
        //  text: 'About the Founder',
        //  href: getPermalink('/homes/personal'),
        //},
      ],
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Cybersecurity',
          href: getPermalink('/homes/saas'),
        },
        
        {
          text: 'Cloud Architecture',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Network Engineering',
          href: getPermalink('/homes/saas'),
        },
        //-{
        //  text: 'About the Founder',
        //  href: getPermalink('/homes/personal'),
        //},
      ],
    },

    {
      text: 'Menu',
      links: [

        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Testimonials',
          href: getPermalink('/testimonials'),
        },
      ],
    },
    {
      text: 'Whitepapers',
      links: [
        {
          text: 'Azure Environmental Sensing',
          href: getPermalink('/public/Azure_weather_sensing1.pdf'),
        },
        {
          text: 'Azure STAC',
          href: getPermalink('/public/azure_STAC.pdf'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Playbooks',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },

        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag', 'blockchain'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },

        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag', 'blockchain'),
        },
      ],
    },

  ],
  actions: [{ text: 'Download', href: 'https://github.com/shanetrimbur', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      //title: 'Platform',
      //links: [
      //  { text: 'Developer API', href: '#' },
      //  { text: 'Partners', href: '#' },
      //  { text: 'Atom', href: '#' },
      //  { text: 'Electron', href: '#' },
      //  { text: 'AstroWind Desktop', href: '#' },
      //],
    },
    {
     // title: 'Support',
      //links: [
      //  { text: 'Docs', href: '#' },
      //  { text: 'Community Forum', href: '#' },
      //  { text: 'Professional Services', href: '#' },
      //  { text: 'Skills', href: '#' },
      //  { text: 'Status', href: '#' },
      //],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/shanetrimbur' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="~/assets/favicons/favicon.ico" alt=" " loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://defensetechsolutions.com/"> Defense Technical Solutions</a> · All rights reserved.
  `,
};
