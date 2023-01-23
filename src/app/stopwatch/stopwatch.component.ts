import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  title = 'StopWatch';

  sec: any = '0' + 0;
  min: any = '0' + 0;

  startTimer: any;
  running = false;

  start(): void {
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.sec++;
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec;

        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
      }, 1000);
    } else {
      this.stop();
      this.reset();
      this.start();
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.min = this.sec = '0' + 0;
  }
}
