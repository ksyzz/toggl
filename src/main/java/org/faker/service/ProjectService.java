package org.faker.service;


import org.faker.entity.Project;
import org.faker.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by fengqian on 2017/3/24.
 */
@Service
public class ProjectService {
    @Resource
    ProjectRepository projectRepository;

    /**
     * 添加项目
     * @param projectName
     * @return
     */
    public Project addProject(String projectName){
        Project project = new Project();
        project.setProjectName(projectName);
        projectRepository.save(project);
        return project;
    }

    /**
     * 获取所有项目
     * @return
     */
    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    /**
     * 模糊查询
     * @param name
     * @return
     */
    public List<Project> getProjectsByCondition(String name){
        return projectRepository.findLikeName(name);
    }


}
