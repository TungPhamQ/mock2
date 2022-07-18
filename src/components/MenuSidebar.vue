<template>
    <div class="menu-sidebar">
        <div class="menu-sidebar-channel">
            <div
                v-for="item in menubarButtons"
                :key="item.name"
                class="menu-item"
                :class="{ activeClass: isActive === item.name }"
                @click="choosePage(item.name)"
            >
                <router-link :to="item.linkPage" class="title">
                    <font-awesome-icon :icon="item.icon" />
                    <p>{{ item.name }}</p>

                    <p class="post-amount">{{ item.newPostAmount }}</p>
                </router-link>
            </div>
        </div>
        <div class="survey-section menu-item">
            <router-link to="/survey" class="title">
                <font-awesome-icon icon="fa-solid fa-clipboard" />
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
                    icon: "fa-solid fa-lightbulb",
                    linkPage: "/news",
                    newPostAmount: 12,
                },
                {
                    name: "Technology",
                    icon: "fa-solid fa-laptop",
                    linkPage: "/technology",
                    newPostAmount: 12,
                },
                {
                    name: "Music",
                    icon: "fa-solid fa-play",
                    linkPage: "/music",
                    newPostAmount: "",
                },
                {
                    name: "Feedback",
                    icon: "fa-solid fa-message",
                    linkPage: "/feedback",
                    newPostAmount: "99+",
                },
            ],
            isActive: "",
            activeClass: "activeClass",
        };
    },
    methods: {
        choosePage(item) {
            this.isActive = item;
        },
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
        color: #007c7c;
        .svg-inline--fa {
            color: #007c7c;
        }
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
        &:hover {
            color: #007c7c;
            color: #fff;
        }
    }
    .svg-inline--fa {
        color: #fff;
        &:hover {
            color: #fff;
        }
    }
    &:hover {
        background: #007c7c;
    }
}
img {
    margin-right: 14px;
    width: 16px;
    height: 16px;
    margin: 12px 18px;
}
.title {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 24px;
    display: flex;
    align-items: center;
    p {
        margin-left: 14px;
    }
    .svg-inline--fa {
        width: 16px;
        height: 16px;
        margin: 12px 18px;
    }
    &:hover {
        color: #007c7c;
        .svg-inline--fa {
            color: #007c7c;
        }
    }
}
</style>
