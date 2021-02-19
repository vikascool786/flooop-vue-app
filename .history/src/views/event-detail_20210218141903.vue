<template>
  <div style="padding-right: 4vw; padding-left: 4vw" class="py-xl-4 py-lg-2">
    <div class="row">
      <div style="text-align: center" class="col-lg-12 col-md-12 col-12">
        <div style="width: 100%; height: 80%; margin: auto">
          <div style="margin: 14px" class="row">
            <div
              style="
                font-size: 1.5em;
                font-weight: 600;
                color: #929292;
                letter-spacing: 1.5px;
                color: #929292;
                letter-spacing: 1.5px;
                letter-spacing: 1.5px;
              "
              class="col-lg-12 col-md-12 col-12"
            >
              {{ event.event_title }}
            </div>
          </div>
          <div class="background">
            <img
              style="width: 100%; border-radius: 15px; height: 505px"
              :src="event.path"
            />
            <!-- <img style="width:100%;border-radius:15px;height:505px;" :src="event.path" /> -->
            <div
              v-show="showmodal && firstTimeLand === 'firstTime'"
              class="overlay-box"
            >
              <div class="row" style="height: -webkit-fill-available">
                <div
                  style="text-align: center"
                  class="col-lg-12 col-md-12 col-12"
                ></div>
                <div
                  style="text-align: center"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <span
                    style="
                      font-size: 1.7vw;
                      font-weight: 500;
                      letter-spacing: 1.5px;
                      color: #929292;
                    "
                    >We're excited to see you!</span
                  >
                </div>
                <span
                  style="
                    position: absolute;
                    top: 7px;
                    right: 20px;
                    font-size: 20px;
                    cursor: pointer;
                  "
                  @click="closeModal()"
                  >X</span
                >
                <div
                  style="text-align: center"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <span
                    style="font-size: 1.5vw;font-weight: 400;rgb(110 109 109);font-weight: 400;color:#929292;letter-spacing: 1.5px;"
                    >Your registration is confirmed</span
                  >
                </div>
                <div
                  style="text-align: center"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <span
                    style="
                      font-size: 1.5vw;
                      font-weight: 400;
                      color: #999;
                      color: #929292;
                      letter-spacing: 1.5px;
                    "
                    >{{ event.event_title }}</span
                  >
                </div>
                <div
                  style="text-align: center"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <div
                    style="
                      font-size: 1.2vw;
                      font-weight: 500;
                      color: #929292;
                      letter-spacing: 1.5px;
                    "
                    class="card-text"
                  >
                    <div style="line-height: 50px">
                      {{ event.event_date }} @
                      {{ getStartTime(event.event_start) }}
                      {{ event.timezone }}
                    </div>
                    <div style="line-height: 50px">
                      {{ event.event_duration }}
                    </div>
                  </div>
                </div>
                <div
                  style="text-align: center"
                  class="col-lg-12 col-md-12 col-12"
                  title="Do you need to cancel?"
                >
                  <button
                    id="button"
                    style="
                      width: 35%;
                      font-size: 1vw;
                      letter-spacing: 1.5px;
                      height: 3.5vw;
                      border-radius: 20px;
                      color: #ff8354;
                      border-color: #ff8354;
                      font-weight: 500;
                    "
                    type="button"
                    class="btn btn-outline-danger"
                    @click="
                      cancelConfirm(
                        event.id,
                        event.event_date2,
                        event.event_start
                      )
                    "
                    title="Do you need to cancel?"
                  >
                    Cancel
                  </button>
                </div>
                <div
                  style="text-align: center"
                  class="col-lg-12 col-md-12 col-12"
                >
                  <div
                    style="
                      font-size: 1vw;
                      font-weight: 600;
                      letter-spacing: 1.5px;
                    "
                  >
                    Add to Calendar
                  </div>
                  <div style="padding-top: 5px">
                    <span
                      style="
                        font-weight: 500;
                        margin-left: 15px;
                        font-size: 1vw;
                        color: rgb(240 76 76);
                        letter-spacing: 1.5px;
                      "
                      >iCal</span
                    >
                    <span
                      v-on:click="addGoogleCal()"
                      style="
                        font-weight: 500;
                        margin-left: 15px;
                        font-size: 1vw;
                        color: rgb(240 76 76);
                        letter-spacing: 1.5px;
                      "
                      >Google</span
                    >
                    <span
                      style="
                        font-weight: 500;
                        margin-left: 15px;
                        font-size: 1vw;
                        color: rgb(240 76 76);
                        letter-spacing: 1.5px;
                      "
                      >Yahoo</span
                    >
                    <span
                      style="
                        font-weight: 500;
                        margin-left: 15px;
                        font-size: 1vw;
                        color: rgb(240 76 76);
                        letter-spacing: 1.5px;
                      "
                      >Outlook</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div
              style="
                color: #929292;
                letter-spacing: 1.5px;
                margin-top: 5px;
                font-size: larger;
                letter-spacing: 1.5px;
              "
              class="card-text"
            >
              <div style="line-height: 40px">
                {{ event.event_date }} @ {{ getStartTime(event.event_start) }}
                {{ event.timezone }}
              </div>
              <div style="line-height: 35px">{{ event.event_cost_label }}</div>
              <div style="line-height: 35px">{{ event.event_duration }}</div>
              <div
                style="line-height: 35px"
                v-if="event.event_lang_label.length > 0"
              >
                Language:{{ event.event_lang_label }}
              </div>
              <div
                style="line-height: 35px; color: #f00"
                v-if="event.event_countdown_label.length > 0"
              >
                {{ event.event_countdown_label }}
              </div>
            </div>
            <div style="padding-top: 16px" class="row">
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
                  href="https://twitter.com/intent/tweet?text=Hello%20world"
                  data-size="small"
                  ><i
                    class="fab fa-twitter-square"
                    style="
                      font-size: 30px;
                      color: #6ab6f0;
                      margin-left: 10px;
                      cursor: pointer;
                    "
                  ></i
                ></a>
                <a href="mailto:dummyamd@gmail.com">
                  <i
                    class="fas fa-envelope"
                    style="
                      font-size: 30px;
                      color: rgb(168 162 162);
                      margin-left: 10px;
                      cursor: pointer;
                    "
                  ></i
                ></a>
                <a href="https://api.whatsapp.com/send?phone=7976110767&text=">
                  <i
                    class="fab fa-whatsapp-square"
                    v-on:click="ShareWhatsApp"
                    style="
                      font-size: 30px;
                      color: #3cd15f;
                      margin-left: 10px;
                      cursor: pointer;
                    "
                  ></i
                ></a>
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
            <br />
          </div>
        </div>
      </div>
      <div
        style="padding-right: 24px !important; padding-left: 24px !important"
        class="col-lg-12 col-md-12 col-12 btn_hover_reg"
      >
        <button
          id="button"
          v-if="
            eventJoined == false || eventJoined == null || eventJoined == '0'
          "
          style="
            letter-spacing: 1.5px;
            width: 100%;
            border-radius: 15px;
            color: #ff8354;
            border-color: #ff8354;
            font-weight: 500;
            background-color: white;
          "
          type="button"
          class="btn btn-outline"
          @click="joinEvent(event.id)"
        >
          JOIN
        </button>
        <button
          v-if="eventJoined == '1'"
          id="button"
          style="
            letter-spacing: 1.5px;
            width: 100%;
            border-radius: 15px;
            color: #ff8354;
            border-color: #ff8354;
            font-weight: 500;
            background-color: white;
          "
          type="button"
          class="btn btn-outline"
          disabled
        >
          YOU ARE REGISTERED
        </button>
        <button
          v-if="eventJoined == '1'"
          id="button"
          style="
            letter-spacing: 1.5px;
            width: 100%;
            border-radius: 15px;
            color: #ff8354;
            border-color: #ff8354;
            font-weight: 500;
            background-color: white;
          "
          type="button"
          class="btn btn-outline btn_hover_cancel"
          @click="cancelConfirm(event.id, event.event_date2, event.event_start)"
        >
          Do you need to cancel?
        </button>
        <br />
      </div>

      <div style="text-align: left" class="col-lg-4 col-md-8 col-8">
        <br />
        <br />
        <span
          style="
            font-size: large;
            font-weight: 600;
            color: #929292;
            letter-spacing: 1.5px;
          "
          >What we'll do together</span
        >
      </div>
      <div
        style="text-align: left; color: #929292; letter-spacing: 1.5px"
        class="col-lg-8 col-md-12 col-12"
      >
        <br />
        <br />
        <div style="color: #929292; letter-spacing: 1.5px">
          {{ event.event_desc }}
        </div>
      </div>

      <div
        style="text-align: left"
        class="col-lg-4 col-md-8 col-8"
        v-if="
          event.event_attendees_do.length > 0 ||
          event.event_attendees_do ||
          event.event_attendees_do !== '' ||
          event.event_attendees_do !== null
        "
      >
        <br />
        <br />
        <span
          v-if="event.event_attendees_do.length > 0"
          style="
            font-size: large;
            font-weight: 600;
            color: #929292;
            letter-spacing: 1.5px;
          "
          >What to bring</span
        >
      </div>
      <div
        style="text-align: left; color: #929292; letter-spacing: 1.5px"
        class="col-lg-8 col-md-12 col-12"
        v-if="
          event.event_attendees_do.length > 0 ||
          event.event_attendees_do ||
          event.event_attendees_do !== '' ||
          event.event_attendees_do !== null
        "
      >
        <br />
        <br />
        <div
          style="color: #929292; letter-spacing: 1.5px"
          v-if="event.event_attendees_do.length > 0"
        >
          {{ event.event_attendees_do }}
        </div>
      </div>

      <div style="text-align: left" class="col-lg-4 col-md-8 col-8">
        <br />
        <br />
        <div class="row">
          <div
            style="
              text-align: left;
              padding-right: 14px !important;
              padding-left: 14px !important;
            "
            class="col-lg-8 col-md-12 col-12"
          >
            <span
              style="
                font-size: large;
                font-weight: 600;
                color: #929292;
                letter-spacing: 1.5px;
              "
              >Your Hosts</span
            >
            <br />
            <br />
            <div v-for="(host, index) in event.event_hosts" :key="index">
              <img
                style="width: 14.5em; border-radius: 15px; height: 150px"
                :src="host.path_img"
              />
              <br />
              <div
                style="padding-top: 8px; padding-right: 5px; text-align: center"
              >
                <span
                  style="
                    font-size: large;
                    font-weight: 600;
                    color: #929292;
                    letter-spacing: 1.5px;
                  "
                  >{{ host.first_name }} {{ host.last_name }}</span
                >&nbsp;
                <span style="color: #929292; letter-spacing: 1.5px"
                  >{{ host.rating }} ({{ host.reviews_count }})</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(host, index) in event.event_hosts"
        :key="index"
        style="
          text-align: left;
          color: #929292;
          letter-spacing: 1.5px;
          height: fit-content;
        "
        class="col-lg-8 col-md-12 col-12"
      >
        <br />
        <br />
        <div style="color: #929292; letter-spacing: 1.5px">
          {{ host.message }}
        </div>
      </div>

      <div
        style="text-align: left"
        class="col-lg-4 col-md-8 col-8"
        v-if="event.display_attendees === 'yes'"
      >
        <br />
        <br />
        <span
          style="
            font-size: large;
            font-weight: 600;
            color: #929292;
            letter-spacing: 1.5px;
          "
          >Who else you'll meet</span
        >
      </div>

      <div
        v-if="event.display_attendees === 'yes'"
        style="
          text-align: left;
          color: #929292;
          letter-spacing: 1.5px;
          height: fit-content;
        "
        class="col-lg-8 col-md-12 col-12"
      >
        <br />
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-6 col-8">
            {{ event.event_attendees }}
          </div>
        </div>
      </div>

      <!-- <div
        v-if="!isLoggedIn"
        style="
          text-align: left;
          color: #929292;
          letter-spacing: 1.5px;
          height: fit-content;
        "
        class="col-lg-8 col-md-12 col-12"
      >
        <br />
        <br />
        <div class="row">
          <div
            v-for="(attendee, index) in event.event_attendees"
            :key="index"
            style="height: 190px"
            class="col-lg-4 col-md-6 col-8"
          >
            <img
              style="width: 15em; height: 150px; border-radius: 15px"
              :src="attendee.path_img_default"
            />
            <div style="text-align: center">
              <span
                style="
                  font-size: large;
                  font-weight: 600;
                  color: #929292;
                  letter-spacing: 1.5px;
                  padding-top: -5px;
                "
                >{{ attendee.first_name }}</span
              >
            </div>
          </div>
        </div>
      </div> -->

      <div style="text-align: left" class="col-lg-4 col-md-8 col-8">
        <br />
        <br />
        <span
          style="
            font-size: large;
            font-weight: 600;
            color: #929292;
            letter-spacing: 1.5px;
          "
          >Conversations</span
        >
      </div>

      <div
        style="
          text-align: left;
          color: #929292;
          letter-spacing: 1.5px;
          height: fit-content;
        "
        class="col-lg-8 col-md-12 col-12"
      >
        <br />
        <br />
        <div class="row">
          <div
            style="text-align: left; color: #929292; letter-spacing: 1.5px; height: 190px;"
            class="col-lg-4 col-md-8 col-8">
            <img style="width: 15em; border-radius: 15px"
              src="http://floooplife.com/flooop/img/logo.30eeda18.png"/>
            <div style="text-align: center">
              <div style="font-size: large; font-weight: 600; color: #929292; letter-spacing: 1.5px; margin-top: 35px;">
                Floooplife
              </div>
            </div>
          </div>
          <div
            style="text-align: left; color: #929292; letter-spacing: 1.5px; height: fit-content;"
            class="col-lg-8 col-md-12 col-12">
            <div>
              We're excited for your upcoming event! <br />
              <br />

              Get to know other guests you'll soon meet. <br />
              <br />

              Use this message board to ask questions, post comments or share
              general thoughts about the upcoming event.
            </div>
            <br />
          </div>

            <!-- comments -->
          <div
            style="text-align: left; color: #929292; letter-spacing: 1.5px; height: 190px;"
            class="col-lg-4 col-md-8 col-8">
            <img style="width: 15em; border-radius: 15px"
              src="http://floooplife.com/flooop/img/logo.30eeda18.png"/>
            <div style="text-align: center">
              <div style="font-size: large; font-weight: 600; color: #929292; letter-spacing: 1.5px; margin-top: 35px;">
                Username
              </div>
            </div>
          </div>
           <div
            style="text-align: left; color: #929292; letter-spacing: 1.5px; height: fit-content;"
            class="col-lg-8 col-md-12 col-12">
            <div>
              We're excited for your upcoming event!
            </div>
            <br />
          </div>

          <div
            style="text-align: left; color: #929292; letter-spacing: 1.5px; height: fit-content;"
            class="col-lg-12 col-md-12 col-12">
            <br />
            <br />
            <button
              id="button"
              style="
                letter-spacing: 1.5px;
                width: 100%;
                border-radius: 15px;
                color: #ff8354;
                border-color: #ff8354;
                font-weight: 500;
                background-color: white;
              "
              type="button"
              class="btn btn-outline"
            >
              POST MESSAGE
            </button>
          </div>
        </div>
      </div>

      <div style="text-align: left" class="col-lg-4 col-md-8 col-8">
        <br />
        <br />
        <span
          style="
            font-size: large;
            font-weight: 600;
            color: #929292;
            letter-spacing: 1.5px;
          "
          >Reviews</span
        >
        <br />
        <span style="font-size: medium; font-weight: 400"
          >{{ event.event_rating }} ({{ event.event_reviews_count }})</span
        >
      </div>
      <div
        style="text-align: left; color: #929292; letter-spacing: 1.5px"
        class="col-lg-8 col-md-12 col-12"
      >
        <br />
        <br />
        <div v-for="(review, index) in event.event_reviews" :key="index">
          <div class="row">
            <div style="text-align: left" class="col-lg-4 col-md-8 col-8">
              <img
                style="width: 15em; height: 150px; border-radius: 15px"
                :src="review.path_img"
              />
            </div>
            <div
              style="
                text-align: left;
                padding-right: 14px !important;
                padding-left: 24px !important;
              "
              class="col-lg-8 col-md-12 col-12"
            >
              <span style="font-size: large; font-weight: 600">{{
                review.first_name
              }}</span>
              {{ review.review_date }}
              <br />
              <img
                style="width: 18%"
                :src="require('../assets/images/star.png')"
              />
            </div>
            <br />
          </div>
          <br />
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">{{ review.message }}</div>
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div
            style="
              text-align: left;
              color: #929292;
              letter-spacing: 1.5px;
              height: fit-content;
            "
            class="col-lg-12 col-md-12 col-12"
          >
            <button
              id="button"
              style="
                letter-spacing: 1.5px;
                width: 100%;
                border-radius: 15px;
                color: #ff8354;
                border-color: #ff8354;
                font-weight: 500;
                background-color: white;
              "
              type="button"
              class="btn btn-outline"
            >
              POST YOUR REVIEW
            </button>
          </div>
        </div>
      </div>

      <div style="text-align: left" class="col-lg-4 col-md-8 col-8">
        <br />
        <br />
        <span
          style="
            font-size: large;
            font-weight: 600;
            color: #929292;
            letter-spacing: 1.5px;
          "
          >Things to keep in mind</span
        >
      </div>
      <div
        style="
          text-align: left;
          color: #929292;
          letter-spacing: 1.5px;
          height: fit-content;
        "
        class="col-lg-8 col-md-12 col-12"
      >
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <!-- {{ event.event_things_to_keep }} -->&nbsp;
          </div>
        </div>
        <br />

      </div>

      <div class="col-lg-4 col-md-8 col-8">
          <p style="font-size: 16px; font-weight: 600; color: rgb(146, 146, 146); letter-spacing: 1.5px;">Cancellation policy</p>
          <p>For a full refund, cancel at least 24 hours before the virtual event is scheduled to start.</p>
      </div>
       <div class="col-lg-4 col-md-8 col-8">
          <p style="font-size: 16px; font-weight: 600; color: rgb(146, 146, 146); letter-spacing: 1.5px;">Technical Requirements</p>
          <p>You’ll need an internet connection with audio and video to participate. A link and details on how to join will be included in your booking confirmation email.</p>
      </div>
       <div class="col-lg-4 col-md-8 col-8">
          <p style="font-size: 16px; font-weight: 600; color: rgb(146, 146, 146); letter-spacing: 1.5px;">How to participate</p>
          <p>Here are the steps we’ve taken to help protect your privacy during virtual events, along with tips for you to protect your privacy when using Zoom.  </p>
          <p><a href="" class="show_more">Show more..</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import EventService from "../services/user.service";
