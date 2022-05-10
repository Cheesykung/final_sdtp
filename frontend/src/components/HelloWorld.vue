<template>
  <div class="hello">
    <div class="body">
      <img src="../assets/MicrosoftTeams-image.png" /><br />
      <input type="text" v-model="phone" />
      <button @click="send()" class="btn-green">รับสมัคร OTP</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Reserve",
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    send() {
      let response = axios.get(
        `http://host.docker.internal:3000/${this.phone}`
      );
      
      this.phone = ""
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

img {
  width: 714px;
  height: 161px;
}

input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1.3rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  margin-top: 4px;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-green {
  color: #fff;
  background-color: #8dc63f;
  border-color: #fff;
}
</style>
