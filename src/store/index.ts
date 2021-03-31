import { createStore, MutationTree } from "vuex";
import { User } from "@/datasource/Types";
export interface State {
  user?: User;
}
const myState: State = {
  user: {
    name: "yyy",
    address: "123456"
  }
};
const myMutations: MutationTree<State> = {
  updateUser: (state, data: User) => (state.user = data)
};
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: {},
  modules: {}
});
