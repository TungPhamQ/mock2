<template>
    <div class="navbar-button-container">
        <div
            v-for="item in navbarButtons"
            :key="item.name"
            class="nav-button-item"
            :class="{ activeClass: isActive === item.name }"
            @click="choosePage(item.name)"
        >
            <font-awesome-icon :icon="item.icon" />
            <router-link :to="item.linkPage" class="title"
                ><p>{{ item.name }}</p></router-link
            >
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
                    icon: "fa-solid fa-house",
                    linkPage: "/home",
                },
                {
                    name: "Post",
                    icon: "fa-solid fa-paper-plane",
                    linkPage: "/post",
                },
                {
                    name: "Activity",
                    icon: "fa-solid fa-heart",
                    linkPage: "/activity",
                },
                {
                    name: "Bookmark",
                    icon: "fa-solid fa-bookmark",
                    linkPage: "/bookmark",
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

<style lang="scss">
.navbar-button-container {
    display: flex;
    gap: 30px;
    align-items: center;
    .nav-button-item {
        display: flex;
        align-items: center;
        &:hover {
            color: #007c7c;
        }
        .title {
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 24px;
            text-decoration: none;
            color: #000;
            margin-left: 14px;
            &:hover {
                color: #007c7c;
            }
        }
    }
}

.activeClass {
    p {
        color: #007c7c;
    }
    .svg-inline--fa {
        color: #007c7c;
    }
}
</style>