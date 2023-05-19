<template>
    <div>
        <div class="container mx-auto mt-5">
    <div v-if="Equipos">
      <table class="table-fixed mx-auto border-1px ">
        <thead>
          <tr>
            <th>id</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Serial</th>
            <th>Estados</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equipo in Equipos" key="equipo.id">
            <td> 
                <NuxtLink :to="{ _id:equipo.id }"> 
                 {{ equipo.id }} 
                </NuxtLink> 
            </td>
            <td>{{ equipo.marca }}</td>
            <td>{{ equipo.modelo }}</td>
            <td>{{ equipo.serial }}</td>
            <td>{{ equipo.estado }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>

    </div>
</template>

<script setup>


const supabase = useSupabaseClient();

const { data: Equipos } = useAsyncData(async () => {
  const { data } = await supabase.from("Equipos").select("*");
  return data;
});
console.log(Equipos.value);
definePageMeta({
  middleware: "authenticated",
});



</script>

<style scoped>

</style>