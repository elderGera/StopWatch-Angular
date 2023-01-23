import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-newsw',
  templateUrl: './newsw.component.html',
  styleUrls: ['./newsw.component.scss'],
})
export class NewswComponent implements OnInit {
  title = 'Observables and RxJS';

  sec: any = '0' + 0;

  ngOnInit(): void {
    const obs$ = interval(1000);
    obs$.subscribe((d) => {
      this.sec = d;
      this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
      console.log(d);
    });
  }
}
