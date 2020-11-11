<template>
  <header class="header" id="myHeader">
    <nav>
      <a href="/"><img class="logo" src="../assets/logo.png" alt="" /></a>
      <ul class="nav-side-items">
        <li>
          <a class="drop-down-liks">Our Services</a>
        </li>
        <li class="drop-down-liks">
          <a class="drop-down-liks"> Our Work</a>
        </li>
        <li>
          <a href="/contact">The Company</a>
        </li>
        <li>
          <a href="/contact">Get Involved</a>
        </li>
        <li>
          <a href="/contact">Store</a>
        </li>
        <li>
          <a href="/contact">Reach Us</a>
        </li>
        <li class="contact-us">
          <a href="">Subscribe</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
}

header {
  z-index: 1;
  background-color: #f4f6fb;
  width: 100%;
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0;
  background: linear-gradient(-90deg, #9b2b2b, #3b85fc);
  height: 60px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}

nav {
  opacity: 0.8;
  justify-content: space-between;
  display: flex;
  padding: 0 8%;

  .logo {
    float: left;
    margin: 10px 0;
    width: 20%;
  }

  .contact-us {
    padding: 5px;
    background-color: #3b85fc;
    cursor: pointer;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    border: none;
    font-style: normal;
    font-weight: 500;

    a {
      font-size: 12px;
      // padding: 10px;
      //   color: #fff;
      border: none;
      background-color: #3b85fc;
      border-radius: 5px;
      //   font-size: 18px;
      //   height: 65px;
      color: white;
      box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
        inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
        inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
      text-align: center;
      cursor: pointer;

      &:hover {
        color: #fbfbfb;
      }
    }
  }

  ul {
    list-style: none;

    li,
    li a {
      font-size: 12px;
      z-index: 1;
      color: #fff;
      cursor: pointer;
      transition: 200ms;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;

      &:hover {
        opacity: 1;
        color: #0073b1;
      }

      a {
        height: 100%;
        width: 100%;
      }
    }

    li {
      padding-right: 36px;
    }

    .link {
      &::before {
        padding-right: 0;
        display: none;
      }
    }
  }

  > ul {
    display: flex;
    height: var(--menu-height);
    align-items: center;

    li {
      position: relative;
      margin: 0 8px 0 0;

      ul {
        visibility: hidden;
        opacity: 1;
        z-index: 1;
        padding: 0;
        min-width: 160px;
        background-color: #000000;
        position: absolute;
        top: calc(var(--menu-height) + 10px);
        left: 50%;
        transform: translateX(-50%);
        transition: 200ms;
        transition-delay: 200ms;

        li {
          margin: 0;
          padding: 18px 16px;
          align-items: center;

          &::before {
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            // border-left: 5px solid #6ca714;
          }

          ul {
            top: -2%;
            border: 1px solid red;
            left: 100%;
            transform: translate(0);
          }
        }
      }

      &:hover {
        > ul {
          opacity: 1;
          z-index: 1;
          visibility: visible;
          transition-delay: 0ms;
        }
      }
    }
  }
}
</style>
