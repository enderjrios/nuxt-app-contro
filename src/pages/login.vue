
<script setup lang="ts">


definePageMeta({
    middleware:'unauthenticated'
})
const supaAuth = useSupabaseAuthClient().auth

const credentials = reactive({
    email:'',
    password:''

})
const login = async () => {
    const {error} = await supaAuth.signInWithPassword(credentials)
    if(error){
        alert(error.message)
    }else{
        navigateTo('/')
    }
    
}
</script>


<template>
   <div class="w-full max-w-xs mx-auto mt-16">
  <form @submit.prevent="login" ref="formLogin" 
  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input v-model="credentials.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="credentials.password" class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" >
      <p class="text-red-500 text-xs italic">Porfavor elija una contraseña.</p>
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Sign In
      </button>
    
    </div>
  </form>
  
</div>
</template>



