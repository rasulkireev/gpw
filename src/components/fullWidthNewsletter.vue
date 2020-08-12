<template>
    <div class="p-4 mb-6 border-2 border-green-300 rounded">
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <p class="mb-2 text-xl">
          {{ description }}
        </p>

        <div>
          <form
          name="add-subscriber"
          id="myForm"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          enctype="application/x-www-form-urlencoded"
          @submit.prevent="handleFormSubmit"
          class="flex flex-col md:flex-row">
            <input type="hidden" name="form-name" value="add-subscriber" />
            <input type="text" name="userName" v-model="formData.userName" placeholder="First Name" class="w-full p-1 mb-2 leading-tight text-gray-800 bg-gray-200 border border-gray-500 rounded appearance-none md:h-10 md:mr-2 focus:outline-none focus:bg-white md:w-64">
            <input type="email" name="userEmail" v-model="formData.userEmail" placeholder="Email" class="w-full p-1 mb-2 leading-tight text-gray-800 bg-gray-200 border border-gray-500 rounded appearance-none md:mr-2 md:h-10 focus:outline-none focus:bg-white md:w-64">
            <input type="hidden" name="tags" v-model="formData.tags" value="add-subscriber" />
            <button type="submit" name="button" class="w-full text-lg font-semibold text-center text-white no-underline bg-green-500 border border-green-500 rounded cursor-pointer md:h-10 sm:w-32">Subscribe</button>
          </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['title', 'description', 'tags', 'metadata'],
    
    data() {
        return {
            formData: {
                userEmail: "",
                userName: "",
                tags: this.tags,
                metadata: this.metadata,
            },
        }
    },

    methods: {
        encode(data) {  
            const formData = new FormData();
            
            for (const key of Object.keys(data)) {
                formData.append(key, data[key]);
            }
            
            return formData;
        },

        handleFormSubmit(e) {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
            };

            axios.post(
                location.href, 
                this.encode({
                    'form-name': e.target.getAttribute("name"),
                    ...this.formData,
                }),
                axiosConfig
            )
            .then(data => console.log(data))
            .catch(error => console.log(error))
            .then(document.getElementById("myForm").innerHTML = `
                <div class="w-full p-2 text-lg text-gray-700 bg-green-100 border border-green-700 rounded">
                    Thank you! I received your submission.
                </div>
            `)
        }
    }
}
</script>

<style>

</style>