import AuthService from "../services/auth.service";
import Buefy from "buefy";
import Vue from "vue";
import moment from "moment";
export default {
  name: "event-detail",
  data: function () {
    return {
      event: {},
      firstTimeLand: localStorage.getItem("joinedStatus"),
      showmodal: false,
      isLoggedIn: Boolean,
      eventJoined: (Boolean = false),
      authorizedGCal: false,
    };
  },
  methods: {
    getStartTime: function (time) {
      if (time) {
        let data = time.toString();
        var s = data.toString();
        s = s.replace(/^0+/, "");
        return s;
      }
    },
    closeModal: function () {
      this.showmodal = false;
    },
    cancelConfirm: function (id, date, hour) {
      // call api here
      if (AuthService.isLoggedIn() == false) {
        Vue.$toast.info("Login require", {
          duration: 2000,
        });
        this.$router.push("/login");
        return;
      } else {
        let eventDate = date + "T" + hour.split(" ")[0] + ":00";
        let now = moment();
        let currentDate = now.format().split("+")[0];
        let b = moment(eventDate);
        let a = moment(currentDate);
        let eventCountDown = a.diff(b, "hours");
        // console.log(a.diff(b, "minutes")); // 44700
        // console.log(a.diff(b, "hours")); // 745
        // console.log(a.diff(b, "days")); // 31
        // console.log(a.diff(b, "weeks")); // 4
        if (Math.abs(eventCountDown) <= 12) {
          this.$dialog.confirm({
            message:
              "This Event starts in less than 12 hours and cannot be cancelled.",
            confirmText: "Ok",
            cancelText: "Cancel",
          });
        } else {
          this.$dialog.confirm({
            message: "Are you sure you want to cancel?",
            confirmText: "Yes",
            cancelText: "No",
            onConfirm: () => {
              EventService.cancelEvent(id).then(
                (response) => {
                  this.event = response.data;
                  Vue.$toast.success(response.data.message, {
                    duration: 2000,
                  });
                  this.getEventStatus();
                },
                (error) => {
                  if (error.response.data.message.includes("expire")) {
                    Vue.$toast.info("Login require", {
                      duration: 2000,
                    });
                    localStorage.removeItem("user");
                    this.$router.push("/login");
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
            },
          });
        }
      }
    },

    getEventStatus: function () {
      var id = this.$route.params.id;
      EventService.getEvent(id).then(
        (response) => {
          this.event = response.data.records[0];
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
      if (AuthService.isLoggedIn() == true) {
        EventService.isJoined(id).then(
          (response) => {
            this.eventJoined = response.data.flag_joined;
            if (
              this.eventJoined == false ||
              this.eventJoined == null ||
              this.eventJoined == "0"
            ) {
              this.showmodal = false;
            } else {
              this.showmodal = true;
              setTimeout(() => {
                this.showmodal = false;
                localStorage.setItem("joinedStatus", "secondTime");
              }, 5000);
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
      }
    },
    ShareTwitter(event) {
      //alert('x');
      event.preventDefault();
      $(".customer.share").click(function (e) {
        //alert('y');
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
          href: "https://www.answebtechnologies.in/",
        },
        function (response) {}
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
            this.getEventStatus();
          },
          (error) => {
            if (error.response.data.message.includes("expire")) {
              //this.$router.push("/event-detail/" + id);
              Vue.$toast.error(error.response.data.message, {
                duration: 2000,
              });
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
    joinEvent: function (id) {
      if (AuthService.isLoggedIn() == false) {
        Vue.$toast.info("Login require", {
          duration: 2000,
        });
        localStorage.setItem("loginRedirect", "/event-detail/" + id);
        this.$router.push("/login");
        return;
      } else {
        EventService.joinEvent(id).then(
          (response) => {
            this.event = response.data;
            this.showmodal = true;
            localStorage.setItem("joinedStatus", "firstTime");
            this.getEventStatus();
            document.documentElement.scrollTop = 0;
          },
          (error) => {
            if (error.response.data.message.includes("expire")) {
              Vue.$toast.info("Login require", {
                duration: 2000,
              });
              localStorage.removeItem("user");
              this.$router.push("/login");
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
    addGoogleCal() {
      var isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
      // console.log("isSignedIn:" + isSignedIn);
      if (!isSignedIn) {
        Promise.resolve(this.api.auth2.getAuthInstance().signIn()).then((_) => {
          this.authorizedGCal = true;
          this.addEvent();
        });
      } else {
        //console.log('already logged in');
        this.authorizedGCal = true;
        this.addEvent();
      }
    },
    addEvent() {
      // console.log("add event func");
      var event = {
        summary: this.event.event_title,
        location: "Pali marwar, Rajasthan, India 306401",
        description: this.event.event_desc,
        start: { date: this.event.event_date2, timeZone: "Asia/Calcutta" },
        end: { date: this.event.event_date2, timeZone: "Asia/Calcutta" },
        //'recurrence': ['RRULE:FREQ=DAILY;COUNT=2'],
        //'attendees': [{'email': 'amit.dave.india@gmail.com'},{'email': 'dummyamd@gmail.com'}],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      };

      var request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute(function (event) {
        // console.log("Event created: " + event.htmlLink);
      });
    },
    initClient() {
      //console.log('init client');
      var apiKey = "AIzaSyAS_ZxzxwrPiS2S0mdNTC85RtKPOU_2F90";
      var discoveryDocs = [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
      ];
      var clientId =
        "430299638290-0ncq4i2q1n6j40vvr4m2ic5f4rlbpjt6.apps.googleusercontent.com";
      var scopes = "https://www.googleapis.com/auth/calendar";

      let vm = this;
      vm.api.client
        .init({
          apiKey: apiKey,
          clientId: clientId,
          discoveryDocs: discoveryDocs,
          scope: scopes,
        })
        .then((_) => {
          //vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
        });
    },
    handleClientLoad() {
      this.api.load("client:auth2", this.initClient);
    },
  },
  mounted() {
    this.getEventStatus();
    this.firstTimeLand = localStorage.getItem("joinedStatus");
    if (this.firstTimeLand === "firstTime") {
      this.showmodal === true;
    }
  },
  created() {
    this.api = gapi;
    this.handleClientLoad();
  },
};
</script>
<style>
.container {
  max-width: 1222px !important;
}

.background {
  display: flex; /* establish flex container */
  justify-content: center; /* center items vertically */
  align-items: center; /* center items horizontally */
  width: 100%;
  position: relative;
  z-index: 10;
}

.overlay-box {
  display: flex; /* establish flex container */
  justify-content: center; /* center items vertically */
  align-items: center; /* center items horizontally */
  margin: 0 auto;
  height: 415px;
  border-radius: 10px;
  width: 33vw;
  background-color: #fff;
  position: absolute;
  z-index: 1000;
  border: 5px solid #ccc;
}
.editing {
  background-color: #fff8db;
}
.fa-heart.active {
  color: rgb(255, 131, 84) !important;
}
.dialog .modal-card .modal-card-foot .button {
  width: 35% !important;
  font-size: 1vw !important;
  letter-spacing: 1.5px !important;
  height: 3.5vw !important;
  border-radius: 20px !important;
  color: rgb(255, 131, 84) !important;
  border-color: rgb(255, 131, 84) !important;
  font-weight: 500 !important;
  background: white !important;
}
.dialog .modal-card .modal-card-foot .button.is-primary:hover {
  width: 35% !important;
  font-size: 1vw !important;
  letter-spacing: 1.5px !important;
  height: 3.5vw !important;
  border-radius: 20px !important;
  color: #fff !important;
  border-color: rgb(255, 131, 84) !important;
  font-weight: 500 !important;
  background: rgb(255, 131, 84) !important;
}
.btn_hover_cancel {
  display: none;
}
.btn_hover_reg {
  position: relative;
}
.btn_hover_reg:hover > .btn_hover_cancel {
  display: block;
  margin-top: 5px;
}
.show_more{
  border-bottom: none; padding-bottom: 15px; color: #f77239 !important; cursor: pointer;
}
.show_more:hover{
  border-bottom: none; padding-bottom: 15px; color: #f77239 !important; cursor: pointer;
}
</style>
