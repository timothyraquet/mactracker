package com.mactracker.model;

public class Query {
    private int timeStart;
    private int timeStop;
    private Filter filter;


    public int getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(int timeStart) {
        this.timeStart = timeStart;
    }

    public int getTimeStop() {
        return timeStop;
    }

    public void setTimeStop(int timeStop) {
        this.timeStop = timeStop;
    }

    public Filter getFilter() {
        return filter;
    }

    public void setFilter(Filter filter) {
        this.filter = filter;
    }
}
