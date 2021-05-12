<template>
    <div class="notFoundContainer">
        {{msg}}
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: 'SearchLine',
        props: {msg: String},
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
    .notFoundContainer {
        text-align: center;
        font-size: 20px;
    }

</style>
