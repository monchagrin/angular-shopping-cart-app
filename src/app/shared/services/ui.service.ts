import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private _showSideBar: boolean = false;

  get showSideBar(): boolean {
    return this._showSideBar;
  }

  toggleSideBar(): void {
    this._showSideBar = !this._showSideBar;
  }
}
