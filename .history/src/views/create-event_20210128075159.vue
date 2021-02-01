<template>
  <div style="padding-right: 4vw; padding-left: 4vw" class="py-xl-4 py-lg-2">
    <br />
    <div class="row">
      <div
        style="flex: 1 0 33.333333%; max-width: 38.333333%"
        class="col-lg-4 col-md-4 col-4"
      >
        <hr style="background-color: #e5383f; height: 0.01em" />
      </div>
      <div class="col-lg-3 col-md-3 col-3" style="text-align: center">
        <span
          style="
            color: #e5383f;
            line-height: 1.5em;
            font-size: 1.5vw;
            font-weight: 600;
            letter-spacing: 1.5px;
          "
          >CREATE AN EVENT</span
        >
      </div>
      <div
        style="flex: 1 0 33.333333%; max-width: 38.333333%"
        class="col-lg-4 col-md-4 col-4"
      >
        <hr style="background-color: #e5383f; height: 0.01em" />
      </div>
    </div>
    <br />
    <br />
    <form @submit="submit($event)">
      <div class="field">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Event Title</label
            >
            <div class="control">
              <input
                class="input"
                style="border-radius: 15px"
                :maxlength="40"
                v-model="eventObj.event_title"
                type="text"
                placeholder="Event Title"
              />
              <div style="margin-top: 5px" v-if="titleRequire">
                <span style="color: red; letter-spacing: 1.5px"
                  >Title is required</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="field">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Event Description</label
            >
            <div class="control">
              <textarea
                style="height: auto; border-radius: 15px"
                :maxlength="1350"
                class="input"
                v-model="eventObj.event_description"
                rows="4"
                cols="50"
                placeholder="Event Description"
              ></textarea>
              <div style="margin-top: 5px" v-if="descriptionRequire">
                <span style="color: red; letter-spacing: 1.5px"
                  >Description is required</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div class="field">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Event Image</label
            >
            <div class="row">
              <div
                style="
                  padding-right: 0px !important;
                  padding-left: 15px !important;
                  color: #929292;
                "
                class="col-lg-6 col-md-6 col-12"
              >
                <div class="control">
                  <!-- <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" required/> -->
                  <span class="btn btn-primary btn-file">
                    Upload Image<input type="file" @change="onFileChange" />
                  </span>
                  <div style="margin-top: 5px" v-if="imageRequire">
                    <span style="color: red; letter-spacing: 1.5px"
                      >Image is required</span
                    >
                  </div>
                </div>
                <!-- <div v-if="url" id="preview">
                  <br />
                  <img :src="url" />
                </div> -->
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <span
                  style="
                    font-size: 1rem;
                    font-weight: 400;
                    font-weight: 600;
                    color: #929292;
                    letter-spacing: 1.5px;
                    float: right;
                  "
                  >or Vist Unspalsh.com, freepik.com for free images
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div class="field">
        <div class="row">
          <div style="padding-bottom: 12px" class="col-lg-12 col-md-12 col-12">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Event Category</label
            >
          </div>
          <br />
          <div style="margin-top: 5px" v-if="categoryRequire">
            <span style="color: red; letter-spacing: 1.5px; padding-left: 25px"
              >Category selection is required</span
            >
          </div>
          <br />
          <div
            style="padding-right: 0px !important; padding-left: 0px !important"
            class="col-lg-12 col-md-12 col-12"
          >
            <vue-select-image
              :dataImages="categories"
              :useLabel="true"
              :is-multiple="true"
              :height="h"
              :weight="w"
              @onselectmultipleimage="onSelectMultipleCategory"
            >
            </vue-select-image>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="row">
          <div style="padding-top: 10px" class="col-lg-2 col-md-2 col-2">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Event Date</label
            >
            <div class="control">
              <input
                class="input"
                style="border-radius: 15px"
                v-model="eventObj.event_date"
                type="date"
                placeholder="Select Date"
              />
              <div style="margin-top: 5px" v-if="dateRequire">
                <span style="color: red; letter-spacing: 1.5px"
                  >Date is required</span
                >
              </div>
            </div>
          </div>
          <div style="padding-top: 10px" class="col-lg-1 col-md-1 col-1"></div>
          <!-- <div style="padding-top: 10px;" class="col-lg-3 col-md-3 col-6">
        <label style="text-align:left;letter-spacing: 1.5px;color:#929292;" class="label">Event Time</label>
        <div class="control">
        <input class="input" style="padding: 15px;border-radius:15px;" v-model=" eventObj.event_start_time" type="time" placeholder="Select Time" required/>
        </div>
        </div> -->

          <div style="padding-top: 10px" class="col-lg-1 col-md-1 col-1">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Time</label
            >
            <div class="control">
              <div class="box_time">
                <i
                  class="fas fa-caret-up arrow"
                  v-on:click="incrementStartHours"
                ></i>
                <div>
                  <input
                    style="
                      border-radius: none;
                      border: none;
                      text-align: center;
                      box-shadow: none;
                      color: #929292;;
                      font-weight: bold;
                      height: 20px;
                      display: block;
                    "
                    class="input"
                    v-model="eventObj.event_start_hours"
                  />
                </div>
                <i
                  class="fas fa-caret-down arrow"
                  v-on:click="decrementStartHours"
                ></i>
              </div>
              <!-- <select
                style="border-radius: 15px"
                class="input"
                v-model="eventObj.event_start_hours"
              >
                <option>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
              </select> -->
              <div style="margin-top: 5px" v-if="hourRequire">
                <span style="color: red; letter-spacing: 1.5px">Required</span>
              </div>
            </div>
          </div>
          <div style="padding-top: 10px" class="">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label">&nbsp;
              </label>
              <div class="control" style="padding-top: 26px;">:</div>
              </div>
          <div style="padding-top: 10px" class="col-lg-1 col-md-1 col-1">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >&nbsp;</label
            >
            <div class="control">
              <div class="box_time">
                <i
                  class="fas fa-caret-up arrow"
                  v-on:click="incrementStartMinutes"
                ></i>
                <div>
                  <input
                    style="
                      border-radius: none;
                      border: none;
                      text-align: center;
                      box-shadow: none;
                      color: #929292;;
                      font-weight: bold;
                      height: 20px;
                      display: block;
                    "
                    class="input"
                    v-model="eventObj.event_start_minutes"
                  />
                </div>
                <i
                  class="fas fa-caret-down arrow"
                  v-on:click="decrementStartMinutes"
                ></i>
              </div>
              <!-- <select
                style="border-radius: 15px"
                class="input"
                v-model="eventObj.event_start_minutes"
              >
                <option>00</option>
                <option>15</option>
                <option>30</option>
                <option>45</option>
              </select> -->
              <div style="margin-top: 5px" v-if="minuteRequire">
                <span style="color: red; letter-spacing: 1.5px">Required</span>
              </div>
            </div>
          </div>
          <div style="padding-top: 10px" class="col-lg-1 col-md-1 col-1">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >&nbsp;</label
            >
            <div class="control">
              <div class="box_time">
                <i
                  class="fas fa-caret-up arrow"
                  v-on:click="incrementAmPm"
                ></i>
                <div>
                  <input
                    style="
                      border-radius: none;
                      border: none;
                      text-align: center;
                      box-shadow: none;
                      color: #929292;;
                      font-weight: bold;
                      height: 20px;
                      display: block;
                    "
                    class="input"
                    v-model="eventObj.event_start_AmPm"
                  />
                </div>
                <i
                  class="fas fa-caret-down arrow"
                  v-on:click="decrementAmPm"
                ></i>
              </div>
              <!-- <select
                style="border-radius: 15px"
                class="input"
                v-model="eventObj.event_start_AmPm"
              >
                <option>AM</option>
                <option>PM</option>
                <option>Military</option>
              </select> -->
              <div style="margin-top: 5px" v-if="ampmRequire">
                <span style="color: red; letter-spacing: 1.5px">Required</span>
              </div>
            </div>
          </div>

          <div style="padding-top: 10px" class="col-lg-1 col-md-1 col-1">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
            >
              &nbsp;</label
            >
            <div class="control">
              <div class="box_time">
                <i
                  class="fas fa-caret-up arrow"
                  v-on:click="incrementTimeZone"
                ></i>
                <div>
                  <input
                    style="
                      border-radius: none;
                      border: none;
                      text-align: center;
                      box-shadow: none;
                      color: #929292;;
                      font-weight: bold;
                      height: 20px;
                      display: block;
                    "
                    class="input"
                    v-model="eventObj.event_start_timezone"
                  />
                </div>
                <i
                  class="fas fa-caret-down arrow"
                  v-on:click="decrementTimeZone"
                ></i>
              </div>
              <!-- <select
                style="border-radius: 15px"
                class="input"
                v-model="eventObj.event_start_timezone"
              >
                <option value="" disabled selected>Please Select</option>
                <option
                  v-for="(item, index) in timezones"
                  :value="item.id"
                  :key="index"
                >
                  {{ item.title }}
                </option>
              </select> -->
              <div style="margin-top: 5px" v-if="timezoneRequire">
                <span style="color: red; letter-spacing: 1.5px">Required</span>
              </div>
            </div>
          </div>

          <div style="padding-top: 10px" class="col-lg-2  col-md-2 col-2">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Duration</label
            >
            <div class="control">
              <select
                style="border-radius: 15px"
                class="input"
                v-model="eventObj.event_duration"
              >
                <option value="" disabled selected>Please Select</option>
                <option>30 Minutes</option>
                <option>60 Minutes</option>
                <option>90 Minutes</option>
              </select>
              <div style="margin-top: 5px" v-if="durationRequire">
                <span style="color: red; letter-spacing: 1.5px">Required</span>
              </div>
            </div>
          </div>

          <div style="padding-top: 10px" class="col-lg-2 col-md-2 col-4">
            <label
              style="text-align: left; letter-spacing: 1.5px; color: #929292"
              class="label"
              >Max Group Size</label
            >
            <div class="control">
              <select
                style="border-radius: 15px"
                class="input"
                v-model="eventObj.event_group"
              >
                <option value="" disabled selected>Please Select</option>
                <option>upto 10</option>
                <option>upto 25</option>
                <option>upto 50</option>
                <option>upto 75</option>
                <option>upto 100</option>
              </select>
              <div style="margin-top: 5px" v-if="groupRequire">
                <span style="color: red; letter-spacing: 1.5px">Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class="field" v-on:click="showdata">
        <div v-if="show">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292"
                class="label"
                >Optional advanced settings
                <i
                  data-toggle="collapse"
                  data-target="#demo"
                  style="margin-left: 30px; cursor: pointer"
                  class="fas fa-plus"
                ></i>
              </label>
            </div>
          </div>
        </div>
        <div v-if="!show">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292"
                class="label"
                >Optional advanced settings
                <i
                  data-toggle="collapse"
                  data-target="#demo"
                  style="margin-left: 30px; cursor: pointer"
                  class="fas fa-minus"
                ></i>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div id="demo" class="collapse">
        <div class="field">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <br />
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292"
                class="label"
                >Languages spoken during Event
              </label>
            </div>
            <div
              style="
                padding-right: 0px !important;
                padding-left: 0px !important;
              "
              class="col-lg-12 col-md-12 col-12"
            >
              <br />
              <vue-select-image
                :dataImages="languages"
                :useLabel="true"
                :is-multiple="true"
                :height="h"
                :weight="w"
                @onselectmultipleimage="onSelectMultipleLanguage"
              >
              </vue-select-image>
            </div>
          </div>
        </div>
        <br />

        <div class="field">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <label
                style="
                  text-align: left;
                  letter-spacing: 1.5px;
                  color: #929292;
                  white-space: initial;
                "
                class="label"
                >What do attendess needs to do before the event? Any
                preparation, downlaods or items to bring?</label
              >
              <div class="control">
                 <textarea
                    style="height: auto; border-radius: 15px"
                    :maxlength="650"
                    class="input"
                    v-model="eventObj.event_attendees_do"
                    rows="4"
                    cols="50"
                    placeholder="Event Description"
                  ></textarea>
                <!-- <input
                  class="input"
                  :maxlength="650"
                  style="border-radius: 15px"
                  type="text"
                  v-model="eventObj.event_attendees_do"
                /> -->
              </div>
            </div>
          </div>
        </div>

        <br />
        <div class="field">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-4">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292"
                class="label"
                >Attendees</label
              >
              <div class="control">
                <select
                  style="border-radius: 15px; color:#929292;;"
                  class="input"
                  v-model="eventObj.event_attendees"
                >
                  <option value="" disabled selected>Please Select</option>
                  <option>Public</option>
                  <option>Private</option>
                </select>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-4">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292; text-transform: capitalize;"
                class="label"
                >Invite others?</label
              >
              <div class="control">
                <select
                  style="border-radius: 15px; color:#929292;;"
                  class="input"
                  v-model="eventObj.event_invite"
                >
                  <option value="" disabled selected>Please Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-4">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292;"
                class="label"
                >Public attendees name display?</label
              >
              <div class="control">
                <select
                  style="border-radius: 15px; color:#929292;;"
                  class="input"
                  v-model="eventObj.event_name_display"
                >
                  <option value="" disabled selected>Please Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div class="field">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292"
                class="label"
                >Co-Hosts</label
              >
              <div class="control">
                <input
                  class="input"
                  style="border-radius: 15px"
                  type="text"
                  v-model="eventObj.event_hosts"
                  placeholder="Select Co-Hosts"
                />
              </div>
            </div>
          </div>
        </div>

        <br />

        <div class="field">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292"
                class="label"
                >Event Keywords</label
              >
              <div class="control">
                <input
                  class="input"
                  style="border-radius: 15px"
                  type="text"
                  v-model="eventObj.event_keywords"
                  placeholder="Select Event Keywords<"
                />
              </div>
            </div>
          </div>
        </div>

        <br />

        <div class="field">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <label
                style="text-align: left; letter-spacing: 1.5px; color: #929292"
                class="label"
                >Any other question you would like to ask attendees?</label
              >
              <div>
                <textarea
                  style="height: auto; border-radius: 15px"
                  :maxlength="350"
                  class="input"
                  v-model="eventObj.event_questions"
                  rows="4"
                  cols="50"
                  placeholder=""
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <br />
            <br />

            <button
              id="button"
              style="
                width: 100%;
                letter-spacing: 1.5px;
                font-size: 1.1em;
                border-radius: 12px;
                color: white;
                border-color: #ff8354;
                background-color: #ff8354;
                font-weight: 500;
              "
              class="btn btn-outline-danger"
            >
              CREATE
              <img
                v-if="loading"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import EventService from "../services/user.service";
