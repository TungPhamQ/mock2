<template>
    <div>
        <div class="techno-view">
            <div class="title">
                <img src="@/assets/laptop.png" />
                <h1>Technology</h1>
            </div>

            <div class="post-area">
                <div class="post-item">
                    <BlogPost />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
    props: {},
    components: { BlogPost },
};
</script>

<style scoped lang="scss">
.techno-view {
    position: relative;
    top: 60px;
    width: 620px;
    margin: auto;
    margin-top: 26px;
    .title {
        margin-bottom: 26px;
        h1 {
            margin-left: 15px;
            display: inline;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 36px;
        }
    }
}
.post-area {
    width: 100%;
    margin: auto;
    .post-item {
        min-height: calc(100vh + 60px);
    }
}
</style>
