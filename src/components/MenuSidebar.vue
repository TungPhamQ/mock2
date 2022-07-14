<template>
    <div class="menu-sidebar">
        <div class="menu-sidebar-channel">
            <div
                v-for="item in menubarButtons"
                :key="item.name"
                class="menu-item"
                :class="[item.name == 'Technology' ? activeClass : '']"
            >
                <router-link :to="item.linkPage" class="title">
                    <img :src="item.iconSrc" />
                    <p>{{ item.name }}</p></router-link
                >
                <p class="post-amount">{{ item.newPostAmount }}</p>
            </div>
        </div>
        <div class="survey-section menu-item">
            <router-link to="/survey" class="title"
                ><img src="@/assets/clipboard-check.png" />
                <p>Survey</p>
            </router-link>
            <p class="post-amount">12</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: String,
    },
    components: {},
    data() {
        return {
            menubarButtons: [
                {
                    name: "News",
                    iconSrc: require("../assets/siren-on.png"),
                    linkPage: "/news",
                    newPostAmount: 12,
                },
                {
                    name: "Technology",
                    iconSrc: require("../assets/chalkboard.png"),
                    linkPage: "/technology",
                    newPostAmount: 12,
                },
                {
                    name: "Music",
                    iconSrc: require("../assets/play.png"),
                    linkPage: "/music",
                    newPostAmount: "",
                },
                {
                    name: "Feedback",
                    iconSrc: require("../assets/comment-alt.png"),
                    linkPage: "/feedback",
                    newPostAmount: "99+",
                },
            ],
            isActive: true,
            activeClass: "activeClass",
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-sidebar {
    width: 260px;
    height: 100vh;
    // height: 100vh;
    border-right: 1px solid #e5e5e5;
    position: fixed;
    z-index: 10;
    top: 60px;
    background: #fff;
    .menu-sidebar-channel {
        border-bottom: 1px solid #e5e5e5;
    }
}
.menu-item {
    width: 228px;
    height: 40px;
    margin: 16px;
    padding: 8px;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 24px;
    border-radius: 20px;

    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        background: #e0efef;
    }

    .post-amount {
        position: absolute;
        right: 16px;
        background: #e72511;
        color: #fff;
        padding: 0 6px;
        border-radius: 40px;
    }
}
.activeClass {
    background: #007c7c;
    p {
        color: #fff;
    }
}
img {
    margin-right: 14px;
    width: 16px;
    height: 16px;
    margin: 12px 18px;

    // background: #000;

    filter: invert(0%);
}
.title {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 24px;
    display: flex;
    align-items: center;
}
</style>
