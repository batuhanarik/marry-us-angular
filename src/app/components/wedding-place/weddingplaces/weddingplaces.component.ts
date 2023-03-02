import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchWeddingplaceComponent } from '../search-weddingplace/search-weddingplace.component';

@Component({
  selector: 'app-weddingplaces',
  templateUrl: './weddingplaces.component.html',
  styleUrls: ['./weddingplaces.component.scss'],
  standalone:true,
  imports: [CommonModule, RouterModule, SearchWeddingplaceComponent],
})
export class WeddingplacesComponent {

}
