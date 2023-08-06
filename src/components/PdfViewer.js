import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const PdfViewer = () => {

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
            <div style={{ height: '750px' }}>
                <Viewer fileUrl="https://arxiv.org/pdf/1706.03762.pdf" />
            </div>
        </Worker>
    )
}

export default PdfViewer;