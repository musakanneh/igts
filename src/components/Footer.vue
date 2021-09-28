<template>
  <footer>
    <main class="container">
      <div class="contact">
        <p>© 2020 Ecological Peace. All Rights Reserved.</p>
        <a href=""> e.hsiao@sheffield.ac.uk</a>
        <strong>|</strong>
        <a href="/about">Kigali, Rwanda</a>
        <strong>|</strong>
        <a href="/about">Cite map</a>
      </div>

      <div class="social-media-icons">
        <div class="social-medias">
          <a href="https://www.facebook.com/1earth4peace">
            <i class="fab fa-facebook"></i
          ></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href="https://ug.linkedin.com/in/1earth4peace">
            <i class="fab fa-linkedin"></i
          ></a>
          <a href="https://twitter.com/1earth4peace">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </main>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @media only screen and (max-width: 900px) {
//   main {
//     width: 90%;
//     display: block !important;
//   }
//   .social-medias {
//     float: none !important;
//     width: 70% !important;
//     i {
//       margin: 1.5rem 0;
//       font-size: 40px !important;
//     }
//   }
// }
main {
  display: flex;
  h3:hover {
    opacity: 1;
  }
}
footer {
  width: 100%;
  background-color: rgb(2, 32, 60);
  padding: 2rem 0;
  strong {
    padding: 0 4px;
  }
  .contact,
  .social-media-icons {
    width: 100%;
    text-align: left;
  }
  .social-medias {
    float: right;
    display: flex;
    width: 30%;
    justify-content: space-between;
    i {
      cursor: pointer;
      font-size: 26px;
      color: #6ca714;
    }
    i:hover {
      color: #ffffff;
      transition: 0.5s ease;
    }
  }
  p {
    color: #6ca714;
    margin: 0;
    font-size: 14px;
  }
  a {
    color: #fbfbfb;
    letter-spacing: 1px;
    margin-top: 10px;
    font-size: 13px;
    text-decoration: none;
  }
  a:hover {
    color: #ffffff;
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>