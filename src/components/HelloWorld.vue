<template>
  <div class="main">

    <el-form label-width="130px" class="dynamic">

      <el-form-item label="房屋">
      </el-form-item>

      <el-form-item label="电费" :rules="[
                { required: true, message: '请输入电费', trigger: 'blur' },
              ]">

        <el-input type="number" v-model="fare"></el-input>
      </el-form-item>

      <el-form-item label="电费日期" :rules="[
          { required: true, message: '请输入日期', trigger: 'blur' },
        ]">
        <el-date-picker
          v-model="value"
          type="daterange"
          placeholder="选择日期范围">
        </el-date-picker>
      </el-form-item>

      <template v-for="(room, $index) in roomInfo">
        <el-form-item :key="room.id" :label="`${keyArray[$index]}房间`">
          <span>空调费用: {{ (room.log2 - room.log1) / 2 }} 元</span>
          <span>公摊费用: {{ (room.log2 - room.log1) / 2 }} 元</span>
          <span>总费用: {{ (room.log2 - room.log1) / 2 }} 元</span>
        </el-form-item>
        <el-form-item :key="room.id" label="居住日期">
          <el-date-picker v-model="room.daterange" type="daterange" placeholder="选择日期范围">
          </el-date-picker>
        </el-form-item>
        <el-form-item :key="room.id" label="居住人数">
          <el-input type="number" v-model="room.peopleNum"></el-input>
        </el-form-item>
        <el-form-item :key="room.id" label="上次空调度数">
          <el-input type="number" v-model="room.log1"></el-input>
        </el-form-item>
        <el-form-item :key="room.id" label="本次空调度数">
          <el-input type="number" v-model="room.log2"></el-input>
        </el-form-item>
      </template>

  <el-form-item>
    <el-button @click="addRoomInfo">新增信息</el-button>
  </el-form-item>

      <!--
      <el-form-item prop="email" label="电费日期" :rules="[
          { required: true, message: '请输入日期', trigger: 'blur' },
          { type: 'number', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]">
      </el-form-item>
      -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      allLog: 0,
      value: [],
      result: 0,
      roomNum: '0',
      fare: '',
      roomInfo: [],
      keyArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    }
  },
  watch: {
    value (v) {
      const time = v[1] - v[0]
      this.result = time / 60 / 1000 / 60 / 24 + 1
    },
    roomInfo: {
      deep: true,
      call (v) {}
    }
  },
  methods: {
    addRoomInfo () {
      this.roomInfo.push({
        id: this.roomInfo.length,
        daterange: [],
        peopleNum: 1,
        log1: 0,
        log2: 0
      })
    }
  }
}
</script>

<style scoped>
.block {
  margin: 20px 20px 0 20px;
}
.main {

}
</style>
