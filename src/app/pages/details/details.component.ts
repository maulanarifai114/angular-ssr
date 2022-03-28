import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private seo: SeoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    console.log('slug >>>', slug);
    this.seo.generateTags({
      title:
        slug
          ?.split('-')
          .map((a) => a[0].toUpperCase() + a.slice(1).toLowerCase())
          .join(' ') || 'Angular Default Title',
      description: 'Angular SEO Service',
      slug,
    });
  }
}
