package org.faker.service;


import org.faker.entity.Item;
import org.faker.repository.ItemRepository;
import org.faker.repository.ProjectRepository;
import org.faker.repository.TagRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;

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
     * @param projectId
     * @param tagId
     * @return
     */
    public Item createItem(String content, Integer projectId, Integer tagId){
        Item item = new Item();
        item.setContent(content);
        if (projectId != null)
            item.setProject(projectRepository.findOne(projectId));
        if (tagId != null)
            item.setTag(tagRepository.findOne(tagId));
        item.setCreateTime(new Date());
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
}
