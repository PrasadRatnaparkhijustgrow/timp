import { Component } from '@angular/core';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, ButtonDirective} from '@coreui/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-create',
  imports: [RowComponent, ColComponent, TextColorDirective, ReactiveFormsModule,CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormsModule, FormDirective, FormLabelDirective, FormSelectDirective, ButtonDirective],
  templateUrl: './vendor-create.component.html',
  styleUrl: './vendor-create.component.scss',
})
export class VendorCreateComponent {

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

  constructor() {}

  onSubmit() {
    console.log('Vendor Created:', this.vendorForm);
    // Here you can add your logic to handle the form submission, like sending the data to a server.
  }
}
