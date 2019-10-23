package com.mactracker.model;

public class Tree {

    String name;
    int value;
    int colorValue;

    public Tree(String name){
        this.name = name;
        this.value = getRandomValue();
        this.colorValue = 1;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public int getColorValue() {
        return colorValue;
    }

    public void setColorValue(int colorValue) {
        this.colorValue = colorValue;
    }

    public int getRandomValue(){
        return 10;
    }

}
