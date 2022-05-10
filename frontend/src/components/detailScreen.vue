<template>
  <div class="hello">
    <img src="../assets/vaccines-logo.png" /><br />
    <div class="body">
      <img class="detail" src="../assets/vaccine28-04-2022.png" />
      <div class="body-bottom">
        <img class="aunjai" src="../assets/aunjai.png" />
        <div class="vaccines-text2">
          <span>ลงทะเบียนจองคิวที่นี่</span><br />
          <span style="margin-top: 0px">Register to book here</span><br />
          <span>28 เม.ย. 2565 เวลา 09:00 เป็นต้นไป</span><br />
          <span>28 Apr 2022, 09:00 am onwards</span>
        </div>
      </div>
      <a @click="registor()" class="btn_buynow2" style="margin: 20px">
        ลงทะเบียนจองคิว - Register</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailScreen",
  methods: {
    registor() {
      this.$router.push("/Reserve");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  cursor: pointer;
}

.body {
  font-family: "db_heaventmed";
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.body-bottom {
  max-width: 900px;
  background-color: black;
}

.btn_buynow2 {
  font-family: "db_heaventmed";
  text-decoration: none;
  font-size: 25px;
  line-height: 25px;
  padding: 15px 45px;
  color: #000;
  background-color: #b1d334;
  display: inline-block;
  border-radius: 50px;
  margin: 0 auto;
}

.vaccines-text2 {
  font-size: 27px;
  line-height: 1.4;
  position: relative;
  font-weight: bold;
  color: #b2d235;
}

.detail {
  max-width: 900px;
}

.aunjai {
  height: 250px;
  left: 30px;
  bottom: -0;
  width: auto;
}
</style>
