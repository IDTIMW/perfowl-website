import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) { }

  updatePerfowlMetaTags() {
    this.meta.addTag({ name: 'description', content: 'Perfowl Studio是一个软件设计 & 开发工作室。我们会提供最佳的解决方案，帮助您将想法落地，让想法不再局限于想法。除了整体外包，我们也提供产品设计，软件开发，UI/UX设计的专项服务。' });
    this.meta.addTag({ name: 'keyword', content: '完美鸮, 工作室, 产品设计, 软件开发, UI/UX 设计' });
    this.meta.addTag({
      name: 'viewport', content: "width=device-width, initial-scale=1"
    });
  }

  updateTimestampMetaTags() {
    this.titleService.setTitle("时间戳 | Timestamp - Perfowl");

    this.meta.updateTag({
      name: 'description', content: '时间戳 - 番茄工作法 | 时间记录器 | 管理自己需要从认识自己开始, 一款追求小而美的时间管理工具，内置番茄时钟与普通计时器可在不同的使用场景下使用合适的计时器进行任务记录'
    });

    this.meta.updateTag({
      name: 'keyword', content: '时间管理, 计时器, 番茄工作法, 学习, 阅读, 计时器, 番茄时钟, 时间追踪, 时间记录, 效率'
    });
  }

  updateVlogToolsMetaTags() {
    this.titleService.setTitle("Vlog 工具人 | VlogTools - Perfowl")
    this.meta.updateTag({
      name: 'description', content: 'Vlog Tools 网址导航是 Vlogger 和 预备 Vlogger 的必备的导航站，收录了版权音乐，视频，教程，剪辑软件，剪辑等必备工具以及国内外网站，包含了制作 Vlog 最常用的工具，素材，资料，网站。'
    });
    this.meta.updateTag({
      name: 'keyword', content: 'vlog, vlogger, up主, 网红, 背景音乐, 版权音乐, 视频素材, 剪辑教学, 视频编辑软件, 视频编辑教学'
    })
  }


}
