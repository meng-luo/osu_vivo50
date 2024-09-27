import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OSU Vivo50",
  description: "该比赛主要是帮助活跃的低分段玩家适应比赛，让有意参加比赛的玩家提前了解比赛玩法和节奏。",
  head: [['link', { rel: 'icon', href: '/favicon.jpg' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduction' },
      { text: '往期结果', link: '/results' },
      { text: '加入赛群', link: 'https://qm.qq.com/q/RjaHv7ceWe' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/introduction' }
        ]
      },
      {
        text: '比赛详情',
        items: [
          { text: '分队表', link: '/info/teams' },
          { text: '本期图池', link: '/info/maps' }
        ]
      },
      {
        text: '往期结果',
        items: [
          { text: '往期结果', link: '/results' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
