package org.faker.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by fengqian on 2017/4/2 0002.
 */
@Entity
@Table(name = "time")
public class Time {
    @Id
    @GeneratedValue
    private int id;
    private Date startTime;
    private Date endTime;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private Item item;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }
}
