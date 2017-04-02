package org.faker.service;


import org.faker.entity.Item;
import org.faker.repository.ItemRepository;
import org.faker.repository.ProjectRepository;
import org.faker.repository.TagRepository;
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

    /**
     * 创建Item
     * @param content
     * @return
     */
    public Item createItem(String content, String projectName, String tagName){
        Item item = new Item();
        item.setContent(content);
        if (projectName != null)
            item.setProject(projectRepository.findByProjectName(projectName));
        if (projectName != null)
            item.setTag(tagRepository.findByTagName(tagName));
        itemRepository.save(item);
        return item;
    }

    /**
     * 删除记录
     * @param id
     */
    public void deleteItem(int id){
        itemRepository.delete(id);
    }

    /**
     * 修改item
     * @param itemId
     * @param content
     * @param projectId
     * @param tagId
     * @return
     */
    public Item modifyItem(int itemId, String content, Integer projectId, Integer tagId){
        Item item = itemRepository.findOne(itemId);
        if (item == null){
            throw new NullPointerException();
        }
        if (content != null)
            item.setContent(content);
        if (projectId != null)
            item.setProject(projectRepository.findOne(projectId));
        if (tagId != null)
            item.setTag(tagRepository.findOne(tagId));
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
