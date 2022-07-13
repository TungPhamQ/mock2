<template>
    <div class="comment-section">
        <div class="comment-item" v-for="comment in comments" :key="comment.id">
            <img :src="comment.avatarSrc" class="user-avatar" />
            <div>
                <span>
                    <h5 class="user-name">{{ comment.userName }}</h5>
                    <p class="posted-time">{{ comment.postedTime }}</p></span
                >
                <p class="comment-content">{{ comment.content }}</p>
            </div>
        </div>

        <a href="#">View all 27 comment</a>
        <CommentInput />
    </div>
</template>

<script>
import CommentInput from "./CommentInput.vue";
export default {
    props: { comments: Array },
    components: { CommentInput },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comment-section {
    margin: 16px;

    .comment-item {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .user-avatar {
            margin-right: 12px;
            border-radius: 50px;
        }
        .user-name {
            display: inline;
            margin-right: 8px;

            font-weight: 700;
            font-size: 0.875rem;
            line-height: 24px;
        }
        .posted-time {
            display: inline;

            font-weight: 400;
            font-size: 0.75rem;
            line-height: 18px;
        }

        .comment-content {
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 24px;
        }
    }
}
</style>
