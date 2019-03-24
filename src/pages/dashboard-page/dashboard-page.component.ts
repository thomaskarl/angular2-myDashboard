import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from './../../services/weather-service.service';
import {DogService} from './../../services/dog-service.service';
import {CardService} from './../../services/card-service.service';
import {MusicService} from './../../services/music-service.service';
import 'rxjs';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss'],
    providers: [WeatherService, DogService, CardService, MusicService]
})
export class DashboardPageComponent implements OnInit {

    public weatherDetail: Array<any>;
    public dogDetail: Array<any>;
    public cardDetail: Array<any>;
    public musicDetail: Array<any>;

    constructor(protected router: Router,
                protected weatherService: WeatherService,
                protected dogService: DogService,
                protected cardService: CardService,
                protected musicService: MusicService) {

    }

    ngOnInit() {
        if (!sessionStorage.getItem('AuthToken')) {
            this.router.navigate(['/']);
        }
        this.weatherService.getWeekForecast()
            .subscribe(
                weather => {
                    this.weatherDetail = weather.consolidated_weather;
                });
        this.dogService.getDogImage()
            .subscribe(
                dog => {
                    this.dogDetail = dog.data;
                });
        this.cardService.getThreeCards()
            .subscribe(
                card => {
                    this.cardDetail = card.cards;
                });
        this.musicService.getMusicList()
            .subscribe(
                music => {
                    this.musicDetail = music;
                });
    }
}
