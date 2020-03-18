<template>
    <div>
        <nav-bar/>

        <router-view />
    </div>
</template>

<script>
    import NavBar from "../components/navBar";
    export default {
        name: "pages",
        components: {NavBar}
    }
</script>

<style scoped>

</style>