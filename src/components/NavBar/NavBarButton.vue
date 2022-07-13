<template>
    <div class="navbar-button-container">
        <div
            v-for="item in navbarButtons"
            :key="item.name"
            class="nav-button-item"
        >
            <img :src="item.iconSrc" />
            <router-link :to="item.linkPage" class="title">{{
                item.name
            }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            navbarButtons: [
                {
                    name: "Home",
                    iconSrc: require("../../assets/home.png"),
                    linkPage: "/home",
                },
                {
                    name: "Post",
                    iconSrc: require("../../assets/paper-plane.png"),
                    linkPage: "/post",
                },
                {
                    name: "Activity",
                    iconSrc: require("../../assets/heart.png"),
                    linkPage: "/activity",
                },
                {
                    name: "Bookmark",
                    iconSrc: require("../../assets/bookmark.png"),
                    linkPage: "/bookmark",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.navbar-button-container {
    display: flex;
    gap: 30px;
    align-items: center;
    .nav-button-item {
        display: flex;
        align-items: center;
        .title {
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 24px;
            text-decoration: none;
            color: #000;
            margin-left: 14px;
        }
    }
}
</style>