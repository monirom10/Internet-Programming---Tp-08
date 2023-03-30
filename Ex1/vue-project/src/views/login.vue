<!-- <script setup>
import TheWelcome from '../components/LoginHome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<template>
  <div class="container-login relative">
    <img class="image absolute" src="../assets/image/profile-vue.png" alt="">
    <form class="mt-3">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="mb-2">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
      </div>
      <div class="d-grid">
        <button class="btn btn-success  mt-3" type="button">Submit</button>
      </div>
    </form>
  </div>
  <p class="text absolute">
      Forgot <span class="text-success">password?</span>
    </p>
</template>
