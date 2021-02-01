<template>
  <div style="padding-right: 4vw;padding-left: 4vw;" class=" py-xl-4 py-lg-2">
    <div class="row">
      <div class="col-lg-5 col-md-5 col-12">
        <br />
        <div class="row">
          <div style="text-align: left;" class="col-lg-6 col-md-6 col-12">
            <span
              style="font-size: 1rem;font-weight: 400;color:#929292;letter-spacing: 1.5px;"
              >{{ user.first_name }} {{ user.last_name }}</span
            >
          </div>
        </div>

        <div class="row">
          <div style="text-align: left;" class="col-lg-6 col-md-6 col-12">
            <img
              style="width: 100%;border-radius:15px; height: 150px;margin-top: 10px;float: left;"
              :src="user.path"
            />
          </div>
        </div>
        <div class="row">
          <div
            style="text-align: left; padding-top: 10px;"
            class="col-lg-6 col-md-6 col-12"
          >
            <span
              style="font-size: 1em;font-weight: 400;color:#929292;letter-spacing: 1.5px;"
              >Edit Profile</span
            >
            <br />
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-7 col-12">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <br />
            <br />
            <span
              style="font-size: 1.3em;font-weight: 500;color:#929292;float: left;letter-spacing: 1.5px;line-height: 20px;"
              >My Settings</span
            >
            <i style="margin-left: 80px;color:#929292;" class="fas fa-plus"></i>
          </div>
        </div>

        <br />
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <br />
            <br />
            <span
              style="font-size: 1.3em;font-weight: 500;color:#929292;float: left;letter-spacing: 1.5px;line-height: 20px;"
              >Host Dashboard</span
            >
            <i style="margin-left: 35px;color:#929292;" class="fas fa-plus"></i>
          </div>
        </div>
      </div>
      <div v-show="showmodal" class="col-lg-5 col-md-6 col-12">
        <br />
        <div
          style="border: 2px solid lightgray;border-radius: 15px;text-align: center;margin-top: 12px;"
          class="row"
        >
          <div class="col-lg-12 col-md-12 col-12" v-on:click="hideModal">
            <i
              class="fas fa-times"
              style="font-size:24px;float:right;color:#929292;margin-left:10px; cursor: pointer;    margin: 5px;"
            ></i>
            <br />
          </div>
          <div class="col-lg-12 col-md-12 col-12">
            <span
              style="font-size: 1.3em;font-weight: 500;color:#929292;letter-spacing: 1.5px;"
              >Got a Minute?</span
            >
            <br />
            <br />
          </div>
          <div class="col-lg-12 col-md-12 col-12">
            <span
              style="font-size: 1.2em;font-weight: 500;color:#929292;letter-spacing: 1.5px;"
              >Share your event Review</span
            >
            <br />
            <br />
          </div>
          <br />
          <div class="col-lg-12 col-md-12 col-12">
            <div class="row">
              <div class="col-lg-7 col-md-7 col-12">
                <img
                  style="border-radius:15px;width: 80%;float: left;margin-left: 12px;height: 150px;"
                  :src="require('../assets/images/profile.png')"
                />
              </div>
              <div class="col-lg-5 col-md-5 col-12">
                <br />
                <button
                  id="button"
                  style="font-size: 1.1em;width: 8em;border-radius:15px;color: rgb(255, 131, 84);border-color: rgb(255, 131, 84);font-weight: 500;"
                  type="button"
                  class="btn btn-outline-danger"
                >
                  Review It
                </button>
                <br />
                <div class="row">
                  <div
                    style="padding-top: 15px;"
                    class="col-lg-12 col-md-12 col-12"
                  >
                    <i
                      class="fab fa-facebook-square"
                      style="font-size:24px;color:#47639f;margin-left:10px; cursor: pointer;"
                    ></i>
                    <i
                      class="fab fa-twitter-square"
                      style="font-size:24px;color:#6ab6f0;margin-left:10px; cursor: pointer;"
                    ></i>
                    <i
                      class="fas fa-envelope"
                      style="font-size:24px;color:rgb(168 162 162);;margin-left:10px; cursor: pointer;"
                    ></i>
                    <i
                      class="fas fa-comment-alt"
                      style="font-size:24px;color:rgb(242 203 68);margin-left:10px; cursor: pointer;"
                    ></i>
                    <i
                      class="fab fa-whatsapp-square"
                      style="font-size:24px;color:#3cd15f;margin-left:10px; cursor: pointer;"
                    ></i>
                    <i
                      class="fab fa-facebook-messenger"
                      style="font-size:24px;color:rgb(25 150 246);margin-left:10px; cursor: pointer;"
                    ></i>
                    <i
                      class="far fa-heart"
                      style="font-size:24px;color:lightgray;margin-left:10px; cursor: pointer;"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>

          <br />
          <div class="col-lg-12 col-md-12 col-12">
            <div style="margin-bottom: 15px;" class="row">
              <div class="col-lg-7 col-md-7 col-12">
                <img
                  style="border-radius:15px;width: 80%;float: left;margin-left: 12px;height: 150px;"
                  :src="require('../assets/images/profile.png')"
                />
              </div>
              <div class="col-lg-5 col-md-5 col-12">
                <br />
                <button
                  id="button"
                  style="width: 8em;border-radius:15px;color: rgb(255, 131, 84);border-color: rgb(255, 131, 84);font-weight: 500;font-size: 1em;"
                  type="button"
                  class="btn btn-outline-danger"
                >
                  Review It
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br /> <br /> <br />
    
    <div style="margin-bottom: 20px;" class="row">
      <div class="col-lg-6 col-md-6 col-12">
        <span
          style="font-size: 1.2em;font-weight: 500;color:#929292;float: left;letter-spacing: 1.5px;line-height: 20px;"
          >My Likes
        </span>
      </div>
    </div>

    <div style="padding:10px;" class="row">
      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-2 col-md-4 col-4"
      >
        <p
          style="font-size: 1em;font-weight: 500;    letter-spacing: 1.5px;"
          class="card-text"
        >
          1:00 PM EST
          <br />
          Saturday<br />
          27 June 2021
        </p>
      </div>
      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-2 col-md-4 col-4"
      >
        <img
          style="width: 120px; height: 120px; object-fit: cover; text-align: center; margin: 0 auto; display: block;"
          src="http://floooplife.com/flooopadmin/upload/avatar/default.jpg"
        />
      </div>

      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-2 col-md-4 col-4"
      >
        <p
          style="font-size: 1em;font-weight: 500; letter-spacing: 1.5px;"
          class="card-text"
        >
          title
        </p>
      </div>
      <div class="col-lg-6 col-md-6 col-12"><div style="padding-top: 10px; text-align: center; display: inline-block; padding-right: 15px;"><button id="button" type="button" class="btn btn-outline-danger" style="width: 100%; border-radius: 15px; color: rgb(177, 172, 172); border-color: rgb(177, 172, 172); font-weight: 500; font-size: 14px; text-align: center; align-items: center;">
          Who's attending
        </button></div><div style="padding-top: 10px; text-align: center; display: inline-block; padding-right: 15px;"><button id="button" type="button" class="btn btn-outline-danger" style="width: 100%; border-radius: 15px; color: rgb(177, 172, 172); border-color: rgb(177, 172, 172); font-weight: 500; font-size: 14px; text-align: center; align-items: center;">
          Invite Friends
        </button></div><div style="padding-top: 10px; text-align: center; display: inline-block;"><button id="button" type="button" class="btn btn-outline-danger" style="width: 100%; border-radius: 15px; color: rgb(177, 172, 172); border-color: rgb(177, 172, 172); font-weight: 500; font-size: 14px;">
          Join Event 
        </button></div></div>
    </div>
    <br />
    <br />
    <span
      style="font-size: 1.2em;font-weight: 500;color:#929292;float: left;letter-spacing: 1.5px;line-height: 20px;    padding-left: 15px;"
      >Event I'm Attending
    </span>
    <span style="color:#929292;padding-left: 15px;">
      <span
        class="cursor_pointer"
        v-bind:class="{ active: hosting_events === '1' }"
        @click="getEventStatus('AccountMyEventsUpcoming')"
        >upcoming</span
      >
      |
      <span
        class="cursor_pointer"
        v-bind:class="{ active: hosting_events === '0' }"
        @click="getEventStatus('AccountMyEventsPast')"
        >past</span
      ></span
    >
    <br />
    <br />
    <div
      class="row"
      v-for="(event, index) in events_attending"
      :key="index"
      style="padding:10px;"
    >
      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-2 col-md-4 col-4"
      >
        <p
          style="font-size: 1em;font-weight: 500;    letter-spacing: 1.5px;"
          class="card-text"
        >
          {{ event.event_start }} {{ event.timezone }} <br />{{
            event.event_date
              ? event.event_date.split(",")[0]
              : event.event_date
          }}<br />{{
            event.event_date
              ? event.event_date.split(",")[1]
              : event.event_date
          }}<br />
        </p>
      </div>
      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-2 col-md-4 col-4"
      >
        <img
          style="width: 120px; height: 120px; object-fit: cover; text-align: center; margin: 0 auto; display: block;"
          :src="event.path"
        />
      </div>

      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-2 col-md-4 col-4"
      >
        <p
          v-on:click="openEventDetail(event.id)"
          style="font-size: 1em;font-weight: 500;    letter-spacing: 1.5px;"
          class="card-text"
        >
          {{ event.event_title }}
        </p>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <div
          style="padding-top:10px;text-align:center;display: inline-block;
    padding-right: 15px;"
          class=""
        >
          <button
            id="button"
            @click="redirectToDetail(event.id)"
            style="width: 100%;border-radius: 15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;text-align: center;align-items: center;"
            type="button"
            class="btn btn-outline-danger"
          >
            Who's attending
          </button>
        </div>
        <div
          style="padding-top:10px;text-align:center;display: inline-block;
    padding-right: 15px;"
          class=""
        >
          <button
            id="button"
            @click="redirectToDetail(event.id)"
            style="width: 100%;border-radius: 15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;text-align: center;align-items: center;"
            type="button"
            class="btn btn-outline-danger"
          >
            Invite Friends
          </button>
        </div>
        <div
          style="padding-top:10px;text-align:center;display: inline-block;
    padding-right: 15px;"
          class=""
        >
          <button
            id="button"
            @click="cancelConfirm(event.id)"
            style="width: 100%;border-radius:15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;"
            type="button"
            class="btn btn-outline-danger"
          >
            Cancel Registration
          </button>
        </div>
        <div
          style="padding-top:10px;text-align:center;display: inline-block;
    padding-right: 15x; "
          class=""
        >
          <button
            id="button"
            style="width: 100%;border-radius:15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;"
            type="button"
            class="btn btn-outline-danger"
          >
            Join Event {{ event.event_countdown_label2 }}
          </button>
        </div>
      </div>
    </div>

    <div style="margin-top: 85px;margin-bottom: 85px;" class="row">
      <div class="col-lg-6 col-md-6 col-12">
        <span
          style="font-size: 1.2em;font-weight: 500;color:#929292;float: left;letter-spacing: 1.5px;line-height: 20px;"
          >Event I'm Hosting
        </span>
        <span style="color:#929292;padding-left: 15px;">
          <span
            class="cursor_pointer"
            v-bind:class="{ active: hosting_events === '1' }"
            @click="getEventStatus('AccountMyEventsUpcoming')"
            >upcoming</span
          >
          |
          <span
            class="cursor_pointer"
            v-bind:class="{ active: hosting_events === '0' }"
            @click="getEventStatus('AccountMyEventsPast')"
            >past</span
          ></span
        >
      </div>
    </div>

    <div
      v-for="(event, index) in events_host"
      :key="index"
      style="padding:10px;"
      class="row"
    >
      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-1 col-md-4 col-4"
      >
        <p
          style="font-size: 1em;font-weight: 500;    letter-spacing: 1.5px;"
          class="card-text"
        >
         {{ event.event_start }} {{ event.timezone }} <br />{{
            event.event_date
              ? event.event_date.split(",")[0]
              : event.event_date
          }}<br />{{
            event.event_date
              ? event.event_date.split(",")[1]
              : event.event_date
          }}<br />
        </p>
      </div>
      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-2 col-md-4 col-4"
      >
        <img
          style="width: 120px; height: 120px; object-fit: cover; text-align: center; margin: 0 auto; display: block;"
          :src="event.path"
        />
      </div>

      <div
        style="padding-top:10px;text-align:left;"
        class="col-lg-1 col-md-4 col-4"
      >
        <p
          v-on:click="openEventDetail(event.id)"
          style="font-size: 1em;font-weight: 500;    letter-spacing: 1.5px;"
          class="card-text"
        >
          {{ event.event_title }}
        </p>
      </div>
      <div
        style="padding-top:10px;text-align:center;"
        class="col-lg-2 col-md-6 col-6"
      >
        <button
          id="button"
          @click="redirectToDetail(event.id)"
          style="width: 100%;border-radius: 15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;text-align: center;align-items: center;"
          type="button"
          class="btn btn-outline-danger"
        >
          Who's attending
        </button>
      </div>
      <div
        style="padding-top:10px;text-align:center;"
        class="col-lg-2 col-md-6 col-6"
      >
        <button
          id="button"
          @click="redirectToDetail(event.id)"
          style="width: 100%;border-radius: 15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;text-align: center;align-items: center;"
          type="button"
          class="btn btn-outline-danger"
        >
          Invite Friends
        </button>
      </div>
      <div
        style="padding-top:10px;text-align:center;"
        class="col-lg-2 col-md-6 col-6"
      >
        <button
          id="button"
          @click="EditEvent(event.id)"
          style="width: 100%;border-radius:15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;"
          type="button"
          class="btn btn-outline-danger"
        >
          Edit Event
        </button>
      </div>
      <div
        v-if="showEventStart"
        style="padding-top:10px;text-align:center; "
        class="col-lg-2 col-md-6 col-6"
      >
        <button
          id="button"
          style="width: 100%;border-radius:15px;color: #b1acac;border-color: #b1acac;font-weight: 500;font-size: 14px;"
          type="button"
          class="btn btn-outline-danger"
        >
          Event Start {{ event.event_countdown_label2 }}
        </button>
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
    <b-modal :active.sync="isAttendeesModalActive" has-modal-card>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Who's attending</p>
        </header>
        <section class="modal-card-body">
          <div class="row">
            <div
              v-for="(attendee, index) in attendees"
              :key="index"
              style="height: 190px;"
              class="col-lg-6 col-md-6 col-8"
            >
              <img
                style="width: 5em;height: 80px;border-radius:15px;"
                :src="attendee.path_img"
              />
              <div style="text-align: center;">
                <span
                  style="font-size: large;font-weight: 600;color:#929292;letter-spacing:1.5px;padding-top:-5px;"
                  >{{ attendee.first_name }} {{ attendee.last_name }}</span
                >
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="CloseAttendees()">
            Close
          </button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import EventService from "../services/user.service";
