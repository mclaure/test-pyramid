import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

  Players: any = { player: [] };
  Player: any = [];
  @Input() searchItem = { criteria: ''}

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() { }

  searchPlayer() {
     return this.restApi.searchPlayer(this.searchItem.criteria).subscribe((data: { }) => {
       this.Players = data;
       this.Player = this.Players.player;
   })
 }
}