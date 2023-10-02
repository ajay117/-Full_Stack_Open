sequenceDiagram
participant Browser
participant Server

    Browser->>Server: HTTP POST /new_note
    Note over Server: Server processes the request
    Server-->>Browser: HTTP 302 Redirect /notes
    Note over Browser: Browser follows the redirect
    Browser->>Server: HTTP GET /notes
    Note over Server: Server provides Notes page
    Browser->>Server: HTTP GET /main.css
    Note over Server: Server sends the stylesheet
    Browser->>Server: HTTP GET /main.js
    Note over Server: Server sends the JavaScript code
    Browser->>Server: HTTP GET /data.json
    Note over Server: Server sends notes as json
