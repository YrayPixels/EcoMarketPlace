'use client';
import { useState, useEffect } from 'react';

const SettingsPage = () => {

    const [formData, setFormData] = useState({
        id: 1,
        name: '',
        email: '',
        notifications: false,
    });


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://externalapi.com/api/settings/${formData.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        ...formData,
                        name: data.name,
                        email: data.email,
                        notifications: data.notifications,
                    });
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://externalapi.com/api/settings/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Settings updated successfully!');
            } else {
                alert('Failed to update settings');
            }
        } catch (error) {
            console.error("Error updating settings:", error);
            alert('Failed to update settings');
        }
    };

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Notifications
                    </label>
                    <input
                        type="checkbox"
                        id="notifications"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleChange}
                        className="h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="notifications" className="ml-2 text-gray-700">
                        Enable Notifications
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default SettingsPage;
