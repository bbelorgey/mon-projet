import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indefOfAppareil: number;
  @Input() id:number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    console.log(this.id);
  }


  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indefOfAppareil);
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indefOfAppareil);
  }
}
