import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModule } from '../modules/project/project.module';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService) { }

  public projects: ProjectModule[];

  ngOnInit() {
    this.getAllProjects();
  }

  public getAllProjects() {
    this.projects = this.projectService.getProjects();
  }
}