export default {
  name: "create-event",
  data: function () {
    return {
      loading: false,
      titleRequire: false,
      descriptionRequire: false,
      imageRequire: false,
      categoryRequire: false,
      dateRequire: false,
      hourRequire: false,
      minuteRequire: false,
      timezoneRequire: false,
      ampmRequire: false,
      durationRequire: false,
      groupRequire: false,
      h: "25px",
      w: "25px",
      languages: [],
      categories: [],
      timezones: [],
      url: null,
      show: true,
      allTimeZones: ['GMT', 'UTC', 'ECT', 'EET', 'ART', 'EAT', 'MET', 'NET', 'PLT', 'IST', 'BST', 'VST', 'CTT', 'JST', 'ACT', 'AET', 'SST', 'NST', 'MIT', 'HST', 'AST', 'PST', 'PNT', 'MST', 'CST', 'EST', 'IET', 'PRT', 'CNT', 'AGT', 'BET', 'CAT'],
      initialTimeZone: 0,
      eventObj: {
        id: "", 
        expand: false, 
        file: "", 
        event_title: "",
        event_categories: [],
        event_languages: "",
        event_description: "",
        event_date: "",
        event_start_time: "",
        event_start_hours: 1,
        event_start_minutes: 0,
        event_start_timezone: "",
        event_start_AmPm: "AM",
        event_duration: "",
        event_group: "",
        event_attendees_do: "",
        event_attendees: "",
        event_invite: "",
        event_hosts: "",
        event_questions: "",
        event_keywords: "",
        event_name_display: "",
      },
    };
  },
  mounted() {
    this.eventObj.event_start_timezone = this.allTimeZones[0];
    // let url = "https://answebtechnologies.in/";
    // let url = "http://localhost/";
    let url = "http://flooplife.com/";
    axios.get(url + "flooopadmin/api/category/read.php").then((response) => {
      var result = response.data.records;
      result.forEach((element) => {
        var category = {};
        category.id = element.id;
        category.alt = element.cat_title;
        category.src = element.path;
        if (element.cat_title != "Business and Entrepreneurship") {
          this.categories.push(category);
        }
      });
    });

    axios.get(url + "flooopadmin/api/language/read.php").then((response) => {
      var result = response.data.records;
      result.forEach((element) => {
        var language = {};
        language.id = element.id;
        language.alt = element.lang_title;
        language.src = element.path;
        this.languages.push(language);
      });
    });

    axios.get(url + "flooopadmin/api/timezone/read.php").then((response) => {
      this.timezones = response.data.records;
    });
  },
  methods: {
    loadCategories: function () {
      this.categories = [];
      axios.get(url + "flooopadmin/api/category/read.php").then((response) => {
        var result = response.data.records;
        result.forEach((element) => {
          var category = {};
          category.id = element.id;
          category.alt = element.cat_title;
          category.src = element.path;
          if (element.cat_title != "Business and Entrepreneurship") {
            this.categories.push(category);
          }
        });
      });
    },
    onSelectMultipleCategory: function (data) {
      this.eventObj.event_categories = [];
      data.forEach((element) => {
        this.eventObj.event_categories.push(element.id);
      });
    },
    onSelectMultipleLanguage: function (data) {
      this.eventObj.event_languages = [];
      data.forEach((element) => {
        this.eventObj.event_languages.push(element.id);
      });
    },
    onFileChange(e) {
      this.eventObj.file = e.target.files[0];
      this.url = URL.createObjectURL(this.eventObj.file);
    },
    showdata: function () {
      this.show = !this.show;
    },
    incrementStartHours: function () {
      let i = 1;
      if (this.eventObj.event_start_hours <= 11) {
        this.eventObj.event_start_hours++;
      }
    },
    decrementStartHours: function () {
      let i = 1;
      if (this.eventObj.event_start_hours > 1) {
        this.eventObj.event_start_hours--;
      }
    },
    incrementStartMinutes: function () {
      let i = 15;
      if (this.eventObj.event_start_minutes <= 45) {
        this.eventObj.event_start_minutes+=15;
      }
    },
    decrementStartMinutes: function () {
      let i = 1;
      if (this.eventObj.event_start_minutes > 0) {
        this.eventObj.event_start_minutes-=15;
      }
    },
    incrementAmPm: function () {
     this.eventObj.event_start_AmPm = "AM"
    },
    decrementAmPm: function () {
     this.eventObj.event_start_AmPm = "PM"
    },
    incrementTimeZone : function(){
      let i = 0;
      this.initialTimeZone++
      if (this.eventObj.event_start_minutes <= 31) {
      this.eventObj.event_start_timezone = this.allTimeZones[this.initialTimeZone - 1];
      }
      
    },
    decrementTimeZone : function(){
      // let i = 1;
      this.initialTimeZone--
      if (this.eventObj.event_start_minutes >= 0) {
      this.eventObj.event_start_timezone = this.allTimeZones[this.initialTimeZone - 1];
      }
    },

    submit(event) {
      event.preventDefault();
      var payload = this.eventObj;
      payload["id"] = 1;
      const eventToPost = { ...payload };
      if (this.eventObj.event_title == "") {
        this.titleRequire = true;
        return;
      } else {
        this.titleRequire = false;
      }
      if (this.eventObj.event_description == "") {
        this.descriptionRequire = true;
        return;
      } else {
        this.descriptionRequire = false;
      }
      if (this.eventObj.file == "") {
        this.imageRequire = true;
        return;
      } else {
        this.imageRequire = false;
      }
      if (this.eventObj.event_categories.length == 0) {
        this.categoryRequire = true;
        return;
      } else {
        this.categoryRequire = false;
      }
      if (this.eventObj.event_date == "") {
        this.dateRequire = true;
        return;
      } else {
        this.dateRequire = false;
      }
      if (this.eventObj.event_start_hours == "") {
        this.hourRequire = true;
        return;
      } else {
        this.hourRequire = false;
      }
      if (this.eventObj.event_start_minutes == "") {
        this.minuteRequire = true;
        return;
      } else {
        this.minuteRequire = false;
      }
      if (this.eventObj.event_start_timezone == "") {
        this.timezoneRequire = true;
        return;
      } else {
        this.timezoneRequire = false;
      }
      if (this.eventObj.event_start_AmPm == "") {
        this.ampmRequire = true;
        return;
      } else {
        this.ampmRequire = false;
      }
      if (this.eventObj.event_duration == "") {
        this.durationRequire = true;
        return;
      } else {
        this.durationRequire = false;
      }
      if (this.eventObj.event_group == "") {
        this.groupRequire = true;
        return;
      } else {
        this.groupRequire = false;
      }
      // post data
      this.loading = true;
      EventService.createEvent(eventToPost).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          this.loading = false;
          Vue.$toast.success(response.data.message, {
            duration: 2000,
          });
          this.url = null;
          this.eventObj = {
            id: "",
            expand: false,
            file: "",
            event_title: "",
            event_categories: [],
            event_languages: "",
            event_description: "",
            event_date: "",
            event_start_time: "",
            event_start_hours: "",
            event_start_minutes: "",
            event_start_timezone: "",
            event_start_AmPm: "",
            event_duration: "",
            event_group: "",
            event_attendees_do: "",
            event_attendees: "",
            event_invite: "",
            event_hosts: "",
            event_questions: "",
            event_keywords: "",
            event_name_display: "",
          };
          this.$router.push("/event-detail/"+response.data.event_id);
          // this.$router.push("/my-account");
        },
        (error) => {
          this.loading = false;
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
  },
};
</script>
<style>
#preview {
  display: flex;
  justify-content: left;
  align-items: left;
  padding-top: 30px;
}

