 <script setup>
    const articles = await queryContent('blogs').only(['_path','title', 'excerpt'])
    .sort({ date: -1 })
    .limit(6)
    .find()
 </script>

 <template>
 <section>
    <h2 class="relative text-2xl font-bold mb-12 dark:text-white bar">From the Blog</h2>

  <ArticleCard :article="article" v-for="article in articles" :key="article._path" />

  </section>

</template>