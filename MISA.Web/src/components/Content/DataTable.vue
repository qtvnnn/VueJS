<template>
  <div class="content">
    <div class="content-header">
      <div class="content-header-left">
        <span class="menu-item-selected">Danh sách nhân viên</span>
      </div>
      <div class="content-header-right">
        <a
          class="btn btn-primary btn-add-employee"
          href="#"
          role="button"
          v-on:click="btnAddOnClick"
        >
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
            v-on:change="filterInput($event)"
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
              <a
                class="dropdown-item"
                v-for="department in departments"
                :key="department.DepartmentId"
                href="#"
                >{{ department.DepartmentName }}</a
              >
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
              <a
                class="dropdown-item"
                v-for="position in positions"
                :key="position.PositionId"
                href="#"
                >{{ position.PositionName }}</a
              >
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
    <div class="data-table">
      <table class="table table-striped table-hover" width="100%" border="0">
        <thead>
          <tr>
            <th>Mã nhân viên</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Chức vụ</th>
            <th>Phòng ban</th>
            <th>Mức lương cơ bản</th>
            <th>Tình trạng công việc</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="employee in employees"
            :key="employee.EmployeeId"
            @dblclick="rowOnClick(employee)"
          >
            <td>{{ employee.EmployeeCode }}</td>
            <td>{{ employee.FullName }}</td>
            <td>{{ employee.GenderName }}</td>
            <td>{{ formatDate(employee.DateOfBirth) }}</td>
            <td>{{ employee.PhoneNumber }}</td>
            <td>{{ employee.Email }}</td>
            <td>{{ employee.PositionName }}</td>
            <td>{{ employee.DepartmentName }}</td>
            <td>{{ formatSalary(employee.Salary) }}</td>
            <td>{{ statusWordString(employee.WorkStatus) }}</td>
            <td class="btn-delete-employee">
              <button
                class="btn btn-danger btn-sm"
                v-on:click="deleteEmployee(employee.EmployeeId)"
              >
                <font-awesome-icon icon="trash" size="xs" />
              </button>
            </td>
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
              <font-awesome-icon icon="angle-double-left" />
            </a>
            <a class="btn btn-paging-pre" href="#" role="button">
              <font-awesome-icon icon="angle-left" />
            </a>
          </div>
          <div class="paging-number">
            <a class="btn btn-paging-number-item active" href="#" role="button"
              >1</a
            >
            <a class="btn btn-paging-number-item" href="#" role="button">2</a>
            <a class="btn btn-paging-number-item" href="#" role="button">3</a>
            <a class="btn btn-paging-number-item" href="#" role="button">4</a>
          </div>
          <div class="paging-right">
            <a class="btn btn-paging-next" href="#" role="button">
              <font-awesome-icon icon="angle-right" />
            </a>
            <a class="btn btn-paging-last" href="#" role="button">
              <font-awesome-icon icon="angle-double-right" />
            </a>
          </div>
        </div>
        <div class="col-sm footer-table-right">
          <span class="text-muted">10 nhân viên/trang</span>
        </div>
      </div>
    </footer>
    <Details
      @closePopup="closePopup"
      :isHide="isHideParent"
      :employee="selectedEmployee"
      :initEmployee="initEmployee"
      :requestStatus="requestStatus"
      :departments="departments"
      :positions="positions"
    />
  </div>
</template>

