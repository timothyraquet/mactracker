import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, OnInit, ViewChild, ElementRef ,VERSION} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Tree from 'highcharts/modules/treemap';
Tree(Highcharts);
import Heatmap from 'highcharts/modules/heatmap';
Heatmap(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

@Component({
  selector: 'app-typography',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css']
})
export class TreemapComponent implements OnInit {
  name = `Group z`;
  someValue = 0;
  @ViewChild('container', { read: ElementRef }) container: ElementRef;

  constructor() {
  }

  sliderValueChanged($event){
    let currentSliderValue = $event;
  }

  treeClicked($event) {
    let currentTreeValue = $event;
  }
  /**
   * Format thumbnail with AM or PM
   * @param value
   */
  formatLabel(value: number) {
    return value + "HRS";
  }
  ngOnInit() {
    Highcharts.chart(this.container.nativeElement, {
      colorAxis: {
        minColor: 'white',
        maxColor: '#D3D3D3'
      },

      /**
       * The shape of the data
       */
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
          name: 'ROSE',
          value: 100,
          colorValue: 2
        }, {
          name: 'DENNY',
          value: 89,
          colorValue: 2
        }, {
          name: 'FRETWELL',
          value: 56,
          colorValue: 2,
        }, {
          name: 'FRIDAY',
          value: 56,
          colorValue: 2
        }, {
          name: 'ATAC',
          value: 33,
          colorValue: 1
        }, {
          name: 'ATKNS',
          value: 167,
          colorValue: 2
        }, {
          name: 'BSAC ',
          value: 90,
          colorValue: 2
        },{
          name: 'BIOIN',
          value: 100,
          colorValue: 1
        },{
          name: 'BRNRD',
          value: 134,
          colorValue: 6
        },{
          name: 'BURSN',
          value: 90,
          colorValue: 6
        },{
          name: 'CARC',
          value: 102,
          colorValue: 6
        },{
          name: 'COED	',
          value: 102,
          colorValue: 6
        },{
          name: 'CHHS',
          value: 50,
          colorValue: 6
        },{
          name: 'COLVD	',
          value: 93,
          colorValue: 6
        },{
          name: 'CONE',
          value: 78,
          colorValue: 6
        },{
          name: 'CITY',
          value: 90,
          colorValue: 6
        },{
          name: 'CYPRE',
          value: 56,
          colorValue: 6
        },{
          name: 'DUKE',
          value: 89,
          colorValue: 6
        },{
          name: 'EPIC',
          value: 67,
          colorValue: 6
        },{
          name: 'FRET',
          value: 90,
          colorValue: 6
        },{
          name: 'FRIDY',
          value: 89,
          colorValue: 6
        },{
          name: 'GRNGR',
          value: 90,
          colorValue: 6
        },{
          name: 'GRIGG',
          value: 100,
          colorValue: 6
        },{
          name: 'GYMNS',
          value: 100,
          colorValue: 6
        },{
          name: 'HAWTH',
          value: 100,
          colorValue: 6
        },{
          name: 'JBCB',
          value: 99,
          colorValue: 6
        },{
          name: 'KNNDY',
          value: 87,
          colorValue: 6
        },{
          name: 'MACY',
          value: 97,
          colorValue: 6
        },{
          name: 'MCEN',
          value: 100,
          colorValue: 6
        },{
          name: 'MCMIL',
          value: 102,
          colorValue: 6
        },{
          name: 'MEMOR',
          value: 100,
          colorValue: 6
        },{
          name: 'ROBIN',
          value: 100,
          colorValue: 6
        },{
          name: 'ROWE	',
          value: 100,
          colorValue: 6
        },{
          name: 'MEMOR',
          value: 68,
          colorValue: 6
        },{
          name: 'SMITH',
          value: 78,
          colorValue: 6
        },{
          name: 'STORR',
          value: 111,
          colorValue: 6
        },{
          name: 'STUN',
          value: 113,
          colorValue: 6
        },{
          name: 'STORR',
          value: 90,
          colorValue: 6
        },{
          name: 'WINN',
          value: 99,
          colorValue: 6
        },{
          name: 'WITHR',
          value: 88,
          colorValue: 6
        },{
          name: 'WOODW',
          value: 90,
          colorValue: 6
        }]


      }],
      title: {
        text: 'MAC Tracker'
      }
    })
  }

  scroll(data){
    for(const datPoint of data){
      // Update the value of 14 data points
    }
  }

}
