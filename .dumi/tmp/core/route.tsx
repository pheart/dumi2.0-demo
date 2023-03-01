// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import routeProps from './routeProps.js';

if (process.env.NODE_ENV === 'development') {
  Object.entries(routeProps).forEach(([key, value]) => {
    const internalProps = ['path', 'id', 'parentId', 'isLayout', 'isWrapper', 'layout', 'clientLoader'];
    Object.keys(value).forEach((prop) => {
      if (internalProps.includes(prop)) {
        throw new Error(
          `[UmiJS] route '${key}' should not have '${prop}' prop, please remove this property in 'routeProps'.`
        )
      }
    })
  })
}

import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"demo1s/com1/index":{"id":"demo1s/com1/index","path":"demo1s/com1","parentId":"DocLayout"},"demo1s/foo/index":{"id":"demo1s/foo/index","path":"demo1s/foo","parentId":"DocLayout"},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout","prerender":false}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__.pnpm__dumi_2.1.14_u3samvbzvrksr3cjfq3oe55axi__node_modules__dumi__dist__client__pages__404" */'/Users/liuyongchang/Documents/beifa/dumi2.0-demo/node_modules/.pnpm/dumi@2.1.14_u3samvbzvrksr3cjfq3oe55axi/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'/Users/liuyongchang/Documents/beifa/dumi2.0-demo/.dumi/tmp/dumi/theme/ContextWrapper.tsx')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__.pnpm__dumi_2.1.14_u3samvbzvrksr3cjfq3oe55axi__node_modules__dumi__theme-default__layouts__DocLayout__index" */'/Users/liuyongchang/Documents/beifa/dumi2.0-demo/node_modules/.pnpm/dumi@2.1.14_u3samvbzvrksr3cjfq3oe55axi/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'demo1s/com1/index': React.lazy(() => import(/* webpackChunkName: "packages__demo1__src__com1__index.md" */'/Users/liuyongchang/Documents/beifa/dumi2.0-demo/packages/demo1/src/com1/index.md')),
'demo1s/foo/index': React.lazy(() => import(/* webpackChunkName: "packages__demo1__src__foo__index.md" */'/Users/liuyongchang/Documents/beifa/dumi2.0-demo/packages/demo1/src/foo/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__.pnpm__dumi_2.1.14_u3samvbzvrksr3cjfq3oe55axi__node_modules__dumi__dist__client__pages__Demo__index" */'/Users/liuyongchang/Documents/beifa/dumi2.0-demo/node_modules/.pnpm/dumi@2.1.14_u3samvbzvrksr3cjfq3oe55axi/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
