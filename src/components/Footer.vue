<template>
  <footer>
    <main>
      <div class="footer-nav-items">
        <a href="/" class="tba">Back to Top</a><br />
        <a href="/" class="tba">Our Services</a><br />
        <a href="/" class="tba">Our Work</a><br />
        <a href="/" class="tba">Get Involved</a><br />
        <a href="/" class="tba">Reach Us</a><br />
      </div>

      <div class="footer-nav-items">
        <a class="tba" href="/">About Us</a><br />
        <a class="tba" href="/">Store</a><br />
        <a class="tba" href="/">The Team</a><br />
        <a class="tba" href="/">Privacy Policy</a><br />
        <a class="tba" href="/">Contact</a><br />
      </div>

      <div class="footer-nav-items">
        <h3>Contact Us</h3>
        <a href="/"><i class="fab fa-instagram"></i> IGTS@demosite.com</a><br />
        <a href="/"><i class="fab fa-instagram"></i> Monrovia, Liberia</a><br />
        <br /><br /><br />
      </div>

      <div>
        <Contact />
        <br />
        <h3>Follow Us</h3>
        <div class="social-medias">
          <a href="https://www.facebook.com/">
            <i class="fab fa-facebook"></i
          ></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href="https://ug.linkedin.com/in/">
            <i class="fab fa-linkedin"></i
          ></a>
          <a href="https://twitter.com/"> <i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </main>
    <p>IGTS © 2020 | All Rights Reserved.</p>
    <br /><br />
  </footer>
</template>

<script>
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding-top: 5%;
  background-color: #e0ecfd;
  width: 100%;

  main {
    display: flex;
    flex: auto;
    flex-direction: row;
    margin: auto;
    width: 90%;

    h3 {
      color: #3b85fc;
      font-size: 16px;
      transition: 200ms;
      text-decoration: none;
      white-space: nowrap;
      font-weight: 600;
    }
  }

  .social-medias {
    display: flex;
    justify-content: space-between;
    width: 50%;
    float: left;

    i {
      cursor: pointer;
      font-size: 25px;
      color: #3b85fc;
    }

    i:hover {
      color: blue;
      transition: 0.5s ease;
    }
  }

  p {
    color: #303030;
    text-align: center;
    margin-top: 4%;
    font-size: 12px;
  }

  a {
    text-align: center;
    opacity: 1;
    color: #303030;
    cursor: pointer;
    font-size: 14px;
    line-height: 30px;
    transition: 200ms;
    text-decoration: none;
    white-space: nowrap;
  }
}
</style>
