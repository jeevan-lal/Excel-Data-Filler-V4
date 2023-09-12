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
      },
      {
        text: 'Log',
        link: '/documentation/log.html#log'
      }
    ]
  },
  {
    text: 'Site',
    collapsible: true,
    items: [
      {
        text: 'Insert Site',
        link: '/documentation/site.html#site'
      },
      {
        text: 'Insert Site Form',
        link: '/documentation/site.html#insert-site-form'
      },
      {
        text: 'Scraper Data',
        link: '/documentation/site.html#scraper-data'
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
    text: 'Form Field 🚀',
    collapsible: true,
    items: [
      {
        text: 'Insert Field',
        link: '/documentation/form-fields/field.html'
      },
      {
        text: 'Field Response Action',
        link: '/documentation/form-fields/field-response-action.html'
      }
    ]
  },
  {
    text: 'Field Types',
    collapsible: true,
    items: [
      {
        text: 'Upload File',
        link: '/documentation/field-types/upload-file.html'
      },
      {
        text: 'Date Picker',
        link: '/documentation/field-types/date-picker.html'
      },
      {
        text: 'Javascript Code',
        link: '/documentation/field-types/javascript-code.html'
      },
      {
        text: 'URL Matching',
        link: '/documentation/field-types/url-matching.html'
      },
      {
        text: 'URL Open',
        link: '/documentation/field-types/url-open.html'
      },
      {
        text: 'Send Request',
        link: '/documentation/field-types/send-request.html'
      },
      {
        text: 'Timer Action',
        link: '/documentation/field-types/timer-action.html'
      },
      {
        text: 'String Matching',
        link: '/documentation/field-types/string-matching.html'
      },
      {
        text: 'String Manipulation',
        link: '/documentation/field-types/string-manipulation.html'
      },
      {
        text: 'Save as PDF',
        link: '/documentation/field-types/save-as-pdf.html'
      }
    ]
  },
  {
    text: 'Form Response',
    collapsible: true,
    items: [
      {
        text: 'Form Response',
        link: '/documentation/form-response/form-response.html'
      },
      {
        text: 'Success Response',
        link: '/documentation/form-response/form-success-response.html'
      },
      {
        text: 'Error Response',
        link: '/documentation/form-response/form-error-response.html'
      }
    ]
  },
  {
    text: 'Segment',
    collapsible: true,
    items: [
      {
        text: 'Information',
        link: '/documentation/segment.html'
      }
    ]
  },
  {
    text: 'Predefined Functions 🚀',
    collapsible: true,
    items: [
      {
        text: 'checkAttributeExists',
        link: '/documentation/functions.html#checkattributeexists'
      },
      {
        text: 'checkElementExists',
        link: '/documentation/functions.html#checkelementexists'
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
      }
    ]
  },
  {
    text: 'Variable',
    collapsible: true,
    items: [
      {
        text: 'Variable',
        link: '/documentation/variable.html#variable'
      }
    ]
  },
  {
    text: 'Locate Element',
    collapsible: true,
    items: [
      {
        text: 'Locate Element',
        link: '/documentation/locate-element.html'
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
  title: 'Excellent Data Filler',
  description: 'Excellent Data Filler is a form auto filler. With the help of which you can fill the form through excel template and it is all automatic.',
  appearance: true,
  lastUpdated: true,
  outDir: '../dist',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'title', content: 'Excellent Data Filler 4 - C Tech Hindi' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://efiller-doc.netlify.app/' }],
    ['meta', { name: 'og:title', content: 'Excellent Data Filler 4' }],
    ['meta', { name: 'og:site_name', content: 'Excellent Data Filler' }],
    ['meta', { name: 'og:description', content: "Excellent Data Filler is a form auto filler. With the help of which you can fill the form through excel template and it is all automatic." }],
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