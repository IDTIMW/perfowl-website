import { Component, OnInit, Input } from '@angular/core';
import { ProjectModule } from 'src/app/modules/project/project.module';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() project: ProjectModule;

  ngOnInit() {
  }


}
