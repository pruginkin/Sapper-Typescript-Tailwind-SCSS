<script lang="ts">
  let title: string = `Sapper + Typescript + Tailwind`;
</script>

<style lang="scss">
  .test {
    color: gray;

    span {
      font-weight: bolder;
      font-size: 20px;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div>
  <h1 class="text-4xl text-green-700 text-center">{title}</h1>
</div>
<p class="test text-right">
  and added
  <span>scss</span>
</p>
