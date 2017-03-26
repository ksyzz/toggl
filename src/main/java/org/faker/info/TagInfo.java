package org.faker.info;


import org.faker.entity.Tag;

/**
 * 标签信息
 * Created by fengqian on 2017/3/23.
 */
public class TagInfo {
    private int tagId;
    private String tagName;

    public TagInfo(Tag tag) {
        this.tagId = tag.getId();
        this.tagName = tag.getTagName();
    }

    public int getTagId() {
        return tagId;
    }

    public void setTagId(int tagId) {
        this.tagId = tagId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }
}
