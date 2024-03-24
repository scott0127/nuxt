<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

async function signInWithPassword() {
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        alert(error.message)
    } else {
        alert('登入成功')
    }
}
</script>
<template>
  <div class="mt-56 flex flex-col">
    <div class="">
        <button @click="" class="mr-4">
        Sign In with E-Mail
        </button>
        <input
        v-model="email"
        type="email"
        class="w-96"
        />
    </div>
    <div class="mt-4">
        <button @click="" class="mr-4">
        password
        </button>
        <input
        v-model="password"
        class="w-96"
        />
    </div>
    <button @click="signInWithPassword" class="bg-green-500 mt-2" >送出</button>
  </div>
</template>
