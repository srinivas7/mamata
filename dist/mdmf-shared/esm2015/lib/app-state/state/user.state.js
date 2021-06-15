import { __decorate } from "tslib";
import { State, Action, Selector } from "@ngxs/store";
import { AddUser, RemoveUser } from "../actions/user.action";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class UserStateModel {
}
/**
 * The UserState
 */
let UserState = class UserState {
    /**
     * Selector to get users from the application state
     * @param state: the application state
     */
    static getUsers(state) {
        return state.users;
    }
    /**
     * Add an user to the application state
     *
     * @param param0: state context
     * @param param1: playload of AddUser action
     */
    add({ getState, patchState, setState }, { payload }) {
        const state = getState();
        if (state && state.users) {
            patchState({
                users: [...state.users, payload],
            });
        }
        else {
            setState({
                users: [payload],
            });
        }
    }
    /**
     * Remove an user from the application state
     *
     * @param param0: state context
     * @param param1: playload of AddUser action
     */
    remove({ getState, setState }, { payload }) {
        const state = getState();
        if (state && state.users) {
            setState({
                users: state.users.filter((u) => !(u.email === payload.email && u.name === payload.name)),
            });
        }
    }
};
UserState.ɵfac = function UserState_Factory(t) { return new (t || UserState)(); };
UserState.ɵprov = i0.ɵɵdefineInjectable({ token: UserState, factory: UserState.ɵfac });
__decorate([
    Action(AddUser)
], UserState.prototype, "add", null);
__decorate([
    Action(RemoveUser)
], UserState.prototype, "remove", null);
__decorate([
    Selector()
], UserState, "getUsers", null);
UserState = __decorate([
    State({
        name: "users",
        defaults: {
            users: [],
        },
    })
], UserState);
export { UserState };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserState, [{
        type: Injectable
    }], null, { add: [], remove: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9tZG1mLXNoYXJlZC9zcmMvIiwic291cmNlcyI6WyJsaWIvYXBwLXN0YXRlL3N0YXRlL3VzZXIuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQixRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLE9BQU8sY0FBYztDQUUxQjtBQUVEOztHQUVHO0lBUVUsU0FBUyxTQUFULFNBQVM7SUFDcEI7OztPQUdHO0lBRUgsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFxQjtRQUNuQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHO0lBRUgsR0FBRyxDQUNELEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWdDLEVBQ2hFLEVBQUUsT0FBTyxFQUFXO1FBRXBCLE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDeEIsVUFBVSxDQUFDO2dCQUNULEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7YUFDakMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQztnQkFDUCxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSCxNQUFNLENBQ0osRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFnQyxFQUNwRCxFQUFFLE9BQU8sRUFBVztRQUVwQixNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3hCLFFBQVEsQ0FBQztnQkFDUCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3ZCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUMvRDthQUNGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7a0VBckRZLFNBQVM7aURBQVQsU0FBUyxXQUFULFNBQVM7QUFpQnBCO0lBREMsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQ0FlZjtBQVNEO0lBREMsTUFBTSxDQUFDLFVBQVUsQ0FBQzt1Q0FhbEI7QUE5Q0Q7SUFEQyxRQUFRLEVBQUU7K0JBR1Y7QUFSVSxTQUFTO0lBUHJCLEtBQUssQ0FBaUI7UUFDckIsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0YsQ0FBQztHQUVXLFNBQVMsQ0FxRHJCO1NBckRZLFNBQVM7dUZBQVQsU0FBUztjQURyQixVQUFVO2dCQWtCVCxHQUFHLE1BdUJILE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSwgQWN0aW9uLCBTdGF0ZUNvbnRleHQsIFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3hzL3N0b3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHsgQWRkVXNlciwgUmVtb3ZlVXNlciB9IGZyb20gXCIuLi9hY3Rpb25zL3VzZXIuYWN0aW9uXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTdGF0ZU1vZGVsIHtcclxuICB1c2VyczogVXNlcltdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIFVzZXJTdGF0ZVxyXG4gKi9cclxuQFN0YXRlPFVzZXJTdGF0ZU1vZGVsPih7XHJcbiAgbmFtZTogXCJ1c2Vyc1wiLFxyXG4gIGRlZmF1bHRzOiB7XHJcbiAgICB1c2VyczogW10sXHJcbiAgfSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclN0YXRlIHtcclxuICAvKipcclxuICAgKiBTZWxlY3RvciB0byBnZXQgdXNlcnMgZnJvbSB0aGUgYXBwbGljYXRpb24gc3RhdGVcclxuICAgKiBAcGFyYW0gc3RhdGU6IHRoZSBhcHBsaWNhdGlvbiBzdGF0ZVxyXG4gICAqL1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFVzZXJzKHN0YXRlOiBVc2VyU3RhdGVNb2RlbCk6IFVzZXJbXSB7XHJcbiAgICByZXR1cm4gc3RhdGUudXNlcnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYW4gdXNlciB0byB0aGUgYXBwbGljYXRpb24gc3RhdGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBwYXJhbTA6IHN0YXRlIGNvbnRleHRcclxuICAgKiBAcGFyYW0gcGFyYW0xOiBwbGF5bG9hZCBvZiBBZGRVc2VyIGFjdGlvblxyXG4gICAqL1xyXG4gIEBBY3Rpb24oQWRkVXNlcilcclxuICBhZGQoXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlLCBzZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VXNlclN0YXRlTW9kZWw+LFxyXG4gICAgeyBwYXlsb2FkIH06IEFkZFVzZXJcclxuICApOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS51c2Vycykge1xyXG4gICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICB1c2VyczogWy4uLnN0YXRlLnVzZXJzLCBwYXlsb2FkXSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcnM6IFtwYXlsb2FkXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYW4gdXNlciBmcm9tIHRoZSBhcHBsaWNhdGlvbiBzdGF0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhcmFtMDogc3RhdGUgY29udGV4dFxyXG4gICAqIEBwYXJhbSBwYXJhbTE6IHBsYXlsb2FkIG9mIEFkZFVzZXIgYWN0aW9uXHJcbiAgICovXHJcbiAgQEFjdGlvbihSZW1vdmVVc2VyKVxyXG4gIHJlbW92ZShcclxuICAgIHsgZ2V0U3RhdGUsIHNldFN0YXRlIH06IFN0YXRlQ29udGV4dDxVc2VyU3RhdGVNb2RlbD4sXHJcbiAgICB7IHBheWxvYWQgfTogQWRkVXNlclxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnVzZXJzKSB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICB1c2Vyczogc3RhdGUudXNlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgKHUpID0+ICEodS5lbWFpbCA9PT0gcGF5bG9hZC5lbWFpbCAmJiB1Lm5hbWUgPT09IHBheWxvYWQubmFtZSlcclxuICAgICAgICApLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19