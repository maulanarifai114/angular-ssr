import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService, private imageCompress: NgxImageCompressService) {}

  imgResultBeforeCompression: string = '';
  imgResultAfterCompression: string = '';

  compressFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imgResultBeforeCompression = image;
      console.log('Size in bytes of the uploaded image was:', this.imageCompress.byteCount(image));

      this.imageCompress
        .compressFile(image, orientation, 50, 50) // 50% ratio, 50% quality
        .then((compressedImage) => {
          this.imgResultAfterCompression = compressedImage;
          console.log('Size in bytes after compression is now:', this.imageCompress.byteCount(compressedImage));
        });
    });
  }

  ngOnInit(): void {
    console.log('<<< home >>>');
    this.seo.generateTags({
      title: 'Welcome',
      description: 'Angular SEO Service Home',
    });
  }
}
