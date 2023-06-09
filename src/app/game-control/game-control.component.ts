import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 1;
  disableStartButton = false;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    console.log("game started");

    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber);
      console.log(this.lastNumber);
      this.lastNumber += 1;
    }, 1000);

    this.disableStartButton = true;
  }

  endGame() {
    clearInterval(this.interval);
    console.log("game ended");
    this.disableStartButton = false;
  }
}
