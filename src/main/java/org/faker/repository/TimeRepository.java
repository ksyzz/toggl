package org.faker.repository;

import org.faker.entity.Item;
import org.faker.entity.Time;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by fengqian on 2017/4/3 0003.
 */
@Repository
public interface TimeRepository extends JpaSpecificationExecutor<Time>, JpaRepository<Time, Integer>{
    @Query("select t from Time t where t.item = ?")
    List<Time> getTimesByItem(Item item);
}
