import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-table',
  templateUrl: './exercise-table.component.html',
  styleUrls: ['./exercise-table.component.scss'],
})
export class ExerciseTableComponent implements OnInit {
  @Output() centralData = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
