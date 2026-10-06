/**
 * Contact Form Configuration
 * 
 * Deployed Google Apps Script Web App URL:
 * When submitted, inquiries are automatically logged in your Google Sheet
 * AND an instant notification email is dispatched to Ms. Pooja.
 */
export const CONTACT_CONFIG = {
  GOOGLE_SHEETS_SCRIPT_URL: 
    import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || 
    "https://script.google.com/macros/s/AKfycbxIGgezDYwMaUUufpDS-dP7eThgR2TIyEXV1r2HLIn3Q2UdTy5EDWi0RBI4HS8EyXx3/exec",
  
  // Recipient notification email for Ms. Pooja
  NOTIFICATION_EMAIL: "official.poojabhatt90@gmail.com",
};
