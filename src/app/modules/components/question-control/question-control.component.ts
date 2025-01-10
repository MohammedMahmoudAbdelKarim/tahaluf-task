import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryModel } from '../../models/category.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-question-control',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './question-control.component.html',
  styleUrl: './question-control.component.scss',
})
export class QuestionControlComponent {
  questionForm!: FormGroup;
  @Input() selectedCategory!: CategoryModel[];
  @Output() completeQuestionEmitter = new EventEmitter();
  @Output() completeQuizEmitter = new EventEmitter();
  multipleQuestion = [];
  currentState = 0;
  allQuestions = 1;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialForm();
    this.completeQuestionEmitter.emit(1);
  }

  initialForm(): void {
    this.questionForm = this._fb.group({
      textInput: [''],
      selectInput: [''],
    });
  }

  mergeMultipleAnswers(selectedQuestion: CategoryModel): string[] {
    return (selectedQuestion.options = [
      ...selectedQuestion.incorrect_answers,
      selectedQuestion.correct_answer,
    ]);
  }

  nextQuestion(): void {
    if (this.allQuestions < this.selectedCategory.length) {
      this.currentState++;
      this.allQuestions++;
    } else {
      this.completeQuizEmitter.emit(true);
    }
  }
  onAnswerQuestion(question: CategoryModel, answer: string): void {
    if (question.correct_answer === answer) {
      switch (question.difficulty) {
      }
    }
  }
}
