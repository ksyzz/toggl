package org.faker.info;

import org.faker.entity.Item;

/**
 * 记录信息
 * Created by fengqian on 2017/3/23.
 */
public class ItemInfo {
    private int itemId;
    private String content;
    private TagInfo tagInfo;
    private int time_length;
    private ProjectInfo projectInfo;
    public ItemInfo(Item item) {
        this.itemId = item.getId();
        this.time_length = item.getTime_length();
        this.content = item.getContent();
//        this.interval = item.getInterval();
        if (item.getProject() != null)
            this.projectInfo = new ProjectInfo(item.getProject());
        if (item.getTag() != null)
            this.tagInfo = new TagInfo(item.getTag());
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    public TagInfo getTagInfo() {
        return tagInfo;
    }

    public void setTagInfo(TagInfo tagInfo) {
        this.tagInfo = tagInfo;
    }

    public ProjectInfo getProjectInfo() {
        return projectInfo;
    }

    public void setProjectInfo(ProjectInfo projectInfo) {
        this.projectInfo = projectInfo;
    }

    public int getTime_length() {
        return time_length;
    }

    public void setTime_length(int time_length) {
        this.time_length = time_length;
    }
}
