package org.faker.controller;

import org.faker.entity.Item;
import org.faker.info.ItemInfo;
import org.faker.service.ItemService;
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
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String timer(ModelMap modelMap){
        List<Item> items = itemService.getAllItems();
        List<ItemInfo> itemInfos = items.stream().map(ItemInfo::new).collect(Collectors.toList());
        modelMap.addAttribute("itemInfos", itemInfos);
        return "timer";
    }
}
