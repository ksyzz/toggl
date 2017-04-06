package java.org.faker;

import org.faker.entity.Tag;
import org.faker.service.TagService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by fengqian on 2017/4/6.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/mvc-dispatcher-servlet.xml"})
public class TimeControllerTest {
//    @Autowired
//    TagService tagService;
    @Test
    public void testGetTimes(){
        TagService tagService = new TagService();
        Tag tag = tagService.addTag("test");
        System.out.println(tag.getTagName());
    }
}
