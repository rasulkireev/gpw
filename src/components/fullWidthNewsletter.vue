<template>
    <div id="emailFormDiv" class="p-4 mb-6 border-2 border-green-300 rounded">
        <p class="mb-2">
          Finally, consider signing up for my personal newsletter. I will update you on the latest articles and any interesting articles and resources I've encountered.
        </p>

        <div class="mb-2">
          <form
          name="add-subscriber"
          id="myForm"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleEmailForm"
          class="flex flex-col md:flex-row">
            <input type="hidden" name="form-name" value="add-subscriber" />
            <input type="email" v-model="userEmail" name="user_email" class="w-full p-1 mb-2 leading-tight text-gray-800 bg-gray-200 border border-gray-500 rounded appearance-none md:h-10 focus:outline-none focus:bg-white md:w-64" required="" id="id_user_email">
            <button type="submit" name="button" class="w-full text-lg font-semibold text-center text-white no-underline bg-green-500 border border-green-500 rounded cursor-pointer md:ml-2 md:h-10 sm:w-32">Subscribe</button>
          </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            userEmail: "",
        }
    },

    methods: {
        handleFormSubmit() {
            document.getElementById("myForm").innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`
            // await axios.post('/.netlify/functions/emailNewsletter', {
            //     body: {
            //         email: this.userEmail
            //     }
            // })
            // .then(data => console.log(data))
            // .catch(error => console.log(error))
        }
    }
}
</script>

<style>

</style>