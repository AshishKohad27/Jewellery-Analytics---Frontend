"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { clearMessages } from "@/redux/notification/notification.slice";

export default function ToastListener() {
    const dispatch = useDispatch();
    const { successMessage, errorMessage } = useSelector(
        (state) => state.notification
    );

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(clearMessages());
        }
    }, [successMessage, dispatch]);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(clearMessages());
        }
    }, [errorMessage, dispatch]);

    return null;
}
