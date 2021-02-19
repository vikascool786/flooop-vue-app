<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        test
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import EventService from "../services/user.service";
import AuthService from "../services/auth.service";
import axios from "axios";
import moment from "moment";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "schedule",
  components: { VueSlickCarousel },
  data: function () {
    return {
      isLoggedIn: Boolean,
      events: [],
      categories: [],
      slides: [],
      isActive: false,
      eventGroups: [],
      isDisabled: false,
      loading: false,
      isComponentModalActive: false,
      email: "",
      inviteObj: {
        id: "",
        email: "",
      },
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 736,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 0,
            },
          },
        ],
      },
      categorySetting: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 736,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 0,
            },
          },
        ],
      },
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
    scrollToDate(index) {
      var element = document.getElementById("date_" + index);
      var dateCard = document.getElementById("dateCard_" + index);
      // var element = document.getElementById(id);
      var headerOffset = 40;
      var elementPosition = element.offsetTop;
      var offsetPosition = elementPosition - headerOffset;
      document.documentElement.scrollTop = offsetPosition;
      document.body.scrollTop = offsetPosition; // For Safari
      for (let i = 0; i < 100; i++) {
        document.getElementById("dateCard_" + i) ? document.getElementById("dateCard_" + i).classList.remove("active1") : null;
        dateCard.classList.add("active1");
      }
      // element.scrollIntoView({
      // top:200,
      //     block: "start",
      //     behavior: "smooth",
      // });
    },

    ShareTwitter(event) {
      //alert('x');
      event.preventDefault();
      $(".customer.share").click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        window.open(href, "Twitter", "height=285,width=550,resizable=1");
      });
    },
    ShareWhatsApp(event) {
      event.preventDefault();
      $(".customer.share").click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        window.open(href, "Whatsapp", "height=285,width=550,resizable=1");
      });
    },
    ShareFb: function (id) {
      FB.ui(
        {
          method: "share",
          href: "https://developers.facebook.com/docs/",
        },
        function (response) {}
      );
    },
    OpenInviteFriend: function (id) {
      //this.$buefy.modal.open(props);
      if (AuthService.isLoggedIn() == false) {
        Vue.$toast.error("Please login first", {
          duration: 2000,
        });
      } else {
        this.inviteObj.id = id;
        this.isComponentModalActive = true;
      }
    },
    CloseInviteFriend: function (id) {
      //this.$buefy.modal.open(props);
      this.isComponentModalActive = false;
    },
    submitInvite(event) {
      event.preventDefault();
      var payload = this.inviteObj;
      //payload["id"] = 1;
      const dataToPost = { ...payload };

      // post data
      this.loading = true;
      this.isDisabled = true;
      EventService.inviteEvent(dataToPost).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          this.loading = false;
          this.isDisabled = false;
          Vue.$toast.success(response.data.message, {
            duration: 2000,
          });
          //this.url = null;
          this.inviteObj = {
            id: "",
            email: "",
          };
          //this.$router.push("/my-account");
        },
        (error) => {
          this.loading = false;
          this.isDisabled = false;
          Vue.$toast.error(error.response.data.message, {
            duration: 2000,
          });
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    addFavourite: function (id) {
      //this.$buefy.modal.open(props);
      if (AuthService.isLoggedIn() == false) {
        Vue.$toast.error("Please login first", {
          duration: 2000,
        });
      } else {
        const loadingComponent = this.$loading.open({
          container: null,
        });
        //this.inviteObj.id=id;
        EventService.addFavouriteEvent(id).then(
          (response) => {
            //this.event = response.data;
            loadingComponent.close();
            Vue.$toast.success(response.data.message, {
              duration: 2000,
            });
            this.getEvents();
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
    getStartTime(time) {
      if (time) {
        var s = time.toString();
        s = s.replace(/^0+/, "");
        return s;
      } else return time;
    },
    redirectToDetail: function (id) {
       if (AuthService.isLoggedIn() == false) {
        Vue.$toast.success("Please Login to Join Event", {
          duration: 2000,
        });
      }else{
        this.$router.push("/event-detail/" + id);
      }
    },
    redirectToCatDetail: function (id) {
      this.$router.push("/category/" + id);
    },
    actionJoinForFree: function () {
      this.$router.push("/join");
    },
    joinEvent: function (id) {
      if (AuthService.isLoggedIn() == false) {
        Vue.$toast.success("Please Login to Join Event", {
          duration: 2000,
        });
      } else {
        EventService.joinEvent(id).then(
          (response) => {
            this.events = response.data;
            Vue.$toast.success(response.data.message, {
              duration: 2000,
            });
            this.getEvents();
            localStorage.setItem("joinedStatus", "firstTime");
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
      }
    },
    getEvents: function (page, cid) {
      EventService.getCatEvents(page, cid).then(
        (response) => {
          let data = response.data.records;
          if (data) {
            let data2 = [];
            data.forEach((element) => {
              data2.push({
                id: element.id,
                event_dateCompare:
                  moment(element.event_date).format("YYYY-MM-DD") +
                  "T" +
                  (element.event_start
                    ? element.event_start.split(" ")[0]
                    : element.event_start) +
                  ":00.000Z",
                event_date: element.event_date,
                event_date2: element.event_date2,
                event_title: element.event_title,
                event_start: element.event_start,
                timezone: element.timezone,
                path: element.path,
                flag_joined: element.flag_joined,
                event_cost: element.event_cost,
                event_cohost: element.event_cohost,
                attendees_can_invite: element.attendees_can_invite,
                display_attendees: element.display_attendees,
                event_attendees: element.event_attendees,
                event_attendees_do: element.event_attendees_do,
                event_cost_label: element.event_cost_label,
                event_countdown_label: element.event_countdown_label,
                event_countdown_label2: element.event_countdown_label2,
                event_currency: element.event_currency,
                event_desc: element.event_desc,
                event_duration: element.event_duration,
                event_image: element.event_image,
                event_lang_label: element.event_lang_label,
                event_languages: element.event_languages,
                event_question: element.event_question,
                event_tags: element.event_tags,
                flag_fav: element.flag_fav,
                flag_joined: element.flag_joined,
                host_id: element.host_id,
                id: element.id,
                max_group_size: element.max_group_size,
                path: element.path,
                status: element.status,
                timezone: element.timezone,
              });
            });
            this.events = data2.sort(function (a, b) {
              return a.event_dateCompare.localeCompare(b.event_dateCompare);
            });
            // this gives an object with dates as keys
            const groups = this.events.reduce((groups, event) => {
              const date = event.event_date;
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
                events: groups[date],
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
          Vue.$toast.error(this.content, {
            duration: 2000,
          });
          this.eventGroups = [];
        }
      );
    },
  },

  mounted() {
    let page = "events";
    let url = "http://floooplife.com/flooopadmin";
    var cid = "";
    this.getEvents(page, cid);
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
    axios.get(url + "/api/category/read.php").then((response) => {
      var result = response.data.records;
      result.forEach((element) => {
        var category = {};
        category.id = element.id;
        category.cat_title = element.cat_title;
        category.src = element.path;
        if (element) {
          this.categories.push(category);
        }
      });
    });
    //
    //
    axios.get(url + "/api/slider/read.php").then((response) => {
      var result = response.data.records;
      result.forEach((element) => {
        var slide = {};
        slide.id = element.id;
        slide.title = element.title;
        slide.src = element.path;
        this.slides.push(slide);
      });
    });
    //
  },
};
</script>

<style>
.category-view {
  display: inline-block;
  list-style: none;
  /* text-align: center; */
  cursor: pointer;
}
.category-view div {
  display: inline-block;
  list-style: none;
  /* width: 12.50%; */
  padding: 0 10px;
  vertical-align: top;
}
.date-view-li {
  list-style: none;
  display: inline-block;
  color: #999;
  font-size: 14px;
  text-align: center;
  padding: 5px 16px;
  background: #fff;
  border-radius: 15px;
  margin: 0 10px;
  cursor: pointer;
  text-transform: uppercase;
}
.active1 {
  list-style: none;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 5px 16px;
  background: #f18249;
  border-radius: 15px;
  margin: 0 10px;
  cursor: pointer;
  text-transform: uppercase;
}
.date-view-li1 {
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
}
.date-view-li2 {
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}
.slick-slide {
  width: 10% !important;
  margin-right: 10px !important;
}
  .dateCard-body .slick-slide {
    width: 11% !important;
  }
.slick-prev:before {
  content: "<";
}
.slick-next:before {
  content: ">";
}
.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  opacity: 0.75;
  color: rgb(38, 118, 169);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.category-title {
  color: #2676a9;
  font-size: 12px;
  text-align: center;
  display: inline-block;
  width: 100%;
}
.container {
  max-width: 1222px !important;
}
.editing {
  background-color: #fff8db;
}
.fa-heart.active {
  color: rgb(255, 131, 84) !important;
}
.event_height {
  height: 57px;
  margin: 14px;
}
.btn_event_cancel {
  display: none;
}
.btn_event:hover > .btn_event_cancel {
  display: inline-block;
  margin-top: 5px;
}
.card-event-title{
  cursor: pointer; text-align: center; font-weight: 600; color: rgb(146, 146, 146); letter-spacing: 1.5px;
}
@media (min-width: 769px) {
  .category-view div {
    display: inline-block;
    list-style: none;
    width: 12.5%;
    padding: 0 10px;
    vertical-align: top;
  }
}

@media (max-width: 769px) {
  .card-event-title{
    font-size: 12px;
  }
  .date-view-li1 {
    font-size: 13px;
    cursor: pointer;
    text-transform: uppercase;
  }
  .date-view-li2 {
    font-size: 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
  }
  .date-view-li {
    padding: 5px 6px 10px 12px;
  }
  .active1 {
    list-style: none;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 5px 10px 10px 12px;
    background: #f18249;
    border-radius: 15px;
    margin: 0 10px;
    cursor: pointer;
    text-transform: uppercase;
  }

  .content-margin-top {
    margin-top: 10px;
  }
  .category-title {
    font-size: 10px !important;
    text-align: center !important;
    margin-top: -15px;
    vertical-align: top;
  }
  .dateCard-body .slick-slide {
    width: 25% !important;
  }
}
</style>