<template>
  <div class="container-register relative">
    <h1 class="mt-1">Sign Up</h1>
      <p>Please fill this form to create an account.</p>
      <div class="horizontal"><hr></div>
    <form class="mt-3">
      <div class="mb-2">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
      </div>
      
      <div class="mb-2">
        <label for="exampleInputPassword1" class="form-label">Username</label>
        <input type="password" class="form-control bg-light" id="exampleInputPassword1" placeholder="Username">
      </div>

      <div class="mt-2">
        <label for="exampleInputPassword1" class="form-label">First name</label>
        <input type="password" class="form-control bg-light" id="exampleInputPassword1" placeholder="First name">
      </div>

      <div class="mt-2">
        <label for="exampleInputPassword1" class="form-label">Last name</label>
        <input type="password" class="form-control bg-light" id="exampleInputPassword1" placeholder="Last name">
      </div>

      <div class="mt-2 mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control bg-light" id="exampleInputPassword1" placeholder="Password">
      </div>
      <p>By creating an account you agree our <span class="text-success">Terms & Privacy</span></p>
      <button class="button btn btn-success" type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
