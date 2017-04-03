package org.faker.controller;

import org.faker.entity.Item;
import org.faker.info.ItemInfo;
import org.faker.info.TimeInfo;
import org.faker.service.ItemService;
import org.faker.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 处理item 和 time
 * Created by fengqian on 2017/3/23.
 */
@Controller
@RequestMapping("/item")
public class ItemController {
    @Autowired
    ItemService itemService;
    @Autowired
    TimeService timeService;
    /**
     * 创建一个记录，项目标签可以为空
     * @return
     */
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public ItemInfo addItem(
            @RequestParam("content") String content,
            @RequestParam("projectName") String projectName,
            @RequestParam("tagName") String tagName
    ){
        Item item = itemService.createItem(content, projectName, tagName);
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
     *  修改item时，与另一个item重复，合并两个item。
     */
    @RequestMapping(value = "/modify/{modifyId}/{targetId}", method = RequestMethod.DELETE)
    @ResponseBody
    public List<TimeInfo> modifyItem(
            @PathVariable("modifyId") int modifyId,
            @PathVariable("targetId") int targetId
    ){
        List<TimeInfo> timeInfos = timeService.modifyItem(modifyId, targetId).stream().map(TimeInfo::new).collect(Collectors.toList());
        itemService.deleteItem(modifyId);
        return timeInfos;
    }

    /**
     * 修改item
     * @param id
     * @param content
     * @return
     */
    @RequestMapping(value = "/modify/normal/{id}", method = RequestMethod.POST)
    @ResponseBody
    public ItemInfo modifyItem(
            @PathVariable("id") int id,
            @RequestParam(value = "content", required = false) String content,
            @RequestParam(value = "projectName", required = false) String projectName,
            @RequestParam(value = "tagName", required = false) String tagName
    ){
        Item item = itemService.modifyItem(id, content, projectName, tagName);
        return new ItemInfo(item);
    }

    /**
     * 获取所有记录
     * @return
     */
    @RequestMapping(value = "/get/all",method = RequestMethod.GET)
    @ResponseBody
    public List<ItemInfo> getAllItems(){
        List<Item> items = itemService.getAllItems();
        return items.stream().map(ItemInfo::new).collect(Collectors.toList());
    }
}
