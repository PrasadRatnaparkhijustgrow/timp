import { Component } from '@angular/core';
import { TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, FormFeedbackComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective } from '@coreui/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-vendor-list',
  imports: [TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, FormFeedbackComponent, RowComponent, ColComponent, TextColorDirective, ReactiveFormsModule,CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormsModule, FormDirective, FormLabelDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, ColDirective, InputGroupComponent, InputGroupTextDirective],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.scss'
})
export class VendorListComponent {

}
