export interface IEventHandler {
  handleEvent(): void;
  getIssueNumber(): number | null;
  parseIssueNumber(text: string): number | null;
  changeStatus(issueNumber: number): void;
}
