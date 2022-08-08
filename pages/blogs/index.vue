 <script setup>
 const articles = await queryContent('blogs').only(['_path','title', 'excerpt'])
 .sort({ date: -1 })
 .find()

   useHead({
  title: 'Chetan Kharel - Thoughts',
  meta: [
    { name: 'description', content: 'Chetan\'s Blog' }
  ],
 </script>
 
 <template>
 
 <section class="dark:text-white">
    <h2 class="relative text-2xl font-bold mb-12 bar">Thoughts</h2>

  <ArticleCard :article="article" v-for="article in articles" :key="article._path" />

  </section>

</template>