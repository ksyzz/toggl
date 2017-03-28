package org.faker.controller;


import org.faker.entity.Project;
import org.faker.info.ProjectInfo;
import org.faker.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by fengqian on 2017/3/23.
 */
@Controller
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    /**
     * 添加一个项目
     * @param projectName
     * @return
     */
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ProjectInfo addProject(
            @RequestParam("projectName") String projectName
    ){
        Project project = projectService.addProject(projectName);
        return new ProjectInfo(project);
    }

    /**
     * 获取所有项目
     * @return
     */
    @RequestMapping(value = "/get/all", method = RequestMethod.GET)
    @ResponseBody
    public List<ProjectInfo> getAllProjects(){
        List<Project> projects = projectService.getAllProjects();
        return projects.stream().map(ProjectInfo::new).collect(Collectors.toList());
    }

    /**
     * 模糊查询
     * @param name
     * @return
     */
    @RequestMapping(value = "/get/condition", method = RequestMethod.GET)
    @ResponseBody
    public List<ProjectInfo> getProjectByCondition(
            @RequestParam("name") String name
    ){
        List<Project> projects = projectService.getProjectsByCondition(name);
        return projects.stream().map(ProjectInfo::new).collect(Collectors.toList());
    }
}
