import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  title: 'DataCharts',
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://datacharts-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JCF-402', // Usually your GitHub org/user name.
  projectName: 'datacharts-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
  title: 'DataCharts',
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'Sidebar',
      position: 'left',
      label: 'Docs',
    },
    {
      href: 'https://github.com/JCF-402/datacharts',
      label: 'GitHub',
      position: 'right',
    },
  ],
},
    footer: {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [{ label: 'Getting Started', to: '/' }],
    },
    {
      title: 'Project',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/JCF-402/datacharts',
        },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} DataCharts`,
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
