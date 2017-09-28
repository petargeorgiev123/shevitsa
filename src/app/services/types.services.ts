import { Injectable } from '@angular/core';

import { Type } from '../models/type';
import { TYPES } from '../mock/mock-types';

@Injectable()
export class TypeService {
    getTypes(): Promise<Type[]> {
        return Promise.resolve(TYPES);
    }
}
