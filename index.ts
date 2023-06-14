// This file is intended to load on the homepage.
import { createApp } from 'vue'
import './src/style.css'
import EmailForm from './src/components/EmailForm.vue'

const app = createApp(EmailForm)

app.mount('#email-app')