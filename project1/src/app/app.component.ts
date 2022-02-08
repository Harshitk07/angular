import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
 
  dropdownList :{ item_id: number; item_text: string; }[] = [];
  selectedItems: { item_id: number; item_text: string; }[] = [];
  dropdownSettings = {};
  isFileChosen:boolean = false;
  fileName: string = '';
  preUpload(event: any){
    let file = event.target.files[0];
    if (event.target.files.length > 0){
    this.isFileChosen = true;
    }        
    this.fileName = file.name;
  }
ngOnInit(){
 
 this.dropdownList = [
  { item_id: 1, item_text: 'Project Name' },
  { item_id: 2, item_text: 'Hours' },
  { item_id: 3, item_text: 'Discription' },
  { item_id: 4, item_text: 'Client' },
  { item_id: 5, item_text: 'Details' }
];

this.dropdownSettings= {
  singleSelection: false,
  idField: 'item_id',
  textField: 'item_text',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All'
};


}

onItemSelect(item: any) {
  console.log(item);
}
onSelectAll(items: any) {
  console.log(items);
}
onItemDeSelect(item: any) {
  console.log(item);
}


 

}

  
