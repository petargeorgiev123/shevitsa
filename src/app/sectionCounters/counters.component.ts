import { Component, Input, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'counters-detail',
    templateUrl: './counters.component.html'
})

export class CountersComponent implements OnInit {
    customers = 123;
    projects = 123;
    awards = 123;

    ngOnInit(): void {
        //let decrease_increase=2460;
        const counterdate = new Date();
        const counter = counterdate.getTime().toString();
        //let currenthits2 = parseInt(counter.substring(2, counter.length-4)) + decrease_increase;
        this.customers = parseInt(counter.substring(2, counter.length-8));
        this.projects = parseInt(counter.substring(2, counter.length-7)) - 8;
        this.awards = parseInt(counter.substring(2, counter.length-9)) + 25;
    }
}