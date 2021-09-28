<template>
  <header>
    <div>
      <a class="logo-cover" href="/">
        <h2 class="logo">IDx</h2>
      </a>
    </div>

    <nav>
      <ul class="nav-side-items">
        <li>
          <span class="flex-item">
            <a href="/services">SERVICE</a>
            <span class="drop-down-indicator"></span>
          </span>
          <ul class="drop-down-cover">
            <li>
              <a href="">Digital Literacy Program</a>
            </li>
            <div class="space__between"></div>
            <li><a href="">Tech Shows</a></li>
            <li><a href="">ICT Tech Help Clinic</a></li>
            <li><a href="">Products Store</a></li>
          </ul>
        </li>
        <li>
          <a href="/about">THE COMPANY</a>
          <span class="drop-down-indicator"></span>
          <ul class="drop-down-cover">
            <li><a href="">About Us</a></li>
            <li><a href="">Our Story</a></li>
          </ul>
        </li>
        <li>
          <span class="flex-item">
            <a href="/">GET INVOLVED</a>
            <span class="drop-down-indicator"></span>
          </span>
          <ul class="drop-down-cover">
            <li><a href="">Be a Fellow/Developer</a></li>
            <li><a href="">Employ Our Fellow/Developers</a></li>
          </ul>
        </li>
        <li>
          <a href="/">STORE</a>
        </li>
        <li>
          <a href="/">TEAM</a>
        </li>
        <li>
          <a href="/">REACH US</a>
        </li>
      </ul>
    </nav>

    <div>
      <UserLogin />
    </div>
  </header>
</template>

<script>
import UserLogin from "@/components/UserLogin.vue";
export default {
  components: {
    UserLogin,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
}

header {
  display: flex;
  background: rgb(2, 32, 60);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.281);
  position: absolute;
  padding: 1rem 0;
  width: 100%;
  top: 0;

  div {
    width: 10%;
  }

  .logo-cover {
    .logo {
      font-weight: bolder;
      text-decoration: none;
      font-size: 3rem;
      color: #6ca714;
    }
  }

  .space__between {
    position: absolute;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    top: -19px;
    width: 2px;
    left: 100px;
  }

  .drop-down-cover {
    border-radius: 3px;
    z-index: 9010;
    background: #f37f1b;
    top: 32px;
  }
}

.active {
  text-decoration: underline;
}

nav {
  justify-content: space-between;
  width: 50%;
  display: flex;

  ul {
    list-style: none;
    padding: 10px 0;

    li,
    li a {
      font-size: 12px;
      z-index: 1;
      padding: 0 5px;
      color: #fbfbfbe0;
      cursor: pointer;
      transition: 200ms;
      font-weight: 600;
      letter-spacing: 1px;
      text-decoration: none;

      &:hover {
        opacity: 1;
        text-decoration: underline;
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
        z-index: 1;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        li {
          margin: 0;
          padding: 18px 16px;
          align-items: center;
          text-decoration: none;
          &:hover {
            background: #303030;
            text-decoration: none;
          }

          a {
            margin: 0;
            padding: 10px;
            &:hover {
              text-decoration: none;
            }
          }

          &::before {
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }

          ul {
            top: -2%;
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
