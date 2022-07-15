<template>
    <div>
        <div class="survey-view">
            <div class="title">
                <img src="@/assets/clipboard-check.svg" />
                <h1>Survey</h1>
            </div>
            <div class="post-area">
                <div class="post-item">
                    <SurveyPost />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SurveyPost from "../components/SurveyPost.vue";

export default {
    components: { SurveyPost },
};
</script>


<style scoped lang="scss">
.survey-view {
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
        min-height: auto;
    }
}
</style>
