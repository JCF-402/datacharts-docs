import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const Sidebars = {
  Sidebar: [
    'intro',
    {
      type: 'category',
      label: 'Usage and Syntax',
      items: ['syntax/chartTypes','syntax/data','syntax/source','syntax/equations','syntax/nested']
    },
    'Modifying Chart Properties',
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/data', 'examples/source',
        'examples/equations',
        'examples/nested'
      ],
    },
    'Exporting Charts'
  ],
};


export default Sidebars;
