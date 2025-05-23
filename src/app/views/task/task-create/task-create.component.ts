import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  ButtonDirective
} from '@coreui/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestApiService } from '../../../services/rest.api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormSelectDirective,
    ButtonDirective,
  ],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {

  taskForm = {
    taskname: 'task name here',
    description: 'description here',
    deadlines: '',
    priorities: '',
  };

  selectedFiles: File[] = []; // Array to store selected files

  public visible = false;

  constructor(public restApi: RestApiService) {
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
      console.log('Selected Files:', this.selectedFiles);
    }
  }

  onSubmit() {
    console.log('Task Data:', this.taskForm);
    console.log('Files to upload:', this.selectedFiles);

    // Create FormData object to send both text data and files
    const formData = new FormData();

    // Append text fields from taskForm
    formData.append('taskname', this.taskForm.taskname);
    formData.append('description', this.taskForm.description);
    formData.append('deadlines', this.taskForm.deadlines);
    formData.append('priorities', this.taskForm.priorities);

    // Append each selected file
    this.selectedFiles.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file, file.name); // Use an array-like name for backend parsing

    });


    this.restApi.postAPI('/task/create', formData).subscribe(
      data => {
        console.log('Upload Success:', data);
        this.visible = true;
        // Optionally reset the form and files after successful submission
        this.taskForm = { taskname: '', description: '', deadlines: '', priorities: '' };
        this.selectedFiles = []; // Clear selected files
        // Optionally reset the file input visually (if needed, but not strictly necessary as new selection will overwrite)
        const fileInput = document.getElementById('attachments') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = ''; // Clear the file input display
        }
        this.toggleModal(); // Hide the modal after submission
      },
      err => {
        console.error('Upload Error:', err);
        // Optionally display an error message to the user
      }
    );
  }

  toggleModal() {
    this.visible = !this.visible;
  }

  handleModalChange(event: any) {
    this.visible = event;
  }
}