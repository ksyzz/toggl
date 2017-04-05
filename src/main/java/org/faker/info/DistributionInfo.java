package org.faker.info;

/**
 * 统计项目时间
 * Created by fengqian on 2017/4/4 0004.
 */
public class DistributionInfo {
    private String projectName;
    private String length;

    public DistributionInfo(String projectName, int count) {
        this.projectName = projectName;
        this.length = count/3600+":"+count%3600/600+""+count%3600/60%10+":"+count%60/10+""+count%10;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }
}
