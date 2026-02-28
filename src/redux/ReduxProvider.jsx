"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "@/components/ui/sonner";
import ToastListener from "@/components/site/ToastListener";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" richColors closeButton />
      <ToastListener />
    </Provider>
  );
}
