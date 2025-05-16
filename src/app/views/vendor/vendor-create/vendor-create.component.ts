import { Component } from '@angular/core';
import {   ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, ButtonDirective} from '@coreui/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestApiService } from '../../../services/rest.api.service';

@Component({
  selector: 'app-vendor-create',
  imports: [  ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,RowComponent, ColComponent, TextColorDirective, ReactiveFormsModule,CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormsModule, FormDirective, FormLabelDirective, FormSelectDirective, ButtonDirective],
  templateUrl: './vendor-create.component.html',
  styleUrl: './vendor-create.component.scss',
})
export class VendorCreateComponent {

  message = "Vendor created successfully!"

  vendorForm = {
    vendorName: 'John Doe',
    companyName: 'Doe Enterprises',
    email: 'johndoe@example.com',
    phone: '1234567890',
    address: '123 Main Street',
    city: 'Metropolis',
    state: 'StateName',
    district: 'DistrictName',
    zip: '123456',
    gst: 'GST12345',
    pan: 'PAN12345',
    aadhar: 'ADFAFAFAFAF',
    accountHolder: 'John Doe',
    bankName: 'Bank of Example',
    branchName: 'Main Branch',
    ifsc: 'IFSC1234',
    acnumber: '1234567890123456'

  };

  public visible = false;

  constructor(public restApi: RestApiService) {
   }
 

  onSubmit() {
    console.log('Vendor Created:', this.vendorForm);
    this.visible = true;
    this.restApi.postAPI('/vendors', this.vendorForm).subscribe(
      data => {
        console.log(data)
        this.message = "Vendor created successfully!"
        this.visible = true;
      },
      err => {
        console.log(err)
        this.message=err
        this.visible = true;
      }
    );
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }


}
