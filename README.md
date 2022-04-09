# Automate Project Card

This action change the status of project card.

## Preconfiguration

### Create new Github personal access Token (GPA_TOKEN)

- [Github new token](https://github.com/settings/tokens/new)
- scope: repo(all)

### Create new secrets

- Settings > Security > Secrets > Actions > New repository secret
- Name: GPA_TOKEN
- Value: Created token that above

## Inputs

### `gpa-token`

**required** Github personal access Token

## Example usage

```yml
- name: Automate Project Card Step
  uses: modolee/automate-project-card@v0.1.8
  with:
    gpa-token: ${{ secrets.GPA_TOKEN }}
```
