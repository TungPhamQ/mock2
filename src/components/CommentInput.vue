<template>
    <div class="comment-input">
        <img src="@/assets/avatar1.png" class="avatar" />
        <input type="text" placeholder="Write a comment..." />
        <button>Post</button>
    </div>
</template>

<script>
export default {
    props: {},
    components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comment-input {
    display: flex;
    align-items: center;
    height: 40px;
    margin-top: 24px;
    position: relative;
    img {
        height: 40px;
        widows: 40px;
    }
    input {
        background: #f0f0f0;
        border-radius: 20px;
        border: none;
        width: 100%;
        height: 40px;
        padding: 8px 12px;
        margin-left: 8px;
    }
    button {
        position: absolute;
        right: 0;
        width: 61px;
        height: 32px;
        background: #007c7c;
        opacity: 0.4;
        color: #fff;
        border: none;
        border-radius: 40px;
        margin: 4px;

        font-weight: 700;
        font-size: 0.875rem;
        line-height: 24px;
        cursor: pointer;
    }
}
</style>
