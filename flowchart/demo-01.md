# Mermaid

JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

https://mermaid.js.org/
https://mermaid.live/

```mermaid
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]-->A
```

# Segment

```mermaid
graph TD
    A[Form Field] -->|Execute Action| B{Action Response}
    B --> C[Success] -->|Set Segment| SN1
    B --> D[Error] -->|Set Segment| SN2
    S1[Segments]
    S1 --> SN1[First Segment]
    S1 --> SN2[Second Segment]
    S1 --> SN3[Others..]
```
