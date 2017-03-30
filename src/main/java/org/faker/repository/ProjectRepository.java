package org.faker.repository;

import org.faker.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Created by fengqian on 2017/3/23.
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>, JpaSpecificationExecutor<Project> {
    @Query("select p from Project p where p.projectName = ?")
    Project findByProjectName(String projectName);

}
