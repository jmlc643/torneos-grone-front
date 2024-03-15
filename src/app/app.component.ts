import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Player} from "../api/player-api/interfaces";
import {PlayerApiService} from "../api/player-api/player-api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [PlayerApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'torneos-grone-back';
  points: number = 0;

  // Variables
  players: Player[] = [];
  player: Player = {
    username: '',
    nickname: '',
    profilePhoto: ''
  };

  // Inject service
  playerApiService = inject(PlayerApiService);

  async ngOnInit(){
    await this.loadData();
    console.log(this.players);
  }

  private async loadData(){
    this.players = await this.playerApiService.getListPlayers();
  }

  add(){
    this.points += 3;
  }

  subtract(){
    if(this.points - 3 < 0){
      this.points = 0;
    } else{this.points -= 3;}
  }

  savePlayer(){
    this.playerApiService.savePlayer(this.player);
    location.reload();
  }
}
