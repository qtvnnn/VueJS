<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div style="display: flex">
       <SideBar />
      <Header />     
      <!-- <Content /> -->
    </div>

    <!-- 'v-bind' viết tắt ':' -->
    <!-- <a v-bind:href="link">click</a>
    <div :class="active ? 'class1' : 'class2'">Active</div> -->

    <!-- 'v-on' viết tắt '@' -->
    <!-- Số con cừu là : {{ count }}
    <button @click="demCuu()">Đếm cừu</button><br>
    <button @click="sayHi()">Hi</button><br>
    <button @click="sayHello()">Hello</button>

    <div>{{ name }}</div>
    <input v-model="name" /> -->

    <!-- if-else, show -->
    <!-- <div v-if="name == 'trang'" style="font-size: 30px">Block 1</div>
    <div v-else style="font-size: 30px">Block 2</div>
    <div v-show="name == 'trang'" style="font-size: 30px">Block Name</div>

    <ul style="list-style-type: none">
      <li v-for="(item, index) in weekDay" :key="index">
        {{ item.name }} có giá trị là {{ item.value }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
// import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    Header,
    SideBar,
    // Content,
  },
  data() {
    return {
      // count: 0,
      // active: false,
      // link:
      //   "https://vuetifyjs.com/en/getting-started/installation/#vue-cli-install",
      // name: "",
      // person: {},
      // age: 23,
      // weekDay: [
      //   // { name: "thu 2", value: "0" },
      //   // { name: "thu 3", value: "1" },
      //   // { name: "thu 4", value: "2" },
      //   // { name: "thu 5", value: "3" },
      //   // { name: "thu 6", value: "4" },
      //   // { name: "thu 7", value: "5" },
      //   // { name: "chu nhat", value: "6" },
      // ],
    };
  },

  methods: {
    demCuu() {
      this.count += 1;
    },
    sayHi() {
      alert("Hi");
    },
    sayHello() {
      alert("Hello");
    },
  },
};
</script>

