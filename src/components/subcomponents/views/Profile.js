import React from 'react';
import './Profile.css';

const Profile = ({email, url}) => {
    return (
      <div id="profile-container">
        <form>
          <div class="form-group">
            <label for="profile-email-field">Email</label>
            <input type="email" class="form-control" id="profile-email-field" disabled value={email} />
          </div>
          <div class="form-check form-group">
            <input class="form-check-input" type="checkbox" id="receive-notifications-checkbox" checked disabled />
            <label class="form-check-label" for="receive-notifications-checkbox">
              Receive accessibility reports via email
            </label>
          </div>
          <div class="form-group">
            <label for="profile-url-field">Website URL</label>
            <input type="url" class="form-control" id="profile-url-field" disabled value={url} />
          </div>
        </form>
      </div>
    );
};
      
export default Profile;