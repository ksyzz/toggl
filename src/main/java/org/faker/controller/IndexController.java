package org.faker.controller;

import org.faker.entity.Item;
import org.faker.info.ItemInfo;
import org.faker.service.ItemService;
import org.faker.service.ProjectService;
import org.faker.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by fengqian on 2017/3/30 0030.
 */
@Controller
public class IndexController {
    @Autowired
    ItemService itemService;
    @Autowired
    ProjectService projectService;
    @Autowired
    TagService tagService;
    private String defaultProjectName = "+Project/task";
    private String defaultTagName = "+Tag";
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String timer(ModelMap modelMap){
        List<Item> items = itemService.getAllItems();
        tagService.addTag(defaultTagName);
        projectService.addProject(defaultProjectName);
        List<ItemInfo> itemInfos = items.stream().map(ItemInfo::new).collect(Collectors.toList());
        modelMap.addAttribute("itemInfos", itemInfos);
        return "timer";
    }
    @RequestMapping("/dashboard")
    public String dashboard(){
        return "dashboard";
    }
}
