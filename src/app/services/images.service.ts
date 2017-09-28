import { Injectable } from '@angular/core';

import { Gallery } from '../models/gallery';
import { IMAGES} from '../mock/mock-images';

@Injectable()
export class ImageService {
    getImages(): Promise<Gallery[]> {
        return Promise.resolve(IMAGES);
    }
}
