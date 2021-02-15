<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>

    </div>
</template>

<script>
    const defaultLayout = "app";

    export default {
        name: "Main",
        computed: {
            layout() {
                return (this.$route.meta.layout || defaultLayout) + "-layout";
            }
        }
    };
</script>
