package org.faker.service;


import org.faker.entity.Tag;
import org.faker.repository.TagRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by fengqian on 2017/3/24.
 */
@Service
public class TagService {
    @Resource
    TagRepository tagRepository;

    /**
     * 添加一个 标签
     * @param tagName
     * @return
     */
    public Tag addTag(String tagName){
        Tag tag = tagRepository.findByTagName(tagName);
        if (tag == null){
            tag = new Tag();
            tag.setTagName(tagName);
            tagRepository.save(tag);
        }

        return tag;
    }

    /**
     * 获取所有标签
     * @return
     */
    public List<Tag> getAllTags(){
        return tagRepository.findAll();
    }


}
