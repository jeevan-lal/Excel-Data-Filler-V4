import { version } from '../../package.json'

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
    ['meta', { name: 'og:url', content: '' }],
    ['meta', { name: 'og:title', content: 'Excel Data Filler 4' }],
    ['meta', { name: 'og:site_name', content: 'Excel Data Filler' }],
    ['meta', { name: 'og:description', content: "Excel Data Filler is a form auto filler. With the help of which you can fill the form through excel template and it is all automatic." }],
    ['meta', { name: 'og:image', content: '' }],
    ['meta', { name: 'og:image:type', content: 'image/png' }],
  ],
  themeConfig: {
    // logo: '/32x32.png',
    socialLinks: [
      { icon: "github", link: "https://github.com/jeevan-lal/Excel-Data-Filler-V4" },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Download', link: 'https://efiller.netlify.app/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Report Issues',
            link: 'https://github.com/jeevan-lal/Excel-Data-Filler-V4/issues',
          }
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2021-${new Date().getFullYear()} C Tech Hindi`,
    }
  },
}