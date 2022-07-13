<template>
    <div class="nav-bar">
        <nav>
            <a href="/#/home"><img src="../assets/logo.png" /></a>
            <NavBarButton />
            <SearchBar />
            <PersonalProfile />
        </nav>
    </div>
</template>

<script>
import NavBarButton from "./NavBar/NavBarButton.vue";
import SearchBar from "./NavBar/SearchBar.vue";
import PersonalProfile from "./NavBar/PersonalProfile.vue";

export default {
    props: {
        msg: String,
    },
    components: {
        NavBarButton,
        SearchBar,
        PersonalProfile,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    height: 60px;

    position: fixed;
    background: #fff;
    width: 100%;
    z-index: 10;
}
.nav-bar nav a {
    margin: 17px 0 20px 32px;
}
</style>
