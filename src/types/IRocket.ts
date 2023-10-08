export interface IRocket {
  id: string;
  description: string;
  wikipedia: string;
  company: string;
  country: string;
  first_flight: string;
  success_rate_pct: number;
  cost_per_launch: number;
  boosters: number;
  stages: number;
  active: boolean;
  type: string;
  name: string;
}
