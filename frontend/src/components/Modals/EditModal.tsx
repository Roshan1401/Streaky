import { useState } from "react";
interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: {
        name?: string;
        username?: string;
        bio?: string;
    };
    onSave?: (data: { name: string; username: string; bio: string }) => void;
}
export default function EditModal({ isOpen, onClose, initialData, onSave }: EditModalProps) {
    const [name, setName] = useState(initialData?.name || "");
    const [username, setUsername] = useState(initialData?.username || "");
    const [bio, setBio] = useState(initialData?.bio || "");
    if (!isOpen) return null;
    const handleSave = () => {
        if (onSave) {
            onSave({ name, username, bio });
        }
        onClose();
    };
    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
            <div
                className="bg-white dark:bg-[#0b0809] w-[700px] border border-(--color-border) rounded-2xl p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-(--color-text-primary)">Edit Information</h2>
                    <button
                        onClick={onClose}
                        className="text-neutral-800 cursor-pointer hover:text-gray-700 rounded-full hover:bg-neutral-200 p-2 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-(--color-border) rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 border border-(--color-border) rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Bio
                        </label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value.slice(0, 150))}
                            className="w-full p-3 border border-(--color-border) rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white resize-none h-24"
                            placeholder="Write something about yourself..."
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-right mt-1">
                            {bio.length}/150
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border border-(--color-border) cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors dark:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 cursor-pointer transition-colors"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}