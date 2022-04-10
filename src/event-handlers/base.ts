import * as core from '@actions/core';
import * as github from '@actions/github';
import { OctokitType, Repo } from './types/octokit.type';

export class BaseEventHandler {
  protected octokit: OctokitType;
  protected columnList: any[];

  constructor(
    private readonly gpaToken: string,
    private readonly orgName: string,
    private readonly projectNumber: number,
    private readonly inProgressColumn: string,
    private readonly reviewColumn: string
  ) {
    this.octokit = github.getOctokit(gpaToken);
    this.columnList = [];
  }

  async init() {}

  async getProjectList() {
    console.log(this.orgName);
    return (await this.octokit.rest.projects.listForOrg({ org: this.orgName }))
      .data;
  }

  async getProjectColumnList() {
    // return (
    //   await this.octokit.rest.projects.listColumns({
    //     project_id: this.projectNumber,
    //     per_page: 100
    //   })
    // ).data;
  }
}
