import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.sass']
})
export class TimestampComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnHomepage() {
    this.router.navigate(['/']);
  }
}