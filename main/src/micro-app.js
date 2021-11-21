const microApps = [{
    name: 'micro-vue',
    entry: '//localhost:8081/',
    activeRule: '/micro-vue',
    container: '#vue-viewport', // 子应用挂载的div
    props: {
      routerBase: '/micro-vue' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  },
  {
    name: 'micro-react',
    entry: '//localhost:3000/',
    activeRule: '/micro-react',
    container: '#react-viewport', // 子应用挂载的div
    props: {
      routerBase: '/micro-react' // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    }
  }
]

export default microApps;
