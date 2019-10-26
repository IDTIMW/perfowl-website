import { Injectable } from '@angular/core';
import { ProjectModule } from '../modules/project/project.module';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public getProjects(): Array<ProjectModule> {
    const projects: Array<ProjectModule> = [];

    const timestampProject = new ProjectModule();
    timestampProject.name = '时间戳';
    timestampProject.url = '/timestamp';
    timestampProject.into = '一款追求小而美的时间管理工具，内置番茄时钟与普通计时器，可在不同的使用场景下使用合适的方式记录时间';
    timestampProject.logo = 'assets/images/timestamp_icon.png';
    timestampProject.image = '/assets/images/work_timestamp_into_2.png';

    const vlogToolsProject = new ProjectModule();
    vlogToolsProject.name = 'vlog 工具人';
    vlogToolsProject.url = '/vlogtools';
    vlogToolsProject.into = 'Vlog 工具人是 Vlogger 和预备 Vlogger 的必备的导航站，收录了版权音乐，视频，教程，剪辑软件，剪辑等必备工具以及国内外网站';
    vlogToolsProject.logo = 'assets/images/vlog_tools_logo.png';
    vlogToolsProject.image = '/assets/images/work_timestamp_into_2.png';

    projects.push(timestampProject, vlogToolsProject);

    return projects;
  }
}
