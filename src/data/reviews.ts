export type Review = {
  name: string;
  text: string;
  rating: number;
  date: string;
  source: string;
};

// Add only real, verified customer reviews:
// { name: "Customer name", text: "Their actual feedback", rating: 5, date: "YYYY-MM-DD", source: "Google" }
export const reviews: Review[] = [];