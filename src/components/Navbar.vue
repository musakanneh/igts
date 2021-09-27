<template>
  <header>
    <nav>
      <a href="/">
        <h2 class="logo">
          IGTS
        </h2>
      </a>
      <ul class="nav-side-items">
        <li>
          <a class="active" href="/">HOME</a>
        </li>
        <li>
          <a href="/services">OUR SERVICE</a>
        </li>
        <li>
          <a href="/Work"> OUR WORK</a>
        </li>
        <li>
          <a href="/about">THE COMPANY</a>
        </li>
        <li>
          <a href="/">GET INVOLVED</a>
        </li>
        <li>
          <a href="/">STORE</a>
        </li>
        <li>
          <a href="/">REACH US</a>
        </li>
      </ul>
      <Button :isFullWidth="false" label="Subscribe" width="150px"></Button>
    </nav>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button,
  },
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
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}
.active {
  text-decoration: underline;
}

nav {
  justify-content: space-between;
  display: flex;
  width: 90%;
  animation: fadeIn 5s;

  .logo {
    float: left;
    margin: 10px 0;
    width: 30%;
    font-weight: bolder;
    font-size: 3rem;
    color: white; 
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
  }

  ul {
    list-style: none;
    padding: 10px 0;

    li,
    li a {
      font-size: 12px;
      z-index: 1;
      padding: 0 10px;
      color: #fff;
      cursor: pointer;
      transition: 200ms;
      font-weight: 500;
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