#preview img {
  width: 190px;
  height: 125px;
  border-radius: 14px;
}
.btn-file {
  position: relative;
  overflow: hidden;
}
.btn {
  border-radius: 12px !important;
}
.btn-primary {
  color: #929292 !important;
  background-color: #fff !important;
  border-color: #929292 !important;
}
.btn-file input[type="file"] {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  background: white;
  cursor: inherit;
  display: block;
}
.label {
  padding: 0.2em 0em !important;
}
.container {
  max-width: 1222px !important;
}
.vue-select-image__thumbnail {
  width: 240px !important;
  border: none !important;
  box-shadow: none !important;
}
.vue-select-image__thumbnail--selected {
  background: #0077a2 !important;
  color: white;
  text-align: center;
  border-radius: 20px !important;
  border: 0px !important;
  padding: 0 !important;
}
.vue-select-image__thumbnail {
  border-radius: 20px !important;
  text-align: center !important;
}
.vue-select-image__img {
  border-radius: 20px !important;
  padding: 4px;
}
.editing {
  background-color: #fff8db;
}
.vue-select-image__lbl {
  line-height: 3;
  display: block;
  width: 100%;
  background: white;
  padding: 0;
  color: #929292;
  border-bottom-right-radius: 15px !important;
  border-bottom-left-radius: 15px !important;
}

/* :increment :decrement arrows */
.box_time {
  width: 55px;
  display: block;
  text-align: center;
  font-size: 20px;
  color:#929292;
}
.arrow {
  font-size: 25px;
  color: #929292;;
  cursor: pointer;
}

.arrow:hover {
  cursor: pointer;
}
.input{
  color:#929292 !important;
}
.vue-select-image__item{
  width: 20%;
}
</style>
