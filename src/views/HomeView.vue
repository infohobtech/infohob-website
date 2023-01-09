<script setup lang="ts">
import { reactive, ref } from "vue";
import TheButton from "../components/form/TheButton.vue";
import InputText from "../components/form/InputText.vue";
import TheCard from "../components/TheCard.vue";
const formData = reactive({
  name: "",
  email: "",
  mobile_number: ""
});

const services = [
  {
    icon: "/img/icons/recruitment-1.svg",
    title: "Tech Recruitment",
    description:
      "Find top tech talent and build a great team from our pool of qualified candidates"
  },
  {
    icon: "/img/icons/software-development-1.svg",
    title: "Software Development",
    description: "We build high quality websites, mobile apps and software"
  }
];

const clients = [
  {
    icon: "/img/icons/IHS_Towers.png",
    description: "Listed on the New York Stock Exchange (NYSE)"
  },
  {
    icon: "/img/icons/Layer3-1.png",
    description:
      "Recognised by the London Stock Exchange Group as a company to inspire Africa."
  },
  {
    icon: "/img/icons/ITF-1.png",
    description: "Nigeria’s regulatory agency for student internships"
  },
  {
    icon: "/img/icons/Suplias-1.png",
    description:
      "Funded by YCombinator, alongside top companies like AirBnB, Stripe and PayStack."
  }
];

const date = ref(new Date());
</script>

<template>
  <div class="home-page">
    <div class="intro-section px-3 px-md-0">
      <div class="container py-7">
        <div class="row ai-center">
          <div class="col-md-6">
            <h1 class="mt-6">
              Tech Recruitment and Software Development made easy
            </h1>
            <p class="mt-3">
              We are here to assist you in hiring diverse, top talent – remote,
              in-person, worldwide. Save hours of sourcing time and shorten your
              recruitment and outsourcing process.
            </p>

            <TheButton class="mt-4">Get Started</TheButton>
          </div>

          <div class="col-md-6">
            <img src="/img/girl-image.png" alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>

    <div class="dark-section px-3 px-md-0" id="about-us">
      <div class="container py-5">
        <div class="row ai-center">
          <div class="col-md-6">
            <h1 class="mt-6">About Us</h1>
            <h3 class="mt-4">
              We are your innovative Tech Recruitment and IT Outsourcing
              solution
            </h3>
            <p class="mt-3">
              Infohob is Nigeria’s plug-and-play tech recruitment and IT
              outsourcing solution that helps you design your future workforce.
            </p>

            <TheButton class="mt-4">Learn More</TheButton>
          </div>

          <div class="col-md-6">
            <div class="text-right">
              <img src="/img/Rectangle-61.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="light-section px-3 px-md-0" id="services">
      <div class="container py-7">
        <h1 class="text-center mt-2">Our Services</h1>
        <div class="row mt-7 jc-center">
          <TheCard
            v-for="service in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
          >
          </TheCard>
        </div>
        <br />
        <br />

        <h1 class="text-center mt-6">Trusted by incredible clients</h1>

        <div class="row gap-7 mt-6 mb-3">
          <div class="col-md-3" v-for="client in clients" :key="client.icon">
            <div class="text-left">
              <img :src="client.icon" alt="" />
            </div>
            <p class="font-20 mt-1">
              {{ client.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section px-3 px-md-0">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
            <h1>
              We simplify Tech Recruitment <br />
              and software development
            </h1>

            <p class="mt-4">
              Interested in learning more about Infohob? <br />
              Schedule a call today!
            </p>

            <div class="d-flex ai-center mt-4">
              <img src="/img/icons/phone.png" alt="" />
              <div class="ml-3">
                <strong class="font-22"> Phone Number </strong>
                <p class="mt-1">+234 806 811 1570</p>
              </div>
            </div>

            <div class="d-flex ai-center mt-4">
              <img src="/img/icons/email.png" alt="" />
              <div class="ml-3">
                <strong class="font-22"> Email Address </strong>
                <p class="mt-1">hello@infohob.com</p>
              </div>
            </div>

            <p class="mt-4">Select date for booking or a meeting</p>
            <Datepicker
              v-model="date"
              inline
              auto-apply
              class="mt-3"
              :calendar-width="`600px`"
            />
          </div>

          <div class="col-md-6 pt-7 pl-0 pl-md-7">
            <br />
            <InputText
              type="text"
              placeholder="Your Name"
              v-model="formData.name"
            />
            <InputText
              class="mt-3"
              type="email"
              placeholder="Your Email"
              v-model="formData.email"
            />

            <InputText
              class="mt-3"
              type="text"
              placeholder="Your Phone"
              v-model="formData.mobile_number"
            />
            <!-- <div class="mb-2">
              <VueTelInput
                class="tel__input"
                autoFormat
                defaultCountry="NG"
                v-model="formData.mobile_number"
                :inputOptions="{ placeholder: 'Your Phone' }"
              />
            </div> -->
            <p class="font-20 mt-3">What would you like to talk about?</p>
            <div class="mt-2">
              <label>
                <input type="radio" value="Recruitment Services" name="about" />
                Tech Recruitment
              </label>
            </div>
            <div class="mt-1">
              <label>
                <input type="radio" value="Outsourcing Services" name="about" />
                Software Development
              </label>
            </div>

            <!-- <NewRadio
              name="whatabout"
              id="wh1"
              value="Recruitment Services"
              @change=""
              label="Recruitment Services"
              :checked="true"
            />

            <NewRadio
              class="mt-1"
              name="whatabout"
              id="wh2"
              value="Outsourcing Services"
              @change=""
              label="Outsourcing Services"
            /> -->

            <textarea
              placeholder="Message"
              class="message-textarea mt-3 h-12"
            />

            <div class="d-flex jc-end mt-2">
              <TheButton>Send</TheButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home-page {
  margin-top: 92px;
}
.intro-section {
  background-color: #edf3fc;
  background-image: url(/img/backgrounds/lightbg.jpg);
  background-size: 100% 100%;
}

.contact-section {
  background-image: url(/img/backgrounds/contactbg.png);
  background-size: 100% 100%;
}

.message-textarea {
  /* border-color: #eaecf0; */
  width: 100%;
  height: 111px;
  background-color: transparent;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  padding: 9px 17px;
  border: 2px solid var(--a-c-gray-500);
  border-radius: 3px;
}

.message-textarea:focus-within {
  outline: 1px solid var(--a-c-theme-300);
  border: 2px solid var(--a-c-sky-600);
}
</style>
