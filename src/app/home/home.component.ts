import { Component, OnInit } from '@angular/core';
import {SortService} from '../sort.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText = '';
  p: number = 1;
  public arrayData;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  itmesSelected = [];
  lastWidth;

  constructor(private _sortService : SortService){

  }

  ngOnInit() {
    
    this.dropdownList = ["Arts", "Beauty", "Entertainment", "Fashion & accessory", "Fitness", "Food & beverages", "Leisure", "Lifestyle", "Music", "Outdoors", "Parenting", "Pets and animals", "Photography", "Sports", "Toys", "Travel", "Vehicles"];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    this.sortByFollowersDesc();

    
  }
  onResize(event) {
    console.log("WINDOW RESIZING",event.target.innerWidth);
    if(event.target.innerWidth <= 768){
      console.log("WINDOW RESIZING WVWNT");
      $('.ngx-pagination').css('margin-left','5%');
    }
  }

  onKeyUp(){
    console.log(this.searchText);
  }

  ngAfterViewChecked(){
    $('.multiselect-item-checkbox').children().eq(1).css('display','none');
    $('.ngx-pagination').css('margin-left','27%');
    $('.dropdown-multi[_ngcontent-c1]').css('padding','0px');
    $('.dropdown-btn[_ngcontent-c2]').css('padding','12px');
  }

  hidingSelctAll(){
    $('.multiselect-item-checkbox').children().eq(1).css('display','none');
  }

  

  

  onItemSelect(item: any) {
    var flag = true;
    for(var i=0;i<this.itmesSelected.length;i++){
      if(this.itmesSelected[i] == item){
        flag = false;
      }
    }
    if(flag == true){
    this.itmesSelected.push(item);
    }
    console.log(this.itmesSelected);
  }

  onItemDeSelect(items : any){
    console.log(items);
    var indexOfItem = this.itmesSelected.indexOf(items);
    this.itmesSelected.splice(indexOfItem,1);
    console.log(this.itmesSelected);
  }

  sortByFollowersDesc(){
    this._sortService.sortByFollowersDesc().subscribe(
            data => { this.arrayData = data},
            err => console.error(err),
            () => console.log('done loading data', this.arrayData)
       );
  }

  sortByFollowersAsc(){
    this._sortService.sortByFollowersAsc().subscribe(
            data => { this.arrayData = data},
            err => console.error(err),
            () => console.log('done loading data', this.arrayData)
       );
  }

  sortByEngagementAsc(){
    this._sortService.sortByEngagementAsc().subscribe(
      data => { this.arrayData = data},
      err => console.error(err),
      () => console.log('done loading data', this.arrayData)
    );
  }

  sortByEngagementDesc(){
    this._sortService.sortByEngagementDesc().subscribe(
      data => { this.arrayData = data},
      err => console.error(err),
      () => console.log('done loading data', this.arrayData)
    );
  }


}
