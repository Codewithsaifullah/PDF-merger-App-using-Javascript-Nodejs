// merge.js
import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

const mergepdf = async (p1, p2) => {
  await merger.add(p1);
  await merger.add(p2);
  await merger.setMetadata({
    producer: "pdf-merger-js based script",
    author: "John Doe",
    creator: "John Doe",
    title: "My live as John Doe"
  });
  await merger.save('public/merged.pdf');
};

export default mergepdf;
