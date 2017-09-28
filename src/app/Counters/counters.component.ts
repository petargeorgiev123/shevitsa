import { Component, Input, OnInit } from '@angular/core';


import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'counters-detail',
    templateUrl: './counters.component.html'
})

export class CountersComponent implements OnInit {
    customers = 123;

    ngOnInit(): void {
        //let decrease_increase=2460;
        const counterdate = new Date();
        const currenthits = counterdate.getTime().toString();
        //let currenthits2 = parseInt(currenthits.substring(2, currenthits.length-4)) + decrease_increase;
        this.customers = parseInt(currenthits.substring(2, currenthits.length-7));
        console.log(this.customers);
    }
}