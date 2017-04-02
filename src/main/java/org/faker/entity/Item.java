package org.faker.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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
    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    private List<Time> times;
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


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Time> getTimes() {
        return times;
    }

    public void setTimes(List<Time> times) {
        this.times = times;
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
