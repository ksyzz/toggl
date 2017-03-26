package org.faker.info;


import org.faker.entity.Project;

/**
 * 项目信息
 * Created by fengqian on 2017/3/23.
 */
public class ProjectInfo {
    private int projectId;
    private String projectName;

    public ProjectInfo(Project project) {
        this.projectId = project.getId();
        this.projectName = project.getProjectName();
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
}
