# Automate Project Card

This action change the status of project card.

## Inputs

### `reg-exp`

**Required** Regular Expression to compare with title of issue or pull quest.

## Example usage

```yml
- name: Automate Project Card Step
  uses: modolee/automate-project-card@v0.1.4
  with:
    reg-exp: '^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\s|/|-]+#(\d)$'
```
