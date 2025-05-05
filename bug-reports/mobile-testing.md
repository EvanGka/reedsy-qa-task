I tried to proxy the http://localhost:5173/ to my iphone in order to test the app, however I think there is a CORS blocker.

First, in the `qa/packages/frontend/package.json` I set `"dev": "vite --host"` and indeed when you run the app it returns:

```bash
Local:   http://localhost:5173/
Network: http://192.168.68.124:5173/
```

However when you try to trigger the localhost from the iphone the page is never loaded.

Then you should go to `qa/packages/frontend/src/stores/books.js` and update the endpoint from `http://localhost:3000/api/books'` to `http://your_ipv4_address:3000/api/books`

But again the page is never loaded

I used web inspector to the console and the network errors from my iphone's safari and the following error is returned:
`Failed to load resource: Origin http://192.168.68.124:5173 is not allowed by Access-Control-Allow-Origin. Status code: 200`

So the CORS policy is blocking the frontend because the server isn’t allowing requests from the origin http://192.168.68.124:5173

To fix the issue and enable mobile testing we need to update the `index.js` to include the LAN IP address (for the phone)

```bash
app.use(
  cors({
    origin: ["http://localhost:5173", "http://your_ip_address:5173"]
  })
);
```
