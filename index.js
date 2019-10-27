'use strict';

require('dotenv').config();

// TODO: Comment
// when index is run it requires the server and starts it using the env decared PORT variable
require('./lib/server.js').start(process.env.PORT);
