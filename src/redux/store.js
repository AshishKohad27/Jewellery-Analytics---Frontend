import { configureStore } from '@reduxjs/toolkit'
import testSlice from '@/redux/test/test.slice';
import authSlice from '@/redux/auth/auth.slice';
import analytics from '@/redux/analytics';
import roleSlice from '@/redux/role/role.slice';
import supplierSlice from '@/redux/supplier/supplier.slice';
import metalSlice from '@/redux/metal/metal.slice';
import categorySlice from '@/redux/category/category.slice';
import userSlice from '@/redux/user/user.slice';
import customerSlice from '@/redux/customer/customer.slice';
import inventorySlice from '@/redux/inventory/inventory.slice';
import jewelleryItemSlice from '@/redux/jewellery-item/jewellery-item.slice';
import saleSlice from '@/redux/sale/sale.slice';
import notificationSlice from '@/redux/notification/notification.slice';
import notificationMiddleware from '@/redux/middleware/notificationMiddleware';

export const store = configureStore({
    reducer: {
        test: testSlice,
        auth: authSlice,
        analytics,
        role: roleSlice,
        supplier: supplierSlice,
        metal: metalSlice,
        category: categorySlice,
        user: userSlice,
        customer: customerSlice,
        inventory: inventorySlice,
        jewellery: jewelleryItemSlice,
        sale: saleSlice,
        notification: notificationSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(notificationMiddleware),
});