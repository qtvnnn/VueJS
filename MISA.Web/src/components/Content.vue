<template>
  <div class="content">
    <div class="content-header">
      <div class="content-header-left">
        <span class="menu-item-selected">Danh sách nhân viên</span>
      </div>
      <div class="content-header-right">
        <a class="btn btn-primary btn-add-employee" href="#" role="button">
          <div class="icon icon-add-employee"></div>
          <div class="item-name">Thêm nhân viên</div>
        </a>
      </div>
    </div>
                <div class="customer-filter">
                <div class="customer-filter-left">
                    <div class="input-group input-filter">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                                <div class="icon icon-search"></div>
                            </span>
                        </div>
                        <input type="text" class="form-control inputbox-filter" placeholder="Tìm kiếm nhân viên"
                            aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="select-filter-department">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle btn-select btn-list-department" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Tất cả phòng ban
                            </button>
                            <div class="dropdown-menu menu-department" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Kho tổng</a>
                                <a class="dropdown-item" href="#">Đại dương xanh</a>
                                <a class="dropdown-item" href="#">Nhà hàng biển đông</a>
                                <a class="dropdown-item" href="#">Wine house</a>
                            </div>
                        </div>
                    </div>
                    <div class="select-filter-position">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle btn-select  btn-list-position" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Tất cả vị trí
                            </button>
                            <div class="dropdown-menu menu-position" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Kho tổng</a>
                                <a class="dropdown-item" href="#">Đại dương xanh</a>
                                <a class="dropdown-item" href="#">Nhà hàng biển đông</a>
                                <a class="dropdown-item" href="#">Wine house</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="customer-filter-right">
                    <a class="btn btn-reset-filter" href="#" role="button">
                        <div class="icon icon-reset-filter"></div>
                    </a>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {},
};
</script>

<style scoped>
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
  background-color: #01b075;
  display: flex;
  align-items: center;
  border-color: #01b075;
}

.content-header-right .btn-add-employee .icon-add-employee {
  width: 30px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  background-image: url("../assets/icon/add.png");
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
    background-image: url('../assets/icon/search.png');
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
    background-image: url('../assets/icon/refresh.png');
}
</style>
