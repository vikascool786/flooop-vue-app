<template>
  <div class="row">
    
    {{JSON.stringify(events)}}
    <div
      v-for="(event, index) in events"
      style="padding-top: 22px;"
      class="col-lg-4 col-md-6 col-12"
      :key="index"
    >
      <div class="card" style=" width: 100%;height:98%;">
        <div
          @click="redirectToDetail(event.id)"
          style="margin:14px;"
          class="row"
        >
          <div
            style="cursor:pointer;text-align:center;font-weight: 600;cursor: pointer;color:#929292;letter-spacing:1.5px;"
            class="col-lg-12 col-md-12 col-12"
          >
            {{ event.event_title }}
          </div>
        </div>
        <img
          @click="redirectToDetail(event.id)"
          style="width:100%;border-radius:10px;height: 140px;"
          :src="event.path"
        />
        <div class="card-body">
          <div
            @click="redirectToDetail(event.id)"
            style="color:#929292;margin-top: 5px;letter-spacing:1.5px;"
            class="card-text"
          >
            <div>
              {{ event.event_date }} <br />
              {{(event.event_start === "00:00 " || event.event_start === "00:00" || event.event_start === "00:00 AM" || event.event_start === "00:00 PM") ? event.event_start : getStartTime(event.event_start) }} {{ event.timezone }}
            </div>
            <div style="padding-top: 12px;">{{ event.event_cost_label }}</div>
            <div style="padding-top: 12px;">{{ event.event_duration }}</div>
            <!-- <div style="padding-top: 12px;">{{event.event_duration}}</div> -->
          </div>
          <div style="padding-top: 20px;">
            <button
              v-if="event.flag_joined == null || event.flag_joined == '0'"
              id="button"
              style="width: 40%;border-radius: 15px;letter-spacing: 1.5px;color: #ff8354;border-color: #ff8354; font-weight: 500;
                      background-color: white;"
              type="button"
              class="btn btn-outline"
              @click.stop="joinEvent(event.id)"
            >
              JOIN
            </button>
            <button
              v-if="event.flag_joined == '1'"
              id="button"
              style="width: 65%;border-radius: 15px;letter-spacing: 1.5px;color: #ff8354;border-color: #ff8354; font-weight: 500;
                      background-color: white;"
              type="button"
              class="btn btn-outline"
              disabled
            >
              YOU ARE REGISTERED
            </button>
          </div>
          <br />
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <i
                @click="ShareFb(event.id)"
                class="fab fa-facebook-square"
                style="font-size:30px;color:#47639f;margin-left:10px; cursor: pointer;"
              ></i>
              <a
                class="twitter-share-button-x customer share"
                v-on:click="ShareTwitter"
                href="https://twitter.com/share?url=https://www.answebtechnologies.in&amp;text=flooop&amp;hashtags=flooop"
                data-size="small"
              >
                <i
                  class="fab fa-twitter-square"
                  style="font-size:30px;color:#6ab6f0;margin-left:10px; cursor: pointer;"
                ></i
              ></a>
              <i
                @click="OpenInviteFriend(event.id)"
                class="fas fa-envelope"
                style="font-size:30px;color:rgb(168 162 162);;margin-left:10px; cursor: pointer;"
              ></i>
              <a
                class="customer share"
                v-on:click="ShareWhatsApp"
                href="https://api.whatsapp.com/send?phone=7976110767&text="
              >
                <i
                  class="fab fa-whatsapp-square"
                  style="font-size:30px;color:#3cd15f;margin-left:10px; cursor: pointer;"
                ></i>
              </a>
              <i
                class="fab fa-facebook-messenger"
                style="font-size:30px;color:rgb(25 150 246);margin-left:10px; cursor: pointer;"
              ></i>
              <i
                @click="addFavourite(event.id)"
                class="far fa-heart"
                v-bind:class="{ active: event.flag_fav === '1' }"
                style="font-size:30px;color:lightgray;margin-left:10px; cursor: pointer;"
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
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import EventService from "../services/user.service";
import AuthService from "../services/auth.service";
import moment from 'moment'
export default {
  name: "categoryComponent",
  props: ["page"],
  data: function() {
    return {
      loading: false,
      isDisabled: false,
      events: [],
      isComponentModalActive: false,
      email: "",
      inviteObj: {
        id: "",
        email: "",
      },
    };
  },
  filters: {
    truncate: function(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  methods: {
    getStartTime: function(time) {
      if(time){
      var s = time.toString();
      s = s.replace(/^0+/, "");
      return s;
      }else return time
    },
    ShareTwitter(event) {
      //alert('x');
      event.preventDefault();
      $(".customer.share").click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        window.open(href, "Twitter", "height=285,width=550,resizable=1");
      });
    },
    ShareWhatsApp(event) {
      event.preventDefault();
      $(".customer.share").click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        window.open(href, "Whatsapp", "height=285,width=550,resizable=1");
      });
    },
    getEvents: function() {
      //let page = "Category";
      //var cid = this.$route.params.id;
      let page = this.page;
      var cid = "";
      if (page == "Category") {
        var cid = this.$route.params.cid;
      }
      EventService.getCatEvents(page, cid).then(
        (response) => {
         let data = response.data.records;
          if(data){
            let data2 = []
            data.forEach(element => {
              data2.push({
                id: element.id,
                event_dateCompare : moment(element.event_date).format('YYYY-MM-DD')+"T"+ (element.event_start ? element.event_start.split(" ")[0] : element.event_start)+":00.000Z",
                event_date : element.event_date,
                event_title: element.event_title,
                event_start: element.event_start,
                timezone: element.timezone,
                path: element.path,
                flag_joined: element.flag_joined,
              })
            });
            this.events = data2.sort(function(a, b){return a.event_dateCompare.localeCompare(b.event_dateCompare)});
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
    },
    redirectToDetail: function(id) {
      this.$router.push("/event-detail/" + id);
    },
    ShareFb: function(id) {
      FB.ui(
        {
          method: "share",
          href: "https://developers.facebook.com/docs/",
        },
        function(response) {}
      );
    },
    OpenInviteFriend: function(id) {
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
    CloseInviteFriend: function(id) {
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
    addFavourite: function(id) {
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

    redirectToHome: function() {
      this.$router.push("/home");
    },
  },
  mounted() {
    console.log("df")
    this.getEvents();
  },
};
</script>
<style>
.container {
  max-width: 1222px !important;
}
.editing {
  background-color: #fff8db;
}
.fa-heart.active {
  color: rgb(255, 131, 84) !important;
}
</style>
