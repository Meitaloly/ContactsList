<template>
    <div style="margin-top:50px;">
        <div id="appContainer">
            <ContactsList/>
        </div>
    </div>
</template>

<script>
    import ContactsList from './components/ContactsList.vue'

    export default {
        name: 'App',
        components: {
            ContactsList
        }
    }
</script>

<style>
    #appContainer {
        max-width: 600px;
        min-width: 400px;
        background-color: #d8e8fa;
        min-width: 300px;
        margin: auto;
        width: 70%;
        border: 1px solid #b78cff;
        border-radius: 20px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
