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
        <div class="col-md-12">test</div>
    </div>
    <span  v-for="(event, index) in eventGroups" :key="index">
      <div class="row">
          <div class="col-md-12">
              <p style="background: #F8BD40; color: rgb(38, 118, 169); margin-top: 80px; padding-left: 10px;">{{event.date}}</p>
          </div>
      </div>
      <div class="row" style="margin-top: 60px;" v-for="(eventlist, index) in event.events" :key="index">
        {{eventlist.event_title}}
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px;position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);"
          >
            1:00 PM EST
            <br />
            Saturday<br />
            27 June 2021
          </p>
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <img
            src="http://floooplife.com/flooopadmin/upload/category/default.jpg"
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
            Event title
          </p><br>
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px;"
          >
            $40
          </p>
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;"
        >
          <img
            src="http://floooplife.com/flooopadmin/upload/category/default.jpg"
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
            Vikas Wankhede
            </span>
          </p>
        </div>
        <div
          class="col-lg-2 col-md-2 col-2"
          style="text-align: left;">
          <div
            style="padding-top: 10px; text-align: center; ">
            <button
              id="button"
              type="button"
              class="btn btn-outline-danger"
              style="width: 100%; border-radius: 15px; color: rgb(255, 131, 84) !important; border-color: rgb(255, 131, 84); font-weight: 500; font-size: 14px; background: #fff !important; ">
              JOIN
            </button>
          </div>
        </div>
          <div class="col-md-12"><hr></div>
      </div>
    </span>
    
  </div>
</template>

<script>
import EventService from "../services/user.service";
import EventsComponent from "../components/eventsComponent";
import AuthService from "../services/auth.service";
import axios from 'axios';
export default {
  name: "home",
  components : {EventsComponent}, 
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
  methods: {
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
      EventService.joinEvent(id).then(
        response => {
          this.event = response.data;
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
    }
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


<script>
import EventService from "../services/user.service";
import EventsComponent from "../components/eventsComponent";
import AuthService from "../services/auth.service";
import axios from 'axios';
import moment from 'moment'
export default {
  name: "home",
  components : {EventsComponent}, 
  data: function() {
    return {
      isLoggedIn : Boolean,
      events: [],
      categories : [],
      slides : [],
      isActive:false,
      eventGroups: [],
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
  methods: {
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
      EventService.joinEvent(id).then(
        response => {
          this.event = response.data;
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
    }
  },

  mounted() {
    let page = "HomeLiveUpcoming";
    let url = "http://floooplife.com/flooopadmin";
    var cid = "";
      EventService.getCatEvents("events", cid).then(
        (response) => {
         let data = response.data.records;
          if(data){
            let data2 = []
            data.forEach(element => {
              data2.push({
                id: element.id,
                event_dateCompare : moment(element.event_date).format('YYYY-MM-DD')+"T"+ (element.event_start ? element.event_start.split(" ")[0] : element.event_start)+":00.000Z",
                event_date : element.event_date,
                event_date2 : element.event_date2,
                event_title: element.event_title,
                event_start: element.event_start,
                timezone: element.timezone,
                path: element.path,
                flag_joined: element.flag_joined,
              })
            });
            this.events = data2.sort(function(a, b){return a.event_dateCompare.localeCompare(b.event_dateCompare)});
             // this gives an object with dates as keys
            const groups = this.events.reduce((groups, event) => {
              const date = event.event_date2;
              if (!groups[date]) {
                groups[date] = [];
              }
              groups[date].push(event);
              return groups;
            }, {});

            // Edit: to add it in the array format instead
            this.eventGroups = Object.keys(groups).map((date) => {
              return {
                date,
                events: groups[date]
              };
            });
            console.log(this.eventGroups);
          }
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    
    // EventService.getEvents(page).then(
    //   response => {
    //     this.events = response.data.records;
    //   },
    //   error => {
    //     this.content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //   }
    // );
    this.isLoggedIn = AuthService.isLoggedIn();
    //
    axios
      .get(url+"/api/category/read.php")
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
      .get(url+"/api/slider/read.php")
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

<style scoped>
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
</style>