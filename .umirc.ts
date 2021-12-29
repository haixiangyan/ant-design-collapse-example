import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    antd: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  mfsu: {},
});
