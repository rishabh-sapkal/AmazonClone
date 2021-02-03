import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private right!: ElementRef;
  private visible!: boolean;

  hideR() {
    this.visible = false;
    this.right.nativeElement.style.display = 'none';
  }

  showR() {
    this.visible = true;
    this.right.nativeElement.style.display = 'block';
  }

  toggleR() { this.visible ? this.hideR() : this.showR(); }

  setRight(e: ElementRef) {
    this.right = e;
  }

  
}