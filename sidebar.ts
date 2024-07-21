import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  wiki: [
    { type: 'autogenerated', dirName: '.' },
    {
      type: 'category',
      label: 'External Links',
      items: [
        {
          type: 'link',
          href: 'https://drive.google.com/drive/folders/1aAAnOl6FXuQ0Mxz1T8VKW7PxtIeVrSSp?usp=sharing',
          label: 'Public Resources Drive',
        },
        {
          type: 'link',
          href: 'https://drive.google.com/drive/folders/1qcEIQINiboPD26nMSB-obGPqv5tbVeuY?usp=sharing',
          label: 'Exec Meeting Minutes',
        },
      ],
    },
  ],
};

export default sidebar;
