<template>
  <div>
    <div>
      <el-select v-model="classroom" filterable placeholder="请选择">
        <el-option
          v-for="(l, index) in classroomNumber"
          :key="index"
          :label="`丹青${l.id}`"
          :value="l.id"
        >
          丹青{{ l.id }}
        </el-option>
      </el-select>

      <el-button @click="query(classroom)">查询</el-button>
    </div>

    <div>
      起始周次：
      <el-select filterable placeholder="请选择">
        <el-option></el-option>
      </el-select>
      结束周次：
      <select name="" id="">
        <option value="1">第一周</option>
        <option value="2">第二周</option>
        <option value="3">第三周</option>
        <option value="4">第四周</option>
        <option value="5">第五周</option>
        <option value="6">第六周</option>
        <option value="7">第七周</option>
        <option value="8">第八周</option>
        <option value="9">第九周</option>
        <option value="10">第十周</option>
        <option value="">第十一周</option>
        <option value="">第十二周</option>
        <option value="">第十三周</option>
        <option value="">第十四周</option>
        <option value="">第十五周</option>
        <option value="">第十六周</option>
        <option value="">第十七周</option>
        <option value="">第十八周</option>
      </select>
      课程节次：
      <select name="" id="">
        <option value="">第一节课</option>
        <option value="">第二节课</option>
        <option value="">第三节课</option>
        <option value="">第四节课</option>
        <option value="">第五节课</option>
      </select>
      <button @click="select()">选课</button>
    </div>
    <table border="none">
      <tr>
        <th></th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
        <th>星期四</th>
        <th>星期五</th>
        <th>星期六</th>
        <th>星期天</th>
      </tr>
      <tr>
        <td>第一节课</td>
        <td>
          <template v-for="(n, index) of classroomMessage" :key="index">
            <template v-if="n.lesson == '0101'">
              {{ n.courseName }}{{ n.start }}周-{{ n.end }}周{{
                n.teacherName
              }}&nbsq&nbsq{{ n.title }}
            </template>
          </template>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>第二节课</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>第三节课</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>第四节课</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>第五节课</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import axios from "axios";
import { ClassroomMessage, Lab } from "@/datasource/Types";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const classroomNumber = computed(() => store.state.Labs);
    const classroom = ref<Lab>();
    const classroomMessage = ref<ClassroomMessage[]>([
      {
        id: "901",
        start: 1,
        end: 9,
        teacherName: "y",
        lesson: "0101",
        courseName: "数据结构"
      }
    ]);

    const query = (classroom: Lab) => {
      axios.get("http://localhost:8080/api/${Lab}").then(resp => {
        classroomMessage.value = resp.data;
      });
    };
    const select = () => {
      axios.get("http://localhost:8080/api/${Lab}").then(resp => {
        classroomMessage.value = resp.data;
      });
    };
    return {
      classroomNumber,
      classroom,
      query,
      classroomMessage
    };
  }
});
</script>
