package org.faker.repository;


import org.faker.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created  by fengqian on 2017/3/23.
 */
@Repository
public interface TagRepository extends JpaRepository<Tag, Integer>, JpaSpecificationExecutor<Tag> {
    @Query("select t from Tag t where t.tagName = ?")
    Tag findByTagName(String tagName);
    @Query("select t from Tag t where t.tagName like %?1%")
    List<Tag> findLikeName(String name);
}
