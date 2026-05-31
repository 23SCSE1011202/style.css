export type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
export const BLOOD_GROUPS: BloodGroup[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
export interface Donor {
  id: string;
  name: string;
  bloodGroup: BloodGroup;
  city: string;
  state: string;
  phone: string;
  lastDonation: string;
  available: boolean;
}
export const MOCK_DONORS: Donor[] = [
  { id: "1", name: "Aarav Sharma", bloodGroup: "O+", city: "Mumbai", state: "MH", phone: "+91 98765 43210", lastDonation: "2025-02-14", available: true },
  { id: "2", name: "Priya Patel", bloodGroup: "A+", city: "Ahmedabad", state: "GJ", phone: "+91 99876 54321", lastDonation: "2025-04-02", available: true },
  { id: "3", name: "Rohan Mehta", bloodGroup: "B+", city: "Delhi", state: "DL", phone: "+91 91234 56789", lastDonation: "2025-01-20", available: false },
  { id: "4", name: "Sneha Iyer", bloodGroup: "AB+", city: "Bengaluru", state: "KA", phone: "+91 98123 45678", lastDonation: "2025-03-10", available: true },
  { id: "5", name: "Vikram Singh", bloodGroup: "O-", city: "Jaipur", state: "RJ", phone: "+91 90123 45670", lastDonation: "2025-04-25", available: true },
  { id: "6", name: "Ananya Roy", bloodGroup: "A-", city: "Kolkata", state: "WB", phone: "+91 98765 11122", lastDonation: "2025-02-28", available: true },
  { id: "7", name: "Kabir Khan", bloodGroup: "B-", city: "Hyderabad", state: "TS", phone: "+91 97654 33445", lastDonation: "2024-12-15", available: true },
  { id: "8", name: "Meera Nair", bloodGroup: "O+", city: "Chennai", state: "TN", phone: "+91 99887 76655", lastDonation: "2025-03-22", available: true },
  { id: "9", name: "Arjun Reddy", bloodGroup: "AB-", city: "Pune", state: "MH", phone: "+91 98012 34567", lastDonation: "2025-01-05", available: false },
  { id: "10", name: "Ishita Verma", bloodGroup: "O+", city: "Delhi", state: "DL", phone: "+91 90909 80808", lastDonation: "2025-05-01", available: true },
  { id: "11", name: "Rahul Joshi", bloodGroup: "A+", city: "Mumbai", state: "MH", phone: "+91 97000 12345", lastDonation: "2025-04-18", available: true },
  { id: "12", name: "Diya Kapoor", bloodGroup: "B+", city: "Bengaluru", state: "KA", phone: "+91 98000 67890", lastDonation: "2025-03-30", available: true },
];
export const STATS = {
  donors: 12480,
  cities: 142,
  livesSaved: 38210,
  requestsToday: 87,
};
