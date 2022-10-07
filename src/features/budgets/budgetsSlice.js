import { createSlice } from "@reduxjs/toolkit";
export const CATEGORIES = [
  "مکان",
  "غذا",
  "حمل و نقل",
  "قبوض امکانات",
  "لباس",
  "درمان",
  "حقوق و مزایا",
  "تحصیل",
  "متفرقه",
];

const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      //update the state by finding the budget object whose .category value matches action.payload.category and changing with the .amount value to action.payload.amount
      const newBudgets = state.map((budget) => {
        if (budget.category === action.payload.category) {
          return action.payload;
        }
        return budget;
      });
      return newBudgets;
    },
  },
});

export const selectBudgets = (state) => state.budgets;

export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
