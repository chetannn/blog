 <script setup>
    const articles = await queryContent('blogs').only(['_path','title', 'excerpt'])
    .sort({ date: -1 })
    .limit(6)
    .find()

    useHead({
  title: 'Chetan Kharel - Home',
  meta: [
    { name: 'description', content: 'Chetan\'s Blog' }
  ],
})
 </script>

 <template>
 <section>

   <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 content-center items-center gap-5 mb-12 dark:text-white leading-relaxed">

      <p class="text-center md:text-left text-lg">Hey 👋🏼, I'm Chetan Kharel. A software engineer based in Kathmandu, Nepal. Mostly, I work with Laravel and databases. I love to write about my experiences, productivity tools and play games.</p>
      <img src="/cover.jpg" loading="lazy" class="order-first rounded-full w-18 h-18 object-fit mx-auto md:order-last md:mx-0" alt="Chetan" />

   </div>

    <h2 class="relative text-2xl font-bold mb-12 dark:text-white bar">Recently Added</h2>

  <ArticleCard :article="article" v-for="article in articles" :key="article._path" />

  </section>

</template>
