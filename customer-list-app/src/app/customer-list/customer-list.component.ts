import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  rowData: Observable<any[]>;

  columnDefs: ColDef[] = [
    { field: 'id', hide: true, sortable: true, filter: true },
    {
      field: 'first_name',
      headerName: 'First Name',
      sortable: true,
      filter: true,
    },
    {
      field: 'last_name',
      headerName: 'Last Name',
      sortable: true,
      filter: true,
    },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'address', headerName: 'Adress', sortable: true, filter: true },
    { field: 'state', headerName: 'State', sortable: true, filter: true },
    {
      field: 'active',
      headerName: 'Active Account',
      sortable: true,
      filter: true,
    },
    {
      field: 'postal_code',
      headerName: 'Postal Code',
      sortable: true,
      filter: true,
    },
  ];

  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>(
      'https://my.api.mockaroo.com/users.json?key=cd7df010'
    );
  }

  ngOnInit(): void {}
}
