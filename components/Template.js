import React from 'react';
import styled from 'styled-components';
import '../pages/styles.css';

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  .nav-container {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    .logo img {
      max-width: 200px;
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #f0f0f0;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class Template extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <div className="nav-container container">
            <div className="logo">
              <img src="/static/logo.svg" alt="logo" />
            </div>
            <div>
              <a className="btn-border">LOG IN</a>
              <a className="btn-primary" style={{ marginLeft: 10 }}>
                SIGN UP
              </a>
            </div>
          </div>
        </Nav>
        {this.props.children}
        <Footer>
          <div className="container" style={{ paddingTop: 30 }}>
            <h3 style={{ textAlign: 'center' }}>THEMOVIEBOX</h3>
          </div>
        </Footer>
      </div>
    );
  }
}
