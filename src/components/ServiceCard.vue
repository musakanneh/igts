<template>
  <body>
    <main>
      <div class="sec-one-cover">
        <article>
          <h1>
            Our Digital Literacy <br />
            Program
          </h1>
          <p>
            A two-years, six months fellowship program designed to train and
            empower young and consciously-driven programmers, and software
            engineers and developers and usher them into our ‘Innovation &
            Developers’ Campus.’ Participants will work either in-person and/or
            remotely at one of our IDCs working for our client-employer
            institution to help with ICT-related issues and problems being faced
            by them; they will also work with us as in-house programmers,
            software engineers and developers at our ‘ICT-Tech Help Clinic’.
          </p>
          <br />
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </article>
        <div class="img-cover">
          <img src="../assets/d-literacy.png" alt="" />
        </div>
      </div>
      <div class="sec-one-cover">
        <article>
          <h1>
            ICT-Tech Help Clinic
          </h1>
          <p>
            our ICT solutions one-stop-shop center established to provide
            top-notch and executive ICT and tech/digital consultancies to
            individuals, governments, INGOs/NGOs, businesses, big
            firms/corporations, civil society organizations, etc..
          </p>
          <br />
          <p>
            Our consultancy under this help clinic will range from software
            designs, development and hosting; web and database management,
            hosting and development; online marketing; and branding.
          </p>
          <br />
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </article>
        <div class="img-cover">
          <img src="../assets/clinic.png" alt="" />
        </div>
      </div>
      <div class="sec-one-cover">
        <article>
          <h1>
            Online Merchandizing <br />
            Trade / Product Store
          </h1>
          <p>
            IGTS engages into online and e-commerce business networking and
            trade. We work with cooperatives, trade unions, and business groups;
            and provide ICT solutions to ease the challenges being faced by them
            on marketing, sales, and exposure to market.
          </p>
          <br />
          <p>
            This is a one-stop-shop store for all your digital pr oducts. This
            is an online store established to ease the stress of individuals,
            businesses and companies looking to get high-tech, AI and digital
            products. Just a click plus free delivery will get you your dream
            products/gadget.
          </p>
          <br />
          <Button
            :isFullWidth="false"
            label="Explore More"
            width="150px"
          ></Button>
        </article>
        <div class="img-cover">
          <img src="../assets/product.png" alt="" />
        </div>
      </div>
    </main>
  </body>
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
body {
  margin: 3% 0;
  main {
    .sec-one-cover {
      display: flex;
      flex-direction: row;
      flex: auto;
      margin: auto;
      padding: 2% 0;
      width: 85%;
      justify-content: space-between;

      h1 {
        padding: 25px 0;
        font-size: 30px;
        color: #3b85fc;
        font-weight: 600;
        transition: 200ms;
        white-space: nowrap;
      }

      article {
        width: 50%;

        p {
          line-height: 22px;
          font-size: 15px;
        }
      }

      .img-cover {
        width: 50%;
        display: flex;
        img {
          width: 50%;
        }
      }
    }
  }
}
</style>
