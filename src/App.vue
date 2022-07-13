<template>
    <div id="app">
        <NavBar />
        <div class="main-view">
            <MenuSidebar />
            <router-view class="detail-view"></router-view>
        </div>
    </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import MenuSidebar from "./components/MenuSidebar.vue";

export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    components: {
        NavBar,
        MenuSidebar,
    },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

.main-view {
    display: flex;
}

.detail-view {
    background: #f8f8f8;
    width: calc(100vw - 260px);
    height: calc(100% + 60px);
    position: relative;
    right: 0;
    left: 260px;
    top: 60px;
    z-index: 0;
}

.avatar {
    border-radius: 50px;
}
</style>
