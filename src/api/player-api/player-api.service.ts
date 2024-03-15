import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {Player} from "./interfaces";

@Injectable({
  providedIn: 'root'
})

export class PlayerApiService {
  httpClient = inject(HttpClient)

  getListPlayers(){
    return lastValueFrom(this.httpClient.get<Player[]>('http://localhost:8080/player/list/'));
  }

  savePlayer(player: Player){
    return lastValueFrom(this.httpClient.post<Player>('http://localhost:8080/player/save/', player));
  }
}
