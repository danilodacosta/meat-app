import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  public resturant: Restaurant;

  constructor(private resturantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.resturantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.resturant = restaurant);
  }
}
