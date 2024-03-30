# rwk2excel: Race War Kingdoms Map to Excel Add-On

`rwk2excel` is a Tampermonkey userscript designed to enhance your "Race War Kingdoms" gaming experience by providing a simple and efficient way to export RWK maps to Excel files directly from your browser. This tool is perfect for players looking to analyze or archive their RWK maps in a spreadsheet format without the hassle of manual data entry.

## Features

- **Easy Export:** With just one click, export RWK maps to an Excel spreadsheet.
- **Seamless Integration:** Works directly within your browser as a Tampermonkey script.
- **Custom Hosting:** Option to host your own script for enhanced security.

## Installation Guide

### Prerequisites

Before installing the `rwk2excel` add-on, ensure you have Tampermonkey installed in your browser. Tampermonkey is available for most browsers, including Chrome, Firefox, Safari, and Edge.

### Installing `rwk2excel`

1. **Install Tampermonkey:** If you haven't already, install Tampermonkey from the official website or your browser's extension store.
   
2. **Add the Script:**
   - Navigate to the Tampermonkey dashboard in your browser.
   - Click on the "Utilities" tab on the dashboard.
   - Under "URL", paste the link to the `rwk2excel` script and click on the “Import” button.
         Here is the link: `https://surzerker.github.io/rwk2excel/RWK%20Map%20to%20Excel-1.4.user.js`
   - Tampermonkey will prompt you to review the script. After reviewing, click "Install" to add the script to your browser.

## Security Guarantees

Your security is paramount. If you have any concerns about loading a remote script, I encourage you to download the script and host your own copy. This ensures you're in complete control of the script running in your browser.

To verify the integrity of the library sources included in the script, I provide direct links to their official CDNs for comparison:

- ExcelJS: `https://unpkg.com/exceljs/dist/exceljs.min.js`
- FileSaver.js: `https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js`

These links lead to the exact copies of the libraries used by `rwk2excel`, allowing you to verify their authenticity and integrity.

## Special Notes

- **Glitchless Statement on Map Add-Ons:** Glitchless has stated, "You can run whatever addons you want on the RWK maps page, but be sure not to run anything on the actual RWK game page or you risk being banned for botting. We may provide similar features in the future, but at the time don't have any plans to." This means that while developing and using `rwk2excel`, we've made sure to align with the game's policies regarding add-ons.
  
- **Elevated Privileges:** Due to the need to bypass CORS policies for certain operations, this script requires elevated privileges. When you run the script for the first time (by visiting the map page after installing it), Tampermonkey will prompt you to allow these elevated privileges. You will need to click "Allow Always" or a similar option. This may occur immediately after installing the script through the URL method; the exact timing can vary based on your browser and Tampermonkey version.

## Getting Started

Once installed, the `rwk2excel` add-on will be available whenever you're navigating through Race War Kingdoms maps. Look for the "Export to Excel" button or similar interface elements added by the script to start exporting your maps.

## Support

For issues, suggestions, or contributions, please open an issue on the GitHub repository page. Your feedback helps make `rwk2excel` better for everyone.
