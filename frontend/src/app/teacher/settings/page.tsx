"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [roll, setRoll] = useState("CS2021001");

  const [emailNotif, setEmailNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(false);
  const [deadlineRem, setDeadlineRem] = useState(false);

  const handleSave = () => {
    alert("Changes saved!");
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#241236_0%,#000000_45%,#4a1f12_100%)] text-white p-8">
      <h1 className="text-3xl font-semibold mb-2">Settings</h1>
      <p className="text-gray-400 mb-8">Manage your account and preferences</p>

      {/* Profile Info Section */}
      <div className="bg-[#1a1a1a] p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-1">Profile Information</h2>
        <p className="text-gray-400 mb-4 text-sm">
          Update your personal details
        </p>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#2a2a2a] rounded-md px-3 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#2a2a2a] rounded-md px-3 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Roll Number</label>
            <input
              type="text"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              className="w-full bg-[#2a2a2a] rounded-md px-3 py-2 focus:outline-none"
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md mt-2 transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-[#1a1a1a] p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-1">Notifications</h2>
        <p className="text-gray-400 mb-4 text-sm">
          Manage your notification preferences
        </p>

        <div className="flex flex-col gap-4">
          <Toggle
            label="Email Notifications"
            desc="Receive quiz updates via email"
            enabled={emailNotif}
            setEnabled={setEmailNotif}
          />

          <Toggle
            label="Push Notifications"
            desc="Get notified about new quizzes"
            enabled={pushNotif}
            setEnabled={setPushNotif}
          />

          <Toggle
            label="Deadline Reminders"
            desc="Remind me before quiz deadlines"
            enabled={deadlineRem}
            setEnabled={setDeadlineRem}
          />
        </div>
      </div>
    </div>
  );
}

// Toggle Switch Component
interface ToggleProps {
  label: string;
  desc: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}

function Toggle({ label, desc, enabled, setEnabled }: ToggleProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? "bg-purple-600" : "bg-gray-600"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
