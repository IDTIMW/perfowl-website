import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToTimestamp() {
    this.router.navigate(['/timestamp']);
  }

}
