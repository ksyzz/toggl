package org.faker;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by 夜落尽&天未明 on 2017/4/2 0002.
 */
public class Main {
    public static void main(String[] args) throws ParseException {
        String d = "2017-04-04";
        String s = "2017-04-03";
        DateFormat fmt =new SimpleDateFormat("yyyy-MM-dd");
        Date dated = fmt.parse(d);
        Date dates = fmt.parse(s);
        if (dated.getTime()>dates.getTime()){
            System.out.println(dated);
        }
    }
}
