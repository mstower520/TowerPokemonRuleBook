import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "宝可梦TRPG",
  description: "The Pokemon TRPG Rule",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '核心书', link: '/Pokerule/1' },
      { text: '宝可骰', link: '/Pokedice/1' },
      { text: '宝可塔', link: '/Poketower/1' }
    ],

    sidebar: {
      '/Pokerule/':[{
        text: '欢迎来到宝可梦世界',
        items:[
          { text: '本书的作用', link: '/Pokerule/1' },
          { text: '名词解释', link: '/Pokerule/2' }
        ]
      },{
        text: '基础规则',
        items:[
          { text: '玩家的分工', link: '/Pokerule/3' },
          { text: '进行游戏', link: '/Pokerule/4' },
          { text: '检定与掷骰', link: '/Pokerule/5' },
          { text: '属性值', link: '/Pokerule/6' },
          { text: '战斗流程', link: '/Pokerule/7' },
          { text: '招式与行动', link: '/Pokerule/8' },
          { text: '特殊状态', link: '/Pokerule/9' }
        ]
      },{
        text: '附录',
        items:[
          { text: '招式列表', link: '/Pokerule/10',
            items:[
              { text: '一般', link: '/Pokerule/Move/1' },
              { text: '火', link: '/Pokerule/Move/2' },
              { text: '水', link: '/Pokerule/Move/3' },
              { text: '电', link: '/Pokerule/Move/4' },
              { text: '草', link: '/Pokerule/Move/5' },
              { text: '冰', link: '/Pokerule/Move/6' },
              { text: '格斗', link: '/Pokerule/Move/7' },
              { text: '毒', link: '/Pokerule/Move/8' },
              { text: '地面', link: '/Pokerule/Move/9' },
              { text: '飞行', link: '/Pokerule/Move/10' },
              { text: '超能力', link: '/Pokerule/Move/11' },
              { text: '虫', link: '/Pokerule/Move/12' },
              { text: '岩石', link: '/Pokerule/Move/13' },
              { text: '幽灵', link: '/Pokerule/Move/14' },
              { text: '龙', link: '/Pokerule/Move/15' },
              { text: '恶', link: '/Pokerule/Move/16' },
              { text: '钢', link: '/Pokerule/Move/17' },
              { text: '妖精', link: '/Pokerule/Move/18' }
            ]}
        ]
      }],
      '/Pokedice/':[{
        text: '宝可骰',
        items:[
          { text: '介绍', link: '/Pokedice/1' },
          { text: '创建宝可梦训练家', link: '/Pokedice/1' }
        ]
      }],
      '/Poketower/':[{
        text: '宝可塔',
        items:[
          { text: '介绍', link: '/Poketower/1' },
          { text: '创建宝可梦冒险者', link: '/Poketower/1' }
        ]
      }]
    }
  }
})
