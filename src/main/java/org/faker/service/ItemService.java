package org.faker.service;


import org.faker.entity.Item;
import org.faker.entity.Project;
import org.faker.entity.Tag;
import org.faker.repository.ItemRepository;
import org.faker.repository.ProjectRepository;
import org.faker.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by fengqian on 2017/3/23.
 */
@Service
public class ItemService {
    @Resource
    ItemRepository itemRepository;
    @Resource
    ProjectRepository projectRepository;
    @Resource
    TagRepository tagRepository;
    @Autowired
    ProjectService projectService;
    @Autowired
    TagService tagService;
    @Autowired
    TimeService timeService;

    /**
     * 创建Item
     * @param content
     * @return
     */
    public Item createItem(String content, String projectName, String tagName){
        Project project = projectRepository.findByProjectName(projectName);
        if (project == null)
            project = projectService.addProject(projectName);
        Tag tag = tagRepository.findByTagName(tagName);
        if (tag == null)
            tag = tagService.addTag(tagName);
         Item item = new Item();
        item.setContent(content);
        item.setProject(project);
        item.setTime_length(0);
        item.setTag(tag);
        itemRepository.save(item);
        return item;
    }

    /**
     * 删除记录
     * @param id
     */
    public void deleteItem(int id){
        Item item = itemRepository.findOne(id);
        timeService.deleteByItem(item);
        itemRepository.delete(id);
    }

    /**
     * 修改item
     * @return
     */
    public Item modifyItem(int itemId, String content, String projectName, String tagName){
        Item item = itemRepository.findOne(itemId);
        if (item == null){
            throw new NullPointerException();
        }
        if (content != null)
            item.setContent(content);
        if (projectName != null)
            item.setProject(projectRepository.findByProjectName(projectName));
        if (tagName != null)
            item.setTag(tagRepository.findByTagName(tagName));
        itemRepository.save(item);
        return item;
    }

    /**
     * 获取所有task
     * @return
     */
    public List<Item> getAllItems(){
        return itemRepository.findAll();
    }
}
