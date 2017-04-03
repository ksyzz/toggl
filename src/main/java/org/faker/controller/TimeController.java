package org.faker.controller;

import org.faker.entity.Time;
import org.faker.info.TimeInfo;
import org.faker.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by fengqian on 2017/4/3 0003.
 */
@Controller
@RequestMapping("/time")
public class TimeController {
    @Autowired
    TimeService timeService;

    /**
     * 添加时间段
     * @param itemId
     * @param startTime
     * @param length
     * @return
     */
    @RequestMapping(value = "/add/{itemId}", method = RequestMethod.POST)
    @ResponseBody
    public TimeInfo addTime(
            @PathVariable("itemId") int itemId,
            @RequestParam("startTime") long startTime,
            @RequestParam("length") int length
    ){
        Time time = timeService.addTime(startTime, length, itemId);
        return new TimeInfo(time);
    }

    @RequestMapping(value = "/get/all", method = RequestMethod.GET)
    @ResponseBody
    public List<TimeInfo> getAllTimes(){
        List<Time> times = timeService.getAll();
        return times.stream().map(TimeInfo::new).collect(Collectors.toList());
    }
}