<script>
import * as axios from "axios";
import Details from "./FormDetail.vue";
export default {
  name: "Content",
  components: {
    Details,
  },
  methods: {
    async btnAddOnClick() {
      this.requestStatus = 0;
      this.isHideParent = false;
      this.selectedEmployee = {};
      this.selectedEmployee = {
        EmployeeCode: await this.getNewEmployeeCode(),
      };
      console.log(this.selectedEmployee.EmployeeCode);
    },

    rowOnClick(employee) {
      if (employee.DateOfBirth != null) {
        employee.DateOfBirth = this.formatDateToForm(employee.DateOfBirth);
      }
      this.requestStatus = 1;
      this.selectedEmployee = employee;
      this.isHideParent = false;
    },

    closePopup(value) {
      this.isHideParent = value;
    },

    async initEmployee() {
      const employeesAPI = await axios.get(
        "http://api.manhnv.net/v1/Employees"
      );
      const departmentAPI = await axios.get(
        "http://api.manhnv.net/api/Department"
      );
      const positionAPI = await axios.get("http://api.manhnv.net/v1/Positions");
      this.employees = employeesAPI.data;
      this.departments = departmentAPI.data;
      this.positions = positionAPI.data;
    },

    async deleteEmployee(employeeId) {
      this.$confirm({
        message: `Bạn có chắc muốn xóa bản ghi này?`,
        button: {
          no: "Không",
          yes: "Có",
        },
        callback: async (confirm) => {
          if (confirm) {
            const response = await axios.delete(
              "http://api.manhnv.net/v1/Employees/" + employeeId
            );
            console.log(response);
            await this.initEmployee();
          }
        },
      });
    },

    async getNewEmployeeCode() {
      const newEmployeeCodeAPI = await axios.get(
        "http://api.manhnv.net/v1/Employees/NewEmployeeCode"
      );
      return newEmployeeCodeAPI.data;
    },

    async getDataFilter(valueInput) {
      const employeesAPI = await axios.get(
        `http://api.manhnv.net/v1/Employees/employeeFilter?pageSize=100&employeeFilter=${valueInput}`
      );
      this.employees = employeesAPI.data.Data;
    },

    statusWordString(statusWord) {
      switch (statusWord) {
        case 0:
          return "Đã nghỉ việc";
        case 1:
          return "Thực tập sinh";
        case 2:
          return "Đang thử việc";
        case 3:
          return "Nhân viên";
      }
    },
    formatDate(dateString) {
      if (dateString !== null) {
        var res = dateString.split("-");
        var year = res[0];
        var month = res[1];
        var day = res[2].split("T")[0];
        return day + "/" + month + "/" + year;
      }
      return "";
    },
    formatSalary(salary) {
      if (salary !== null) {
        return salary.toLocaleString("vi-VN");
      }
      return "";
    },
    formatDateToForm(dateString) {
      if (dateString !== null) {
        var res = dateString.split("-");
        var year = res[0];
        var month = res[1];
        var day = res[2].split("T")[0];
        return year + "-" + month + "-" + day;
      }
      return "";
    },

    async filterInput(txtInput) {
      let valueInput = txtInput.target.value;
      if (valueInput) {
        await this.getDataFilter(valueInput);
      } else {
        await this.initEmployee();
      }
    },
  },

  data() {
    return {
      employees: [],
      departments: [],
      positions: [],
      selectedEmployee: {},
      isHideParent: true,
      requestStatus: 0,
    };
  },

  async created() {
    await this.initEmployee();
  },
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
  background-image: url("../../assets/icon/add.png");
}

.customer-filter {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
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
  background-image: url("../../assets/icon/search.png");
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
  background-image: url("../../assets/icon/refresh.png");
}

.data-table {
  position: absolute;
  right: 4px;
  left: -2px;
  bottom: 60px;
  top: 100px;
  overflow-y: auto;
}

.data-table th {
  position: sticky;
  top: -1px;
  left: 2px;
  background-color: white;
}

.data-table tr {
  cursor: pointer;
}

.btn-delete-employee {
  padding: 5px 0px 0px 0px;
}

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
  background-color: #e9ebee;
  color: #6c757d;
  border-radius: 50%;
  height: 34px;
  padding-left: 11px;
  padding-top: 5px;
  margin: 4px;
}

.footer-table-center .paging-number .active {
  background-color: #01b075;
  color: #ffffff;
}

.btn-paging-first,
.btn-paging-last,
.btn-paging-next,
.btn-paging-pre {
  color: #6c757d;
}

.btn-paging-first,
.btn-paging-last,
.btn-paging-next,
.btn-paging-pre {
  font-size: 21px;
  font-weight: 600;
}

.footer-table-right {
  text-align: right;
}
</style>
