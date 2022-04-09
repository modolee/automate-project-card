import * as core from '@actions/core';
import * as github from '@actions/github';

function run(): void {
  try {
    const status = core.getInput('status');
    console.log({ status });
    console.log(`Context: ${github.context}`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
