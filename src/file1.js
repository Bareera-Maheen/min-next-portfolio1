// file1.js
export const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./images/cv.jpg"; // Path to your file
    link.download = "Bareerah_Maheen_Cv.jpg"; // Custom file name
    link.click(); // Trigger the download
  };