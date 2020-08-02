<template lang="pug">
page-with-side-links.page
  h1.page-title Dự án hỗ trợ các doanh nghiệp đầu tư vào nông nghiệp, nông thôn tỉnh Yên Bái giai đoạn 2016 - 2020

  .form-actions
    el-button(@click="submit") Sửa
    el-button(type="primary" @click="submit") Đề nghị duyệt

  el-card
    template(slot="header") Thông tin chung dự án
      el-form(
        ref="form"
        :model="form"
        :rules="rules"
      )
        el-form-item(label="Đơn vị" prop="name")
          el-input(v-model="form.name")

        el-form-item(label="Tên dự án" prop="project")
          el-input(v-model="form.project" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }")

        el-form-item(prop="types")
          el-checkbox-group(v-model="form.types")
            el-checkbox(:label="1") 1. Dự án đầu tư khẩn cấp
            el-checkbox(:label="2") 2. Dự án có dự án thành phần
            el-checkbox(:label="3") 3. Dự án là dự án thành phần
            el-checkbox(:label="4") 4. Dự án thuộc CTMQG

        el-form-item(label="Dự án cha" prop="belongsTo")
          el-input(v-model="form.belongsTo")

        .form-section
          .form-section__title Phân loại dự án
          el-row(:gutter="20")
            el-col(:md="12")
              el-form-item(label="Theo chương trình đầu tư thi công" prop="program")
                el-input(v-model="form.program")
            el-col(:md="12")
              el-form-item(label="Ngành thống kê" prop="category")
                el-input(v-model="form.category")

        .form-section
          .form-section__title Phân loại về thủ tục đầu tư
          el-form-item(prop="investment")
            el-radio-group(v-model="form.investment")
              el-radio(:label="true") Cơ cấu phần xây dựng
              el-radio(:label="false") Không cơ cấu phần xây dựng

  debug(:data="form")
</template>

<script>
export default {
  data () {
    return {
      form: {
        types: []
      }
    }
  },

  computed: {
    rules () {
      return {
        name: { required: true, message: 'Vui lòng nhập thông tin đơn vị' },
        program: { required: true, message: 'Vui lòng nhập thông tin chương trình đầu tư' },
        category: { required: true, message: 'Vui lòng nhập thông tin ngành thống kê' }
      }
    }
  },

  methods: {
    submit () {
      this.$refs.form.validate(ok => {
        if (!ok) return
        // api call goes here
        this.$alert('fine', 'ok')
      })
    }
  }
}
</script>
