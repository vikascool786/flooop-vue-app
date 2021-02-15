<template>
    <div class="meeting">
        <div class="container-zoom">
            <zoomFrame :nickname="name" :meetingId="meetingId" :password="password" :role="role" :email="email"/>
        </div>
    </div>
</template>

<script>
    import zoomFrame from "./zoomFrame.vue";

    export default {
        name: "meeting",
        data: function () {
            return {
                name: '',
                meetingId: '',
                password: '',
                role: '',
                email: '',
            }
        },
        components: {
            zoomFrame,
        },
        created : function (){

            this.name = this.$route.query.name;
            this.meetingId = this.$route.query.meetingId;
            this.password = this.$route.query.password;
            this.role = this.$route.query.role;
            this.email = this.$route.query.email;

            console.log(this.name);
            console.log(this.meetingId);
            console.log(this.password);
            console.log(this.role);
            console.log(this.email);
        }
    };
</script>

<style>
    .container-zoom {
        width: 70%;
        height: 100%;
    }
</style>