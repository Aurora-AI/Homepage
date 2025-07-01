import { create } from 'zustand';

interface GlobalState {
  isLoading: boolean;
  errorMessage: string | null;
  setLoading: (loading: boolean) => void;
  setErrorMessage: (message: string | null) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  isLoading: false,
  errorMessage: null,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setErrorMessage: (message: string | null) => set({ errorMessage: message }),
}));
