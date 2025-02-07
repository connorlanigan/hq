#!/usr/bin/env -S node --experimental-modules --no-warnings

import path from 'path';
import server from './server.mjs';

const PORT = 8080;

const ROOT = path.resolve();

server(ROOT, PORT);
