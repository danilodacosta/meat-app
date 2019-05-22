import { RestaurantsService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
          opacity: 0,
          'max-height' : '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height' : '70px',
        'margin-top' : '20px'
      })),
      transition('* => *' , animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class RestaurantsComponent implements OnInit {

searchBarState = 'hidden';
restaurants: Restaurant[];

searchForm: FormGroup;
searchControl: FormControl;

  constructor(private restaurantService: RestaurantsService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
    .switchMap(searchTerm =>
      this.restaurantService.restaurants(searchTerm))
    .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantService.restaurants()
    .subscribe((restaurants => this.restaurants = restaurants));
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
