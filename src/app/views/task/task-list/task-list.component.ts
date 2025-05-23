import { Component, OnInit } from '@angular/core';
import { TableDirective, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-task-list',
  standalone: true, 
  imports: [
    IconDirective,
    CommonModule,
    TableDirective,
    RowComponent,
    ColComponent,
    TextColorDirective,
    ReactiveFormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  
  taskList: { id: number; taskname: string; description: string; deadlines: Date; priorities: string; attachments: File[] }[] = [];

  constructor() { }
  ngOnInit(): void {
    this.init(); 
  }

  init(): void {
    
    this.taskList = [
      { id: 1, taskname: 'Task 1', description: 'description 1', deadlines: new Date('01-10-2024'), priorities: 'High', attachments: [] },
      { id: 2, taskname: 'Task 2', description: 'description 2', deadlines: new Date('02-10-2024'), priorities: 'Medium', attachments: [] },
      { id: 3, taskname: 'Task 3', description: 'description 3', deadlines: new Date('03-10-2024'), priorities: 'Low', attachments: [] },
      { id: 4, taskname: 'Task 4', description: 'description 4', deadlines: new Date('04-10-2024'), priorities: 'High', attachments: [] },
      { id: 5, taskname: 'Task 5', description: 'description 5', deadlines: new Date('05-10-2024'), priorities: 'Medium', attachments: [] },
      { id: 6, taskname: 'Task 6', description: 'description 6', deadlines: new Date('06-10-2024'), priorities: 'Low', attachments: [] },
      { id: 7, taskname: 'Task 7', description: 'description 7', deadlines: new Date('07-10-2024'), priorities: 'High', attachments: [] },
      { id: 8, taskname: 'Task 8', description: 'description 8', deadlines: new Date('08-10-2024'), priorities: 'Medium', attachments: [] },
      { id: 9, taskname: 'Task 9', description: 'description 9', deadlines: new Date('09-10-2024'), priorities: 'Low', attachments: [] },
      { id: 10, taskname: 'Task 10', description: 'description 10', deadlines: new Date('10-10-2024'), priorities: 'High', attachments: [] }
    ];
    console.log(this.taskList);
  }

  
  deleteTask(idToDelete: number): void {
   
    this.taskList = this.taskList.filter(task => task.id !== idToDelete);
    console.log(`Task with ID ${idToDelete} removed.`);
    console.log('Updated Task List:', this.taskList);
  }
}