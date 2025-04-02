export async function handleDownloadCV(
  src: string,
  fileName: string = "CV.pdf"
) {
  try {
    const response = await fetch(src);
    const blob = await response.blob(); // Convert response to Blob
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
}
