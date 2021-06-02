import { ActionTree, createStore, MutationTree } from "vuex";
import { Lab, CourseMessage, Teacher } from "@/datasource/Types";
import * as vxt from "@/store/VuexTypes";
import axios from "axios";
import { ResultVO } from "@/mock";

export interface State {
  Labs?: Lab[];
  courseMessage: CourseMessage[];
  teachers?: Teacher[];
}
const myState: State = {
  Labs: [
    { id: "901", number: 100, detail: "" } as Lab,
    { id: "902", number: 100, detail: "" } as Lab,
    { id: "903", number: 100, detail: "" } as Lab,
    { id: "904", number: 100, detail: "" } as Lab
  ],
  courseMessage: [],

  teachers: [
    {
      id: "1",
      name: "bwhyman",
      title: "讲师",
      graduationSchool: "东北林业大学",
      userName: "2046204600",
      password: "123456",
      detail: "软件工程专业教师"
    },
    {
      id: "2",
      name: "bwhyman",
      title: "讲师",
      graduationSchool: "东北林业大学",
      userName: "2046204600",
      password: "123456",
      detail: "软件工程专业教师"
    }
  ]
};
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_COURSES]: (state, data: CourseMessage[]) =>
    (state.courseMessage = data)
};
const myActions: ActionTree<State, State> = {
  [vxt.GET_COURSES]: async ({ commit }, name: string) => {
    console.log(name);
    const resp = await axios.post<ResultVO>("/api/teacher/get", name);
    console.log(1);
    commit(vxt.UPDATE_COURSES, resp.data.data);
  }
};
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});
