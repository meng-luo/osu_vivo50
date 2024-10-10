import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OSU Vivo50",
  description: "该比赛主要是帮助活跃的低分段玩家适应比赛，让有意参加比赛的玩家提前了解比赛玩法和节奏。",
  head: [['link', { rel: 'icon', href: '/favicon.jpg' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/guide/' },
      { text: '活动一览', link: '/activity/' },
      { text: '加入赛群', link: 'https://qm.qq.com/q/RjaHv7ceWe' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '活动一览', link: '/activity/' }

          ]
        }
      ],

      '/activity/': [
        {
          text: '活动',
          items: [
            { text: '活动介绍', link: '/activity/' },
          ]
        },
        {
          text: '群赛',
          items: [
            { text: 'S2', items: [{ text: '图池', link: '/activity/vivo50/S2/maps' }, { text: '分队', link: '/activity/vivo50/S2/teams' }, { text: '结果', link: '/activity/vivo50/S2/result' }]},
          ]
        },
        {
          text: '总力战',
          items: [
            { text: '总力战介绍', link: '/activity/Total_Assault/' },
            { text: 'S1', items: [{ text: '图池', link: '/activity/Total_Assault/S1/maps' }, { text: '成绩一览', link: '/activity/Total_Assault/S1/score' },{ text: '结算', link: '/activity/Total_Assault/S1/result' }]},
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/meng-luo/osu_vivo50' }
    ]
  }
})