import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, OnInit, ViewChild, ElementRef, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';

More(Highcharts);
import Tree from 'highcharts/modules/treemap';

Tree(Highcharts);
import Heatmap from 'highcharts/modules/heatmap';

Heatmap(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
import {TreemapService} from '../services/treemap.service';
import {MatInputModule} from '@angular/material';
import {RestService} from "../services/rest.service";
// Initialize exporting module.
Exporting(Highcharts);

@Component({
    selector: 'app-typography',
    templateUrl: './treemap.component.html',
    styleUrls: ['./treemap.component.css']
})
export class TreemapComponent implements OnInit {
    name = `Group z`;
    treeMapIndex: number = 0;
    chart;
    @ViewChild('container', {read: ElementRef}) container: ElementRef;

    constructor(private treeMapService: TreemapService,
                private restService: RestService) {
    }

    sliderValueChanged(event: MatInputModule) {
        this.treeMapIndex = Number.parseInt(event.toString());
        this.chart.series[0].setData(this.treeMapService.treeMapHashMap.get(this.treeMapIndex));

    }

    treeClicked($event) {
        let currentTreeValue = $event;
    }

    /**
     * Format thumbnail with AM or PM
     * @param value
     */
    formatLabel(value: number) {
        return value + 'HRS';
    }

    ngOnInit() {
        this.treeMapService.setInitalValues();
        this.chart = Highcharts.chart(this.container.nativeElement, {
            colorAxis: {
                minColor: 'white',
                maxColor: 'white'
            },

            /**
             * The shape of the data
             */
            series: [{
                type: 'treemap',
                layoutAlgorithm: 'squarified',
                data: this.treeMapService.treeMapHashMap.get(this.treeMapIndex),
    }],
        title: {
            text: 'MAC Tracker'
        }
    })
        this.restService.getTreeHashMap().subscribe();
    }

}
