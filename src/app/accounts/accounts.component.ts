import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

// **** IMPORT DIALOG, SERVICE, AND CLASS
import {AccountService} from '../account.service';
import {Account} from '../account';
import {AccountDialogComponent} from '../account-dialog/account-dialog.component';

// constants
const STATUS_RESET_TIME =3000;
const DIALOG_WIDTH = '400px';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  // **** COLUMN CONFIGURATION
  columnDefs = [ // define the columns in the grid
    {headerName: "External ID", field:"ExtID"},
    {headerName: "Account Number", field:"AcctNum", editable:true},
    {headerName: "Account Name", field:"AcctName"},
    {headerName: "Custodian Account", field:"CstAcct", editable:true},
  ]
  defaultColDef = { // default properties of columns
    sortable: true,
    resizable: true,
    // **** UPDATE METHOD
    onCellValueChanged: (params)=>{let data = params.data;
                          this.accountService.updateItem(data);}
  };


  
  // **** LOCAL PROPERTIES
  rowData: Account[];
  dialogAccount: Account;
  status: string;
  private gridApi;

  // **** CONSTRUCTOR AND INIT
  constructor(
    // pass services here
    private accountService: AccountService,  // data service
    public dialog: MatDialog // dialog service
  ) { }

  /**
   * Initialize the component
   */
  ngOnInit() {
    this.rowData = this.accountService.getItems(); //get row data from service    
  }
  /**
   * Grid callback function for when data is first populated.  
   * Columns get resized to fit the grid size
   */
  onFirstDataRender(params){ // when the data is loaded, resize columns to fit
    params.api.sizeColumnsToFit();
  }
  /**
   * Grid callback function for when grid is rendered in browser
   * The component needs a reference (variable) to the grid component api.  We set the variable here.
   */
  onGridReady(params) {
    this.gridApi = params.api;  //set the grid api when it is ready so we can access it later
  }
  /**
   * This function forces a refresh of data from the service and populates grid.
   */
  refreshData(params) {
    this.rowData = this.accountService.getItems(); // get latest data
    this.gridApi.setRowData(this.rowData); //refresh grid
    console.log({"refreshed data":this.rowData});
  }
  
  /**
   * Open dialog and get data to insert
   * this component subscribes to the afterClosed() event from the child component (dialog) to get the data
   */
  insertData(params):void {
    let dialogRef = this.dialog.open(AccountDialogComponent, {
      width: DIALOG_WIDTH, // size of the dialog
      data: {} // data passed to the dialog
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log({'Dialog closed':result}); // log result to console for debugging
      this.dialogAccount = result; // set data on this component based on the data returned from the dialog
      this.status = "You added "+result; // set status text in this component
      this.accountService.insertItem(this.dialogAccount);// insert to data source via service
      this.refreshData(null); // refresh the grid data from service 
      setTimeout(()=>{this.status="";},STATUS_RESET_TIME); // remove status after a few seconds      

    })

  }
  deleteData():void {
    console.log("remove selected rows");
    let selectedRowData = this.gridApi.getSelectedRows();
    selectedRowData.forEach((value) => {      
      this.accountService.deleteItem(value);
    });  // remove from data source
    this.gridApi.updateRowData({remove:selectedRowData}); // update grid
  }
}