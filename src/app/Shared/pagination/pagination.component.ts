import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output()
  pageChanged = new EventEmitter<number>();
  @Input()
  currentPage: number;
  @Input('totalPages')
  numberOfPages: number;

  // nextPage: boolean;
  // prevPage: boolean;
  constructor() {

  }
  ngOnInit() {

    // if (this.currentPage === 1 && this.currentPage < this.numberOfPages) {
    //   this.prevPage = false;
    //   this.nextPage = true;
    // }
    // else if (this.currentPage !== 1 && this.currentPage === this.numberOfPages) {
    //   this.prevPage = true;
    //   this.nextPage = false;
    // }
    // else if (this.currentPage < this.numberOfPages && this.currentPage > 1) {
    //   this.prevPage = true;
    //   this.nextPage = true;
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage--);
    }
  }
  onNextPage() {
    // console.log("prev");
    if (this.currentPage < this.numberOfPages) {
      this.pageChanged.emit(this.currentPage++);
    }
  }

}
