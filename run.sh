#!/bin/bash
echo "Hi"
npm run run
php -S localhost:8000 &
open -a 'Google Chrome' http://localhost:8000