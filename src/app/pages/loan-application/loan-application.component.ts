import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ApiResponseModel,
  Application,
  Loan,
} from '../../model/Applicationmodel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css',
})
export class LoanApplicationComponent {
  application: Application = new Application();
  loan: Loan = new Loan();
  masterSrv = inject(MasterService);

  onsubmit() {
    debugger;
    this.masterSrv.addnewApplication(this.application).subscribe(
      (res: ApiResponseModel) => {
        if (res.result) {
          alert('Loan Application Success');
        } else {
          alert(res.message);
        }
      },
      (error) => {
        alert(error);
      }
    );
  }

  addloan() {
    const strobj = JSON.stringify(this.loan);
    const newobj = JSON.parse(strobj);
    this.application.Loans.unshift(newobj);
    this.loan = new Loan();
  }
}
