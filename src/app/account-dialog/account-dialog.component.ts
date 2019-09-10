
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<AssetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
