package com.registration.form.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    private String userid;
    private Integer userphone;
    private String useremail;
    private LocalDate userdate;
    private Double usertime;
    private String userarea;
    private String usercity;
    private String userstate;
    private Integer userpost;
    public User(String userid, Integer userphone, String useremail, LocalDate userdate, Double usertime,
            String userarea, String usercity, String userstate, Integer userpost) {
        this.userid = userid;
        this.userphone = userphone;
        this.useremail = useremail;
        this.userdate = userdate;
        this.usertime = usertime;
        this.userarea = userarea;
        this.usercity = usercity;
        this.userstate = userstate;
        this.userpost = userpost;
    }
    public User() {
    }
    public String getUserid() {
        return userid;
    }
    public void setUserid(String userid) {
        this.userid = userid;
    }
    public Integer getUserphone() {
        return userphone;
    }
    public void setUserphone(Integer userphone) {
        this.userphone = userphone;
    }
    public String getUseremail() {
        return useremail;
    }
    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }
    public LocalDate getUserdate() {
        return userdate;
    }
    public void setUserdate(LocalDate userdate) {
        this.userdate = userdate;
    }
    public Double getUsertime() {
        return usertime;
    }
    public void setUsertime(Double usertime) {
        this.usertime = usertime;
    }
    public String getUserarea() {
        return userarea;
    }
    public void setUserarea(String userarea) {
        this.userarea = userarea;
    }
    public String getUsercity() {
        return usercity;
    }
    public void setUsercity(String usercity) {
        this.usercity = usercity;
    }
    public String getUserstate() {
        return userstate;
    }
    public void setUserstate(String userstate) {
        this.userstate = userstate;
    }
    public Integer getUserpost() {
        return userpost;
    }
    public void setUserpost(Integer userpost) {
        this.userpost = userpost;
    }
    
  
    
}
