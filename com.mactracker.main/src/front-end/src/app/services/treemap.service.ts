import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TreemapService {

    public treeMapHashMap: Map<string, Array<{name: string, value: number, colorValue: number}>> = new Map();
    mockData = [];
    constructor() {
    }
    setInitalValues() {
        this.treeMapHashMap.set("WOODW", this.setMockDataWithRandomIntegerValues());
        this.treeMapHashMap.set("ATKINS", this.setMockDataWithRandomIntegerValues());
        // this.treeMapHashMap.set(2, this.setMockDataWithRandomIntegerValues());
        // this.treeMapHashMap.set(3, this.setMockDataWithRandomIntegerValues());
        // this.treeMapHashMap.set(4, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(5, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(6, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(7, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(8, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(9, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(10, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(11, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(12, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(13, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(14, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(15, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(16, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(17, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(18, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(19, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(20, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(21, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(22, this.initialTreeMapMockData);
        // this.treeMapHashMap.set(23, this.initialTreeMapMockData);
    }
    setMockDataWithRandomIntegerValues() {
    this.mockData = [{
            name: 'ROSE',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'DENNY',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'FRETWELL',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'FRIDAY',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'ATAC',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'ATKNS',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'BSAC ',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'BIOIN',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'BRNRD',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'BURSN',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'CARC',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'COED	',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'CHHS',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'COLVD',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'CONE',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'CITY',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'CYPRE',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'DUKE',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'EPIC',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'FRET',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'FRIDY',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'GRNGR',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'GRIGG',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'GYMNS',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'HAWTH',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'JBCB',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'KNNDY',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'MACY',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'MCEN',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'MCMIL',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'MEMOR',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'ROBIN',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'ROWE	',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'MEMOR',
            value: this.getRandomInteger(1, 100),
            colorValue: 1,
        }, {
            name: 'SMITH',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'STORR',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'STUN',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'STORR',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'WINN',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'WITHR',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }, {
            name: 'WOODW',
            value: this.getRandomInteger(1, 100),
            colorValue: 1
        }];
    return this.mockData;
    }
    getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


}