import AuthService from "../services/auth.service";
export default {
  name: "events",
  props: ["page"],
  data() {
    return {
      showmodal: false,
      loading: false,
      isDisabled: false,
      hosting_events: "1",
      events_attending: [], // events user is subscribed itself
      attendees: [], // who's attending the given event
      showEventStart: true,
      events_host: [],
      user: [],
      isComponentModalActive: false,
      isAttendeesModalActive: false,
      email: "",
      inviteObj: {
        id: "",
        email: "",
      },
    };
  },
  methods: {
    hideModal: function() {
      this.showmodal = false;
    },
    OpenInviteFriend: function(id) {
      this.inviteObj.id = id;
      this.isComponentModalActive = true;
      //console.log('id:'+id);
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
    redirectToDetail: function(id) {
      this.$router.push("/event-detail/" + id);
    },
    OpenAttendees: function(id) {
      EventService.getEvent(id).then(
        (response) => {
          this.attendees = response.data.records[0].event_attendees2;
          this.isAttendeesModalActive = true;
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
    CloseAttendees: function(id) {
      //this.$buefy.modal.open(props);
      this.isAttendeesModalActive = false;
    },
    cancelConfirm: function(id) {
      // call api here
      this.$dialog.confirm({
        message: "Continue on this task?",
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
    },
    getEventStatus(page2) {
      let page = "AccountEventAttendee";
      EventService.getEvents(page).then(
        (response) => {
          this.events_attending = response.data.records;
        },
        (error) => {
          if (error.response.data.message.includes("expire")) {
            localStorage.removeItem("user");
            this.getEvents();
          }
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
      //let page2 = "AccountMyEvents";
      if (page2 == "AccountMyEventsUpcoming") {
        this.showEventStart = true;
        this.hosting_events = "1";
      } else {
        this.hosting_events = "0";
        this.showEventStart = false;
      }
      EventService.getEvents(page2).then(
        (response) => {
          this.events_host = response.data.records;
        },
        (error) => {
          this.events_host = [];
          Vue.$toast.error("No events found", {
            duration: 2000,
          });
        }
      );
    },
    EditEvent(id) {
      this.$router.push("/edit-event/" + id);
    },
    openEventDetail(id) {
      this.$router.push("/event-detail/" + id);
    },
  },
  mounted() {
    let loginUser = JSON.parse(localStorage.getItem("user"));
    let userId = loginUser.id;
    AuthService.getUser(userId).then(
      (response) => {
        //this.user = response.data.records;
        var result = response.data.records;
        result.forEach((element) => {
          this.user = element;
        });
      },
      (error) => {
        if (error.response.data.message.includes("expire")) {
          localStorage.removeItem("user");
          this.getEvents();
        }
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
    this.getEventStatus("AccountMyEventsUpcoming");
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
.cursor_pointer {
  cursor: pointer;
}
span.active {
  color: rgb(255, 131, 84) !important;
}
</style>
