### node-http-server: a customizable command-line http server ###

`node-http-server` is a simple, customizable command-line HTTP server. It is meant to be used as a quick way to serve sites locally, and has no dependencies except nodejs itself.


#### Installation: ####

`node-http-server` only requires installation of [nodejs](http://www.nodejs.org/). Download and install that first.


#### Usage: ####

To use `node-http-server`, put `server.js` into the root of your website directory and call it from the command-line:

In the command-line, `cd` to the directory path you will be working from and call `node server.js`. 

That's it! Visit your site at [http://127.0.0.1:3000](http://127.0.0.1:3000).


#### Options ####

You can specify the port and default HTML file.

**Port**

The default port is `3000`, but can be changed by modifying `var port = process.argv[2] || 3000;`.


**Default HMTL file**

By default, the server will load `index.html`. To change the default file, modify `if (fs.statSync(filename).isDirectory()) filename += 'index.html';`.

#### Changelog ####

**October 15, 2014**

- Initial release
