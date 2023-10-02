sequenceDiagram
participant Browser
participant Server

    Browser->>Server: User interacts with the SPA
    Browser->>Server: HTTP POST /new_note_spa
    Server-->>Browser: HTTP 201 Created (Note added)

    alt If Note Addded
        Browser->>Browser: Update UI with new note
    else If Note Addition Failed
        Browser->>Browser: Show error message
    end
