import { useContext } from "react";
import { CategoryContext } from "../../Context/CourseCategoryContext";
import { Link } from "react-router-dom";
import { BiCamera } from "react-icons/bi";

export default function AddCategory() {

    const { addCategory, setCategoryForm, categoryForm, loading } = useContext(CategoryContext)


    return (
        <div className="min-h-screen bg-[#f6f8fc] p-6 md:p-8">

            <Link to="/admin/all-category" className="text-gray-500 hover:text-[#0D47D9]"            >
                ← Back to Categories
            </Link>

            <div className="max-w-4xl mx-auto mt-6">

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Create Category
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Add a new learning category to your platform.
                    </p>

                </div>

                <form
                    onSubmit={addCategory}
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8"
                >

                    {/* Image */}
                    <div className="mb-8">

                        <label className="block font-semibold text-gray-800 mb-3">
                            Category Image
                        </label>

                        <label className="block cursor-pointer">

                            <div className="h-64 rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#27B6F8] overflow-hidden flex items-center justify-center bg-gray-50 transition">

                                {categoryForm?.imageUrl ? (

                                    <img src={URL.createObjectURL(categoryForm?.imageUrl)}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />

                                ) : (

                                    <div className="text-center">

                                        <div className="text-4xl mb-3">
                                            <BiCamera />
                                        </div>

                                        <p className="font-semibold text-gray-700">
                                            Upload category image
                                        </p>

                                        <p className="text-sm text-gray-400 mt-1">
                                            PNG, JPG or WebP
                                        </p>

                                    </div>

                                )}

                            </div>

                            <input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => setCategoryForm({ ...categoryForm, imageUrl: e.target.files[0] })} />

                        </label>

                    </div>

                    {/* Name */}
                    <div className="mb-6">

                        <label className="block font-semibold text-gray-800 mb-2">
                            Category Name
                        </label>

                        <input type="text" name="name" value={categoryForm.name}
                            onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                            placeholder="e.g. Web Development"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#27B6F8]/30 focus:border-[#27B6F8]"
                        />

                    </div>

                    {/* Description */}
                    <div className="mb-8">

                        <label className="block font-semibold text-gray-800 mb-2">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={categoryForm.description}
                            onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}

                            rows="5"
                            placeholder="Describe what students will learn..."
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none resize-none focus:ring-2 focus:ring-[#27B6F8]/30 focus:border-[#27B6F8]"
                        />

                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">

                        <Link to="/admin/categories"
                            className="px-5 py-3 rounded-xl border border-gray-200 font-semibold text-gray-600 hover:bg-gray-50"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            disabled={!categoryForm.name || !categoryForm.description || !categoryForm.imageUrl || loading}
                            className="px-6 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5] disabled:opacity-50"
                        >
                            {loading ? "Creating..." : "Create Category"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}