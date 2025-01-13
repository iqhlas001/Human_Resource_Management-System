import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <strong className="mr-1">
          Copyright © 2024-2025 <a href="http://mantzarisvasilis.com">Mohammed Iqhlas</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0.0
        </div>
      </footer>
    );
  }
}
