package org.faker.controller;

import org.faker.entity.Item;
import org.faker.info.ItemInfo;
import org.faker.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * Created by fengqian on 2017/3/23.
 */
@Controller
@RequestMapping("/item")
public class ItemController {
    @Autowired
    ItemService itemService;
    /**
     * 创建一个记录，项目标签可以为空
     * @param content
     * @param projectId
     * @param tagId
     * @return
     */
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ItemInfo addItem(
            @RequestParam("content") String content,
            @RequestParam(value = "projectId", required = false) Integer projectId,
            @RequestParam(value = "tagId", required = false) Integer tagId
    ){
        Item item = itemService.createItem(content, projectId, tagId);
        ItemInfo itemInfo = new ItemInfo(item);
        return itemInfo;
    }

    /**
     * 删除一个记录
     * @param id
     */
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteItem(
            @PathVariable("id") int id
    ){
        itemService.deleteItem(id);
    }

    /**
     * 修改item
     * @param id
     * @param content
     * @param projectId
     * @param tagId
     * @return
     */
    @RequestMapping(value = "/modify/{id}", method = RequestMethod.PUT)
    public ItemInfo modifyItem(
            @PathVariable("id") int id,
            @RequestParam(value = "content", required = false) String content,
            @RequestParam(value = "projectId", required = false) Integer projectId,
            @RequestParam(value = "tagId", required = false) Integer tagId
    ){
        Item item = itemService.modifyItem(id, content, projectId, tagId);
        return new ItemInfo(item);
    }
}