<style>
.class1 {
  color: green;
}
.class2 {
  color: red;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* main css */
body{
    font-family: 'Courier New', Courier, monospace;
    font-size: 13px;
    margin: 0px;
    padding: 0px;
    height: 100vh;
}

/* @font-face{
    font-family: 'MISA-Regular';
    src: url('../../content/font/GoogleSans-Regular.otf') format('opentype');
}

@font-face{
    font-family: 'MISA-Bold';
    src: url('../../content/font/GoogleSans-Bold.otf') format('opentype');
}

@font-face{
    font-family: 'MISA-Italic';
    src: url('../../content/font/GoogleSans-Italic.otf') format('opentype');
} */

::-webkit-scrollbar {
    width: 5px;
}
 
::-webkit-scrollbar-track {
    background: #bbbbbb;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    background-color: #6c757d;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
/* end */

.body-left {
    background-color: #ffffff;
    width: 200px;
    height: 100%;
    border-right: 1px solid #bbbbbb;

    display: flex;
    flex-direction: column;
}

.body-left .sidebar {
    height: 50px;
    display: flex;
}

.body-left .sidebar .toggle {
    width: 50px;
    height: 50px;
    /* background-image: url('../../content/img/toggle.png'); */
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: 18px center;
}

.body-left .sidebar .logo {
    width: 138px;
    height: 50px;
    /* background-image: url('../../content/img/cukcuk-logo.png'); */
    background-size: 126px;
    background-repeat: no-repeat;
    background-position: 0px 9px;
}

.body-left .menu {
    position: relative;
    flex: 1;
    background-color: #ffffff;
}

.body-left .menu .menu-item {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.body-left .menu .menu-item:hover {
    background-color: #e9e9e9;
}

.body-left .menu .menu-item .icon {
    width: 50px;
    height: 45px;
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: 18px center;
}

.body-left .menu .menu-item .item-name {
    width: 150px;
}

/* .body-left .menu .menu-item .icon.overview {
    background-image: url('../../content/icon/dashboard.png');

}

.body-left .menu .menu-item .icon.report {
    background-image: url('../../content/icon/report.png');
}

.body-left .menu .menu-item .icon.purchase {
    background-image: url('../../content/icon/dashboard.png');
}

.body-left .menu .menu-item .icon.list-customer {
    background-image: url('../../content/icon/dic-employee.png');
}

.body-left .menu .menu-item .icon.list-employee {
    background-image: url('../../content/icon/dic-employee.png');
}

.body-left .menu .menu-item .icon.setting {
    background-image: url('../../content/icon/setting.png');
} */

.body-right {
    position: absolute;
    left: 201px;
    top: 0;
    right: 0;
    bottom: 0;
}

.body-right .header {
    background-color: #ffffff;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #bbbbbb;
}

.body-right .content {
    background-color: #ffffff;
    position: absolute;
    top: 51px;
    right: 0;
    bottom: 0;
    left: 0;
}


.header-left {
    float: left;
    padding-left: 20px;
}

.header-left .list-restaurant {
    height: 48px;
    width: 100px;
    display: flex;
    align-items: center;
}

.header-left .list-restaurant .btn-list-select {
    background-color: #ffffff;
    border-radius: 4px;
    height: 40px;
}

.header-right {
    float: right;
    padding-right: 10px;
}

.header-right .account {
    float: left;
    display: flex;
    align-items: center;
}

.header-right .account .avatar {
    width: 50px;
    height: 51px;
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: center;
    /* background-image: url('../../content/icon/avatar-default.png'); */
}

.header-right .account .account-name {
    margin: 0;
}

.header-right .account-setting {
    float: right;
    width: 50px;
    height: 51px;
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: center;
    /* background-image: url('../../content/icon/option.png'); */
}
/* end */


/*  */
.content-header {
    height: 50px;
    width: 100%;
}

.btn-select {
    background-color: #ffffff;
}

.content-header-left {
    height: 50px;
    float: left;
    padding-left: 20px;
    display: flex;
    align-items: center;
}

.content-header-left .menu-item-selected {
    font-size: 25px;
    font-weight: bold;
}

.content-header-right {
    height: 50px;
    float: right;
    padding-right: 15px;
    display: flex;
    align-items: center;
}

.content-header-right .btn-add-employee {
    background-color: #01B075;
    display: flex;
    align-items: center;
    border-color: #01B075
}

.content-header-right .btn-add-employee .icon-add-employee {
    width: 30px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    background-image: url('/content/icon/add.png');
}

.customer-filter {
    height: 50px;
    width: 100%;
}

.customer-filter-left {
    height: 50px;
    float: left;
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.customer-filter-left .input-filter,
.customer-filter-left .select-filter-department {
    padding-right: 15px;
}

.btn-list-department,
.btn-list-position {
    border: 1px solid #ced4da;
    width: 200px;
    text-align: left;
}

.select-filter-department .dropdown .dropdown-toggle::after,
.select-filter-position .dropdown .dropdown-toggle::after {
    position: relative;
    float: right;
    top: 10px;
}

.menu-department,
.menu-position {
    min-width: 200px !important;
}

.icon-search {
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    background-image: url('/content/icon/search.png');
}

.input-group-text {
    border-right: none !important;
    background-color: #ffffff !important;
}

.inputbox-filter {
    border-left: none !important;
}

.customer-filter-right {
    height: 50px;
    display: flex;
    align-items: center;
    float: right;
    padding-right: 15px;
}

.customer-filter-right .btn-reset-filter {
    background-color: #ffffff;
    border-color: #bbbbbb;
}

.customer-filter-right .btn-reset-filter .icon-reset-filter {
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
}

.customer-filter-right .btn-reset-filter .icon-reset-filter {
    background-image: url('/content/icon/refresh.png');
}

.data-table-employee{
    padding-right: 13px;
}

/* scroll body table */
.table-container {
    height: 726px;
    border-bottom: 5px solid #6c757d;
    padding-bottom: 8px !important;
}

table {
    display: flex;
    flex-flow: column;
}

table tr {
    cursor: pointer;
}

table thead {
    width: calc(100% - 1.25em);
}

table tbody {
    overflow-y: scroll;
}

table tbody tr {
    width: 100%;
}

table thead,
table tbody tr {
    display: table;
    table-layout: fixed;
}

/* end */

.footer-table {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}

.footer-table .row {
    width: 100% !important;
    margin: 0;
}

.footer-table-left {
    text-align: left;
}

.footer-table-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-table-center .paging-number .btn-paging-number-item {
    background-color: #E9EBEE;
    color: #6c757d;
    border-radius: 50%;
}

.footer-table-center .paging-number .active {
    background-color: #01B075;
    color: #ffffff;
}

.icon-paging-first,
.icon-paging-last,
.icon-paging-next,
.icon-paging-previous {
    color: #6c757d;
}

.icon-paging-first,
.icon-paging-last {
    font-size: 21px;
    font-weight: 600;
}

.footer-table-right {
    text-align: right;
}
/*  */
</style>
