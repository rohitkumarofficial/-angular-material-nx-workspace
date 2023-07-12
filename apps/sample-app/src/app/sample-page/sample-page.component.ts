import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@organization/common-lib';

@Component({
  selector: 'angular-material-nx-workspace-sample-page',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
})
export class SamplePageComponent {}
