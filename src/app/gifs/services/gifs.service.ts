import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }
  }

  private _apiKey: string = 'Mo5W9uRUBg9QJvVwEFwuVb5flwDNjJg0';
  private _servicioUrl: string = "https://api.giphy.com/v1/gifs"
  private _historial: string[] = [];
  public resultados: Gif[] = [];


  get historial() {
    return this._historial;
  }

  buscarGifs(query: string) {
    this._historial.unshift(query);
    this._historial = this._historial.splice(0, 10);
    localStorage.setItem('historial', JSON.stringify(this._historial));
    localStorage.setItem('resultados', JSON.stringify(this.resultados));

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('limit', '10')
    .set('q', query)

    this.httpClient
      .get<SearchGifsResponse>(`${this._servicioUrl}/search`, {params})
      .subscribe((resp: any) => {
        this.resultados = resp.data;
        resp.data[0].images.downsized_medium.url;
      });
  }
}
