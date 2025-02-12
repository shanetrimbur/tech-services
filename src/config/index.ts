export const SITE = {
  name: 'TrimburTech',
  site: 'https://trimburtech.com',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: ''
};

export const APP_BLOG = {
  isEnabled: true,
  postsPerPage: 6,
  post: {
    isEnabled: true,
    permalink: '/%slug%',
    robots: {
      index: true,
      follow: true,
    },
  },
}; 