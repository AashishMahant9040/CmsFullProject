'use client';

import React, { useState } from 'react';
import { FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Profile = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Mehrab',
    lastName: 'Bozorgi',
    email: 'mehrabbozorgi.business@gmail.com',
    role: 'Admin',
    bio: 'A passionate developer and admin.',
    password: '********',
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-6">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
            <AiOutlineUser className="text-3xl text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={editData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-gray-700 rounded-md focus:ring ${isEditing ? 'ring-yellow-500' : 'opacity-50 cursor-not-allowed'
                }`}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={editData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-gray-700 rounded-md focus:ring ${isEditing ? 'ring-yellow-500' : 'opacity-50 cursor-not-allowed'
                }`}
            />
          </div>

          {/* Bio */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2" htmlFor="bio">
              Bio
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                id="bio"
                value={editData.bio}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring ring-yellow-500"
                rows={3}
              />
            ) : (
              <p className="text-gray-300">{profileData.bio}</p>
            )}
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={editData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-gray-700 rounded-md focus:ring ${isEditing ? 'ring-yellow-500' : 'opacity-50 cursor-not-allowed'
                }`}
            />
          </div>

          {/* Role */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2" htmlFor="role">
              Role
            </label>
            <input
              type="text"
              name="role"
              id="role"
              value={editData.role}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 bg-gray-700 rounded-md focus:ring ${isEditing ? 'ring-yellow-500' : 'opacity-50 cursor-not-allowed'
                }`}
            />
          </div>



          {/* Password */}
          <div className="sm:col-span-2 relative">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center bg-gray-700 rounded-md">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                id="password"
                value={editData.password}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 bg-transparent focus:ring ${isEditing ? 'ring-yellow-500' : 'opacity-50 cursor-not-allowed'
                  }`}
              />
              {isEditing && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-400 px-3"
                >
                  {passwordVisible ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-4 mt-6">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
              >
                <FaCheck className="inline mr-2" /> Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
              >
                <FaTimes className="inline mr-2" /> Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
            >
              <FaEdit className="inline mr-2" /> Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
