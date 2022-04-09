"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventHandler = void 0;
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
exports.getEventHandler = {
    create: handleCreateEvent,
    pull_request: handelPullRequestEvent
};
function handleCreateEvent(regExp) {
    const payload = github.context.payload;
    const branchName = payload.ref;
    core.info(JSON.stringify(payload));
    if (regExp.test(branchName)) {
        core.info(`Branch name is ${branchName}`);
    }
}
function handelPullRequestEvent(regExp) {
    const payload = github.context.payload;
    const pullRequestTitle = payload.pull_request.title;
    core.info(JSON.stringify(payload));
    if (regExp.test(pullRequestTitle)) {
        core.info(`Pull request title is ${pullRequestTitle}`);
    }
}
