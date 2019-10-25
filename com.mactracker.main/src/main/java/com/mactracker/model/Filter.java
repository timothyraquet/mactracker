package com.mactracker.model;

public class Filter {
    private String macList;
    private int startTime;
    private int stopTime;


    public String getMacList() {
        return macList;
    }

    public void setMacList(String macList) {
        this.macList = macList;
    }

    public int getStartTime() {
        return startTime;
    }

    public void setStartTime(int startTime) {
        this.startTime = startTime;
    }

    public int getStopTime() {
        return stopTime;
    }

    public void setStopTime(int stopTime) {
        this.stopTime = stopTime;
    }
}
