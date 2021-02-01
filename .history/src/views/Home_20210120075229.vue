<template>
  <div class="level-item has-text-centered">
    <!-- top Products -->
    <div style="width: 100%;" class="ads-grid py-sm-6 py-6">
      <br />
      <br />
      <div class="row">
        <div class="col-lg-12">
          <p
            style="text-align: center;color: #e03a3a;margin: -33px;font-size: 17px;letter-spacing: 1.5px;"
          >Connect....anytime,anywhere!</p>
        </div>
      </div>

      <div class="row">
        <div style="padding-right: 0px !important;padding-left: 0px !important;" class="col-lg-12">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol style="    width: -webkit-fill-available;" class="carousel-indicators">
              <li v-for="(slide,index) in slides" data-target="#myCarousel" :data-slide-to="index" class="active"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
              <div v-for="(slide,index) in slides" class="item" 
              v-bind:class="{ active: slide.id==='1' }">
                <img style="width:100%;height:505px;" :src="slide.src" />
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div style="padding-right: 4vw;padding-left: 4vw;" class="py-xl-4 py-lg-2">
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <button
              id="join" v-if="!isLoggedIn"
              style="color: white;letter-spacing: 1.5px;height: fit-content;background: rgb(224, 58, 58);font-size: 1.8vw;width: 50%;font-weight: 500;border-radius: 10px;"
              class="btn btn-outline-danger" @click="actionJoinForFree()"
            >JOIN FOR FREE</button>
            </div>
        </div>
        <br />
        <br />
        <br />
        <div class="row">
          <div style="flex: 1 0 33.333333%;max-width: 38.333333%;" class="col-lg-4 col-md-4 col-4">
            <hr style="background-color: rgb(247 114 57); height: 0.01em;" />
          </div>
          <div style="text:align:center;" class="col-lg-3 col-md-3 col-3">
            <span
              style="color: rgb(247 114 57);line-height: 1.5em;    font-size: 1.6vw;font-weight: 600;letter-spacing:1.5px;"
            >LIVE AND UPCOMING</span>
          </div>
          <div style="flex: 1 0 33.333333%;max-width: 38.333333%;" class="col-lg-4 col-md-4 col-4">
            <hr style="background-color: rgb(247 114 57);    height: 0.01em;" />
          </div>
        </div>
        <br />
        <br />
        
        <EventsComponent page="HomeLiveUpcoming"> </EventsComponent>

        <br />
        <br />
        <br />
        <div class="row">
          <div style="flex: 1 0 33.333333%;max-width: 38.333333%;" class="col-lg-4 col-md-4 col-4">
            <hr style="background-color: #134b86;height:0.01em;" />
          </div>
          <div class="col-lg-4 col-md-4 col-4">
            <span
              style="color: #134b86;line-height: 1.5em;font-size: 1.6vw;etter-spacing: 1.5px;font-weight: 600;letter-spacing:1.5px;"
            >BROWSE ONLINE EVENTS</span>
          </div>
          <div style="flex: 1 0 33.333333%;max-width: 38.333333%;" class="col-lg-4 col-md-4 col-4">
            <hr style="background-color:#134b86;height:0.01em;" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12" style="height: 300px;" 
          @click="redirectToCatDetail('1')">
            <img
              style="width:100%;border-radius:10px;height: 75%;margin-bottom: 10px;"
              src="https://answebtechnologies.in/flooopadmin/upload/category/default.jpg"
            />
            <br />
            <span
              style="color:#929292;font-size: larger;    letter-spacing: 1.5px;"
            >Business/Entrepretenship</span>
          </div>
          <div v-for="(category,index) in categories" :key="index" class="col-lg-6 col-md-6 col-12" style="height: 300px;" 
          @click="redirectToCatDetail(category.id)">
            <img
              style="width:100%;border-radius:10px;height: 75%;margin-bottom: 10px;"
              :src="category.src"
            />
            <br />
            <span
              style="color:#929292;font-size: larger;    letter-spacing: 1.5px;"
            >{{category.cat_title}}</span>
          </div>
          
        </div>
      </div>
    </div>
    <!-- //top products -->
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
      .get("https://answebtechnologies.in/flooopadmin/api/category/read.php")
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
      .get("https://answebtechnologies.in/flooopadmin/api/slider/read.php")
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
.col-lg-4 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-2 {
  padding-right: 22px !important;
  padding-left: 22px !important;
}
.col-lg-3 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-1 {
  padding-right: 22px !important;
  padding-left: 22px !important;
}

.col-lg-12 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-6 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}
.col-lg-8 {
  padding-right: 30px !important;
  padding-left: 30px !important;
}

#join:hover {
  background: rgb(201 52 52) !important;
}
.carousel-indicators li {
  position: relative !important;
  -webkit-box-flex: 0 !important;
  margin-right: 3px !important;
  margin-left: 3px !important;
  text-indent: -999px !important;
  background-color: rgba(255, 255, 255, 0.5) !important;
}
.router-link-active {
  border-bottom: 2px solid orange;
  padding-bottom: 10px;
}
.card {
  box-shadow: 0 0px 0px 0 #929292;
  transition: 0.3s;
  width: 40%;
  border-radius: 15px;
}

.card:hover {
  box-shadow: 0 6px 10px 0 #929292;
}
</style>
