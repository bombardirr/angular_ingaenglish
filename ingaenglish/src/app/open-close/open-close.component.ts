import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '50px',
        width: '50px',
        margin: "0 auto",
        border: '1px solid black',
        boxShadow: '-1px 1px 5px black',
        borderRadius: '10px'
      })),
      state('closed', style({
        height: '200px',
        width: '200px',
        margin: "0 auto",
        border: '1px solid black',
        boxShadow: '-5px 5px 10px black',
        transform: 'translate(5px, -5px)',
        borderRadius: '10px'
      })),
      transition('* => *', [
        animate('3s', keyframes ( [
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1,   offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
      ])
      // transition('open => closed', [
      //   animate('0.8s ease-in-out')
      // ]),
      // transition('* => open', [
      //   animate('0.8s ease-in-out', keyframes([
      //     style({ backgroundColor: 'blue', offset: 0}),
      //     style({ backgroundColor: 'pink', offset: 0.8}),
      //     style({
      //       height: '50px',
      //       width: '50px',
      //       margin: "0 auto",
      //       border: '1px solid black',
      //       boxShadow: '-1px 1px 5px black',
      //       transform: 'translate(0)',
      //       borderRadius: '10px',
      //       offset: 1
      //     })
      //   ]))
      // ]),
    ])
  ]
})
export class OpenCloseComponent implements OnInit {

  isOpen = true
  toggle() {
    this.isOpen = !this.isOpen
  }
  constructor() { }

  ngOnInit(): void {
  }

}
