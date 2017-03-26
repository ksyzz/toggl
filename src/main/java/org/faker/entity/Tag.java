package org.faker.entity;

import javax.persistence.*;

/**
 * 标签实体
 * Created by fengqian on 2017/3/23.
 */
@Entity
@Table(name = "tag")
public class Tag {
    @Id
    @GeneratedValue
    private int id;
    @Column(unique = true)
    private String tagName;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
}
