import { createStore } from "vuex";
import { Lab } from "@/datasource/Types";
export interface State {
  Labs?: Lab[];
}
const myState: State = {
  Labs: [
    { id: "901", number: 100, detail: "" } as Lab,
    { id: "902", number: 100, detail: "" } as Lab,
    { id: "903", number: 100, detail: "" } as Lab,
    { id: "904", number: 100, detail: "" } as Lab,
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
