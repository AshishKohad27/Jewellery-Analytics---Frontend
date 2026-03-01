import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteMetal } from "@/redux/metal/metal.action";
import { toggleMetalLoading } from "@/redux/metal/metal.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function DelMetalDialog({ metalData }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDel = () => {
    dispatch(DeleteMetal({ metalId: metalData?.id }));
    dispatch(toggleMetalLoading());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded">
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
      </DialogTrigger>

      <DialogContent
        className="p-0 overflow-hidden rounded-xl shadow-xl w-full !max-w-[384px]"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 hidden">
          <DialogTitle>Deactivate Metal</DialogTitle>
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
        <form>
          <div className="p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 text-center mb-2">
              Delete Metal
            </h3>
            <p className="text-sm text-slate-500 text-center">
              Are you sure you want to delete this metal?{" "}
              <span id="deleteMetalName" className="font-medium text-slate-700">
                {metalData?.metal_name}
              </span>
            </p>
            <input type="hidden" id="deleteMetalId" value="1" />
          </div>
          {/* Footer */}
          <div className="flex items-center justify-center gap-3 p-6 border-t border-slate-200">
            <DialogClose asChild>
              <button
                type="button"
                className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </DialogClose>

            <button
              onClick={handleDel}
              type="button"
              className="px-4 py-2.5 bg-red-600 text-white hover:bg-red-700 rounded-lg text-sm font-medium transition-colors"
            >
              Confirm Deactivate
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
