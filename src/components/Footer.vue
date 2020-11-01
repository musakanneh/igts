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
        <a class="tba" href="/writings">About Us</a><br />
        <a class="tba" href="/writings">Store</a><br />
        <a class="tba" href="/gallery">The Team</a><br />
        <a class="tba" href="/gallery">Privacy Policy</a><br />
        <a class="tba" href="/gallery">Contact</a><br />
      </div>
      <div class="footer-nav-items">
        <h3>Contact Us</h3>
        <a href="/institutions" class="tba"
          ><i class="fab fa-instagram"></i>IGTS@demosite.com</a
        ><br />
        <a href="/project" class="tba"
          ><i class="fab fa-instagram"></i>Monrovia, Liberia</a
        ><br />
      </div>

      <div>
        <h3>Follow Us</h3>
        <div class="social-medias">
          <a href="https://www.facebook.com/1earth4peace">
            <i class="fab fa-facebook"></i
          ></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href="https://ug.linkedin.com/in/1earth4peace">
            <i class="fab fa-linkedin"></i
          ></a>
          <a href="https://twitter.com/1earth4peace">
            <i class="fab fa-twitter"></i
          ></a>
        </div>
      </div>
    </main>
    <p>IGTS © 2020 | All Rights Reserved.</p>
    <br /><br />
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  * {
    display: block !important;
    text-align: center;
    width: auto !important;
    padding: 5px 33px !important;
    font-size: 35px !important;
    font-weight: 400 !important;
  }

  .social-medias {
    display: flex !important;

    i {
      margin-top: 50px !important;
      font-size: 60px !important;
    }
  }
}

footer {
  padding-top: 5%;
  background-color: #e0ecfd;
  width: 100%;

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
    width: 80%;

    h3 {
      color: #3b85fc;
      opacity: 0.8;
      font-size: 14px;
      cursor: pointer;
      transition: 200ms;
      text-decoration: none;
      white-space: nowrap;
      font-weight: 600;
    }

    h3:hover {
      opacity: 1;
    }
  }

  .footer-nav-items {
    a {
      font-weight: 400;
    }
  }

  .social-medias {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    width: 50%;

    i {
      cursor: pointer;
      font-size: 15px;
      color: #3b85fc;
    }

    i:hover {
      color: blue;
      transition: 0.5s ease;
    }
  }

  .tba {
    color: #303030;
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
    transition: 200ms;
    text-decoration: none;
    white-space: nowrap;
    font-weight: 500;

    i {
      margin: 0 5px;
      color: #3b85fc;
    }
  }

  .tba:hover {
    color: #0073b1;
    opacity: 1;
    cursor: pointer;
  }

  p {
    color: #303030;
    text-align: center;
    margin-top: 6%;
    font-size: 10px;
  }

  a {
    text-align: center;
    opacity: 0.8;
    color: #303030;
    cursor: pointer;
    font-size: 10px;
    transition: 200ms;
    text-decoration: none;
    white-space: nowrap;
  }

  a:hover {
    color: #303030;
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
