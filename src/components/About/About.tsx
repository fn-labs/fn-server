import React from 'react';
import { FaGithub, FaNpm } from 'react-icons/fa';

export const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-12">
          <h2 className="h4 mt-3">About this server</h2>
          <p>
            <a
              className="btn btn-outline-light"
              href="https://github.com/merriman-labs/merriman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Source Code
            </a>
            <a
              className="btn btn-outline-light ml-2"
              href="https://www.npmjs.com/package/merriman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaNpm /> NPM Package
            </a>
          </p>
        </div>
        <div className="col-md-4 col-12">
          <h2 className="h4 mt-3">License (MIT)</h2>
          <p>Copyright 2018 Johnny Reina</p>

          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>

          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>

          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </div>
    </div>
  );
};
