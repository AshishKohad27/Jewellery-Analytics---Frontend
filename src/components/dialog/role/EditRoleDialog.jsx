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
  name: "Super Admin",
  description:
    "Full system access, including settings, users, roles, and reports",
  isActive: true,
};

export default function EditRoleDialog({ roleId }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("roleId: ", roleId);
    console.log("formData: ", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
          title="Edit"
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
            Edit Role
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
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Role Name <span className="text-red-500">*</span>
              </label>
              <input
                onChange={handleChange}
                value={formData?.name}
                name="name"
                type="text"
                id="addRoleName"
                required
                placeholder="e.g. Manager"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
              <p
                id="addRoleNameError"
                className="text-xs text-red-500 mt-1 hidden"
              >
                Role name must be unique.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                onChange={handleChange}
                value={formData?.description}
                name="description"
                id="addRoleDesc"
                maxLength="255"
                rows="3"
                placeholder="Brief description of this role (max 255 chars)"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none resize-none"
                spellCheck="false"
              ></textarea>
              <p className="text-xs text-slate-400 mt-1">
                <span id="addRoleDescCount">0</span>/255
              </p>
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
                  value={formData?.isActive}
                  name="isActive"
                  type="checkbox"
                  id="addStatus"
                  checked={formData?.isActive}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gold-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                <span
                  id="addStatusLabel"
                  className={`ml-3 text-sm font-medium ${formData?.isActive ? getStatusChipColor("Active") : getStatusChipColor("Inactive")}`}
                >
                  {formData?.isActive ? "Active" : "Inactive"}
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
              Update Role
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
