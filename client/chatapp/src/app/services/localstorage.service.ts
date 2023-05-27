import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  addUserIdToLocalStorage(id: string) {
    localStorage.setItem('chat-id', id)
  }

  checkUserIdExists() {
    if (localStorage.getItem('chat-id')) return true
    return false
  }

  getUserIdFromLocalStorage(){
    return localStorage.getItem('chat-id')
  }
}
