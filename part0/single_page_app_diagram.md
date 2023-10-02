sequenceDiagram
participant User
participant Browser
participant Server

    User->>Browser: Access https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: Request HTML, CSS, JS
    Server-->>Browser: HTML, CSS, JS files
    Browser->>Browser: Render SPA UI
