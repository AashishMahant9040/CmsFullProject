'use client';
import React, { useState } from 'react';
import { FaTrashAlt, FaBan, FaEnvelope, FaUndo, FaUserMinus } from 'react-icons/fa'; 
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const initialAdmins = [
  { id: 1, name: 'Super Admin', email: 'superadmin@example.com', role: 'Super Admin' },
  { id: 2, name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Admin' },
  { id: 3, name: 'Bob Brown', email: 'bobbrown@example.com', role: 'Admin' },
  { id: 4, name: 'Charlie Williams', email: 'charliewilliams@example.com', role: 'Admin' },
  { id: 5, name: 'David Lee', email: 'davidlee@example.com', role: 'Admin' },
];

function Admin() {
  const [admins, setAdmins] = useState(initialAdmins);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<'remove' | null>(null);
  const [selectedAdmin, setSelectedAdmin] = useState<any>(null);

  const openModal = (action: 'remove', admin: any) => {
    setActionType(action);
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActionType(null);
    setSelectedAdmin(null);
  };

  const confirmAction = () => {
    if (actionType && selectedAdmin) {
      const updatedAdmins = admins.map((admin) =>
        admin.id === selectedAdmin.id
          ? {
              ...admin,
              role: actionType === 'remove' ? 'User' : admin.role,  // Remove admin status
            }
          : admin
      );
      setAdmins(updatedAdmins);
      console.log(`${actionType} action confirmed for ${selectedAdmin.name}!`);
    }
    closeModal();
  };

  return (
    <div className="overflow-x-auto bg-black text-white p-7 rounded-lg">
      <Table className="min-w-full">
        <TableCaption className="text-3xl text-white">List of Admins</TableCaption>

        <TableHeader>
          <TableRow className="text-2xl border-gray-900">
            <TableHead className="w-[150px] text-white">Name</TableHead>
            <TableHead className="w-[150px] text-white">Email</TableHead>
            <TableHead className="w-[150px] text-white">Role</TableHead>
            <TableHead className="w-[150px] text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-gray-900">
          {admins.map((admin) => (
            <TableRow className="border-gray-900" key={admin.id}>
              <TableCell className="font-medium">{admin.name}</TableCell>
              <TableCell className="flex items-center space-x-2">
                <FaEnvelope size={16} className="text-gray-500" />
                <span>{admin.email}</span>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 text-xs font-semibold ${
                    admin.role === 'Super Admin'
                      ? 'text-blue-500'
                      : admin.role === 'Admin'
                      ? 'text-green-500'
                      : 'text-gray-500'
                  }`}
                >
                  {admin.role}
                </span>
              </TableCell>
              <TableCell className="flex justify-end space-x-4">
                {/* Show Remove Admin icon only when the role is Admin */}
                {admin.role === 'Admin' && (
                  <button
                    onClick={() => openModal('remove', admin)}
                    className="text-red-500 hover:text-red-800 transition-colors duration-200"
                  >
                    <FaUserMinus size={18} />
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white text-black rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Are you sure you want to remove admin role from {selectedAdmin?.name}?
            </h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
