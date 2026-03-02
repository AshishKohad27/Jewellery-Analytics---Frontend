export default function JewellaryForm() {
  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <a href="inventory-list.html" className="hover:text-gold-600">
              Inventory
            </a>
            <span>/</span>
            <span className="text-slate-800">Add New Item</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">
            Add New Inventory Item
          </h1>
          <p className="text-slate-500 mt-1">
            Fill in the details to add a new jewellery item
          </p>
        </div>

        {/* <!-- ============================================ 
                 FORM
            ============================================= --> */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Main Form Section --> */}
            <div className="lg:col-span-2 space-y-6">
              {/* <!-- Basic Information --> */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">
                  Basic Information
                </h3>
                <div className="space-y-4">
                  {/* <!-- Item Name --> */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Item Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Traditional Gold Necklace Set"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm"
                    />
                  </div>

                  {/* <!-- SKU & Metal Type Row --> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        SKU / Item Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., AU-NEC-001"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Metal <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm text-slate-600">
                        <option value="">Select metal</option>
                        <option value="AU">Gold (AU)</option>
                        <option value="AG">Silver (AG)</option>
                        <option value="PT">Platinum (PT)</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Category & Purity --> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm text-slate-600">
                        <option value="">Select category</option>
                        <option value="NEC">Necklace (NEC)</option>
                        <option value="RNG">Ring (RNG)</option>
                        <option value="EAR">Earrings (EAR)</option>
                        <option value="BNG">Bangle (BNG)</option>
                        <option value="CHN">Chain (CHN)</option>
                        <option value="PND">Pendant (PND)</option>
                        <option value="BRC">Bracelet (BRC)</option>
                        <option value="ANK">Anklet (ANK)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Purity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="999.99"
                        placeholder="e.g., 91.60"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        Decimal(5,2) - e.g., 91.60 for 22K Gold, 99.90 for Pure
                        Silver
                      </p>
                    </div>
                  </div>

                  {/* <!-- Description --> */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Description
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Enter item description..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">
                  Pricing
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Cost Price <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                          ₹
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Decimal(12,2)
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Selling Price <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                          ₹
                        </span>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Decimal(12,2)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Supplier & Created By --> */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">
                  Additional Details
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Supplier <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm text-slate-600">
                        <option value="">Select supplier</option>
                        <option value="1">Rajesh Gold Works</option>
                        <option value="2">Silver Crafts India</option>
                        <option value="3">Precious Metals Co</option>
                        <option value="4">Kumar Jewellers Supply</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Created By <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm text-slate-600">
                        <option value="">Select user</option>
                        <option value="1">Admin User</option>
                        <option value="2">Rahul Singh</option>
                        <option value="3">Priya Kapoor</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Sidebar Section --> */}
            <div className="space-y-6">
              {/* <!-- Status --> */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">
                  Status
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Item Status
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none text-sm text-slate-600">
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                    <p className="text-xs text-slate-500 mt-1">
                      Boolean: true = Active, false = Inactive
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Schema Info --> */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  SKU Format
                </h3>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm text-slate-600 mb-2 font-medium">
                    {/* Format: {METAL_CODE}-{CATEGORY_CODE}-{SEQ} */}
                  </p>
                  <div className="space-y-1 text-xs text-slate-500">
                    <p>AU-NEC-001 (Gold Necklace)</p>
                    <p>AG-RNG-012 (Silver Ring)</p>
                    <p>PT-BNG-003 (Platinum Bangle)</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Stock is tracked via inventory_transactions, not on the item
                  directly.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Form Actions --> */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 border-t border-slate-200">
            <a
              href="inventory-list.html"
              className="w-full sm:w-auto px-6 py-3 text-slate-600 hover:bg-slate-100 rounded-lg text-center font-medium transition-colors"
            >
              Cancel
            </a>
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-gold-500/30"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
