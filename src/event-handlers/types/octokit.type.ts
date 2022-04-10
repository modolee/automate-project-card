import { Octokit } from '@octokit/core';
import { PaginateInterface } from '@octokit/plugin-paginate-rest';
import { Api } from '@octokit/plugin-rest-endpoint-methods/dist-types/types';

export type OctokitType = Octokit &
  Api & {
    paginate: PaginateInterface;
  };

export type Repo = {
  owner: string;
  repo: string;
};
