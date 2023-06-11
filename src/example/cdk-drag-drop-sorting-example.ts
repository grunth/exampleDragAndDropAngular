import {Component} from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import {SafetyInformation} from "./SafetyInformation";

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class CdkDragDropSortingExample {
  safetyInformation: SafetyInformation[] = [
    { name: 'Обработка материалов 1', ordinal: 1 },
    { name: 'Работа с опасными инструментами 2', ordinal: 2 },
    { name: 'Использование защитной экипировки 3', ordinal: 3 },
    { name: 'Санитарные нормы 4', ordinal: 4 },
    { name: 'Огневая безопасность 5', ordinal: 5 },
  ];

  drop(event: CdkDragDrop<SafetyInformation[]>) {
    moveItemInArray(this.safetyInformation, event.previousIndex, event.currentIndex);
    this.updateOrdinalValues();
  }


  updateOrdinalValues() {
    this.safetyInformation.forEach((safety, index) => {
      safety.ordinal = index + 1;
    });
  }

  onClick() {
    console.log(this.safetyInformation);
  }
}
