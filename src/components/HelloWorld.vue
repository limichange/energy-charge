<template>
  <div class="main">

    <el-form label-width="130px" class="dynamic">

      <el-form-item label="">
        <h2>房屋总信息</h2>
        <span>总费用 <num :val="parseInt(fare)" /></span>
        <span>空调费用 <num :val="airConditionerFare" /></span>
        <span>公摊费用 <num :val="fare - airConditionerFare" /></span>
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
          :picker-options="pickerOptions"
          v-model="fareDate"
          type="daterange"
          placeholder="选择日期范围">
        </el-date-picker>
      </el-form-item>

      <template v-for="(room, $index) in roomInfo">
        <el-form-item :key="room.id" label="">
          <h1>{{ `${keyArray[$index]}房间` }}</h1>
          <span>空调费用: <num :val="(room.log2 - room.log1) / 2" /> 元</span>
          <span>公摊费用: <num :val="toDay(room.daterange) * room.peopleNum * ((fare - airConditionerFare) / allPeopleDay)" /> 元</span>
          <span>总费用: <num :val="toDay(room.daterange) * ((fare - airConditionerFare) / allPeopleDay) + (room.log2 - room.log1) / 2" /> 元</span>
        </el-form-item>
        <el-form-item :key="room.id" label="居住日期">
          <el-date-picker
            :picker-options="pickerOptions"
            v-model="room.daterange"
            type="daterange"
            placeholder="选择日期范围">
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
        <el-button @click="addRoomInfo">新增房间信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Num from './Num'

export default {
  name: 'main',
  components: {
    Num
  },
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '前两个月',
          onClick (picker) {
            const now = new Date()
            now.setMonth(now.getMonth())
            now.setDate(1)
            now.setTime(now.getTime() - 3600 * 1000 * 24)

            const start = new Date()
            start.setDate(1)
            start.setMonth(now.getMonth() - 1)

            const end = new Date()
            end.setDate(now.getDate())
            end.setMonth(now.getMonth())

            picker.$emit('pick', [start, end])
          }
        }]
      },
      airConditionerFare: 0,
      allLog: 0,
      fareDate: [new Date(), new Date()],
      roomNum: '0',
      fare: 0,
      allPeopleDay: 0,
      roomInfo: [],
      keyArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q']
    }
  },
  watch: {
    roomInfo: {
      deep: true,
      handler (v) {
        let airConditionerFare = 0
        let allPeopleDay = 0

        v.forEach(item => {
          allPeopleDay += this.toDay(item.daterange) * item.peopleNum
          airConditionerFare += (item.log2 - item.log1) * 0.5
        })

        this.allPeopleDay = allPeopleDay
        this.airConditionerFare = airConditionerFare
      }
    }
  },
  methods: {
    toDay (time) {
      return (time[1] - time[0]) / 60 / 1000 / 60 / 24 + 1
    },
    addRoomInfo () {
      this.roomInfo.push({
        id: this.roomInfo.length,
        daterange: [ new Date(), new Date() ],
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
  width: 640px;
  margin: 0 auto;
}
</style>
