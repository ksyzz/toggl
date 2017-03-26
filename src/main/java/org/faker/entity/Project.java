package org.faker.entity;


import javax.persistence.*;

/**
 * 项目实体
 * Created by fengqian on 2017/3/23.
 */
@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue
    private int id;
    @Column(unique = true)
    private String projectName;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
}
