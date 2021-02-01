<template>
  <div class="level-item has-text-centered">
    <div style="    width: 100%;" class="ads-grid py-sm-6 py-6">
      <div style="padding-right: 4vw;padding-left: 4vw;" class="py-xl-4 py-lg-2">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">Category:{{cat_title}}</div>
          <div class="col-lg-6 col-md-6 col-12">
            <br />
            <div>
              <button
                id="button"
                style="letter-spacing:1.5px;width: 50%; color: #ff7f00;border-color: #ff7f00;font-weight: 500;float: right;border-radius:15px;"
                type="button"
                class="btn btn-outline-danger"
              >Search Events</button>

            </div>
          </div>
        </div>

        <br />
        <br />

        <EventsComponent page="Category"> </EventsComponent>

        
      </div>
    </div>
  </div>
</template>

<script>

import EventsComponent from "../components/eventsComponent";
import axios from 'axios';
export default {
  name: "category",
  data:function(){
    return {
      cat_title:"",
    }
  },
  components : {EventsComponent},
  mounted() {
      var cid = this.$route.params.cid;
      axios
      .get("https://answebtechnologies.in/flooopadmin/api/category/read_single.php?id="+cid)
      .then(response => {
        var result = response.data.records;
        result.forEach(element => {
          this.cat_title = element.cat_title;
        })
        //this.cat_title= result.records; console.log(result);
      });

  }
}
</script>
<style>
.container {
  max-width: 1222px !important;
}
.editing {
  background-color: #fff8db;
}
</style>
