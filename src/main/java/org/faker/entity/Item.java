package org.faker.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * 记录的实体类
 * Created by fengqian on 2017/3/23.
 */
@Entity
@Table(name = "item")
public class Item {
    @Id
    @GeneratedValue
    private int id;
    private String content;
    private Date createTime;
    //暂停时间
    private Date pauseTime;
    //继续的时间
    private Date continueTime;
    @ManyToOne
    private Project project;
    @ManyToOne
    private Tag tag;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getPauseTime() {
        return pauseTime;
    }

    public void setPauseTime(Date pauseTime) {
        this.pauseTime = pauseTime;
    }

    public Date getContinueTime() {
        return continueTime;
    }

    public void setContinueTime(Date continueTime) {
        this.continueTime = continueTime;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }
}
