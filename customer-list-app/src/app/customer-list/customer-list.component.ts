import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ColDef } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  rowData: Observable<any[]>;
  seeJson: boolean = false;
  columnDefs: ColDef[] = [
    { field: 'id', hide: true, sortable: true, filter: true },
    {
      field: 'last_name',
      headerName: 'Last Name',
      sortable: true,
      filter: true,
      width: 150,
    },

    {
      field: 'first_name',
      headerName: 'First Name',
      sortable: true,
      filter: true,
      width: 150,
    },

    {
      field: 'active',
      headerName: 'Active',
      sortable: true,
      filter: true,
      width: 100,
      // cellStyle: { textAlign: 'center' },

      valueFormatter: (params) => {
        return params.value ? '✔️' : '';
      },
    },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'address', headerName: 'Address', sortable: true, filter: true },
    {
      field: 'state',
      headerName: 'State',
      sortable: true,
      filter: true,
      width: 85,
    },

    {
      field: 'postal_code',
      headerName: 'Postal Code',
      sortable: true,
      filter: true,
      width: 125,
    },
    {
      field: 'phone_number',
      headerName: 'Phone',
      sortable: true,
      filter: true,
      width: 150,
    },
    { field: 'address', headerName: 'Address', sortable: true, filter: true },
    {
      field: 'credit_card_number',
      headerName: 'Credit Card #',
      sortable: true,
      filter: true,
    },
    {
      field: 'credit_card_type',
      headerName: 'C. C. Type',
      width: 115,
      sortable: true,
      filter: true,
    },
    {
      field: 'purchase_total',
      headerName: 'Purchase Total',
      width: 145,
      type: 'rightAligned',
      sortable: true,
      filter: true,
    },
  ];

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.rowData = this.http
      .get<any[]>('https://my.api.mockaroo.com/users.json?key=cd7df010')
      .pipe(catchError(this.handleError));
  }

  ngOnInit(): void {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  public openDialog() {

  }
}
