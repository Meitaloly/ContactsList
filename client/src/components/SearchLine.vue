<template>
    <div class="searchContainer">
        <img src="../assets/search.svg">
        <input placeholder="search..." type="text" v-on:input="debounceInput">
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: 'SearchLine',
        data() {
            return {
                searchStr: "",
            }
        },
        methods: {
            debounceInput: _.debounce(function (e) {
                this.searchStr = e.target.value;
                this.$emit('doSearch', this.searchStr);
            }, 1000)
        }
    }
</script>

<style scoped>
    .searchContainer {
        display: flex;
        margin: auto;
        width: 60%;
    }

    img {
        width: 20px;
        margin-right: 10px;

    }

    input {
        border-radius: 10px;
        height: 20px;
        font-size: 20px;
        width: 100%;
        padding: 10px;
    }

</style>
