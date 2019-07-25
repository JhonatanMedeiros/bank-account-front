// Angular Imports
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

// External Libs
import { MDBModalRef, MdbTableDirective } from 'angular-bootstrap-md';

import * as faker from 'faker';

@Component({
  selector: 'bank-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  companies: any = [];
  headElements = ['ID', 'Empresa', 'CNPJ', 'Proprietário', 'Ações'];

  searchText = '';
  previous: string;

  constructor() {
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.fakerInit();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.companies = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.companies = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

  removeCompany(id: number): void {
    console.log('[ID]', id);
    const company = this.companies.findIndex(v => v.id === id);
    console.log(company);
    if (company) {
      this.companies.splice(company, 1);
    }
  }

  private fakerInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.companies.push({
        id: i,
        name: faker.company.companyName(),
        cnpj: '31.973.631/0001-10',
        proprietary: faker.name.firstName()
      });
    }

    this.mdbTable.setDataSource(this.companies);
    this.companies = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

}
