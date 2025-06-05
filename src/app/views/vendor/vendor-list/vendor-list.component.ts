import { Component, OnInit } from '@angular/core';
import { TableDirective, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { RestApiService } from '../../../services/rest.api.service';


@Component({
  selector: 'app-vendor-list',
  imports: [IconDirective, CommonModule, TableDirective, RowComponent, ColComponent, TextColorDirective, ReactiveFormsModule, CardComponent, CardHeaderComponent, CardBodyComponent],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.scss'
})

export class VendorListComponent implements OnInit {

  vendorList: { id: number; name: string; companyName: string; status: string }[] = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit() {

    this.init();
  }

  init() {
    this.restApi.getAPI('/vendors?page=0&size=500').subscribe(
      data => {
        this.vendorList=data.data.content;
       
            },
      err => {
        
        
      }
    );


  }


  deleteVendor(id: number) {
    this.vendorList = this.vendorList.filter(vendor => vendor.id !== id);
}

}



