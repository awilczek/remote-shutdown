# remote-shutdown

# Requirements
- [node.js](https://nodejs.org) installed

# Installation
1. run the server
  1. `cd /path/to/server/` and install dependencies: `npm install`
  2. run `node ./server.js` (ideally, add to startup apps)
2. install for example [REST Client for Android](https://play.google.com/store/apps/details?id=com.sourcestream.android.restclient)
3. test it by sending DELETE requests to your computer's IP on port 9999
4. if needed, open port 9999 (just for local network) for instance by `sudo iptables -A INPUT -p tcp --dport 9999 -j ACCEPT` (ideally, save iptables permanently)
5. if needed, provide password to your script as a first command line paramater
