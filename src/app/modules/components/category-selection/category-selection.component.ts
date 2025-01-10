import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from '../../../core/core.module';
import { ProgressBarComponent } from '../../../shared/components/progress-bar/progress-bar.component';
import { MatSelectModule } from '@angular/material/select';
import { CATEGORIES } from '../../constants/categories.contants';
import { QuestionControlComponent } from '../question-control/question-control.component';
import { CategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CoreModule,
    ProgressBarComponent,
    MatSelectModule,
    QuestionControlComponent,
  ],
  templateUrl: './category-selection.component.html',
  styleUrl: './category-selection.component.scss',
})
export class CategorySelectionComponent {
  quizForm!: FormGroup;
  categories = CATEGORIES;
  categoriesTypes = [
    ...new Set(
      CATEGORIES.map((category) => {
        return category.category;
      })
    ),
  ];
  selectedCategory: CategoryModel[] = [];
  currentQuestion: number = 0;
  isQuizFinished: boolean = false;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm(): void {
    this.quizForm = this._fb.group({
      category: ['', Validators.required],
    });
  }

  onSelectCategory(categoryType: string): void {
    this.selectedCategory = this.categories.filter(
      (category: CategoryModel) => category.category == categoryType
    );
  }
}
