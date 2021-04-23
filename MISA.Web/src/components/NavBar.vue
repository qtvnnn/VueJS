<template>
  <div>
    <div class="sidebar">
      <div class="toggle"></div>
      <div class="logo"></div>
    </div>
    <div class="menu">
      <div class="menu-item">
        <div class="icon overview"></div>
        <div class="item-name">Tổng quan</div>
      </div>
      <div class="menu-item">
        <div class="icon report"></div>
        <div class="item-name">Báo cáo</div>
      </div>
      <div class="menu-item">
        <div class="icon purchase"></div>
        <div class="item-name">Mua hàng</div>
      </div>
      <div class="menu-item">
        <div class="icon list-customer"></div>
        <div class="item-name">Danh mục khách hàng</div>
      </div>
      <div class="menu-item active">
        <div class="icon list-employee"></div>
        <div class="item-name">Danh mục nhân viên</div>
      </div>
      <div class="menu-item">
        <div class="icon setting"></div>
        <div class="item-name">Thiết lập hệ thống</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "NavBar",
  props: {},
  methods: {},
};

$(document).ready(function ($) {
  $(document).on("click", ".menu-item", function () {
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
</script>

<style scoped>
.active {
  background: #019160 !important;
  color: #ffffff;
}
</style>
