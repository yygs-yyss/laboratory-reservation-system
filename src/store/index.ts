import { ActionTree, createStore, MutationTree } from "vuex";
import { User, Lab, CourseMessage } from "@/datasource/Types";
import * as vxt from "@/store/VuexTypes";
import { AxiosAdapter, AxiosResponse } from "axios";
import { ResultVO } from "@/mock";
export interface State {
  Labs?: Lab[];
  courseMessage: CourseMessage[];
}
const myState: State = {
  Labs: [
    { id: "901", number: 100, detail: "" } as Lab,
    { id: "902", number: 100, detail: "" } as Lab,
    { id: "903", number: 100, detail: "" } as Lab,
    { id: "904", number: 100, detail: "" } as Lab
  ],
  courseMessage: [
    {
      courseName: "数据结构",
      start: 1,
      end: 10,
      teacherName: "y",
      studentNumber: 100
    } as CourseMessage,
    {
      courseName: "数据挖掘",
      start: 2,
      end: 10,
      teacherName: "y",
      studentNumber: 100
    } as CourseMessage
  ]
};
const myMutations: MutationTree<State> = {};
const myActions: ActionTree<State, State> = {
  [vxt.LOGIN]: async ({ commit }, user: User) => {
    //const resp: AxiosResponse<ResultVO> = await.get()
  }
};
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});
