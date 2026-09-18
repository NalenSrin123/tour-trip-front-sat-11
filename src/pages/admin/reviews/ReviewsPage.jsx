import { Star, Pencil, Trash2 } from "lucide-react";

const ReviewsPage = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Reviews
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Manage customer reviews and feedback.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr className="text-left text-gray-600">
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Tour</th>
                            <th className="px-6 py-4">Rating</th>
                            <th className="px-6 py-4">Comment</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium">
                                John Doe
                            </td>

                            <td className="px-6 py-4">
                                Angkor Wat Sunrise
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1">
                                    <Star
                                        size={18}
                                        className="text-yellow-500 fill-yellow-500"
                                    />

                                    <span className="ml-1">
                                        5 / 5
                                    </span>
                                </div>
                            </td>

                            <td className="px-6 py-4">
                                Amazing experience!
                            </td>

                            <td className="px-6 py-4">
                                11 Sep 2026
                            </td>

                            <td className="px-6 py-4">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                                    Published
                                </span>
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                                        <Pencil size={17} />
                                    </button>

                                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                                        <Trash2 size={17} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewsPage;