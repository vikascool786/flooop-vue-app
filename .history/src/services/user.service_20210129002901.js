import axios from 'axios';
// const API_URL = 'https://answebtechnologies.in/flooopadmin/api/';
// const API_URL = 'http://sh009.hostgator.tempwebhost.net/~a1610nqz/flooopadmin/api/';
// const API_URL = 'http://floooplife.com/flooopadmin/api/';
const API_URL = 'http://localhost/flooopadmin/api/';

class EventService {
 
  getEvents(page) {
    let loginUser = JSON.parse(localStorage.getItem('user'));
    var form = new FormData();
    form.append("page", page);  //console.log('page:'+page);
    if (loginUser != null) {
      form.append("jwt", loginUser.jwt);  
    }
    return axios({
        method: "post",
        url: API_URL + 'event/read.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  getCatEvents(page,cid) {
    let loginUser = JSON.parse(localStorage.getItem('user'));
    var form = new FormData();
    form.append("page", page); 
    form.append("cid", cid); 
    if (loginUser != null) {
      form.append("jwt", loginUser.jwt);  
    }
    return axios({
        method: "post",
        url: API_URL + 'event/read.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  getEvent(id) {
    var form = new FormData();
    let loginUser = JSON.parse(localStorage.getItem('user'));
    form.append("id", id);
    if (loginUser != null) {
      form.append("jwt", loginUser.jwt);  
    }
    return axios({
        method: "post",
        url: API_URL + 'event/read_single.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  isJoined(id) {
    var form = new FormData();
    let loginUser = JSON.parse(localStorage.getItem('user'));
    form.append("event_id", id);
    if (loginUser != null) {
      form.append("jwt", loginUser.jwt); 
    }
      return axios({
        method: "post",
        url: API_URL + 'event/is_joined.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  joinEvent(id) {
    let loginUser = JSON.parse(localStorage.getItem('user'));
    var form = new FormData();
    form.append("event_id", id);
    form.append("jwt", loginUser.jwt);
    return axios({
        method: "post",
        url: API_URL + 'event/join.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  cancelEvent(id) {
    let loginUser = JSON.parse(localStorage.getItem('user'));
    var form = new FormData();
    form.append("event_id", id);
    form.append("jwt", loginUser.jwt);
    return axios({
        method: "post",
        url: API_URL + 'event/cancel.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  createEvent(eventToPost) {
    var event_start_time = eventToPost.event_start_hours +" : "+ eventToPost.event_start_minutes +" "+  eventToPost.event_start_timezone;
    var form = new FormData();
    let loginUser = JSON.parse(localStorage.getItem('user'));
    form.append("jwt", loginUser.jwt);
    form.append("id", eventToPost.id);
    form.append("event_title", eventToPost.event_title);
    form.append("file", eventToPost.file);
    form.append("event_categories", eventToPost.event_categories);
    form.append("event_languages", eventToPost.event_languages);
    form.append("event_description", eventToPost.event_description);
    form.append("event_date", eventToPost.event_date);
    form.append("event_start_time", event_start_time);
    form.append("event_start_hours", eventToPost.event_start_hours);
    form.append("event_start_minutes", eventToPost.event_start_minutes);
    form.append("event_start_timezone", eventToPost.event_start_timezone);
    form.append("event_start_AmPm", eventToPost.event_start_AmPm);
    form.append("event_duration", eventToPost.event_duration);
    form.append("event_group", eventToPost.event_group.replace("upto", ""));
    form.append("event_attendees_do", eventToPost.event_attendees_do);
    form.append("event_attendees", eventToPost.event_attendees);
    form.append("event_invite", eventToPost.event_invite);
    form.append("event_keywords", eventToPost.event_keywords);
    form.append("event_hosts", eventToPost.event_hosts);
    form.append("event_questions", eventToPost.event_questions);
    form.append("event_name_display", eventToPost.event_name_display);
    return axios({
        method: "post",
        url: API_URL + 'event/create.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  editEvent(eventToPost) {
    var event_start_time = eventToPost.event_start_hours +" : "+ eventToPost.event_start_minutes +" "+  eventToPost.event_start_timezone;
    var form = new FormData();
    let loginUser = JSON.parse(localStorage.getItem('user'));
    form.append("jwt", loginUser.jwt);
    form.append("id", eventToPost.id);
    form.append("event_title", eventToPost.event_title);
    form.append("file", eventToPost.file);
    form.append("event_image", eventToPost.event_image);
    form.append("event_categories", eventToPost.event_categories);
    form.append("event_languages", eventToPost.event_languages);
    form.append("event_description", eventToPost.event_desc);
    form.append("event_date", eventToPost.event_date);
    form.append("event_start_time", event_start_time);
    form.append("event_start_hours", eventToPost.event_start_hours);
    form.append("event_start_minutes", eventToPost.event_start_minutes);
    form.append("event_start_timezone", eventToPost.timezone);
    form.append("event_start_AmPm", eventToPost.event_ampm);
    form.append("event_duration", eventToPost.event_duration);
    form.append("event_group", eventToPost.event_group.replace("upto", ""));
    form.append("event_attendees_do", eventToPost.event_attendees_do);
    form.append("event_attendees", eventToPost.event_attendees);
    form.append("event_invite", eventToPost.event_invite);
    form.append("event_keywords", eventToPost.event_keywords);
    form.append("event_hosts", eventToPost.event_hosts);
    form.append("event_questions", eventToPost.event_questions);
    form.append("event_name_display", eventToPost.event_name_display);
    return axios({
        method: "post",
        url: API_URL + 'event/edit.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  inviteEvent(dataToPost) {
    var form = new FormData();
    let loginUser = JSON.parse(localStorage.getItem('user'));
    if(loginUser!=null)
    form.append("jwt", loginUser.jwt); //alert(loginUser.jwt);
    form.append("event_id", dataToPost.id);
    form.append("invite_email", dataToPost.email);
    return axios({
        method: "post",
        url: API_URL + 'event/invite.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }
  addFavouriteEvent(id) {
    let loginUser = JSON.parse(localStorage.getItem('user'));
    var form = new FormData();
    form.append("event_id", id);
    form.append("jwt", loginUser.jwt);
    return axios({
        method: "post",
        url: API_URL + 'event/favourite.php',
        data: form,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
  }

}

export default new EventService();
