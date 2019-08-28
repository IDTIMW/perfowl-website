import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor() { }

  getPlatformSites() {
    return [
      { "name": "哔哩哔哩", "into": "国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主。大家可以在这里找到许多欢乐。", "url": "https://www.bilibili.com" },
      { "name": "YouTube", "into": "全球最大的视频网站", "url": "https://youtube.com" },
      { "name": "新浪微博", "into": "这是新浪微博", "url": "https://weibo.com" },
      { "name": "小影", "into": "小影-短视频制作神器，全球上亿用户都在拍！最强视频剪辑，最in动画字幕和贴纸", "url": "https://www.xiaoying.tv" },
      { "name": "VUE", "into": "国内最大的原创 Vlog 平台", "url": "http://vuevideo.net" },
      { "name": "猫饼ö", "into": "猫饼ö，VLOG视频日志", "url": "http://maobing.tv" },
    ]
  }

  getMusicSites() {
    return [
      {
        "name": "Audio Library",
        "into": "Audio Library 致力于为内容创作者推广 vlog 无版权音乐",
        "url": "https://www.audiolibrary.com.co",
        "tags": [
          "free"
        ]
      },
      {
        "name": "Epidemic Sound",
        "into": "15万YouTuber都在用的音乐平台，Our library is of the highest quality, usable on all social platforms and royalty-free forever.",
        "url": "https://www.epidemicsound.com",
        "tags": [
          "subscription"
        ]
      },
      {
        "name": "AudioJungle",
        "into": "Discover 896,497 Royalty Free Music tracks and audio files from only $1 on AudioJungle. Buy Royalty Free Music from a Global Community of Musicians and Sound Engineers.",
        "url": "https://audiojungle.net"
      },
      {
        "name": "Pond5",
        "into": "Search the world's largest video collection plus millions of music tracks, sound effects, motion graphics and images. Over 20,000 new videos added daily. Find the perfect media for your next creative project. Search now.",
        "url": "https://www.pond5.com"
      },
      {
        "name": "PremiumBeat",
        "into": "PremiumBeat's curated library of royalty-free music gives creative professionals the polished feel of the big production houses. All PremiumBeat's music is exclusive and 100% copyright clear. Start listening today!",
        "url": "https://www.premiumbeat.com"
      },
      {
        "name": "Musicbed",
        "into": "Create a free account today and find the perfect song for your film, with a curated roster featuring hundreds of leading composers and emerging indie artists.",
        "url": "https://www.musicbed.com"
      },
      {
        "name": "Music Vine",
        "into": "Music Vine makes the world's finest production music accessible to projects of all shapes and sizes.",
        "url": "https://musicvine.com"
      },
      {
        "name": "Artlist",
        "into": "Music Licensing for video, Music for videos, Music for films, royalty free music, Music subscription, music library for videos, music for YouTube videos, commercial music, Music Licensing for Videos & Films, royalty free music subscription. Music,Licensing,Video,Film,YouTube",
        "url": "https://artlist.io"
      },
      {
        "name": "Marmoset",
        "into": "Meticulously curated rare, vintage and emerging artists, bands and record labels for music licensing.",
        "url": "https://www.marmosetmusic.com"
      },
      {
        "name": "Soundstripe",
        "into": "Royalty free music and unlimited music for video, for one low price. Sign up for unlimited royalty free music downloads, and find the perfect song for your project in minutes!",
        "url": "https://soundstripe.com"
      },
      {
        "name": "Soundsnap ",
        "into": "Soundsnap is the Leading Sound Library for Unlimited SFX Downloads. Browse 250,000+ Sound Effects Used by Hollywood Sound Designers & Editors.",
        "url": "https://www.soundsnap.com"
      },
      {
        "name": "Audiosocket",
        "into": "Audiosocket is a music licensing company that gives media creators a way to quickly discover and license music. Our roster of original music and outstanding service have earned us a solid reputation as a trusted partner to hundreds of global brands and clients. Check out a few samples of our work.",
        "url": "https://www.audiosocket.com"
      },
      {
        "name": "爱给网",
        "into": "爱给网-提供50万首免费配乐下载,短视频音乐,影视配乐,游戏背景音乐,正版品质,海量免费,每日更新,一键打包下载",
        "url": "http://www.aigei.com/music"
      },
      {
        "name": "AGM商用音乐授权网站",
        "into": "拥有来自于全球最大音乐版权公司Sony/ATV、EMI（百代）以及上万名独立音乐人的近千万首音乐作品版权，覆盖多数国家地区、音乐流派和情绪风格，满足游戏、动漫、影视剧、广告、视频配乐、会场、商城、咖啡厅播放等多种需求，并授权在电视台、网络平台、手机APP、电影院、户外广告等多种播放平台播放。",
        "url": "https://agm.hifiveai.com/#!/newHome"
      },
      {
        "name": "100Audio",
        "url": "https://100audio.com/",
        "into": "超过10万+首原创正版音乐由100Audio平台的独占音乐人创作，您可轻松在平台内使用搜索引擎找到合适的音乐并购买获得音乐授权。"
      },
      {
        "name": "MUSINESS",
        "into": "是目前中国最大的优质原创音乐库。致力于引领商用音乐的聚合和变现，打造音乐IP孵化生态社群，营造中国良好的音乐创作和版权意识及交易环境",
        "url": "https://www.musiness.vip",
      },
      {
        "name": "Music Time 版权音乐网",
        "into": "专为亚洲市场需求规划的音乐曲库, 提供快速、合法的版权音乐服务, 多元优质的客制作曲团队给你最棒的合作体验",
        "url": "https://cn.musictime-studio.com/index.php"
      }
    ]
  }

  getSoftwareSites() {
    return [
      { "name": "Adobe Premiere Pro", "into": "利用 Adobe Premiere Pro 几乎随时随地制作出视觉效果惊人的视频。创建电影、电视和 Web 专业作品。立即加入。", "url": "https://www.adobe.com/cn/products/premiere.html" },
      { "name": "Final Cut Pro X", "into": "Final Cut Pro X revolutionizes post-production with 360° video editing and motion graphics, 4K HDR support, and advanced tools for color correction.", "url": "https://www.apple.com/final-cut-pro/" },
      { "name": "Video Studio Pro", "into": "The official website for the VideoStudio Pro family of products. Get product information, updates and free trials. Access special offers, tutorials and videos.", "url": "https://www.videostudiopro.com/en/?link=wm" },
      { "name": "威力导演", "into": "讯连科技完美结合多款云服务、移动软件和获奖无数多媒体影音软件，包含PowerDVD – 全球No.1蓝光以及4K超清影音播放软件、威力导演-全球最速视频剪辑软件和多款获奖无数的多媒体应用软件，让你能畅享影音娱乐，并尽情创作独具风格的视频、相片和音乐。", "url": "https://cn.cyberlink.com/index_zh_CN.html" },
      { "name": "Pinnacle Studio 22", "into": "Pinnacle Studio Video Editing software is used by over 13 Million people. Enjoy a faster way to capture, edit and share your video.", "url": "https://www.pinnaclesys.com/  " },
      { "name": "MAGIX Movie Edit", "into": "MAGIX Movie Edit Pro 2019✅NEW! CPU Acceleration✅NEW! 360° Transitions✅Up to 1.500 Effects & Film Music✅Videoaktiv: Software Stability Approved 2018✅ ", "url": "https://www.magix.com/int/video-editor/" },
      { "name": "iMovie", "into": "iOS 版 和 macOS 版 iMovie 剪辑让你可以轻松地将照片和视频片段打造成精彩的影片或预告片，并与全球分享。", "url": "https://www.apple.com/cn/imovie/" },
      { "name": "AVID", "into": "Provides information on all-digital solutions for capturing, creating, editing and distributing digital media.", "url": "https://www.avid.com" },
      { "name": "DaVinci Resolve 16", "into": "颠覆传统的全新创意工具，集剪辑、调色、专业音频后期制作于一身的一站式流程！", "url": "https://www.blackmagicdesign.com/cn/products/davinciresolve" },
      { "name": "EDIUS", "into": "专业的非线性视频编辑软件，为广播和后期制作环境而设计", "url": "http://www.ediuschina.com" },
      { "name": "喵影工厂", "into": "风靡全球的视频剪辑神器", "url": "https://www.shencut.com" },
    ];
  }

  getVideoSites() {
    return [
      {
        "name": "Pexels", "into": "The best free stock videos shared by the Pexels community.s", "url": "https://www.pexels.com/videos/"
      },
      { "name": "DISTLL", "into": "Curated HD stock video footage free for your personal and commercial use. 10 new videos every 10 days. Videos are licensed under the Creative Commons Zero license.", "url": "http://www.wedistill.io" },
      {
        "name": "Mixkit",
        "into": "Download high quality, royalty free video footage and art. New awesome creative assets being added daily that are completely free to use. ",
        "url": "https://mixkit.co/",
      },
      { "name": "Mazwai", "into": "Download free creative commons HD video clips & footages.", "url": "http://mazwai.com " },
      { "name": "MotionElements", "into": "Download 4000+ free stock footage from our AI-driven marketplace with 3,000,000+ royalty-free stock videos, templates & music. - [MotionElements]", "url": "https://www.motionelements.com/free/stock-footage" },
      { "name": "FootageCrate", "into": "Free HD Archives. 1000's of special effects and elements by Hollywood industry professionals. Download Magic Powers, Action & Horror VFX, Transitions, Lens Flares/Bokeh, YouTube Video Effects and CTAs, Nuclear Blasts, Real Fire & Rain, Zombies ...", "url": "https://footagecrate.com" },
      { "name": "Free Video Footage", "into": "Download Free Video Backgrounds Videos and Loops for Commercial and Personal use. Get hundreds of Free Videos and Footage Clips for your next Video Project.", "url": "https://www.free-video-footage.com" },
      { "name": "Videezy", "into": "Free HD Stock Video Footage! - Videezy is a community of Videographers who download and share free HD stock video!", "url": "https://www.videezy.com" },
      { "name": "monzoom.com", "into": "download free and royalty free motion video backgrounds, overlays, lower thirds, transitions, elements and intros for use in any commercial and private projects.  ", "url": "https://www.monzoom.com" },
      { "name": "IgniteMotion", "into": "Free motion backgrounds, free for commercial or personal use! all videos are High Definition, motion backgrounds to use in your video editing projects.", "url": "https://www.ignitemotion.com" },
      {
        "name": "coverr",
        "into": "Download royalty free (for personal and commercial use), unique and beautiful video footage for your website or any project. No attribution required.",
        "url": "https://coverr.co/"
      },
      { "name": "SplitShire", "into": "What would you do if you had amazing royalty free photos? Download free stock photos with no copyright restrictions and real look.", "url": "https://www.splitshire.com" },
      { "name": "openfootage", "into": "footage blog for textures, timelapse footage, HDRI panoramas and alpha elements mostly under creative commons license free to download", "url": "https://www.openfootage.net" },
      { "name": "OrangeHD", "into": "OrangeHD Stock offers hundreds of Full HD and HD footages and videos. All footages are free, both for commercial and non-commercial purposes. There are no hidden costs or need to sign-up.", "url": "http://www.orangehd.com" },
      { "name": "Vidsplay", "into": "Download Free stock video footage in high definition (HD). Completely Free No Cost Video Footage.", "url": "https://www.vidsplay.com" },
      { "name": "Pixabay", "into": "Find the perfect free stock video footage for your next project. ✓ Free for commercial use ✓ HD & 4K video available ✓ No attribution required.", "url": "https://pixabay.com/videos/" },
      { "name": "Videvo.net", "into": "Download free stock video footage with over 28,000 video clips in 4k and HD. We also offer a wide selection of music and sound effect files with over 100,000 clips available. Click here to download royalty-free licensing videos, motion graphics, music and sound effects from Videvo today.", "url": "http://www.videvo.net" },
      { "name": "Life of Vids", "into": "Free videos for personal &amp; commercial uses. New videos added weekly! High-resolution videos for free for U on our VIMEO. For Designers, Web Creatives &amp; more", "url": "https://www.lifeofvids.com" },
    ]
  }

  getTutorialSites() {
    return [
      { "name": "HeyDrones", "into": "关注无人机、相机、无人机，提供创意&教程，记录你的精彩瞬间。", "url": "http://www.heydrones.com" },
      { "name": "新片场 - 专业的影视创作人社区", "into": "新片场是一个专注于服务新媒体影视的创作人社区，汇集国内影视圈导演，制片人，编剧，演员，影评人，影视机构及众多影视爱好者。在这里，可以找到国内最顶尖的影视创作人；在这里，可以获得不可多得的合作机会；在这里，可以向全世界展示你的才华。新片场，电影从这里开始...", "url": "https://www.xinpianchang.com" },
      { "name": "影视工业网", "into": "是中国最大的泛影视垂直社群，为影视从业者提供行业最新资讯、设备购买、影视教育、电影人扶持、资源对接、影视招聘等服务。", "url": "https://107cine.com" },
      { "name": "影视剧风", "into": "影视飓风是一个意在传授特效制作/相机评测/剪辑技巧等相关知识，发布高质量短片/ 微电影的小团体", "url": "https://space.bilibili.com/946974/" },
      { "name": "摄影师陈文坚", "into": "Vlog领域优质UP主", "url": "https://space.bilibili.com/18902951/" },
    ];
  }
}
