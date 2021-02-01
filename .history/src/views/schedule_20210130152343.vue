<template>
  <div class="container">
    <div class="row" style="margin-top: 80px;">
        <div class="col-md-12">
            <ul class="category-view">
                <li v-for="(category,index) in categories" :key="index" @click="redirectToCatDetail(category.id)">
                    <img :src="category.src" style="width: 100%; object-fit: cover;"/><br>
                    <span style="color:#2676A9; font-size: 12px; text-align: center; display: inline-block; width: 100%;">{{category.cat_title}}</span>
                </li>
            </ul>
        </div>
        <!-- <div class="col-md-2">
            <img src="http://floooplife.com/flooopadmin/upload/category/default.jpg" style="width: 100%; object-fit: cover;"/>
            <br>
            <span style="color:#2676A9; font-size: 12px; text-align: center; display: inline-block; width: 100%;">category 1</span>
        </div> -->
    </div>
    <div class="row"> <div class="col-md-12"> <hr> </div> </div>
    <div class="row">
        <div class="col-md-1">
          <span style="color: rgb(38, 118, 169); font-size: 16px; text-align: center; display: inline-block; width: 100%;">
          < 
          </span>
          </div>
        <div class="col-md-10">
          <ul style="display:inline-block; list-style:none;">
            <li
              class="date-view-li" 
              v-for="(event, index) in eventGroups" :key="index" >
               <span style="text-transform: uppercase;">{{ event.date.split(", ")[0].substring(0, 3) }} </span> <span style="font-size:20px; font-weight:bold">{{event.date.split(", ")[1].split(" ")[1]}}</span>
              </li> 
          </ul>
        </div>
        <div class="col-md-1">
          <span style="color: rgb(38, 118, 169); font-size: 16px; text-align: center; display: inline-block; width: 100%;">
          >
          </span>
        </div>
    </div>
    <hr>
    <span  v-for="(event, index) in eventGroups" :key="index">
      <div class="row">
          <div class="col-md-12">
              <p style="background: #F8BD40; color: rgb(38, 118, 169); margin-top: 30px; padding-left: 10px;">{{event.date}}</p>
          </div>
      </div>
      <div class="row" style="margin-top: 40px;" v-for="(eventlist, index) in event.events" :key="index">
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px;position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);"
          >
            {{ eventlist.event_start ? getStartTime(eventlist.event_start) : eventlist.event_start }} {{eventlist.timezone}}
            {{ eventlist.event_start }} {{eventlist.timezone}}
            <br />
            {{eventlist.event_date.split(", ")[0]}}<br />
           {{eventlist.event_date.split(", ")[1]}}
          </p>
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <img
            :src="eventlist.path"
            style="width: 120px; height: 120px; object-fit: cover; text-align: center; margin: 0px auto; display: block;"
          />
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px;"
          >
            {{eventlist.event_title}}
          </p><br>
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px;"
          >
            ${{eventlist.event_cost}}
          </p>
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <img
            src="http://floooplife.com/flooopadmin/upload/avatar/default.jpg"
            style="width: 120px; height: 120px; object-fit: cover; text-align: center; margin: 0px auto; display: block;"
          />
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px;line-height: 22px;margin-top: 5px;"
          >
          Hosted by
            <span style="display: inline-block;">
            {{eventlist.event_cohost}}
            </span>
          </p>
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;">
          <div
            style="padding-top: 10px; text-align: center; ">
            <button
              v-if="eventlist.flag_joined == null || eventlist.flag_joined == '0'"
              id="button"
              type="button"
              class="btn btn-outline-danger"
              style="width: 100%; border-radius: 15px; color: rgb(255, 131, 84) !important; border-color: rgb(255, 131, 84); font-weight: 500; font-size: 14px; background: #fff !important; "
              @click.stop="joinEvent(eventlist.id)">
              JOIN
            </button>
            <button
              v-if="eventlist.flag_joined == '1'"
              id="button"
              type="button"
              class="btn btn-outline-danger"
              style="width: 175px; border-radius: 15px; color: rgb(255, 131, 84) !important; border-color: rgb(255, 131, 84); font-weight: 500; font-size: 14px; background: #fff !important; "
              disabled>
              YOU ARE REGISTERED
            </button>
          </div>
        </div>
          <div class="col-md-12"><hr></div>
      </div>
    </span>
    
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import EventService from "../services/user.service";
import AuthService from "../services/auth.service";
import moment from 'moment';
import axios from 'axios';

