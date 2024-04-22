export interface ResApi {
  advisor_summary: {
    client_count: number;
    total_equity: number;
    average_equity: number;
    equity_history: {
      date: string;
      value: number;
    }[];
  };
  clients_summary: {
    name: string;
    broker: string;
    latest_transactions: {
      date: string;
      value: number;
      type: string;
    }[];
  }[];
}
