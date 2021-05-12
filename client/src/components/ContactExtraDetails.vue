<template>
    <div class="extraDetailsContainer" v-if="contact">
        <img class="iconImg deleteImg" @click="handelDeleteClicked()" src="../assets/trash.svg">
        <div class="detailLine">
            <img class="iconImg" src="../assets/phone.svg">
            <div style="margin-left:10px;">{{contact.cell}}</div>
        </div>
        <div class="detailLine">
            <img class="iconImg" src="../assets/phone.svg">
            <div style="margin-left:10px;">{{contact.phone}}</div>
        </div>
        <div class="detailLine">
            <img class="iconImg" src="../assets/email.svg">
            <a style="margin-left:10px;" :href="`mailto: ${contact.email}`">{{contact.email}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactExtraDetails',
        props: {
            contact: {}
        },
        methods: {
            handelDeleteClicked() {
                this.$emit('deleteBtnClicked');
            }
        }

    }
</script>

<style scoped>

    .extraDetailsContainer {
        position: relative;

    }

    .detailLine {
        display: flex;
        margin: auto;
        padding: 5px;
        width: 90%;
    }

    .deleteImg {
        cursor: pointer;
        position: absolute;
        right: 30px;
    }

    .iconImg {
        width: 20px;
    }

</style>
