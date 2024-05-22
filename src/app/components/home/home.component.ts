import { Component } from '@angular/core';
import { iUser, iUserDati } from '../../models/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  fetchedPost: iUser | null = null;
  postInEvidenza: iUserDati | null = null;
  postRandom: iUserDati[] = [];
  constructor(private http: HttpClient) {}

  getPost(): Observable<iUser> {
    return this.http.get<iUser>('../assets/db.json');
  }

  ngOnInit() {
    this.getPost().subscribe((result) => {
      this.fetchedPost = result;
      let random = Math.floor(Math.random() * this.fetchedPost.posts.length);
      this.postInEvidenza = this.fetchedPost.posts[random];
      console.log(this.fetchedPost);
      for (let i = 0; i < 4; i++) {
        let randomI = Math.floor(Math.random() * this.fetchedPost.posts.length);
        this.postRandom.push(this.fetchedPost.posts[randomI]);
      }
    });
  }
}
