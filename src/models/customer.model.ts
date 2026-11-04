export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string | undefined;
  created_at: string;
}

export type CreateCustomerInput = Omit<Customer, "id" | "created_at">;
export type UpdateCustomerInput = Partial<CreateCustomerInput>;