<template>
  <footer class="d-flex flex-column align-items-start">
    <div>
      <span>&copy; 2021 mtthwsbuild</span>
    </div>
    <div class="mt-3">
      <a href="https://instagram.com/mtthwsbuild"><i class="fab fa-instagram"></i></a>
      <a href="https://www.youtube.com/channel/UC-gKmuZfTgFrLaB2q68Dnog"><i class="fab fa-youtube"></i></a>
      <a href="https://www.twitch.tv/samuelmtthw"><i class="fab fa-twitch"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  footer {
    padding: 30px 100px;
  }

  footer div span {
    font-family: 'Tinos';
    letter-spacing: 2px;
  }

  footer i {
    padding-bottom: 5px;
    margin-right: 20px;
    font-size: 1.25em;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
  }

  footer i:hover {
    border-bottom: 2px solid #fdf9f1;
  }
</style>
