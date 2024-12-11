'use client';
import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Post {
  id: number;
  title: string;
  author: string;
  category: string;
  tag: string;
  status: string;
  date: string;
  description: string;
}

interface Contributor {
  id: number;
  name: string;
  email: string;
  lastUpdated: string;
  status: string;
}

const contributorsData: Contributor[] = [
  { id: 1, name: 'Alice Johnson', email: 'alicejohnson@example.com', lastUpdated: '2024-12-10', status: 'Active' },
  { id: 2, name: 'Bob Brown', email: 'bobbrown@example.com', lastUpdated: '2024-11-15', status: 'Inactive' },
  { id: 3, name: 'Charlie Williams', email: 'charliewilliams@example.com', lastUpdated: '2024-10-05', status: 'Active' },
];

const postsData: Post[] = [
  {
    id: 1,
    title: 'React 18 New Features',
    author: 'Alice Johnson',
    category: 'Tech',
    tag: 'React',
    status: 'Published',
    date: '2024-12-10',
    description:
      'React 18 introduces several exciting new features including automatic batching, concurrent rendering, and new hooks that enhance performance and scalability.',
  },
  {
    id: 2,
    title: 'Understanding TypeScript',
    author: 'Bob Brown',
    category: 'Programming',
    tag: 'TypeScript',
    status: 'Draft',
    date: '2024-11-15',
    description:
      'TypeScript is a superset of JavaScript that adds type checking to the language, making it easier to catch errors early and improve code quality.',
  },
  {
    id: 3,
    title: 'CSS Grid Layout',
    author: 'Charlie Williams',
    category: 'Design',
    tag: 'CSS',
    status: 'Published',
    date: '2024-10-05',
    description:
      'CSS Grid Layout allows you to create complex, responsive grid-based layouts easily. It’s one of the most powerful layout tools in modern web design.',
  },
];

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'contributors'>('posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOption, setSortOption] = useState<'title' | 'date'>('title');
  const [contributorsSortOption, setContributorsSortOption] = useState<'name' | 'lastUpdated'>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items per page

  const getShortDescription = (description: string) => {
    const words = description.split(' ');
    return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
  };

  // Filter posts by search query and category
  const filteredPosts = postsData
    .filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || post.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  // Filter contributors by search query
  const filteredContributors = contributorsData
    .filter((contributor) => contributor.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (contributorsSortOption === 'name') {
        return a.name.localeCompare(b.name);
      }
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    });

  // Pagination Logic
  const totalPosts = filteredPosts.length;
  const totalContributors = filteredContributors.length;
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const paginatedContributors = filteredContributors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(totalPosts / itemsPerPage);
  const totalContributorPages = Math.ceil(totalContributors / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= (activeTab === 'posts' ? totalPages : totalContributorPages)) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="overflow-x-auto bg-black text-white p-7 rounded-lg relative">
      {/* Top Navigation for Posts and Contributors */}
      <div className="flex space-x-8 mb-6 relative z-10">
        <div
          className={`cursor-pointer px-4 py-2 text-center text-xl font-semibold transition-all duration-300 ease-in-out ${
            activeTab === 'posts' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-white hover:text-gray-400'
          }`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </div>
        <div
          className={`cursor-pointer px-4 py-2 text-center text-xl font-semibold transition-all duration-300 ease-in-out ${
            activeTab === 'contributors' ? 'text-blue-500 border-b-4 border-blue-500' : 'text-white hover:text-gray-400'
          }`}
          onClick={() => setActiveTab('contributors')}
        >
          Contributors
        </div>
      </div>

      {/* Layout for Search bar and filters */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg w-full bg-gray-800 text-white border border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-6">
          {activeTab === 'posts' && (
            <>
              <div>
                <select
                  className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  <option value="Tech">Tech</option>
                  <option value="Programming">Programming</option>
                  <option value="Design">Design</option>
                </select>
              </div>
              <div>
                <select
                  className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as 'title' | 'date')}
                >
                  <option value="title">Sort by Title</option>
                  <option value="date">Sort by Date</option>
                </select>
              </div>
            </>
          )}

          {activeTab === 'contributors' && (
            <div>
              <select
                className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700"
                value={contributorsSortOption}
                onChange={(e) => setContributorsSortOption(e.target.value as 'name' | 'lastUpdated')}
              >
                <option value="name">Sort by Name</option>
                <option value="lastUpdated">Sort by Last Updated</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Posts Table */}
      <div
        className={`transition-all ease-in-out duration-1000 transform ${
          activeTab === 'posts' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {activeTab === 'posts' && (
          <Table className="min-w-full shadow-xl rounded-lg overflow-hidden">
            <TableCaption className="text-3xl text-white">Recently Added Posts</TableCaption>
            <TableHeader>
              <TableRow className="text-2xl border-gray-900">
                <TableHead className="w-[100px] text-white">S.No</TableHead>
                <TableHead className="w-[200px] text-white">Title</TableHead>
                <TableHead className="w-[200px] text-white">Description</TableHead>
                <TableHead className="w-[150px] text-white">Author</TableHead>
                <TableHead className="w-[150px] text-white">Category</TableHead>
                <TableHead className="w-[100px] text-white">Tag</TableHead>
                <TableHead className="w-[120px] text-white">Status</TableHead>
                <TableHead className="w-[150px] text-white">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-gray-900">
              {paginatedPosts.map((post, index) => (
                <TableRow key={post.id}>
                  <TableCell className="text-white">{index + 1}</TableCell>
                  <TableCell className="text-white">{post.title}</TableCell>
                  <TableCell className="text-white">{getShortDescription(post.description)}</TableCell>
                  <TableCell className="text-white">{post.author}</TableCell>
                  <TableCell className="text-white">{post.category}</TableCell>
                  <TableCell className="text-white">{post.tag}</TableCell>
                  <TableCell className="text-white">{post.status}</TableCell>
                  <TableCell className="text-white">{post.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Contributors Table */}
      <div
        className={`transition-all ease-in-out duration-1000 transform ${
          activeTab === 'contributors' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {activeTab === 'contributors' && (
          <Table className="min-w-full shadow-xl rounded-lg overflow-hidden">
            <TableCaption className="text-3xl text-white">Contributor Details</TableCaption>
            <TableHeader>
              <TableRow className="text-2xl border-gray-900">
                <TableHead className="w-[100px] text-white">S.No</TableHead>
                <TableHead className="w-[200px] text-white">Name</TableHead>
                <TableHead className="w-[300px] text-white">Email</TableHead>
                <TableHead className="w-[150px] text-white">Last Updated</TableHead>
                <TableHead className="w-[120px] text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-gray-900">
              {paginatedContributors.map((contributor, index) => (
                <TableRow key={contributor.id}>
                  <TableCell className="text-white">{index + 1}</TableCell>
                  <TableCell className="text-white">{contributor.name}</TableCell>
                  <TableCell className="text-white">{contributor.email}</TableCell>
                  <TableCell className="text-white">{contributor.lastUpdated}</TableCell>
                  <TableCell className="text-white">{contributor.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-6">
        <button
          className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <div className="text-lg text-white">
          Page {currentPage} of {activeTab === 'posts' ? totalPages : totalContributorPages}
        </div>

        <button
          className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === (activeTab === 'posts' ? totalPages : totalContributorPages)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
