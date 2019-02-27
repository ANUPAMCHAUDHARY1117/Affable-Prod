import { Component, OnInit } from '@angular/core';
import {SortService} from '../sort.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-bio',
  templateUrl: './detailed-bio.component.html',
  styleUrls: ['./detailed-bio.component.css']
})
export class DetailedBioComponent implements OnInit {

  arrayData : any;
  parameters : string ;
  userdata = {};

  constructor(private route : ActivatedRoute, private _sortService : SortService) { }

  ngOnInit() {
    this.parameters = this.route.snapshot.paramMap.get('username');
    console.log(this.parameters);
    this.getData();
    
  }

 getData(){
    console.log("GETTTTTTTTTTt",this.parameters);
    this._sortService.getUserData(this.parameters).subscribe(
      data => { this.arrayData = data},
      err => console.error(err),
      () => console.log("HEYYYYYYYYYYYYYYYYYYYYYYYY",this.arrayData, this.parameters)
    );
  }

}
