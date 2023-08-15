import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfViewer = () => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div style={{ height: "750px" }}>
                <Viewer fileUrl="https://arxiv.org/pdf/1706.03762.pdf" />
            </div>
        </Worker>
    );
};

export default PdfViewer;
