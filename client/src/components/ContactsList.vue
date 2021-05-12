<template>
    <div class="listContainer">
        <h1>{{contacts.length}} Contacts</h1>
        <search-line @doSearch="doSearch"></search-line>
        <div v-if="contacts.length>0">
            <div class="marginTopFromSearch">
                <div v-for="(contact,c) in contacts" :key="c">
                    <contact-item @deleteContact="deleteContact" style="margin-top:10px;" :contact="contact"/>
                </div>
            </div>
        </div>
        <not-found class="marginTopFromSearch" v-else msg="There are no contacts to show"/>
    </div>
</template>

<script>
    import ContactItem from "./ContactItem";
    import SearchLine from "./SearchLine";
    import NotFound from "./NotFound";
    import axios from "axios";

    export default {
        name: 'ContactsList',
        components: {
            ContactItem,
            SearchLine,
            NotFound
        }, data() {
            return {
                contacts: [],
                baseUrl: "http://localhost:3030/api"
            }
        },
        created() {
            this.getContacts();
        },
        methods: {
            doSearch(searchStr) {
                let encodedSearchStr = encodeURI(searchStr);
                this.getContacts(encodedSearchStr);
            },
            getContacts(encodedSearchStr) {
                let url = `${this.baseUrl}/Contacts`;
                if (encodedSearchStr) {
                    url += `?name=${encodedSearchStr}`;
                }

                axios.get(url).then(res => {
                    if (res && res.data && res.data.status && res.data.data) {
                        this.contacts = res.data.data;
                    }
                })
            },
            deleteContact(contactId) {
                let url = `${this.baseUrl}/Contacts/${contactId}`;
                axios.delete(url).then(res => {
                    if (res && res.data && res.data.status) {
                        this.getContacts();
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .marginTopFromSearch {
        margin: 10px;
    }

    h1 {
        text-align: center;
    }

</style>
