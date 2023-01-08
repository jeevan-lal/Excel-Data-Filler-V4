import { version } from '../../package.json';

// SIDE BAR: ITEMS
const sideBarList = [
  {
    text: 'Get Started',
    collapsible: true,
    items: [
      {
        text: 'Introduction',
        link: '/documentation/#introduction'
      },
      {
        text: 'Quick Start',
        link: '/documentation/#quick-start'
      },
      {
        text: 'Video Tutorial',
        link: '/documentation/#video-tutorial'
      },
      {
        text: 'Join',
        link: '/documentation/#join'
      },
    ]
  },
  {
    text: 'Extension',
    collapsible: true,
    items: [
      {
        text: 'Icon',
        link: '/documentation/extension.html#icon'
      },
      {
        text: 'Settings',
        link: '/documentation/extension.html#settings'
      }
    ]
  },
  {
    text: 'Site',
    collapsible: true,
    items: [
      {
        text: 'Insert Site',
        link: '/documentation/site.html#insert-site'
      },
      {
        text: 'Insert Site Form',
        link: '/documentation/site.html#insert-site-form'
      },
      {
        text: 'Download Excel',
        link: '/documentation/site.html#download-excel-template'
      },
      {
        text: 'Site Settings',
        link: '/documentation/site.html#settings'
      }
    ]
  },
  {
    text: 'Form Field',
    collapsible: true,
    items: [
      {
        text: 'Insert Field',
        link: '/documentation/field.html#form-field'
      },
      {
        text: 'Execute Javascript',
        link: '/documentation/field.html#execute-javascript'
      },
      {
        text: 'Entry Response',
        link: '/documentation/field.html#entry-response'
      }
    ]
  },
  {
    text: 'Predefined Functions',
    collapsible: true,
    items: [
      {
        text: 'forceCheckElementExists',
        link: '/documentation/functions.html#forceCheckElementExists'
      },
      {
        text: 'cleanSessionStorage',
        link: '/documentation/functions.html#cleansessionstorage'
      },
      {
        text: 'cleanLocalStorage',
        link: '/documentation/functions.html#cleanlocalstorage'
      }
    ]
  },
  {
    text: 'Special Keys',
    collapsible: true,
    items: [
      {
        text: 'Insert Key',
        link: '/documentation/keys.html#insert-key'
      },
      {
        text: 'Public Key',
        link: '/documentation/keys.html#public-keys'
      },
      {
        text: 'Private Key',
        link: '/documentation/keys.html#private-keys'
      },
      {
        text: 'Variable Key',
        link: '/documentation/keys.html#variable-keys'
      }
    ]
  },
  {
    text: 'Testing',
    collapsible: true,
    items: [
      {
        text: 'Site',
        link: '/documentation/testing-site.html'
      }
    ]
  }
];

export default {
  lang: 'en-US',
  title: 'Excel Data Filler',
  description: 'Excel Data Filler is a form auto filler. With the help of which you can fill the form through excel template and it is all automatic.',
  appearance: true,
  lastUpdated: true,
  outDir: '../dist',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'title', content: 'Excel Data Filler 4 - C Tech Hindi' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://efiller-doc.netlify.app/' }],
    ['meta', { name: 'og:title', content: 'Excel Data Filler 4' }],
    ['meta', { name: 'og:site_name', content: 'Excel Data Filler' }],
    ['meta', { name: 'og:description', content: "Excel Data Filler is a form auto filler. With the help of which you can fill the form through excel template and it is all automatic." }],
    ['meta', { name: 'og:image', content: 'https://efiller-doc.netlify.app/512x512.png' }],
    ['meta', { name: 'og:image:type', content: 'image/png' }],
  ],
  themeConfig: {
    nextLinks: true,
    prevLinks: true,
    // logo: '/32x32.png',
    socialLinks: [
      { icon: "youtube", link: "https://www.youtube.com/@ctechhindi" },
      { icon: "github", link: "https://github.com/jeevan-lal/Excel-Data-Filler-V4" },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Download', link: '/documentation/#download-extension' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Changelog',
            link: 'https://efiller.netlify.app/changelog',
          },
          {
            text: 'Report Issues',
            link: 'https://github.com/jeevan-lal/Excel-Data-Filler-V4/issues',
          }
        ],
      },
    ],
    sidebar: {
      '/documentation/': sideBarList,
      '/extension/': sideBarList,
      '/site/': sideBarList,
      '/field/': sideBarList,
      '/functions/': sideBarList,
      '/keys/': sideBarList,
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2021-${new Date().getFullYear()} C Tech Hindi`,
    },
    editLink: {
      pattern: 'https://github.com/jeevan-lal/Excel-Data-Filler-V4/blob/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
  },
}