import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule, NgCircleProgressModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input() percent = 0;
  @Input() radius = 0;
}
