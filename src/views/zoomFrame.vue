<template>
    <div class="iframe-container">
        <meta charset="utf-8">
        <link type="text/css" rel="stylesheet" href="node_modules/@zoomus/websdk/dist/css/bootstrap.css"/>
        <link type="text/css" rel="stylesheet" href="node_modules/@zoomus/websdk/dist/css/react-select.css"/>

        <meta name="format-detection" content="telephone=no">
    </div>
</template>
<script>
    import {ZoomMtg} from "@zoomus/websdk";
    import Vue from "vue";

    console.log("checkSystemRequirements");
    console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

    // CDN version default
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');

    ZoomMtg.preLoadWasm();

    ZoomMtg.prepareJssdk();

    let API_KEY = '5Ox2R0GGRpSIiH0d3WnPeA';
    let API_SECRET = 'SHHDy0CeJvJVADDweUZMOYKhgwwcDiY2CsTT';

    export default {
        name: "ZoomFrame",
        data: function () {
            return {
                src: "",
                meetConfig: {},
                signature: {}
            };
        },

        props: {
            nickname: String,
            meetingId: String,
            password: String,
            role: String,
            email: String,
        },

        created: function () {
            // Meeting config object
            this.meetConfig = {
                apiKey: API_KEY,
                apiSecret: API_SECRET,
                meetingNumber: this.meetingId,
                userName: this.nickname,
                passWord: this.password,
                // leaveUrl: this.$router.resolve({name: 'Account'}).href,
                leaveUrl: window.location.origin,
                userEmail: this.email,
                role: parseInt(this.role, 10)
            };

            // Generate Signature function
            this.signature = ZoomMtg.generateSignature({
                meetingNumber: this.meetConfig.meetingNumber,
                apiKey: this.meetConfig.apiKey,
                apiSecret: this.meetConfig.apiSecret,
                role: this.meetConfig.role,
                success: function (res) {
                    // eslint-disable-next-line
                    console.log("success signature: " + res.result);
                }
            });

            // join function
            ZoomMtg.init({
                leaveUrl: this.meetConfig.leaveUrl,
                isSupportAV: true,
                success: () => {
                    ZoomMtg.join({
                        meetingNumber: this.meetConfig.meetingNumber,
                        userName: this.meetConfig.userName,
                        signature: this.signature,
                        apiKey: this.meetConfig.apiKey,
                        userEmail: this.meetConfig.userEmail,
                        passWord: this.meetConfig.passWord,
                        success: function (res) {
                            // eslint-disable-next-line
                            console.log("join meeting success");
                        },
                        error: function (res) {
                            // eslint-disable-next-line
                            console.log("JOIN ERROR");
                            console.log(res);
                            Vue.$toast.error(res.result, {
                                duration: 2000,
                            });
                        }
                    });
                },
                error: function (res) {
                    // eslint-disable-next-line
                    console.log("INIT ERROR");
                    console.log(res);
                    Vue.$toast.error(res.result, {
                        duration: 2000,
                    });
                }
            });
        },
        mounted: function () {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    #wc-footer-left + div {
        display: flex !important;
    }

    /*a {
        color: #333333 !important;
    }

    a:hover {
        box-shadow: none;
        border: none;
    }*/

    .dropdown-menu>li>a:hover{
        color: white !important;
        text-decoration: none !important;
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
    }

    .participant-more-options__participant-control-more + ul li > a,
    .chat-receiver-list__menu-item > a,
    .chat-more-options__chat-control-more + ul li > a,
    .chat-container .dropdown-menu>li>a {
        color: #333333 !important;
    }

    .chat-receiver-list__menu-item > a:hover,
    .chat-more-options__chat-control-more + ul li > a:hover,
    .chat-container .dropdown-menu>li>a:hover{
        box-shadow: none;
        border: none;
    }
</style>
