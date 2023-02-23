import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrls: ['./primary-layout.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, NzIconModule, FooterComponent],
})
export class PrimaryLayoutComponent {
  isSidebarVisible = true;

  constructor(private _iconService: NzIconService) {
    this._iconService.useJsonpLoading();
  }
}
