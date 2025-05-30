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
    vendorName: 'Virat Koahli',
    companyName: 'Doe Enterprises',
    email: 'virat@example.com',
    phone: '1234567890',
    address: '123 Main Street',
    city: 'Metropolis',
    state: 'Delhi',
    district: 'NCR',
    pincode: '123456',
    country:'India',
    gst: 'GST12345',
    pan: 'PAN12345',
    aadhar: 'ADFAFAFAFAF',
    status:'ACTIVE',
    accountHolder: 'virat kohli',
    bankName: 'Bank of Example',
    branchName: 'Main Branch',
    ifsc: 'IFSC1234',
    acnumber: '1234567890123456',
    acType:'SAVINGS',
    upiId:'ashdg@wyg'

  };

  public visible = false;

  constructor(public restApi: RestApiService) {
   }
 

  onSubmit() {
    console.log('Vendor Created:', this.vendorForm);
    this.visible = true;
    var newRequest={}
    newRequest['name']=this.vendorForm['vendorName']
    newRequest['companyName']=this.vendorForm['companyName']
    newRequest['email']=this.vendorForm['email']
    newRequest['phone']=this.vendorForm['phone']
    newRequest['address']=this.vendorForm['address']
    newRequest['city']=this.vendorForm['city']
    newRequest['district']=this.vendorForm['district']
    newRequest['state']=this.vendorForm['state']
    newRequest['country']=this.vendorForm['country']
    newRequest['pincode']=this.vendorForm['pincode']
    newRequest['gstNumber']=this.vendorForm['gst']
    newRequest['panNumber']=this.vendorForm['pan']
    newRequest['aadhaarNumber']=this.vendorForm['aadhar']
    newRequest['status']=this.vendorForm['status']
    
    var bankDetails={}
    bankDetails['accountHolder']=this.vendorForm['accountHolder']
    bankDetails['bankName']=this.vendorForm['bankName']
    bankDetails['branchName']=this.vendorForm['branchName']
    bankDetails['ifscCode']=this.vendorForm['ifsc']
    bankDetails['accountNumber']=this.vendorForm['acnumber']
    bankDetails['accountTyp']=this.vendorForm['acType']
    bankDetails['upiId']=this.vendorForm['upiId']

    
    newRequest['bankDetails']=bankDetails

    console.log(newRequest)  //to watch in web

    this.restApi.postAPI('/vendors', newRequest).subscribe(
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