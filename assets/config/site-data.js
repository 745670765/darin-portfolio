// ============================================================
// Darin Portfolio 素材配置文件 v193
// ============================================================
//
// 你以后主要改这个文件：assets/config/site-data.js
//
// 核心原则：
// 1. 作品滚动区：只准备 work-01.jpg 到 work-10.jpg。
//    页面会自动重复 3 轮，形成 30 个滚动 tile，实现无缝循环。
// 2. 项目卡片：已经预设 30 个，只显示 enabled:true 的项目。
// 3. 项目详情：每个项目默认预设 detail-01.jpg 到 detail-10.jpg。
//    放图就显示，没放的自动隐藏。
// 4. 查看项目支持横屏视频、三列竖屏图片/视频。
// ============================================================

window.SITE_CONFIG={
  // ============================================================
  // 0. 素材版本号
  // 如果你替换了同名图片/视频，但页面还显示旧图：
  // 把 'v1' 改成 'v2' 或 '20260702-1'，然后刷新页面。
  // ============================================================
  ASSET_VERSION:'v1',

  // 首屏视频：把视频放到 assets/videos/hero-avatar.mp4
  HERO_VIDEO_SRC:'assets/videos/hero-avatar.mp4',

  // 联系版块图片：把图片放到 assets/contact/contact-card.png
  // CONTACT_IMAGE_SCALE：1 = 原尺寸，0.9 = 90%，1.1 = 110%
  CONTACT_IMAGE_SRC:'assets/contact/contact-card.png',
  CONTACT_IMAGE_SCALE:0.9,

  // 作品滚动区：真实源文件只需要 10 张，页面自动复制 3 轮形成 30 个滚动 tile。
  works:[
    {title:'作品 01',image:'assets/works/work-01.jpg',color:0},
    {title:'作品 02',image:'assets/works/work-02.jpg',color:1},
    {title:'作品 03',image:'assets/works/work-03.jpg',color:2},
    {title:'作品 04',image:'assets/works/work-04.jpg',color:3},
    {title:'作品 05',image:'assets/works/work-05.jpg',color:4},
    {title:'作品 06',image:'assets/works/work-06.jpg',color:5},
    {title:'作品 07',image:'assets/works/work-07.jpg',color:6},
    {title:'作品 08',image:'assets/works/work-08.jpg',color:7},
    {title:'作品 09',image:'assets/works/work-09.jpg',color:8},
    {title:'作品 10',image:'assets/works/work-10.jpg',color:9}
  ],

  // 项目卡片 30 个。
  // 启用项目：把 // enabled:true, 改成 enabled:true,
  projects:[
    {
      enabled:true,
      num:'01',
      category:'地产项目',
      name:'华润润府&万象城',
      cover:'assets/projects/project-01/cover.jpg',
      colors:[0, 1, 2],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-01/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-01/detail-01.jpg',
        'assets/projects/project-01/detail-02.jpg',
        'assets/projects/project-01/detail-03.jpg',
        'assets/projects/project-01/detail-04.jpg',
        'assets/projects/project-01/detail-05.jpg',
        'assets/projects/project-01/detail-06.jpg',
        'assets/projects/project-01/detail-07.jpg',
        'assets/projects/project-01/detail-08.jpg',
        'assets/projects/project-01/detail-09.jpg',
        'assets/projects/project-01/detail-10.jpg',
        'assets/projects/project-01/detail-11.jpg',
        'assets/projects/project-01/detail-12.jpg',
        'assets/projects/project-01/detail-13.jpg',
        'assets/projects/project-01/detail-14.jpg',
        'assets/projects/project-01/detail-15.jpg',
        'assets/projects/project-01/detail-16.jpg',
        'assets/projects/project-01/detail-17.jpg',
        'assets/projects/project-01/detail-18.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-01/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-01/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-01/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-01/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'02',
      category:'地产项目',
      name:'越秀品牌',
      cover:'assets/projects/project-02/cover.jpg',
      colors:[3, 4, 5],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-02/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-02/detail-01.jpg',
        'assets/projects/project-02/detail-02.jpg',
        'assets/projects/project-02/detail-03.jpg',
        'assets/projects/project-02/detail-04.jpg',
        'assets/projects/project-02/detail-05.jpg',
        'assets/projects/project-02/detail-06.jpg',
        'assets/projects/project-02/detail-07.jpg',
        'assets/projects/project-02/detail-08.jpg',
        'assets/projects/project-02/detail-09.jpg',
        'assets/projects/project-02/detail-10.jpg',
        'assets/projects/project-02/detail-11.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-02/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-02/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-02/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-02/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'03',
      category:'地产项目',
      name:'KK TIME',
      cover:'assets/projects/project-03/cover.jpg',
      colors:[6, 7, 8],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-03/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-03/detail-01.jpg',
        'assets/projects/project-03/detail-02.jpg',
        'assets/projects/project-03/detail-03.jpg',
        'assets/projects/project-03/detail-04.jpg',
        'assets/projects/project-03/detail-05.jpg',
        'assets/projects/project-03/detail-06.jpg',
        'assets/projects/project-03/detail-07.jpg',
        'assets/projects/project-03/detail-08.jpg',
        'assets/projects/project-03/detail-09.jpg',
        'assets/projects/project-03/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-03/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-03/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-03/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-03/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'04',
      category:'地产项目',
      name:'启迪科技园',
      cover:'assets/projects/project-04/cover.jpg',
      colors:[9, 10, 11],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-04/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
   detailImages:[

{type:'video',src:'assets/projects/project-04/horizontal-video-01.mp4'},
{type:'video',src:'assets/projects/project-04/horizontal-video-02.mp4'},
{type:'video',src:'assets/projects/project-04/horizontal-video-03.mp4'},

        'assets/projects/project-04/detail-01.jpg',
        'assets/projects/project-04/detail-02.jpg',
        'assets/projects/project-04/detail-03.jpg',
        'assets/projects/project-04/detail-04.jpg',
        'assets/projects/project-04/detail-05.jpg',

  {
    layout:'triple',
    items:[
      {type:'video',src:'assets/projects/project-04/vertical-video-01.mp4'},
      {type:'video',src:'assets/projects/project-04/vertical-video-02.mp4'},
      {type:'video',src:'assets/projects/project-04/vertical-video-03.mp4'}
    ]
  },

  {
    layout:'triple',
    items:[
      {type:'video',src:'assets/projects/project-04/vertical-video-04.mp4'},
      {type:'video',src:'assets/projects/project-04/vertical-video-05.mp4'},
      {type:'video',src:'assets/projects/project-04/vertical-video-06.mp4'}
    ]
  },

        'assets/projects/project-04/detail-06.jpg',
        'assets/projects/project-04/detail-07.jpg',
        'assets/projects/project-04/detail-08.jpg',
        'assets/projects/project-04/detail-09.jpg',
        'assets/projects/project-04/detail-10.jpg'


        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-04/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-04/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-04/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-04/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'05',
      category:'地产项目',
      name:'润和滨江湾',
      cover:'assets/projects/project-05/cover.jpg',
      colors:[12, 13, 14],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-05/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[

{type:'video',src:'assets/projects/project-05/horizontal-video-01.mp4'},
{type:'video',src:'assets/projects/project-05/horizontal-video-02.mp4'},

 {
    layout:'triple',
    items:[
      {type:'video',src:'assets/projects/project-05/vertical-video-01.mp4'},
      {type:'video',src:'assets/projects/project-05/vertical-video-02.mp4'}
    ]
  },
        'assets/projects/project-05/detail-01.jpg',
        'assets/projects/project-05/detail-02.jpg',
        'assets/projects/project-05/detail-03.jpg',
        'assets/projects/project-05/detail-04.jpg',
        'assets/projects/project-05/detail-05.jpg',
        'assets/projects/project-05/detail-06.jpg',
        'assets/projects/project-05/detail-07.jpg',
        'assets/projects/project-05/detail-08.jpg',
        'assets/projects/project-05/detail-09.jpg',
        'assets/projects/project-05/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-05/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-05/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-05/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-05/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'06',
      category:'地产项目',
      name:'华侨城欢乐海岸',
      cover:'assets/projects/project-06/cover.jpg',
      colors:[15, 16, 17],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-06/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-06/detail-01.jpg',
        'assets/projects/project-06/detail-02.jpg',
        'assets/projects/project-06/detail-03.jpg',
        'assets/projects/project-06/detail-04.jpg',
        'assets/projects/project-06/detail-05.jpg',
        'assets/projects/project-06/detail-06.jpg',
        'assets/projects/project-06/detail-07.jpg',
        'assets/projects/project-06/detail-08.jpg',
        'assets/projects/project-06/detail-09.jpg',
        'assets/projects/project-06/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-06/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-06/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-06/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-06/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'07',
      category:'地产项目',
      name:'怡翠晋盛',
      cover:'assets/projects/project-07/cover.jpg',
      colors:[18, 19, 20],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-07/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-07/detail-01.jpg',
        'assets/projects/project-07/detail-02.jpg',
        'assets/projects/project-07/detail-03.jpg',


  {
    layout:'triple',
    items:[
      {type:'video',src:'assets/projects/project-07/vertical-video-01.mp4'},
      {type:'video',src:'assets/projects/project-07/vertical-video-02.mp4'},
      {type:'video',src:'assets/projects/project-07/vertical-video-03.mp4'}
    ]
  },

  {
    layout:'triple',
    items:[
      {type:'video',src:'assets/projects/project-07/vertical-video-04.mp4'},
      {type:'video',src:'assets/projects/project-07/vertical-video-05.mp4'},
      {type:'video',src:'assets/projects/project-07/vertical-video-06.mp4'}
    ]
  },

  {
    layout:'triple',
    items:[
      {type:'video',src:'assets/projects/project-07/vertical-video-07.mp4'},
      {type:'video',src:'assets/projects/project-07/vertical-video-08.mp4'},
      {type:'video',src:'assets/projects/project-07/vertical-video-09.mp4'}
    ]
  },


        'assets/projects/project-07/detail-04.jpg',
        'assets/projects/project-07/detail-05.jpg',
        'assets/projects/project-07/detail-06.jpg',
        'assets/projects/project-07/detail-07.jpg',
        'assets/projects/project-07/detail-08.jpg',
        'assets/projects/project-07/detail-09.jpg',
        'assets/projects/project-07/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-07/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-07/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-07/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-07/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'08',
      category:'活动项目',
      name:'世界青年科学家峰会',
      cover:'assets/projects/project-08/cover.jpg',
      colors:[21, 22, 23],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-08/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-08/detail-01.jpg',
        'assets/projects/project-08/detail-02.jpg',
        'assets/projects/project-08/detail-03.jpg',
        'assets/projects/project-08/detail-04.jpg',
        'assets/projects/project-08/detail-05.jpg',
        'assets/projects/project-08/detail-06.jpg',
        'assets/projects/project-08/detail-07.jpg',
        'assets/projects/project-08/detail-08.jpg',
        'assets/projects/project-08/detail-09.jpg',
        'assets/projects/project-08/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-08/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-08/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-08/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-08/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'09',
      category:'活动项目',
      name:'丸美千店年度盛典全国会',
      cover:'assets/projects/project-09/cover.jpg',
      colors:[0, 1, 2],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-09/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-09/detail-01.jpg',
        'assets/projects/project-09/detail-02.jpg',
        'assets/projects/project-09/detail-03.jpg',
        'assets/projects/project-09/detail-04.jpg',
        'assets/projects/project-09/detail-05.jpg',
        'assets/projects/project-09/detail-06.jpg',
        'assets/projects/project-09/detail-07.jpg',
        'assets/projects/project-09/detail-08.jpg',
        'assets/projects/project-09/detail-09.jpg',
        'assets/projects/project-09/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-09/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-09/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-09/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-09/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'10',
      category:'活动项目',
      name:'广州地铁吉祥物嘉年华',
      cover:'assets/projects/project-10/cover.jpg',
      colors:[3, 4, 5],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-10/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-10/detail-01.jpg',
        'assets/projects/project-10/detail-02.jpg',
        'assets/projects/project-10/detail-03.jpg',
        'assets/projects/project-10/detail-04.jpg',
        'assets/projects/project-10/detail-05.jpg',
        'assets/projects/project-10/detail-06.jpg',
        'assets/projects/project-10/detail-07.jpg',
        'assets/projects/project-10/detail-08.jpg',
        'assets/projects/project-10/detail-09.jpg',
        'assets/projects/project-10/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-10/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-10/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-10/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-10/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'11',
      category:'活动项目',
      name:'立白集团创新之夜',
      cover:'assets/projects/project-11/cover.jpg',
      colors:[6, 7, 8],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-11/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-11/detail-01.jpg',
        'assets/projects/project-11/detail-02.jpg',
        'assets/projects/project-11/detail-03.jpg',
        'assets/projects/project-11/detail-04.jpg',
        'assets/projects/project-11/detail-05.jpg',
        'assets/projects/project-11/detail-06.jpg',
        'assets/projects/project-11/detail-07.jpg',
        'assets/projects/project-11/detail-08.jpg',
        'assets/projects/project-11/detail-09.jpg',
        'assets/projects/project-11/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-11/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-11/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-11/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-11/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'12',
      category:'活动项目',
      name:'丸美音乐节快闪',
      cover:'assets/projects/project-12/cover.jpg',
      colors:[9, 10, 11],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-12/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-12/detail-01.jpg',

        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-12/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-12/vertical-02.jpg'},
            {type:'image',src:'assets/projects/project-12/vertical-03.jpg'}
          ]
        },

        'assets/projects/project-12/detail-02.jpg',
        'assets/projects/project-12/detail-03.jpg',
        'assets/projects/project-12/detail-04.jpg',
        'assets/projects/project-12/detail-05.jpg',
        'assets/projects/project-12/detail-06.jpg',
        'assets/projects/project-12/detail-07.jpg',
        'assets/projects/project-12/detail-08.jpg',
        'assets/projects/project-12/detail-09.jpg',
        'assets/projects/project-12/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-12/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-12/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-12/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-12/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'13',
      category:'各项目海报',
      name:'海报设计',
      cover:'assets/projects/project-13/cover.png',
      colors:[12, 13, 14],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-13/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-13/detail-01.jpg',
        'assets/projects/project-13/detail-02.jpg',
        'assets/projects/project-13/detail-03.jpg',
        'assets/projects/project-13/detail-04.jpg',
        'assets/projects/project-13/detail-05.jpg',
        'assets/projects/project-13/detail-06.jpg',


        {
          layout:'triple',
          items:[
            {type:'video',src:'assets/projects/project-13/vertical-video-01.mp4'},
            {type:'video',src:'assets/projects/project-13/vertical-video-02.mp4'},
            {type:'video',src:'assets/projects/project-13/vertical-video-03.mp4'}
          ]
        },


        {
          layout:'triple',
          items:[
            {type:'video',src:'assets/projects/project-13/vertical-video-04.mp4'},
            {type:'video',src:'assets/projects/project-13/vertical-video-05.mp4'},
            {type:'video',src:'assets/projects/project-13/vertical-video-06.mp4'}
          ]
        },

        'assets/projects/project-13/detail-07.jpg',
        'assets/projects/project-13/detail-08.jpg',
        'assets/projects/project-13/detail-09.jpg',

        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-13/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-13/vertical-02.jpg'},
            {type:'image',src:'assets/projects/project-13/vertical-03.jpg'}
          ]
        },

        'assets/projects/project-13/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-13/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-13/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-13/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-13/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'14',
      category:'VIS设计',
      name:'金致尚品门窗',
      cover:'assets/projects/project-14/cover.jpg',
      colors:[15, 16, 17],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-14/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-14/detail-01.jpg',
        'assets/projects/project-14/detail-02.jpg',
        'assets/projects/project-14/detail-03.jpg',
        'assets/projects/project-14/detail-04.jpg',
        'assets/projects/project-14/detail-05.jpg',
        'assets/projects/project-14/detail-06.jpg',
        'assets/projects/project-14/detail-07.jpg',
        'assets/projects/project-14/detail-08.jpg',
        'assets/projects/project-14/detail-09.jpg',
        'assets/projects/project-14/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-14/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-14/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-14/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-14/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'15',
      category:'VIS设计',
      name:'汉哲门窗',
      cover:'assets/projects/project-15/cover.jpg',
      colors:[18, 19, 20],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-15/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-15/detail-01.jpg',
        'assets/projects/project-15/detail-02.jpg',
        'assets/projects/project-15/detail-03.jpg',
        'assets/projects/project-15/detail-04.jpg',
        'assets/projects/project-15/detail-05.jpg',
        'assets/projects/project-15/detail-06.jpg',
        'assets/projects/project-15/detail-07.jpg',
        'assets/projects/project-15/detail-08.jpg',
        'assets/projects/project-15/detail-09.jpg',
        'assets/projects/project-15/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-15/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-15/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-15/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-15/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'16',
      category:'VIS设计',
      name:'库勒五金',
      cover:'assets/projects/project-16/cover.jpg',
      colors:[21, 22, 23],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-16/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-16/detail-01.jpg',
        'assets/projects/project-16/detail-02.jpg',
        'assets/projects/project-16/detail-03.jpg',
        'assets/projects/project-16/detail-04.jpg',
        'assets/projects/project-16/detail-05.jpg',
        'assets/projects/project-16/detail-06.jpg',
        'assets/projects/project-16/detail-07.jpg',
        'assets/projects/project-16/detail-08.jpg',
        'assets/projects/project-16/detail-09.jpg',
        'assets/projects/project-16/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-16/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-16/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-16/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-16/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'17',
      category:'画册设计',
      name:'华发中演大剧院五周年画册',
      cover:'assets/projects/project-17/cover.jpg',
      colors:[0, 1, 2],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-17/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-17/detail-01.jpg',
        'assets/projects/project-17/detail-02.jpg',
        'assets/projects/project-17/detail-03.jpg',
        'assets/projects/project-17/detail-04.jpg',
        'assets/projects/project-17/detail-05.jpg',
        'assets/projects/project-17/detail-06.jpg',
        'assets/projects/project-17/detail-07.jpg',
        'assets/projects/project-17/detail-08.jpg',
        'assets/projects/project-17/detail-09.jpg',
        'assets/projects/project-17/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-17/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-17/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-17/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-17/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'18',
      category:'画册设计',
      name:'和祐医院宣传',
      cover:'assets/projects/project-18/cover.jpg',
      colors:[3, 4, 5],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-18/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-18/detail-01.jpg',
        'assets/projects/project-18/detail-02.jpg',
        'assets/projects/project-18/detail-03.jpg',
        'assets/projects/project-18/detail-04.jpg',
        'assets/projects/project-18/detail-05.jpg',
        'assets/projects/project-18/detail-06.jpg',
        'assets/projects/project-18/detail-07.jpg',
        'assets/projects/project-18/detail-08.jpg',
        'assets/projects/project-18/detail-09.jpg',
        'assets/projects/project-18/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-18/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-18/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-18/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-18/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      enabled:true,
      num:'19',
      category:'画册设计',
      name:'广亚铝业海外宣传',
      cover:'assets/projects/project-19/cover.jpg',
      colors:[6, 7, 8],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-19/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-19/detail-01.jpg',
        'assets/projects/project-19/detail-02.jpg',
        'assets/projects/project-19/detail-03.jpg',
        'assets/projects/project-19/detail-04.jpg',
        'assets/projects/project-19/detail-05.jpg',
        'assets/projects/project-19/detail-06.jpg',
        'assets/projects/project-19/detail-07.jpg',
        'assets/projects/project-19/detail-08.jpg',
        'assets/projects/project-19/detail-09.jpg',
        'assets/projects/project-19/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-19/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-19/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-19/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-19/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'20',
      category:'项目案例',
      name:'项目 20',
      cover:'assets/projects/project-20/cover.jpg',
      colors:[9, 10, 11],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-20/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-20/detail-01.jpg',
        'assets/projects/project-20/detail-02.jpg',
        'assets/projects/project-20/detail-03.jpg',
        'assets/projects/project-20/detail-04.jpg',
        'assets/projects/project-20/detail-05.jpg',
        'assets/projects/project-20/detail-06.jpg',
        'assets/projects/project-20/detail-07.jpg',
        'assets/projects/project-20/detail-08.jpg',
        'assets/projects/project-20/detail-09.jpg',
        'assets/projects/project-20/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-20/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-20/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-20/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-20/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'21',
      category:'项目案例',
      name:'项目 21',
      cover:'assets/projects/project-21/cover.jpg',
      colors:[12, 13, 14],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-21/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-21/detail-01.jpg',
        'assets/projects/project-21/detail-02.jpg',
        'assets/projects/project-21/detail-03.jpg',
        'assets/projects/project-21/detail-04.jpg',
        'assets/projects/project-21/detail-05.jpg',
        'assets/projects/project-21/detail-06.jpg',
        'assets/projects/project-21/detail-07.jpg',
        'assets/projects/project-21/detail-08.jpg',
        'assets/projects/project-21/detail-09.jpg',
        'assets/projects/project-21/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-21/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-21/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-21/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-21/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'22',
      category:'项目案例',
      name:'项目 22',
      cover:'assets/projects/project-22/cover.jpg',
      colors:[15, 16, 17],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-22/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-22/detail-01.jpg',
        'assets/projects/project-22/detail-02.jpg',
        'assets/projects/project-22/detail-03.jpg',
        'assets/projects/project-22/detail-04.jpg',
        'assets/projects/project-22/detail-05.jpg',
        'assets/projects/project-22/detail-06.jpg',
        'assets/projects/project-22/detail-07.jpg',
        'assets/projects/project-22/detail-08.jpg',
        'assets/projects/project-22/detail-09.jpg',
        'assets/projects/project-22/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-22/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-22/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-22/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-22/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'23',
      category:'项目案例',
      name:'项目 23',
      cover:'assets/projects/project-23/cover.jpg',
      colors:[18, 19, 20],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-23/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-23/detail-01.jpg',
        'assets/projects/project-23/detail-02.jpg',
        'assets/projects/project-23/detail-03.jpg',
        'assets/projects/project-23/detail-04.jpg',
        'assets/projects/project-23/detail-05.jpg',
        'assets/projects/project-23/detail-06.jpg',
        'assets/projects/project-23/detail-07.jpg',
        'assets/projects/project-23/detail-08.jpg',
        'assets/projects/project-23/detail-09.jpg',
        'assets/projects/project-23/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-23/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-23/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-23/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-23/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'24',
      category:'项目案例',
      name:'项目 24',
      cover:'assets/projects/project-24/cover.jpg',
      colors:[21, 22, 23],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-24/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-24/detail-01.jpg',
        'assets/projects/project-24/detail-02.jpg',
        'assets/projects/project-24/detail-03.jpg',
        'assets/projects/project-24/detail-04.jpg',
        'assets/projects/project-24/detail-05.jpg',
        'assets/projects/project-24/detail-06.jpg',
        'assets/projects/project-24/detail-07.jpg',
        'assets/projects/project-24/detail-08.jpg',
        'assets/projects/project-24/detail-09.jpg',
        'assets/projects/project-24/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-24/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-24/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-24/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-24/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'25',
      category:'项目案例',
      name:'项目 25',
      cover:'assets/projects/project-25/cover.jpg',
      colors:[0, 1, 2],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-25/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-25/detail-01.jpg',
        'assets/projects/project-25/detail-02.jpg',
        'assets/projects/project-25/detail-03.jpg',
        'assets/projects/project-25/detail-04.jpg',
        'assets/projects/project-25/detail-05.jpg',
        'assets/projects/project-25/detail-06.jpg',
        'assets/projects/project-25/detail-07.jpg',
        'assets/projects/project-25/detail-08.jpg',
        'assets/projects/project-25/detail-09.jpg',
        'assets/projects/project-25/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-25/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-25/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-25/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-25/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'26',
      category:'项目案例',
      name:'项目 26',
      cover:'assets/projects/project-26/cover.jpg',
      colors:[3, 4, 5],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-26/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-26/detail-01.jpg',
        'assets/projects/project-26/detail-02.jpg',
        'assets/projects/project-26/detail-03.jpg',
        'assets/projects/project-26/detail-04.jpg',
        'assets/projects/project-26/detail-05.jpg',
        'assets/projects/project-26/detail-06.jpg',
        'assets/projects/project-26/detail-07.jpg',
        'assets/projects/project-26/detail-08.jpg',
        'assets/projects/project-26/detail-09.jpg',
        'assets/projects/project-26/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-26/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-26/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-26/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-26/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'27',
      category:'项目案例',
      name:'项目 27',
      cover:'assets/projects/project-27/cover.jpg',
      colors:[6, 7, 8],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-27/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-27/detail-01.jpg',
        'assets/projects/project-27/detail-02.jpg',
        'assets/projects/project-27/detail-03.jpg',
        'assets/projects/project-27/detail-04.jpg',
        'assets/projects/project-27/detail-05.jpg',
        'assets/projects/project-27/detail-06.jpg',
        'assets/projects/project-27/detail-07.jpg',
        'assets/projects/project-27/detail-08.jpg',
        'assets/projects/project-27/detail-09.jpg',
        'assets/projects/project-27/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-27/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-27/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-27/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-27/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'28',
      category:'项目案例',
      name:'项目 28',
      cover:'assets/projects/project-28/cover.jpg',
      colors:[9, 10, 11],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-28/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-28/detail-01.jpg',
        'assets/projects/project-28/detail-02.jpg',
        'assets/projects/project-28/detail-03.jpg',
        'assets/projects/project-28/detail-04.jpg',
        'assets/projects/project-28/detail-05.jpg',
        'assets/projects/project-28/detail-06.jpg',
        'assets/projects/project-28/detail-07.jpg',
        'assets/projects/project-28/detail-08.jpg',
        'assets/projects/project-28/detail-09.jpg',
        'assets/projects/project-28/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-28/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-28/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-28/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-28/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'29',
      category:'项目案例',
      name:'项目 29',
      cover:'assets/projects/project-29/cover.jpg',
      colors:[12, 13, 14],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-29/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-29/detail-01.jpg',
        'assets/projects/project-29/detail-02.jpg',
        'assets/projects/project-29/detail-03.jpg',
        'assets/projects/project-29/detail-04.jpg',
        'assets/projects/project-29/detail-05.jpg',
        'assets/projects/project-29/detail-06.jpg',
        'assets/projects/project-29/detail-07.jpg',
        'assets/projects/project-29/detail-08.jpg',
        'assets/projects/project-29/detail-09.jpg',
        'assets/projects/project-29/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-29/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-29/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-29/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-29/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    },
    {
      // enabled:true,
      num:'30',
      category:'项目案例',
      name:'项目 30',
      cover:'assets/projects/project-30/cover.jpg',
      colors:[15, 16, 17],

      // 默认已经写好 detail-01.jpg 到 detail-10.jpg。
      // 你把图片放到 assets/projects/project-30/ 并改名为 detail-01.jpg，就会自动显示。
      // 没放的 detail 图片会自动隐藏。
      detailImages:[
        'assets/projects/project-30/detail-01.jpg',
        'assets/projects/project-30/detail-02.jpg',
        'assets/projects/project-30/detail-03.jpg',
        'assets/projects/project-30/detail-04.jpg',
        'assets/projects/project-30/detail-05.jpg',
        'assets/projects/project-30/detail-06.jpg',
        'assets/projects/project-30/detail-07.jpg',
        'assets/projects/project-30/detail-08.jpg',
        'assets/projects/project-30/detail-09.jpg',
        'assets/projects/project-30/detail-10.jpg'

        /*
        高级自定义写法，可按需要复制到上面或替换上面的 detail 图片。

        横屏视频，一行一个，自动静音循环播放，点击暂停：
        {type:'video',src:'assets/projects/project-30/horizontal-video-01.mp4'},

        一行三列竖屏图片 / 视频：
        {
          layout:'triple',
          items:[
            {type:'image',src:'assets/projects/project-30/vertical-01.jpg'},
            {type:'image',src:'assets/projects/project-30/vertical-02.jpg'},
            {type:'video',src:'assets/projects/project-30/vertical-video-01.mp4'}
          ]
        },

        如果还要继续三列，再复制一组 layout:'triple'。
        */
      ]
    }
  ]
};
