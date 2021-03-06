//import { RatingComponent } from './../shared/rating.component';
import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import { ConversationService } from './services/conversation.service';
import { Conversation } from './conversation';


@Component({
  selector: 'conversation-list',
  templateUrl: './conversation-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationList {
  // The `recipe` component hands off `recipes` and `selectedrecipe`
  // via property bindings to its child components
  // Here we pick up the `recipes` collection by annotating our local
  // `recipes` property with `@Input()`
  @Input() conversations: Conversation[];
  // Two event outputs for when a recipe is selected or deleted
  @Output() selected : EventEmitter<any> = new EventEmitter<any>();
  @Output() deleted : EventEmitter<any> = new EventEmitter<any>();

  constructor() 
  {
      console.log(' list '+this.conversations);
  }

  public selecteditem: Conversation;

  showModal(item:Conversation, dangerModal:any) {
    this.selecteditem = item;
    dangerModal.show();
  }
}
