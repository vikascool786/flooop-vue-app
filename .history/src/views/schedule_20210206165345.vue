<template>
  <div class="container">
    <div class="row" style="margin-top: 80px">
      <div class="category-view">
        <div
          class="col-sm-12 col-md-2"
          v-for="(category, index) in categories"
          :key="index"
          @click="getEvents('Category', category.id)"
        >
          <img
            :src="category.src"
            style="width: 100%; object-fit: cover"
          /><br />
          <span
            style="
              color: #2676a9;
              font-size: 12px;
              text-align: center;
              display: inline-block;
              width: 100%;
            "
            >{{ category.cat_title }}</span
          >
        </div>
      </div>
      <!-- <div class="col-md-2">
            <img src="http://floooplife.com/flooopadmin/upload/category/default.jpg" style="width: 100%; object-fit: cover;"/>
            <br>
            <span style="color:#2676A9; font-size: 12px; text-align: center; display: inline-block; width: 100%;">category 1</span>
        </div> -->
    </div>
    <div class="row">
      <div class="col-md-12"><hr /></div>
    </div>
    <div class="row">
      <div class="col-md-12" v-if="eventGroups.length > 0">
        <VueSlickCarousel v-bind="settings">
          <div
            class="date-view-li"
            v-for="(event, index) in eventGroups"
            :key="index"
            @click="scrollToDate(index)"
            :id="'dateCard_' + index"
            :class="index == 0 ? 'active1' : ''"
          >
            <span class="date-view-li1"
              >{{ event.date.split(", ")[0].substring(0, 3) }}
            </span>
            <span class="date-view-li2">{{
              event.date.split(", ")[1].split(" ")[1]
            }}</span>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <hr />
    <span v-for="(event, index) in eventGroups" :key="index" class="schedule-desktop-events">
      <div class="row">
        <div class="col-md-12" :id="'date_' + index">
          <p
            style="
              background: #f8bd40;
              color: rgb(38, 118, 169);
              margin-top: 30px;
              padding-left: 10px;
            "
          >
            {{ event.date }}
          </p>
        </div>
      </div>
      <div
        class="row"
        style="margin-top: 40px"
        v-for="(eventlist, index) in event.events"
        :key="index"
      >
        <div class="col-sm-3 col-md-2" style="text-align: left">
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px"
          >
            {{
              eventlist.event_start
                ? getStartTime(eventlist.event_start)
                : eventlist.event_start
            }}
            {{ eventlist.timezone }}
            <br />
            {{eventlist.event_duration }}<br />
          </p>
        </div>
        <div class="col-sm-3 col-md-2" style="text-align: left">
          <img
            :src="eventlist.path"
            style="
              width: 120px;
              height: 120px;
              object-fit: cover;
              text-align: center;
              margin: 0px auto;
              display: block;
            "
          />
        </div>
        <div class="col-sm-3 col-md-2" style="text-align: left">
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px"
          >
            {{ eventlist.event_title }}
          </p>
          <br />
          <p
            class="card-text"
            style="font-size: 1em; font-weight: 500; letter-spacing: 1.5px"
          >
            ${{ eventlist.event_cost }}
          </p>
        </div>
        <div class="col-sm-3 col-md-2" style="text-align: left">
          <img
            src="http://floooplife.com/flooopadmin/upload/avatar/default.jpg"
            style="
              width: 120px;
              height: 120px;
              object-fit: cover;
              text-align: center;
              margin: 0px auto;
              display: block;
            "
          />
        </div>
        <div class="col-sm-3 col-md-2" style="text-align: left">
          <p
            class="card-text"
            style="
              font-size: 1em;
              font-weight: 500;
              letter-spacing: 1.5px;
              line-height: 22px;
              margin-top: 5px;
            "
          >
            Hosted by
            <span style="display: inline-block">
              {{ eventlist.event_cohost }}
            </span>
          </p>
        </div>
        <div class="col-sm-3 col-md-2" style="text-align: left">
          <div style="padding-top: 10px; text-align: center">
            <button
              v-if="
                eventlist.flag_joined == null || eventlist.flag_joined == '0'
              "
              id="button"
              type="button"
              class="btn btn-outline-danger"
              style="
                width: 100%;
                border-radius: 15px;
                color: rgb(255, 131, 84) !important;
                border-color: rgb(255, 131, 84);
                font-weight: 500;
                font-size: 14px;
                background: #fff !important;
              "
              @click.stop="joinEvent(eventlist.id)"
            >
              JOIN
            </button>
            <button
              v-if="eventlist.flag_joined == '1'"
              id="button"
              type="button"
              class="btn btn-outline-danger"
              style="
                width: 175px;
                border-radius: 15px;
                color: rgb(255, 131, 84) !important;
                border-color: rgb(255, 131, 84);
                font-weight: 500;
                font-size: 14px;
                background: #fff !important;
              "
              disabled
            >
              YOU ARE REGISTERED
            </button>
          </div>
        </div>
        <div class="col-md-12"><hr /></div>
      </div>
    </span>
      <div class="row schedule-mobile-events">
    <div
      v-for="(event, index) in eventGroups"
      style="padding-top: 22px"
      class="col-lg-4 col-md-6 col-12"
      :key="index"
    >
      <div class="card" style="width: 100%; height: 98%; text-align:center; margin-bottom:20px;" v-for="(event, index) in event.events"
        :key="index">
        <div @click="redirectToDetail(event.id)" class="row event_height">
          <div
            style="
              cursor: pointer;
              text-align: center;
              font-weight: 600;
              cursor: pointer;
              color: #929292;
              letter-spacing: 1.5px;
            "
            class="col-lg-12 col-md-12 col-12"
          >
            {{ event.event_title }}
          </div>
        </div>
        <img
          @click="redirectToDetail(event.id)"
          style="width: 100%; border-radius: 10px; height: 140px"
          :src="event.path"
        />
        <div class="card-body">
          <div
            @click="redirectToDetail(event.id)"
            style="color: #929292; margin-top: 5px; letter-spacing: 1.5px"
            class="card-text"
          >
            <div>
              {{ event.event_date }} <br />
              {{
                event.event_start === "00:00 " ||
                event.event_start === "00:00" ||
                event.event_start === "00:00 AM" ||
                event.event_start === "00:00 PM"
                  ? event.event_start
                  : getStartTime(event.event_start)
              }}
              {{ event.timezone }}
            </div>
            <div style="padding-top: 12px">{{event.event_cost_label }}</div>
            <div style="padding-top: 12px">{{event.event_duration }}</div>
          </div>
          <div style="padding-top: 20px" class="btn_event">
            <button
              v-if="event.flag_joined == null || event.flag_joined == '0'"
              id="button"
              style="
                width: 40%;
                border-radius: 15px;
                letter-spacing: 1.5px;
                color: #ff8354;
                border-color: #ff8354;
                font-weight: 500;
                background-color: white;
              "
              type="button"
              class="btn btn-outline"
              @click.stop="joinEvent(event.id)"
            >
              JOIN
            </button>
            <button
              v-if="event.flag_joined == '1'"
              id="button"
              style="
                width: 65%;
                border-radius: 15px;
                letter-spacing: 1.5px;
                color: #ff8354;
                border-color: #ff8354;
                font-weight: 500;
                background-color: white;
                white-space: none !important;
              "
              type="button"
              class="btn btn-outline"
              disabled
            >
              YOU ARE REGISTERED
            </button>

            <button
              v-if="event.flag_joined == '1'"
              id="button"
              style="
                width: 65%;
                border-radius: 15px;
                letter-spacing: 1.5px;
                color: #ff8354;
                border-color: #ff8354;
                font-weight: 500;
                background-color: white;
              "
              type="button"
              class="btn btn-outline btn_event_cancel"
              @click="
                cancelConfirm(
                  event.id,
                  event.event_date2,
                  event.event_start
                )
              "
            >
              CANCEL
            </button>
          </div>
          <br />
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <i
                @click="ShareFb(event.id)"
                class="fab fa-facebook-square"
                style="
                  font-size: 30px;
                  color: #47639f;
                  margin-left: 10px;
                  cursor: pointer;
                "
              ></i>
              <a
                class="twitter-share-button-x customer share"
                v-on:click="ShareTwitter"
                href="https://twitter.com/share?url=https://www.answebtechnologies.in&amp;text=flooop&amp;hashtags=flooop"
                data-size="small"
              >
                <i
                  class="fab fa-twitter-square"
                  style="
                    font-size: 30px;
                    color: #6ab6f0;
                    margin-left: 10px;
                    cursor: pointer;
                  "
                ></i
              ></a>
              <i
                @click="OpenInviteFriend(event.id)"
                class="fas fa-envelope"
                style="
                  font-size: 30px;
                  color: rgb(168 162 162);
                  margin-left: 10px;
                  cursor: pointer;
                "
              ></i>
              <a
                class="customer share"
                v-on:click="ShareWhatsApp"
                href="https://api.whatsapp.com/send?phone=7976110767&text="
              >
                <i
                  class="fab fa-whatsapp-square"
                  style="
                    font-size: 30px;
                    color: #3cd15f;
                    margin-left: 10px;
                    cursor: pointer;
                  "
                ></i>
              </a>
              <i
                class="fab fa-facebook-messenger"
                style="
                  font-size: 30px;
                  color: rgb(25 150 246);
                  margin-left: 10px;
                  cursor: pointer;
                "
              ></i>
              <i
                @click="addFavourite(event.id)"
                class="far fa-heart"
                v-bind:class="{ active: event.flag_fav === '1' }"
                style="
                  font-size: 30px;
                  color: lightgray;
                  margin-left: 10px;
                  cursor: pointer;
                "
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <form action="" @submit="submitInvite($event)">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Invite Friend</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input
                type="email"
                :value="email"
                v-model="inviteObj.email"
                placeholder="Your email"
                required
              >
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="CloseInviteFriend()">
              Close
            </button>
            <button class="button is-primary" :disabled="isDisabled">
              Invite
              <img
                v-if="loading"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            </button>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import EventService from "../services/user.service";
import EventsComponent from "../components/eventsComponent";
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
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
        document.getElementById("dateCard_" + i).classList.remove("active1");
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
    redirectToDetail: function () {
      this.$router.push("/event-detail");
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
}
.slick-slide {
  margin-right: 10px !important;
}
.slick-prev:before {
    content: '<';
}
.slick-next:before {
 content: '>';
}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: rgb(38, 118, 169);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
</style>