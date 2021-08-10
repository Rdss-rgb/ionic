import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private http: HttpClient) { }

  jokes:any=[];

  ngOnInit() {
    this.http.get('https://official-joke-api.appspot.com/random_joke')
    .subscribe(data=>{
           console.log(data);
           this.jokes=data;

    }
    )

  }}

