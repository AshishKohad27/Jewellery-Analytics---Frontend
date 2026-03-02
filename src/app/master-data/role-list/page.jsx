"use client";

import PermissionList from "@/components/role/PermissionList";
import RoleList from "@/components/role/RoleList";


export default function RolesPermissionsLayout() {
  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <RoleList /> */}
        <PermissionList />
      </div>
    </main>
  );
}





