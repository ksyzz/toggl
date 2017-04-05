package org.faker;

import java.text.ParseException;
import java.util.Date;

/**
 * Created by 夜落尽&天未明 on 2017/4/2 0002.
 */
public class Main {
    public static void main(String[] args) throws ParseException {
//        DateFormat fmt =new SimpleDateFormat("yyyy-MM-dd");
//        String d = "2017-04-04";
//        String s = "2017-04-03";
//        Date dated = fmt.parse(d);
//        Date dates = fmt.parse(s);
        Date date = new Date();
        System.out.println(date);
        System.out.println(date.getDay());
        long a = date.getTime();
        Date b = new Date(a);
        System.out.println(System.currentTimeMillis());
        System.out.println(a);
    }
}
