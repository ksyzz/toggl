package org.faker;

import java.util.Date;

/**
 * Created by 夜落尽&天未明 on 2017/4/2 0002.
 */
public class Main {
    public static void main(String[] args) {
        Date date = new Date();
        long time = System.currentTimeMillis();
        System.out.println(new Date(time));
        System.out.println(new Date(time-1000));
    }
}
