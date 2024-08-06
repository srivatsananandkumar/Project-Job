import React, { useState } from 'react';
import './Settings.css';

const SettingsPage = () => {
  const [username, setUsername] = useState('Jessica Smith');
  const [email, setEmail] = useState('jessica.smith@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handleSaveProfile = () => {
    // Logic to save profile information
    console.log('Profile information saved.');
  };

  const handleChangePassword = () => {
    // Logic to change password
    console.log('Password changed.');
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settings-container-43">
      <h1 className="settings-title-43">Settings</h1>

      <section className="settings-section-43">
        <h2 className="settings-section-title-43">Profile Information</h2>
        <div className="settings-item-43">
          <label className="settings-label-43">Username</label>
          <input
            type="text"
            className="settings-input-43"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="settings-item-43">
          <label className="settings-label-43">Email</label>
          <input
            type="email"
            className="settings-input-43"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="settings-save-button-43" onClick={handleSaveProfile}>
          Save Profile
        </button>
      </section>

      <section className="settings-section-43">
        <h2 className="settings-section-title-43">Change Password</h2>
        <div className="settings-item-43">
          <label className="settings-label-43">Current Password</label>
          <input
            type="password"
            className="settings-input-43"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="settings-item-43">
          <label className="settings-label-43">New Password</label>
          <input
            type="password"
            className="settings-input-43"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button className="settings-save-button-43" onClick={handleChangePassword}>
          Change Password
        </button>
      </section>

      <section className="settings-section-43">
        <h2 className="settings-section-title-43">Notifications</h2>
        <div className="settings-item-43">
          <label className="settings-label-43">Email Notifications</label>
          <input
            type="checkbox"
            className="settings-checkbox-43"
            checked={notifications}
            onChange={handleNotificationsToggle}
          />
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
