import { Component, OnInit, Input, ViewChild,Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { ChapterService } from '../services/chapter.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

  chapters:any;
  errMess:string;
  constructor(private chapterservice: ChapterService, private route: ActivatedRoute, @Inject('baseURL') private baseURL) {
  }

  ngOnInit() {
  
    this.route.params.pipe(switchMap((params: Params) => { return this.chapterservice.getchapter(+params['id']); }))
    .subscribe(chapter => { this.chapters = chapter;console.log(this.chapters); },
      errmess => this.errMess = <any>errmess);
  }

}
