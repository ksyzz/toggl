package org.faker.controller;

import org.faker.entity.Tag;
import org.faker.info.TagInfo;
import org.faker.service.TagService;
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
@RequestMapping("/tag")
public class TagController {
    @Autowired
    TagService tagService;

    /**
     * 创建一个标签
     * @param tagName
     * @return
     */

    @RequestMapping(value= "/add", method = RequestMethod.POST)
    public TagInfo addTag(
            @RequestParam("tagName") String tagName
    ){
        Tag tag = tagService.addTag(tagName);
        return new TagInfo(tag);
    }

    /**
     * 获取所有标签
     * @return
     */
    @RequestMapping(value = "/get/all", method = RequestMethod.GET)
    @ResponseBody
    public List<TagInfo> getAllTags(){
        List<Tag> tags = tagService.getAllTags();
        return tags.stream().map(TagInfo::new).collect(Collectors.toList());
    }
}
