package org.faker.info;

import org.faker.entity.Item;

import java.util.Date;

/**
 * 记录信息
 * Created by fengqian on 2017/3/23.
 */
public class ItemInfo {
    private int itemId;
    private String content;
    private Date pauseTime;
    private Date continueTime;
    private TagInfo tagInfo;
    private ProjectInfo projectInfo;

    public ItemInfo(Item item) {
        this.itemId = item.getId();
        this.content = item.getContent();
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

    public Date getPauseTime() {
        return pauseTime;
    }

    public void setPauseTime(Date pauseTime) {
        this.pauseTime = pauseTime;
    }

    public Date getContinueTime() {
        return continueTime;
    }

    public void setContinueTime(Date continueTime) {
        this.continueTime = continueTime;
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
}
