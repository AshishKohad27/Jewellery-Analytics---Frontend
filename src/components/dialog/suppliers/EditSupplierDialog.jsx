import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getStatusChipColor } from "@/constants/colorUtils/statusColor";
import { UpdateSupplier } from "@/redux/supplier/supplier.action";
import { toggleSupplierLoading } from "@/redux/supplier/supplier.slice";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const getFormData = (data) => ({
  supplier_name: data?.supplier_name,
  phone: data?.phone,
  email: data?.email,
  status: data?.status,
});

export default function EditSupplierDialog({ supplierData, supplierId }) {
  const [formData, setFormData] = useState(getFormData(supplierData));
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateSupplier({ data: formData, supplierId }));
    dispatch(toggleSupplierLoading());
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          setFormData(getFormData(supplierData));
        }
        setOpen(isOpen);
      }}
    >
      <DialogTrigger asChild>
        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        </button>
      </DialogTrigger>

      <DialogContent
        className="p-0 overflow-hidden rounded-xl shadow-xl w-full max-w-lg"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <DialogTitle className="text-lg font-semibold text-slate-800">
            Edit Supplier
          </DialogTitle>
          <DialogClose asChild>
            <button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DialogClose>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="supplierId" value={supplierId} />

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Supplier Name <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData?.supplier_name}
                type="text"
                name="supplier_name"
                required
                placeholder="Enter supplier name"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData?.email}
                type="email"
                name="email"
                required
                placeholder="Enter email address"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone
              </label>
              <input
                onChange={handleChange}
                value={formData?.phone}
                type="text"
                name="phone"
                placeholder="Enter phone number"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
            </div>

            {/* <!-- Status Toggle --> */}
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Status
                </label>
                <p className="text-xs text-slate-400 mt-0.5">
                  Set role as active or inactive
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  onChange={handleChange}
                  value={formData?.status}
                  name="status"
                  type="checkbox"
                  id="addStatus"
                  checked={formData?.status}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                <span
                  id="addStatusLabel"
                  className={`ml-3 text-sm font-medium ${formData?.status ? getStatusChipColor("Active") : getStatusChipColor("Inactive")}`}
                >
                  {formData?.status ? "Active" : "Inactive"}
                </span>
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200">
            <DialogClose asChild>
              <button
                type="button"
                className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </DialogClose>

            <button
              type="submit"
              className="px-4 py-2.5 bg-gold-500 text-white hover:bg-gold-600 rounded-lg text-sm font-medium transition-colors"
            >
              Update Supplier
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
