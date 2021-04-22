<style scoped>
.isHide {
  display: none;
}
.m-dialog {
  z-index: 999;
}

.dialog-header {
  position: relative;
  height: 40px;
  line-height: 60px;
  padding-left: 16px;
  display: flex;
  font-size: 23px;
}

.dialog-header-title {
  font-weight: 600;
}

.dialog-header-close {
  position: absolute;
  right: 16px;
  top: 8px;
}
.dialog-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
}

.dialog-content {
  position: fixed;
  border-radius: 5px;
  width: 750px;
  background-color: #fff;
  left: calc(50% - 325px);
  top: calc(50% - 450px);
}
.dialog-body {
  padding: 16px 16px 16px 16px;
}
.dialog-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  /* align-items: center; */
  justify-content: flex-end;
  padding: 12px 24px;
  box-sizing: border-box;
}
.avatar-employee {
  padding: 16px;
}
.form-input-employee {
  padding: 16px;
}
.avatar-note {
  font-size: 12px;
  text-align: center;
}
.avatar-employee .el-avatar {
  border: 1px solid #ccc;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
  background-image: url(../../assets/img/default-avatar.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.currency-for-input {
  position: absolute;
  right: 40px;
  line-height: 40px;
  font-style: italic;
}
.label-required {
  color: red;
}
.label-input {
  margin-bottom: 0px;
  margin-top: 1rem;
}
.hr-group-label {
  margin: 0px;
}

.btn-save-form {
  background-color: #01b075;
  color: white;
  margin-left: 15px;
}
</style>
<template>
  <div>
    <!-- <button id="btnAdd" class="m-btn m-btn-default" v-on:click="btnAddOnClick">
      <div class="m-btn-icon icon-add"></div>
      <div class="btn-text">Thêm nhân viên</div>
    </button> -->
    <div
      class="m-dialog dialog-detail"
      title="Thông tin nhân viên"
      :class="{ isHide: isHide }"
    >
      <div class="dialog-modal"></div>
      <div class="dialog-content">
        <div class="dialog-header">
          <div class="dialog-header-title">THÔNG TIN NHÂN VIÊN</div>
          <div class="dialog-header-close">
            <!-- <button v-on:click="btnCancelOnClick">x</button> -->
            <button type="button" class="close" v-on:click="btnCancelOnClick">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="dialog-body">
          <div class="row">
            <div class="col-4 avatar-employee">
              <div class="el-avatar"></div>
              <div class="avatar-note">
                (Vui lòng chọn ảnh có định dạng <br /><strong
                  >.jpg, .jpeg, .png, .gif. </strong
                >)
              </div>
            </div>
            <div class="col-8 form-input-employee">
              <div class="group-label-info">A. Thông tin chung:</div>
              <hr class="hr-group-label" />
              <div class="row">
                <div class="col">
                  <label class="label-input">
                    Mã nhân viên <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      id="txtEmployeeCode"
                      fieldName="EmployeeCode"
                      required
                      class="form-control"
                      type="text"
                      v-model="employee.EmployeeCode"
                    />
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">
                    Họ và tên <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      id="txtFullName"
                      fieldName="FullName"
                      class="form-control"
                      type="text"
                      required
                      v-model="employee.FullName"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label-input">Ngày sinh</label>
                  <div class="input-group">
                    <input
                      id="dtDateOfBirth"
                      class="form-control"
                      type="date"
                      v-model="dateOfBirthFormat"
                    />
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">Giới tính</label>
                  <div class="input-group">
                    <select
                      id="cbxGender"
                      class="form-control"
                      v-model="employee.Gender"
                    >
                      <option value="1">Nam</option>
                      <option value="0">Nữ</option>
                      <option value="2">Không xác định</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label-input">
                    Số CMTND/ Căn cước <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="txtIdentityNumber"
                      fieldName="text"
                      type="text"
                      required
                      v-model="employee.IdentityNumber"
                    />
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">Nơi cấp</label>
                  <div class="input-group">
                    <input
                      id="txtIdentityPlace"
                      fieldName="PhoneNumber"
                      class="form-control"
                      type="text"
                      v-model="employee.IdentityPlace"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <label class="label-input">
                    Email <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      class="form-control"
                      id="txtEmail"
                      fieldName="Email"
                      type="email"
                      required
                      placeholder="example@domain.com"
                      v-model="employee.Email"
                    />
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">
                    Số điện thoại <span class="label-required">(*)</span>
                  </label>
                  <div class="input-group">
                    <input
                      id="txtPhoneNumber"
                      fieldName="FullName"
                      class="form-control"
                      type="text"
                      required
                      v-model="employee.PhoneNumber"
                    />
                  </div>
                </div>
              </div>
              <div class="group-label-info" style="margin-top: 30px">
                B. Thông tin công việc:
              </div>
              <hr class="hr-group-label" />
              <div class="row">
                <div class="col">
                  <label class="label-input">Vị trí</label>
                  <div class="input-group">
                    <select
                      id="cbxPosition"
                      fieldName="CustomerGroupName"
                      fieldValue="CustomerGroupId"
                      api="/api/customergroups"
                      class="form-control"
                      v-model="employee.PositionId"
                    >
                      <option
                        v-for="position in positions"
                        :key="position.PositionId"
                        :value="position.PositionId"
                      >
                        {{ position.PositionName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">Phòng ban</label>
                  <div class="input-group">
                    <select
                      id="cbnDepartment"
                      fieldName="CustomerGroupName"
                      fieldValue="CustomerGroupId"
                      api="/api/customergroups"
                      class="form-control"
                      v-model="employee.DepartmentId"
                    >
                      <option
                        v-for="department in departments"
                        :key="department.DepartmentId"
                        :value="department.DepartmentId"
                      >
                        {{ department.DepartmentName }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="label-input">Mức lương cơ bản</label>
                  <div class="input-group">
                    <currency-input
                      currency="VND"
                      class="form-control"
                      id="txtSalary"
                      fieldName="Salary"
                      type="text"
                      style="border-right: none"
                      v-model="employee.Salary"
                    />
                    <div class="input-group-append">
                      <span
                        class="input-group-text"
                        style="border-left: none; background: white"
                        >(VNĐ)</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col">
                  <label class="label-input">Tình trạng công việc</label>
                  <div class="input-group">
                    <select
                      id="cboWorkStatus"
                      fieldName="CustomerGroupName"
                      fieldValue="CustomerGroupId"
                      api="/api/customergroups"
                      class="form-control"
                      v-model="employee.WorkStatus"
                    >
                      <option value="0">Đã nghỉ việc</option>
                      <option value="1">Thực tập sinh</option>
                      <option value="2">Đang thử việc</option>
                      <option value="3">Nhân viên</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <button
            id="btnCancel"
            class="btn btn-default"
            v-on:click="btnCancelOnClick"
          >
            HỦY
          </button>
          <button id="btnSave" @click="saveEmployee" class="btn btn-save-form">
            <i class="far fa-save"></i><span class="btn-text">LƯU</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  props: {
    isHide: Boolean,
    employee: Object,
    initEmployee: Function,
    dateOfBirthFormat: String,
    requestStatus: Number,
    departments: Array,
    positions: Array
  },
  methods: {
    btnCancelOnClick() {
      this.$emit("closePopup", true);
    },
    async saveEmployee() {
      this.$emit("closePopup", true);
      this.employee.DateOfBirth = this.dateOfBirthFormat;
      if (this.requestStatus == 0) {
        const response = await axios.post(
          "http://api.manhnv.net/v1/Employees",
          this.employee
        );
        console.log(response);
      } else {
        const response = await axios.put(
          "http://api.manhnv.net/v1/Employees/" + this.employee.EmployeeId,
          this.employee
        );
        console.log(response);
      }
      await this.initEmployee();
      console.log(this.employee);
    },
  },

  data() {
    return { value: this.employee.Salary };
  },
};
</script>