export default {
  name: "Schedule",
  components : {}, 
  props: [],
  data: function() {
    return {
      isLoggedIn : Boolean,
      events: [],
      categories : [],
      slides : [],
      isActive:false,
    };
  },
   filters: {
        truncate: function (text, length, suffix) {
          if (text.length > length) {
            return text.substring(0, length) + suffix;
          } else {
            return text;
          }
        },
    },
    computed: {
    // getDate: function(date){
    //   debugger;
    //   let data = moment(date).format("MMM Do YY");
    //   console.log(data);
    //   return data;
    // },
  },
  methods: {
    getStartTime(time) {
      if(time){
      var s = time.toString();
      s = s.replace(/^0+/, "");
      return s;
      }else return time
    },
    redirectToDetail: function() {
      this.$router.push("/event-detail");
    },
    redirectToCatDetail:function(id) {
      this.$router.push("/category/"+id);
    },
    actionJoinForFree:function(){
        this.$router.push("/join");
    
    },
    joinEvent: function(id) {
      if (AuthService.isLoggedIn() == false) {
        this.$router.push("/event-detail/" + id);
        return;
      } else {
        EventService.joinEvent(id).then(
          (response) => {
            this.event = response.data;
            Vue.$toast.success(response.data.message, {
              duration: 2000,
            });
            this.getEvents();
            localStorage.setItem("joinedStatus", "firstTime")
          },
          (error) => {
            if (error.response.data.message.includes("expire")) {
              this.$router.push("/event-detail/" + id);
            } else {
              Vue.$toast.error(error.response.data.message, {
                duration: 2000,
              });
            }
            this.content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      }
    },

    getDate: function(date){
      debugger;
      let data = moment(date).format("MMM Do YY");
      console.log(data);
      return data;
    },
  },

  mounted() {
    let page = "HomeLiveUpcoming";
    EventService.getEvents(page).then(
      response => {
        this.events = response.data.records;
      },
      error => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
    this.isLoggedIn = AuthService.isLoggedIn();
    //
    axios
      .get("http://floooplife.com/flooopadmin/api/category/read.php")
      .then(response => {
        var result = response.data.records;
        result.forEach(element => {
          var category = {};
          category.id = element.id;
          category.cat_title = element.cat_title;
          category.src = element.path;
          if (element.cat_title != "Business and Entrepreneurship") {
          this.categories.push(category);
          }
        });
      });
    //
    //
    axios
      .get("http://floooplife.com/flooopadmin/api/slider/read.php")
      .then(response => {
        var result = response.data.records;
        result.forEach(element => {
          var slide = {};
          slide.id = element.id;
          slide.title = element.title;
          slide.src = element.path;
          this.slides.push(slide);
          
        });
      });
    //
  }
};
</script>

<style>
    .category-view{
        display: inline-block;
        list-style: none;
        /* text-align: center; */
        cursor: pointer;
    }
    .category-view li{
        display: inline-block;
        list-style: none;
        width: 12.33%;
        padding: 0 10px;
    }
    .date-view-li{
      list-style: none;
      display: inline-block;
      color: #fff;
      font-size: 13px;
      text-align: center;
      padding: 5px 16px;
      background: #F18249;
      border-radius: 15px;
      margin: 0 10px;
      cursor: pointer;
    }
</style>