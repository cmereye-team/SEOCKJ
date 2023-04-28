<template>
  <div class="bigPageCon">
    <PageHeader />
    <div class="brandMind">
      <brandConcept />
      <AboutUs />
      <ContactUs />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
  .brandMind{
    background: #fff;
    overflow: hidden;
    padding-bottom: 143px;
  }
  @media screen and (max-width: 768px) {
    .brandMind{
      padding-bottom: 90px;
    }
  }
</style>