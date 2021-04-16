<template>
  <div class="body-right">
    <div class="header">
      <div class="header-left">
        <div class="list-restaurant">
          <div class="dropdown">
            <button
              class="btn btn-default dropdown-toggle btn-select btn-list-restaurant"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Nhà hàng biển đông
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Kho tổng</a>
              <a class="dropdown-item" href="#">Đại dương xanh</a>
              <a class="dropdown-item" href="#">Nhà hàng biển đông</a>
              <a class="dropdown-item" href="#">Wine house</a>
            </div>
          </div>
        </div>
      </div>
      <div class="header-right">
        <div class="account">
          <div class="avatar"></div>
          <div class="account-name">
            <span>Nguyễn Văn Mạnh</span>
          </div>
        </div>
        <div class="account-setting"></div>
      </div>
    </div>
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
            <input
              type="text"
              class="form-control inputbox-filter"
              placeholder="Tìm kiếm nhân viên"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="select-filter-department">
            <div class="dropdown">
              <button
                class="btn btn-default dropdown-toggle btn-select btn-list-department"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tất cả phòng ban
              </button>
              <div
                class="dropdown-menu menu-department"
                aria-labelledby="dropdownMenuButton"
              >
                <a class="dropdown-item" href="#">Kho tổng</a>
                <a class="dropdown-item" href="#">Đại dương xanh</a>
                <a class="dropdown-item" href="#">Nhà hàng biển đông</a>
                <a class="dropdown-item" href="#">Wine house</a>
              </div>
            </div>
          </div>
          <div class="select-filter-position">
            <div class="dropdown">
              <button
                class="btn btn-default dropdown-toggle btn-select btn-list-position"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tất cả vị trí
              </button>
              <div
                class="dropdown-menu menu-position"
                aria-labelledby="dropdownMenuButton"
              >
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
      <div class="data-table-employee">
        <div class="contain-table">
          <table class="table table-container">
            <thead>
              <tr>
                <td scope="col">Mã nhân viên</td>
                <td scope="col">Họ và tên</td>
                <td scope="col">Giới tính</td>
                <td scope="col">Ngày sinh</td>
                <td scope="col">Điện thoại</td>
                <td scope="col">Email</td>
                <td scope="col">Chức vụ</td>
                <td scope="col">Phòng ban</td>
                <td scope="col">Mức lương cơ bản</td>
                <td scope="col">Tình trạng công việc</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">NV123456</td>
                <td>Nguyễn Văn Long</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>longnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>10,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV111111</td>
                <td>Nguyễn Văn Bát</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>batnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>13,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV222222</td>
                <td>Trần Không Bít</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>btttk@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>15,000,000</td>
                <td>Đã nghỉ việc</td>
              </tr>
              <tr>
                <td scope="row">NV123456</td>
                <td>Nguyễn Văn Long</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>longnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>10,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV111111</td>
                <td>Nguyễn Văn Bát</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>batnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>13,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV222222</td>
                <td>Trần Không Bít</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>btttk@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>15,000,000</td>
                <td>Đã nghỉ việc</td>
              </tr>
              <tr>
                <td scope="row">NV123456</td>
                <td>Nguyễn Văn Long</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>longnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>10,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV111111</td>
                <td>Nguyễn Văn Bát</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>batnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>13,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV222222</td>
                <td>Trần Không Bít</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>btttk@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>15,000,000</td>
                <td>Đã nghỉ việc</td>
              </tr>
              <tr>
                <td scope="row">NV123456</td>
                <td>Nguyễn Văn Long</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>longnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>10,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV111111</td>
                <td>Nguyễn Văn Bát</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>batnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>13,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV222222</td>
                <td>Trần Không Bít</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>btttk@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>15,000,000</td>
                <td>Đã nghỉ việc</td>
              </tr>
              <tr>
                <td scope="row">NV123456</td>
                <td>Nguyễn Văn Long</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>longnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>10,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV111111</td>
                <td>Nguyễn Văn Bát</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>batnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>13,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV222222</td>
                <td>Trần Không Bít</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>btttk@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>15,000,000</td>
                <td>Đã nghỉ việc</td>
              </tr>
              <tr>
                <td scope="row">NV123456</td>
                <td>Nguyễn Văn Long</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>longnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>10,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV111111</td>
                <td>Nguyễn Văn Bát</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>batnv@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>13,000,000</td>
                <td>Đang thử việc</td>
              </tr>
              <tr>
                <td scope="row">NV222222</td>
                <td>Trần Không Bít</td>
                <td>Nam</td>
                <td>12/05/1995</td>
                <td>0635145876</td>
                <td>btttk@gmail.com</td>
                <td>Nhân viên</td>
                <td>Phòng nhân sự</td>
                <td>15,000,000</td>
                <td>Đã nghỉ việc</td>
              </tr>
            </tbody>
          </table>
        </div>

        <footer class="footer-table">
          <div class="row">
            <div class="col-sm footer-table-left">
              <span class="text-muted">Hiển thị 1-10/1000 nhân viên</span>
            </div>
            <div class="col-sm footer-table-center">
              <div class="paging-left">
                <a class="btn btn-paging-first" href="#" role="button">
                  <i
                    class="fa fa-angle-double-left icon-paging-first"
                    aria-hidden="true"
                  ></i>
                </a>
                <a class="btn btn-default" href="#" role="button">
                  <i
                    class="fa fa-chevron-left icon-paging-previous"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div class="paging-number">
                <a
                  class="btn btn-paging-number-item active"
                  href="#"
                  role="button"
                  >1</a
                >
                <a class="btn btn-paging-number-item" href="#" role="button"
                  >2</a
                >
                <a class="btn btn-paging-number-item" href="#" role="button"
                  >3</a
                >
                <a class="btn btn-paging-number-item" href="#" role="button"
                  >4</a
                >
              </div>
              <div class="paging-right">
                <a class="btn btn-default" href="#" role="button">
                  <i
                    class="fa fa-chevron-right icon-paging-next"
                    aria-hidden="true"
                  ></i>
                </a>
                <a class="btn btn-paging-last" href="#" role="button">
                  <i
                    class="fa fa-angle-double-right icon-paging-last"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div class="col-sm footer-table-right">
              <span class="text-muted">10 nhân viên/trang</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
