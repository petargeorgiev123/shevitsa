import { Component, OnInit } from '@angular/core';

import { Type } from '../models/type';
import { Gallery} from '../models/gallery';
import { ImageService } from '../services/images.service';
import { TypeService} from '../services/types.services';


import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'gallery-detail',
    templateUrl: './gallery.component.html',
    providers: [ImageService, TypeService]
})

export class GalleryComponent implements OnInit {
    images: Gallery[];
    types: Type[];

    constructor(
        private imageService: ImageService,
        private typeService: TypeService
    )
    {}

    ngOnInit(): void {
        this.getImages();
        this.getTypes();
    }

    getImages(): void {
        //this.images = this.imageService.getImages();
        this.imageService.getImages()
            .then(images => this.images = images);
    }

    getTypes(): void {
        //this.types = this.typeService.getTypes();
        this.typeService.getTypes()
            .then(types => this.types = types);
    }
}