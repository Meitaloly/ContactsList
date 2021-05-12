<template>
    <div class="fullContactContainer">
        <div class="itemContainer" @click="handleContactClicked" v-if="contact">
            <div id="imgArea">
                <img id="contactImg" :class="contact.gender"
                     :src="contact.picture.medium">
            </div>
            <div id="nameArea">
                <div id="nameTitle">{{contact.name.title? contact.name.title: "No title was entered"}}</div>
                <div id="fullName">{{contact.name.first? contact.name.first: ""}} {{contact.name.last?
                    contact.name.last:
                    ""}}
                </div>
            </div>
            <div id="arrowArea">
                <img id="arrowImg" :class="contactClicked ? 'open': 'close'"
                     src="../assets/arrow-down.svg">
            </div>
        </div>
        <contact-extra-details
                @deleteBtnClicked="showConfirmMsg()"
                v-if="contactClicked" :contact="contact"></contact-extra-details>
        <vue-confirm-dialog/>
    </div>
</template>

<script>
    import ContactExtraDetails from "./ContactExtraDetails";

    export default {
        name: 'ContactItem',
        components: {ContactExtraDetails},
        props: {
            contact: {}
        },
        data() {
            return {
                contactClicked: false,
            }
        },
        methods: {
            handleContactClicked() {
                this.contactClicked = !this.contactClicked;
            },
            showConfirmMsg() {
                this.$confirm(
                    {
                        message: `You are about to delete ${this.contact.name.first} ${this.contact.name.last}! \n Are you sure you want to do that?`,
                        button: {
                            no: 'No',
                            yes: 'Yes'
                        },
                        /**
                         * Callback Function
                         * @param {Boolean} confirm
                         */
                        callback: confirm => {
                            if (confirm) {
                                this.$emit('deleteContact', this.contact._id);
                                this.$confirm.close();
                            }
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>

    h1 {
        text-align: center;
    }

    .fullContactContainer {
        border: 1px solid black;
        border-radius: 20px;
    }

    .itemContainer {
        position: relative;
        font-size: 18px;
        display: flex;
        padding: 15px;
        margin: auto;
        width: 90%;
    }

    #imgArea {
        width: 80px;
    }

    #nameArea {
        padding: 10px;
    }

    #fullName {
        font-weight: bold;
    }

    #contactImg {
        border-radius: 50%;
        border: 3px solid;
    }

    .female {
        border-color: green !important;
    }

    .male {
        border-color: red !important;
    }

    .close {
        transform: translateY(-50%) rotate(-90deg)
    }

    .open {
        transform: translateY(-50%)
    }

    #arrowImg {
        position: absolute;
        right: 20px;
        width: 20px;
        height: 20px;
        top: 50%;
    }

</style>
