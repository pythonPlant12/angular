import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GifsService {
  private _apiKey: string = 'Mo5W9uRUBg9QJvVwEFwuVb5flwDNjJg0';
  private _historial: string[] = [];
  // TODO: change type of resultados
  public resultados: any[] = [];

  get historial() {
    return this._historial;
  }

  buscarGifs(query: string) {
    this._historial.unshift(query);
    console.log(this._historial);

    this.httpClient
      .get(`https://api.giphy.com/v1/gifs/search?api_key=Mo5W9uRUBg9QJvVwEFwuVb5flwDNjJg0&q=${ query }&limit=10`)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
  constructor(private httpClient: HttpClient) {}
}
