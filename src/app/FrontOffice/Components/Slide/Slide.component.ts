import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, WritableSignal, signal } from '@angular/core';
import { SlideInterface } from '../../Data/Slide/SlideInterface';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Slide.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent implements AfterViewInit {
  @Input() slides: SlideInterface[] | null = []

  @Input() width: string = "100%";
  @Input() height: string = "100%";

  ngAfterViewInit(): void {
    console.log(this.height);
  }

  currentIndex: WritableSignal<number> = signal<number>(0);

  public getCurrentSlide(): SlideInterface{
    return this.slides![this.currentIndex()];
  }

  public goToPrevious(): void {
    let isFirstSlide = this.currentIndex() == 0;
    let newIndex = isFirstSlide ? (this.slides!.length - 1) : (this.currentIndex() - 1);

    this.currentIndex.set(newIndex);
  }

  public goToNext(): void {
    let isLastSlide = this.currentIndex() === (this.slides!.length - 1);
    let newIndex = isLastSlide ? 0 : (this.currentIndex() + 1);

    this.currentIndex.set(newIndex);
  }
}
