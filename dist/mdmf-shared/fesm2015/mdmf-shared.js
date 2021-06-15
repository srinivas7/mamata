import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __decorate } from 'tslib';
import { Action, Selector, State } from '@ngxs/store';

class MdmfSharedService {
    constructor() { }
}
MdmfSharedService.ɵfac = function MdmfSharedService_Factory(t) { return new (t || MdmfSharedService)(); };
MdmfSharedService.ɵprov = ɵɵdefineInjectable({ token: MdmfSharedService, factory: MdmfSharedService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MdmfSharedService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();

class MdmfSharedComponent {
    constructor() { }
    ngOnInit() { }
}
MdmfSharedComponent.ɵfac = function MdmfSharedComponent_Factory(t) { return new (t || MdmfSharedComponent)(); };
MdmfSharedComponent.ɵcmp = ɵɵdefineComponent({ type: MdmfSharedComponent, selectors: [["lib-mdmf-shared"]], decls: 4, vars: 0, template: function MdmfSharedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h2");
        ɵɵtext(1, "Component from shared module");
        ɵɵelementEnd();
        ɵɵelementStart(2, "p");
        ɵɵtext(3, " mdmf-shared works!\n");
        ɵɵelementEnd();
    } }, styles: ["./mdmf-shared.component.css"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MdmfSharedComponent, [{
        type: Component,
        args: [{
                selector: "lib-mdmf-shared",
                templateUrl: "./mdmf-shared.component.html",
                styles: ["./mdmf-shared.component.css"],
            }]
    }], function () { return []; }, null); })();

class MdmfSharedModule {
}
MdmfSharedModule.ɵfac = function MdmfSharedModule_Factory(t) { return new (t || MdmfSharedModule)(); };
MdmfSharedModule.ɵmod = ɵɵdefineNgModule({ type: MdmfSharedModule });
MdmfSharedModule.ɵinj = ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MdmfSharedModule, { declarations: [MdmfSharedComponent], imports: [CommonModule], exports: [MdmfSharedComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MdmfSharedModule, [{
        type: NgModule,
        args: [{
                // declarations: [MdmfSharedComponent, ListUserComponent],
                declarations: [MdmfSharedComponent],
                imports: [CommonModule],
                // exports: [MdmfSharedComponent, ListUserComponent]
                exports: [MdmfSharedComponent],
            }]
    }], null, null); })();

/**
 * Action to add an user
 */
class AddUser {
    constructor(payload) {
        this.payload = payload;
    }
}
AddUser.type = "[User] Add";
/**
 * Action to remove an user
 */
class RemoveUser {
    constructor(payload) {
        this.payload = payload;
    }
}
RemoveUser.type = "[User] Remove";

class UserStateModel {
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
UserState.ɵprov = ɵɵdefineInjectable({ token: UserState, factory: UserState.ɵfac });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UserState, [{
        type: Injectable
    }], null, { add: [], remove: [] }); })();

/*
 * Public API Surface of mdmf-shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddUser, MdmfSharedComponent, MdmfSharedModule, MdmfSharedService, RemoveUser, UserState, UserStateModel };
//# sourceMappingURL=mdmf-shared.js.map
