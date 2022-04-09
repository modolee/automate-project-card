# Automate Project Card

This action change the status of project card.

## Inputs

### `branch-name`

**Required** Regular Expression to compare with branch name.

### `pull-request-title`

**Required** Regular Expression to compare with pull request title.

## Example usage

```yml
- name: Automate Project Card Step
  uses: modolee/automate-project-card@v0.1.5
  with:
    branch-name: '^.+#(\d+)$'
    pull-request-title: '^.+\(resolved #\d+\)$'
```
