<template>
  <div>
    <div>
      <select name="" id="">
        <option value="">12</option>
        <option value="">1</option>
      </select>
      <button>查询</button>
    </div>

    <div>
      起始周次：
      <select name="" id="">
        <option value="">第一周</option>
        <option value="">第二周</option>
        <option value="">第三周</option>
        <option value="">第四周</option>
        <option value="">第五周</option>
        <option value="">第六周</option>
        <option value="">第七周</option>
        <option value="">第八周</option>
        <option value="">第九周</option>
        <option value="">第十周</option>
        <option value="">第十一周</option>
        <option value="">第十二周</option>
        <option value="">第十三周</option>
        <option value="">第十四周</option>
        <option value="">第十五周</option>
        <option value="">第十六周</option>
        <option value="">第十七周</option>
        <option value="">第十八周</option>
      </select>
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
      <button>选课</button>
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
        <td></td>
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
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const state: Store<State> = useStore();
    const classroomNumber = state.classroomNumber;
    return {
      c
    }
  }
});
</script>
