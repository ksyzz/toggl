package org.faker.info;

import org.faker.entity.Time;

/**
 * Created by fengqian on 2017/4/3 0003.
 */
public class TimeInfo {
    private long startTime;
    private long endTime;
    private int length;

    public TimeInfo(Time time) {
        this.startTime = time.getStartTime().getTime();
        this.endTime = time.getEndTime().getTime();
        this.length = time.getLength();
    }

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public long getEndTime() {
        return endTime;
    }

    public void setEndTime(long endTime) {
        this.endTime = endTime;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }
}
