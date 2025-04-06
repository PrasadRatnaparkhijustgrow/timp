import { Component } from '@angular/core';
import { TableDirective,  RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
@Component({
  selector: 'app-vendor-list',
  imports: [IconDirective, CommonModule, TableDirective, RowComponent, ColComponent, TextColorDirective, ReactiveFormsModule, CardComponent, CardHeaderComponent, CardBodyComponent],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.scss'
})

export class VendorListComponent {

  vendorList: { id: number; name: string; company: string; status: string }[] = [];

  ngOnInit() {
    this.init();
  }

  init() {  
    this.vendorList = [
      { id: 1, name: 'John Doe', company: 'ABC Corp', status: 'Active' },
      { id: 2, name: 'Jane Smith', company: 'XYZ Inc', status: 'Inactive' },
      { id: 3, name: 'Alice Johnson', company: 'LMN Ltd', status: 'Active' },
      { id: 4, name: 'Bob Brown', company: 'OPQ Co', status: 'Inactive' },
      { id: 5, name: 'Charlie Davis', company: 'RST LLC', status: 'Active' },
      { id: 6, name: 'Diana Evans', company: 'UVW Group', status: 'Inactive' },
      { id: 7, name: 'Ethan Foster', company: 'XYZ Corp', status: 'Active' },
      { id: 8, name: 'Fiona Green', company: 'ABC Inc', status: 'Inactive' },
      { id: 9, name: 'George Harris', company: 'LMN Ltd', status: 'Active' },
      { id: 10, name: 'Hannah Ivers', company: 'OPQ Co', status: 'Inactive' }
    ];
    console.log(this.vendorList);
  }

  deleteVendor(id: number) {
    this.vendorList = this.vendorList.filter(vendor => vendor.id !== id);
  }

}
