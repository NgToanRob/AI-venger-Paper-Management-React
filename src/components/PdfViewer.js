import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useParams } from "react-router-dom";
const PdfViewer = () => {
    const { 0: id } = useParams();
    const url = `https://arxiv.org/pdf/${id}.pdf`;
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
            <div style={{ height: "750px" }}>
                <Viewer fileUrl={url} />
            </div>
        </Worker>
    );
};

export default PdfViewer;
