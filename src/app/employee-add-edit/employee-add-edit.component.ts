import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss']
})
export class EmployeeAddEditComponent {
  employeeForm: FormGroup;

  roles: string[] = [
    'Developer',
    'HR',
    'Sales',
    'Marketing'
  ]

  constructor(private _formbuiler: FormBuilder, private _employeeService: EmployeeService, private _dialogRef: MatDialogRef<EmployeeAddEditComponent>) {
    this.employeeForm = this._formbuiler.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      role: '',
      experience: '',
      gender: ''
    })
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this._employeeService.addEmployee(this.employeeForm.value).subscribe({
        next: (val: any) => {
          alert('Employee Added Successfuly');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
