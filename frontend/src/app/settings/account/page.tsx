"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function AccountSettingsPage() {
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto py-10">
      {/* Account Security */}
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
        <CardContent className="space-y-6 p-6">
          <div>
            <h2 className="text-lg font-semibold">Account Security</h2>
            <p className="text-sm text-zinc-400">
              Update your password and security settings
            </p>
          </div>

          <div className="grid gap-4">
            <div>
              <Label>Current Password</Label>
              <Input type="password" placeholder="Enter current password" className="bg-zinc-800 border-zinc-700" />
            </div>
            <div>
              <Label>New Password</Label>
              <Input type="password" placeholder="Enter new password" className="bg-zinc-800 border-zinc-700" />
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <Input type="password" placeholder="Confirm new password" className="bg-zinc-800 border-zinc-700" />
            </div>
          </div>

          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
        <CardContent className="space-y-4 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Two-Factor Authentication</h2>
            <p className="text-sm text-zinc-400">
              Add an extra layer of security to your account
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={twoFactor}
              onCheckedChange={setTwoFactor}
            />
            <Label>Enable</Label>
          </div>
        </CardContent>
      </Card>

      {/* Connected Accounts */}
      <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-lg font-semibold">Connected Accounts</h2>
          <p className="text-sm text-zinc-400">
            Connect your account to other services
          </p>

          <div className="flex flex-col gap-3 mt-4">
            {["Google", "Facebook", "X"].map((service) => (
              <div
                key={service}
                className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-xl"
              >
                <span>{service}</span>
                <Button variant="secondary" className="bg-zinc-700 hover:bg-zinc-600">
                  Connect
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-zinc-900 border border-red-800 text-zinc-100">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-lg font-semibold text-red-500">Danger Zone</h2>
          <p className="text-sm text-zinc-400">
            Once you delete your account, there is no going back. All your data
            will be permanently removed.
          </p>
          <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
