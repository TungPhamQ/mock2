<template>
    <div class="search-bar">
        <img src="../../assets/search.png" />
        <input type="text" placeholder="Search will seed post" />
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {};
    },
};
</script>

<style lang="scss">
.search-bar {
    position: relative;
    img {
        width: 14px;
        height: 14px;
        position: absolute;
        top: 13px;
        left: 17px;
    }
    input {
        border: none;
        background: #f0f0f0;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        width: 280px;
        height: 40px;
        background: #f0f0f0;
        border-radius: 54px;
        padding-left: 44px;

        outline: none;
    }
}
</style>