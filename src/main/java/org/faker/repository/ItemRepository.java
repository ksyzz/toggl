package org.faker.repository;

import org.faker.entity.Item;
import org.faker.entity.Project;
import org.faker.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Created by fengqian on 2017/3/23.
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Integer>, JpaSpecificationExecutor<Item> {
    @Query("select item from Item item where item.content = ?1 and item.project = ?2 and item.tag = ?3")
    Item findByContentAndProjectAndTag(String content, Project project, Tag tag);
}
