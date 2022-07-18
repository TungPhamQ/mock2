<template>
    <div class="personal-profile-container">
        <NotiButton />
        <img src="../../assets/Divider.png" class="avatar" />
        <p>Bessie Cooper</p>
        <img src="../../assets/caret-down.png" />
    </div>
</template>

<script>
import NotiButton from "./NotiButton.vue";
export default {
    props: {},
    data() {
        return {};
    },
    components: { NotiButton },
};
</script>

<style lang="scss" scoped>
.personal-profile-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .avatar {
        margin: 0 8px 0 22px;
    }
    p {
        margin-right: 12px;
    }
    img {
        margin-right: 39px;
        &:hover {
            background: #e0efef;
            padding: 8px 6px;
            border-radius: 20px;
        }
    }
}
</style>