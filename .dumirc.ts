import { defineConfig } from 'dumi';

const menus = {
  "/demo1s": [
    {
      title: "normal",
      children: [
        { title: "foo", link: '/demo1s/foo' },
      ]
    },
  ],
}
const navs = [
  { title: "demo1", link: "/demo1" },
];

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'test',
    sidebar: menus,
    nav: navs,
  },
  resolve: {
    atomDirs: [
      // { type: 'component', dir: 'src' },
      { type: 'demo1', dir: 'packages/demo1/src' },
    ]
  },
});

