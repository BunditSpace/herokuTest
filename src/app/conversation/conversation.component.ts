import { AuthenticationService } from './../auth/services/authentication.service';
import {Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';

//import { Conversation } from './conversation';
import { ConversationService } from './services/conversation.service';
import { ConversationDetail } from './conversation-detail.component';
import { ConversationList } from './conversation-list.component';


@Component({
    selector: 'conversation',
    templateUrl: '<div>Hello</div>',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Conversations implements OnInit {

  conversations: Conversation[];
  errorMessage: string;

  selectedConversation: Conversation;

  ngOnInit(){
      this.loadConversations();
  }

  constructor(private conversationService: ConversationService, private authService: AuthenticationService) 
  {
      
  }

  loadConversations()
  {
     this.conversationService.loadConversations()
          .subscribe(conversation => this.conversations = conversation);
  }

  selectConversation(conversation: Conversation) {
    this.selectedConversation = conversation;
  }

  deleteConversation(conversation: Conversation) {
    this.conversationService.deleteConversation(conversation);
  }

  resetConversation() {
    //let emptyConversation: Conversation = {
    //  _id: null,
    //  creator: this.authService.getUserName(),
    //  date: '',
    //  talkwith: '',
    //  relationship: '',
    //  topic: '',
    //  question: '',
    //  answer: '',
    //  conversationtype: '',
    //  rating: 0,
    //  feeling: 0
    //};
    //this.selectedConversation = emptyConversation;
  }

  saveConversation(conversation: Conversation) {
    this.conversationService.saveConversation(conversation);
    this.resetConversation();
  }
}
