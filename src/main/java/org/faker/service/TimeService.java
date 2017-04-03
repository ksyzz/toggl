package org.faker.service;

import org.faker.entity.Item;
import org.faker.entity.Time;
import org.faker.repository.ItemRepository;
import org.faker.repository.TimeRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * Created by fengqian on 2017/4/3 0003.
 */
@Service
public class TimeService {
    @Resource
    TimeRepository timeRepository;
    @Resource
    ItemRepository itemRepository;

    /**
     * 添加时间段
     * @param startTime
     * @param length
     * @param itemId
     * @return
     */
    public Time addTime(long startTime, int length, int itemId){
        Time time = new Time();
        time.setStartTime(new Date(startTime));
        time.setEndTime(new Date(startTime + length*1000));
        time.setLength(length);
        Item item = itemRepository.findOne(itemId);
        item.setTime_length(item.getTime_length() + length);
        itemRepository.save(item);
        time.setItem(item);
        timeRepository.save(time);
        return time;
    }

    /**
     * 获取所有时间段
     * @return
     */
    public List<Time> getAll(){
        return timeRepository.findAll();
    }

    /**
     * 删除某条记录的时间段
     * @param item
     */
    public void deleteByItem(Item item){
        List<Time> times = timeRepository.getTimesByItem(item);
        timeRepository.delete(times);
    }

    public List<Time> modifyItem(int modifyId, int targetId){
        Item modifyItem = itemRepository.findOne(modifyId);
        Item targetItem = itemRepository.findOne(targetId);
        timeRepository.getTimesByItem(modifyItem).forEach(time -> {
            time.setItem(targetItem);
            timeRepository.save(time);
        });
        return getAll();
    }
}
