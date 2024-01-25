import { version } from '../../package.json';

// SIDE BAR: ITEMS
const sideBarList = [
  {
    text: 'Get Started',
    collapsed: false,
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
    collapsed: true,
    items: [
      {
        text: 'Icon',
        link: '/documentation/extension#icon'
      },
      {
        text: 'Settings',
        link: '/documentation/extension#settings'
      },
      {
        text: 'Log',
        link: '/documentation/log#log'
      }
    ]
  },
  {
    text: 'Structure',
    collapsed: true,
    items: [
      {
        text: 'Overview',
        link: '/documentation/structure'
      }
    ]
  },
  {
    text: 'Site',
    collapsed: true,
    items: [
      {
        text: 'Overview',
        link: '/documentation/site/site'
      },
      {
        text: 'Insert Site',
        link: '/documentation/site/site#insert-site'
      },
      {
        text: 'Excel Template',
        link: '/documentation/site/site-excel-template'
      },
      {
        text: 'Scraper Data',
        link: '/documentation/site/site-scraper-data'
      },
      {
        text: 'Site Settings',
        link: '/documentation/site/site-settings'
      },
      {
        text: 'Import/Export',
        link: '/documentation/site/site-settings#export-site-data'
      }
    ]
  },
  {
    text: 'Form',
    collapsed: true,
    items: [
      {
        text: 'Overview',
        link: '/documentation/form/form'
      },
      {
        text: 'Insert Form',
        link: '/documentation/form/form#insert-site-form'
      }
    ]
  },
  {
    text: 'Form Field',
    collapsed: true,
    items: [
      {
        text: 'Insert Field',
        link: '/documentation/form-fields/field'
      },
      {
        text: 'Field Settings',
        link: '/documentation/form-fields/field-settings'
      },
      {
        text: 'Field Response Action',
        link: '/documentation/form-fields/field-response-action'
      }
    ]
  },
  {
    text: 'Field Types',
    collapsed: true,
    items: [
      {
        text: 'Upload File',
        link: '/documentation/field-types/upload-file'
      },
      {
        text: 'Date Picker',
        link: '/documentation/field-types/date-picker'
      },
      {
        text: 'Javascript Code',
        link: '/documentation/field-types/javascript-code'
      },
      {
        text: 'URL Matching',
        link: '/documentation/field-types/url-matching'
      },
      {
        text: 'URL Open',
        link: '/documentation/field-types/url-open'
      },
      {
        text: 'Send Request',
        link: '/documentation/field-types/send-request'
      },
      {
        text: 'Timer Action',
        link: '/documentation/field-types/timer-action'
      },
      {
        text: 'String Matching',
        link: '/documentation/field-types/string-matching'
      },
      {
        text: 'String Manipulation',
        link: '/documentation/field-types/string-manipulation'
      },
      {
        text: 'Save as PDF',
        link: '/documentation/field-types/save-as-pdf'
      }
    ]
  },
  {
    text: 'Form Response',
    collapsed: true,
    items: [
      {
        text: 'Form Response',
        link: '/documentation/form-response/form-response'
      },
      {
        text: 'Success Response',
        link: '/documentation/form-response/form-success-response'
      },
      {
        text: 'Error Response',
        link: '/documentation/form-response/form-error-response'
      }
    ]
  },
  {
    text: 'Segment',
    collapsed: true,
    items: [
      {
        text: 'Information',
        link: '/documentation/segment'
      }
    ]
  },
  {
    text: 'Predefined Functions',
    collapsed: true,
    items: [
      {
        text: 'checkAttributeExists',
        link: '/documentation/functions#checkattributeexists'
      },
      {
        text: 'checkElementExists',
        link: '/documentation/functions#checkelementexists'
      },
      {
        text: 'cleanSessionStorage',
        link: '/documentation/functions#cleansessionstorage'
      },
      {
        text: 'cleanLocalStorage',
        link: '/documentation/functions#cleanlocalstorage'
      }
    ]
  },
  {
    text: 'Special Keys',
    collapsed: true,
    items: [
      {
        text: 'Insert Key',
        link: '/documentation/keys#insert-key'
      },
      {
        text: 'Public Key',
        link: '/documentation/keys#public-keys'
      },
      {
        text: 'Private Key',
        link: '/documentation/keys#private-keys'
      }
    ]
  },
  {
    text: 'Variable',
    collapsed: true,
    items: [
      {
        text: 'Variable',
        link: '/documentation/variable#variable'
      }
    ]
  },
  {
    text: 'Locate Element',
    collapsed: true,
    items: [
      {
        text: 'Locate Element',
        link: '/documentation/locate-element'
      }
    ]
  },
  {
    text: 'Testing',
    collapsed: true,
    items: [
      {
        text: 'Site',
        link: '/documentation/testing-site'
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
    search: {
      provider: 'local'
    },
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
  vite: {
  }
}