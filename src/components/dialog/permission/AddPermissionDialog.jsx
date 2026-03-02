import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getStatusChipColor } from "@/constants/colorUtils/statusColor";
import { moduleList, operationList } from "@/constants/modules";
import { CreateRole } from "@/redux/role/role.action";
import { toggleRoleLoading } from "@/redux/role/role.slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  description: "",
  module: "",
  operation: "",
  isActive: true,
};

export default function AddPermissionDialog() {
  const [formData, setFormData] = useState(initialState);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((store) => store.role);

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    setFormData((prev) => {
      let newValue = type === "checkbox" ? checked : value;

      const updatedData = {
        ...prev,
        [name]: newValue,
      };

      // Auto-generate permission name
      if (updatedData.module && updatedData.operation) {
        updatedData.name = `${updatedData.module}.${updatedData.operation}`;
      } else {
        updatedData.name = "";
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { operation, ...payload } = formData;
    // dispatch(CreateRole({ data: payload }));

    // dispatch(toggleRoleLoading());

    // if (!error) {
    //   setFormData(initialState);
    //   setOpen(false);
    // }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2.5 bg-gold-500 text-white hover:bg-gold-600 rounded-lg text-sm font-medium flex items-center gap-2">
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
          Add Permission
        </button>
      </DialogTrigger>

      <DialogContent
        className="p-0 overflow-hidden rounded-xl shadow-xl w-full max-w-lg"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <DialogTitle className="text-lg font-semibold text-slate-800">
            Add Permission Role
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Module <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={handleChange}
                  value={formData?.module}
                  name="module"
                  id="addPermModule"
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none bg-white"
                >
                  <option value="">Select a module</option>
                  {moduleList?.map((module, index) => (
                    <option key={index} value={module?.name}>
                      {module?.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Operation <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={handleChange}
                  value={formData?.operation}
                  name="operation"
                  id="addPermModule"
                  required
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none bg-white"
                >
                  <option value="">Select a module</option>
                  {operationList?.map((module, index) => (
                    <option key={index} value={module?.name}>
                      {module?.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Permission Name : <span className="text-lg text-blue-500">{formData?.name}</span>
              </label>
              {/* <input
                onChange={handleChange}
                value={formData?.name}
                name="name"
                type="text"
                id="addRoleName"
                required
                placeholder="e.g. Manager"
                disabled
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
              <p
                id="addRoleNameError"
                className="text-xs text-red-500 mt-1 hidden"
              >
                Role name must be unique.
              </p> */}
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
              Save Role
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
