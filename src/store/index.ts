import { createStore } from "vuex";
import { Lab, CourseMessage } from "@/datasource/Types";
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
// const myMutations: MutationTree<State> = {
//   updateUser: (state, data: User) => (state.user = data)
// };
export default createStore({
  state: myState,
  mutations: {},
  actions: {},
  modules: {}
});
