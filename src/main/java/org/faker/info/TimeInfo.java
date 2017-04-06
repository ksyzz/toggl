package org.faker.info;

import org.faker.entity.Time;

/**
 * 时间段信息
 * Created by fengqian on 2017/4/3 0003.
 */
public class TimeInfo {
    private int timeId;
    private long startTime;
    private long endTime;
    private int length;
    private int itemId;
    public TimeInfo(Time time) {
        this.timeId = time.getId();
        this.startTime = time.getStartTime().getTime();
        this.endTime = time.getEndTime().getTime();
        this.length = time.getLength();
        this.itemId = time.getItem().getId();
    }

    public int getTimeId() {
        return timeId;
    }

    public void setTimeId(int timeId) {
        this.timeId = timeId;
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

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }
}
