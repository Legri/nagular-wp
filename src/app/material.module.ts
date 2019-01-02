import {NgModule} from '@angular/core';



import {
  
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
   MatTableModule,
   MatTabsModule, 
   MatSidenavModule

} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule ,
    MatTabsModule,
 
    
    
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
 
    
    

  ]
})
export class MaterialModule {}