import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getStatusChipColor } from "@/constants/colorUtils/statusColor";
import { useState } from "react";

const initialState = {
  category_name: "Necklace",
  category_code: "NKL",
  description: "Necklaces and bridal sets",
  status: true,
};

export default function AddCategoryDialog() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("formData: ", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="px-4 py-2.5 bg-gold-500 text-white hover:bg-gold-600 rounded-lg text-sm font-medium flex items-center gap-2"
        >
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
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add Category
        </button>
      </DialogTrigger>

      <DialogContent
        className="p-0 overflow-hidden rounded-xl shadow-xl w-full max-w-lg"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <DialogTitle className="text-lg font-semibold text-slate-800">
            Add New Category
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
          <div className="p-6 space-y-5">
            {/* <!-- Category Name --> */}
            <div>
              <label
                for="addName"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Category Name <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData?.category_name}
                name="category_name"
                type="text"
                id="addName"
                required
                placeholder="e.g. Necklace, Ring, Bangle"
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
            </div>
            {/* <!-- Category Code --> */}
            <div>
              <label
                for="addCode"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Category Code <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData?.category_code}
                name="category_code"
                type="text"
                id="addCode"
                required
                maxlength="10"
                placeholder="e.g. NEC, RNG, BNG"
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none uppercase"
              />
              <p className="text-xs text-slate-400 mt-1">
                Max 10 characters, uppercase, must be unique
              </p>
            </div>
            {/* <!-- Description --> */}
            <div>
              <label
                for="addDescription"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Description
              </label>
              <textarea
                onChange={handleChange}
                value={formData?.description}
                name="description"
                id="addDescription"
                rows="3"
                maxlength="255"
                placeholder="Optional description (max 255 characters)"
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none resize-none"
              ></textarea>
              <p className="text-xs text-slate-400 mt-1">
                <span id="addDescCount">0</span>/255 characters
              </p>
            </div>
            {/* <!-- Status Toggle --> */}
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Status
                </label>
                <p className="text-xs text-slate-400 mt-0.5">
                  Set category as active or inactive
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
              Save Metal
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
