import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

export default function AuthForm({ authType, onSubmit, emailRef, passwordRef, urlRef, otherAuthType, otherAuthPrefixText, otherAuthRoute }) {
  return (
    <div id="auth-form-container" class="card">
      <article class="card-body">
        <h4 class="card-title text-center mb-4 mt-1">{authType}</h4>
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input 
                name="email" 
                type="email"
                ref={emailRef}
                placeholder="Email"
                class="form-control"
              />
            </div> 
          </div> 
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-lock"></i></span>
              </div>
              <input 
                name="password"
                type="password"
                ref={passwordRef}
                placeholder="Password"
                class="form-control"
              />
            </div> 
          </div> 
          { urlRef && 
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-link"></i></span>
                </div>
                <input 
                  name="url"
                  type="url"
                  ref={urlRef}
                  placeholder="Website URL"
                  class="form-control"
                />
              </div> 
            </div> 
          }
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">{authType}</button>
          </div>
          <div>
            {otherAuthPrefixText} have an account? <Link to={`/${otherAuthRoute}`}>{otherAuthType}</Link> now.
          </div>
        </form>
      </article>
    </div>
  )
}