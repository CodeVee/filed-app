import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser, State } from '../state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  user$ = this.store.select(getUser);
  constructor(private store: Store<State>) {}
}
