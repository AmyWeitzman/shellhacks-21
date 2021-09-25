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
          <div class="form-group">
            <label for="profile-url-field">Website URL</label>
            <input type="url" class="form-control" id="profile-url-field" disabled value={url} />
          </div>
        </form>
      </div>
    );
};
      
export default Profile;