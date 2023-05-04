<template>
  <div>
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <!-- Google Fonts -->

      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

      <title>
        WellSCAN - Nutrition Ranking technology for Food Banks and Food Pantries
      </title>
    </head>

    <section class="container-fluid header">
      <div class="container">
        <div class="row header-text justify-content-center align-items-center">
          <div class="col-lg-5 header-text">
            <h1>
              <span id="bold-header">Nutrition Ranking</span> for Food Banks and
              Pantries
            </h1>
            <p>
              WellSCAN is an ever-evolving suite of digital tools and products
              made to help food banks and food pantries better identify, rank,
              and log the nutritional quality of their inventory.
            </p>
            <p>
              WellSCAN's ranking technology can be accessed via the WellSCAN App
              or via API.
            </p>
            <a class="main-btn" href="#about">Learn More</a>
          </div>
          <div class="col-lg-7 wellscan-img">
            <img src="../assets/wellscan-model.png" />
          </div>
        </div>
      </div>
    </section>

    <section class="container intro">
      <div class="section-pad">
        <h2>What is WellSCAN?</h2>
        <p>
          The WellSCAN suite of technology is housed, licensed and serviced by
          the
          <a class="orange-text" href="https://dxgroup.core.uconn.edu"
            >University of Connecticut Digital Experience Group</a
          >, and includes the WellSCAN Global nutrition database, WellScan
          Connect API, and the WellSCAN app.
        </p>

        <p>
          Based on the latest nutrition guidance from
          <a
            class="orange-text"
            href="https://healthyeatingresearch.org/wp-content/uploads/2020/02/her-food-bank_FINAL.pdf"
            >Healthy Eating Research</a
          >, and research from the
          <a class="orange-text" href="https://uconnruddcenter.org/"
            >UConn Rudd Center on Food Policy & Obesity</a
          >, WellSCAN is a suite of digital tools aimed at helping food banks
          and pantries better identify and report on the nutritional quality of
          their inventory.
        </p>

        <p>
          This project has been made possible by support from
          <a class="orange-text" href="https://www.ahealthieramerica.org/">
            Partnership for a Healthier America</a
          >,
          <a class="orange-text" href="https://www.feedingamerica.org/"
            >Feeding America</a
          >, The
          <a class="orange-text" href="https://www.claneilfoundation.org/"
            >Claneil Foundation</a
          >
          and the
          <a class="orange-text" href="https://www.rwjf.org"
            >Robert Wood Johnson Foundation.</a
          >
        </p>

        <p>
          To learn about options for implementing WellSCAN at your organization,
          feel free to <a href="#contact">contact us</a>.
        </p>
        <div class="carrot-intro">
          <img src="../assets/wellscan-carrot-color.png" />
        </div>
      </div>
    </section>

    <section id="about" class="container-fluid gray">
      <section class="container section-pad">
        <h4>About</h4>
        <h2>The WellSCAN App</h2>
        <p>The WellSCAN App uses camera-based on-device barcode scanning to:</p>

        <div class="app-row row justify-content-center align-items-center">
          <div
            class="app-col col-lg-3"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src="../assets/search.png" />
            <h3>Identify</h3>
            <p>
              a food or beverage using its unique bar code and access the
              information from its nutrition facts panel.
            </p>
          </div>

          <div
            class="app-col col-lg-3"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img src="../assets/process.png" />
            <h3>Rank</h3>
            <p>the food using a pre-defined ranking algorithm.</p>
          </div>

          <div
            class="app-col col-lg-3"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <img src="../assets/record.png" />
            <h3>Record</h3>
            <p>
              the product and its nutritional ranking for review, or prep it for
              import into a food bank’s enterprise resource planning (ERP)
              system.
            </p>
          </div>
        </div>

        <p>
          To-date, with generous continued support from Partnership for A
          Healthier America, the WellSCAN App is being piloted at food banks and
          pantries throughout the US.
        </p>

        <p>
          For more tools to support nutrition ranking in food banks and
          pantries, check out
          <a
            class="orange-text"
            href="http://site.foodshare.org/site/PageServer?pagename=2017_programs_swap"
            >Supporting Wellness at Pantries (SWAP)</a
          >
          resources from the
          <a
            class="orange-text"
            href="http://site.foodshare.org/site/PageServer?pagename=institute"
            >Foodshare Institute for Hunger Research & Solutions.</a
          >
        </p>

        <p>
          WellSCAN is not a one-size-fits-all solution, but it is flexible and
          based entirely on input from the user community. For more information,
          <a href="#contact">contact us.</a>
        </p>
      </section>
    </section>

    <section class="container">
      <div class="row section-pad">
        <div class="col-md-5">
          <h4>About</h4>
          <h2>The WellSCAN Connect API</h2>
        </div>
        <div class="col-md-7 wellscan-api">
          <p>
            WellSCAN offers a freely accessible API through which users can
            access food quality ranking information programmatically via a
            UPC/barcode lookup. We can help you implement access within your
            inventory or ERP system.<br />
            <br />
            For information about using the WellSCAN Connect API, or for details
            about where and how it has already been implemented, please
            <a href="#contact">contact us.</a>
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="form container-fluid section-pad">
      <div class="container">
        <div class="form-container row">
          <div class="form-text col-lg-5">
            <img src="../assets/wellscan-carrot-color.png" />
            <h2>Contact Us</h2>
          </div>

          <div class="col-lg-7">
            <form
              class="contact"
              method="POST"
              @submit.prevent="submitContactForm"
            >
              <div class="row">
                <div class="col">
                  <input class="name" name="_fname" v-model="contactFormFirstName" />
                  <br />
                  <label>First Name</label>
                </div>
                <div class="col">
                  <input class="name" name="_lname" v-model="contactFormLastName" />
                  <br />
                  <label>Last Name</label>
                </div>
              </div>
              <input type="email" name="_replyto" v-model="contactFormEmail"/>
              <br />
              <label>Your email</label>
              <br />
              <textarea name="message" v-model="contactFormMessage"></textarea>
              <br />
              <label>Your message</label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="container-fluid">
      <div class="container">
        <img src="../assets/wellscan_branding-white.png" />
        <p>
          WellSCAN is a product of the
          <a class="white-text" href="https://dxgroup.core.uconn.edu"
            >University of Connecticut Digital Experience Group</a
          >, in partnership with the
          <a class="white-text" href="https://uconnruddcenter.org/"
            >UConn Rudd Center on Food Policy and Obesity</a
          >. Support provided by
          <a class="white-text" href="https://ahealthieramerica.org"
            >Partnership for a Healthier America</a
          >, Feeding America, and the Robert Wood Johnson Foundation.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AOS from "aos";
import type { Ref } from "vue";
import axios, { AxiosResponse, AxiosError } from "axios";
AOS.init();

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
    console.log(response);
}   
</script>