

<template>
  <div class="text-3xl font-bold text-center mt-5">
    <h1>Servicios</h1>
  </div>
 

  <!-- Tabla de equipos -->
 <div>
  <FormEquipos/>
 </div>
  
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      @click="logout"
    >
      logout
    </button>
  </div>
  
</template>
<script setup>
const supaAuth = useSupabaseAuthClient().auth;
const logout = async () => {
  const { error } = await supaAuth.signOut();
  if (error) {
    alert(error.message);
  } else {
    navigateTo("/login");
  }
}
</script>