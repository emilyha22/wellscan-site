<template>
    <form class="contact" method="POST" @submit.prevent="submitContactForm">
        <div class="row">
            <div class="col">
                <input
                    class="name"
                    name="_fname"
                    v-model="contactFormFirstName"
                />
                <br />
                <label>First Name</label>
            </div>
            <div class="col">
                <input
                    class="name"
                    name="_lname"
                    v-model="contactFormLastName"
                />
                <br />
                <label>Last Name</label>
            </div>
        </div>
        <input type="email" name="_replyto" v-model="contactFormEmail" />
        <br />
        <label>Your email</label>
        <br />
        <textarea
            name="message"
            class="form-message"
            v-model="contactFormMessage"
        ></textarea>
        <br />
        <label>Your message</label>
        <br />
        <button type="submit">Submit</button>
    </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import axios, { AxiosResponse, AxiosError } from "axios";

const contactFormFirstName: Ref<string> = ref("");
const contactFormLastName: Ref<string> = ref("");
const contactFormEmail: Ref<string> = ref("");
const contactFormMessage: Ref<string> = ref("");

const submitContactForm = async () => {
    const endpoint: string = "https://formspree.io/f/xrgojopk";

    const payload: object = {
        _fname: contactFormFirstName.value,
        _lname: contactFormLastName.value,
        _replyto: contactFormEmail.value,
        message: contactFormMessage.value,
    };

    const response: AxiosResponse = await axios.post(endpoint, payload);
}   
</script>