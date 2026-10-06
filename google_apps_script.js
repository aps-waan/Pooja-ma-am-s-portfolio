/**
 * GOOGLE APPS SCRIPT - Automated Lead Capture & Email Notification
 * For Ms. Pooja Bhatt's Portfolio (https://github.com/... / live site)
 * 
 * -------------------------------------------------------------
 * HOW TO SET THIS UP IN 2 MINUTES:
 * -------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new) and name it:
 *    "Pooja Bhatt - Portfolio Leads & Inquiries"
 * 
 * 2. In the top menu, click: "Extensions" -> "Apps Script"
 * 
 * 3. Delete any default code in Code.gs and paste THIS ENTIRE FILE into the editor.
 * 
 * 4. (Optional) Check the POOJA_EMAIL constant below. It is currently set to:
 *    official.poojabhatt90@gmail.com
 * 
 * 5. Click the blue "Deploy" button at the top right -> Choose "New deployment".
 * 
 * 6. Next to "Select type", click the gear icon and select "Web app".
 * 
 * 7. Fill in the deployment settings:
 *    - Description: "Portfolio Contact Form Webhook"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone"  <-- CRITICAL! Must be "Anyone" so the website can submit without login.
 * 
 * 8. Click "Deploy".
 *    - Google will ask to "Authorize access" (click your account -> "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow").
 * 
 * 9. Copy the "Web app URL" (it looks like https://script.google.com/macros/s/AKfycbx.../exec).
 * 
 * 10. Paste that URL into:
 *     src/config/contactConfig.ts -> GOOGLE_SHEETS_SCRIPT_URL
 * 
 * That's it! Every time someone submits the form:
 * - A new row is automatically appended to your Google Sheet with timestamp, name, email, etc.
 * - An instant, beautifully formatted alert email is delivered to official.poojabhatt90@gmail.com with a 1-click reply button!
 */

const POOJA_EMAIL = "official.poojabhatt90@gmail.com";

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create polished header row if the sheet is fresh
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email Address",
        "Organization / University",
        "Service Category",
        "Target Timeline",
        "Message & Objectives"
      ]);
      sheet.getRange(1, 1, 1, 7)
        .setFontWeight("bold")
        .setBackground("#EA580C")
        .setFontColor("#FFFFFF")
        .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }
    
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }
    
    var timestamp = new Date();
    var name = data.name || "Anonymous";
    var email = data.email || "No Email Provided";
    var organization = data.organization || "Not Specified";
    var service = data.service || "Executive MIS & Power BI Consulting";
    var timeline = data.timeline || "Not Specified";
    var message = data.message || "No Message Provided";
    
    // 1. Append row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      organization,
      service,
      timeline,
      message
    ]);
    
    // 2. Format and send an immediate executive email alert to Ms. Pooja
    var subject = "🎯 New Portfolio Inquiry: " + name + " — " + service;
    
    var formattedDate = Utilities.formatDate(timestamp, "Asia/Kolkata", "dd MMM yyyy, hh:mm a") + " (IST)";
    
    var htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; border: 1px solid #E2E8F0; border-radius: 20px; background-color: #FFFFFF; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
        <div style="border-bottom: 2px solid #EA580C; padding-bottom: 16px; margin-bottom: 22px;">
          <h2 style="color: #0F172A; margin: 0 0 6px 0; font-size: 22px; font-weight: 800;">New Inquiry from Your Portfolio Website</h2>
          <p style="color: #64748B; margin: 0; font-size: 13px;">Received on ${formattedDate}</p>
        </div>

        <div style="background-color: #F8FAFC; border-radius: 14px; padding: 20px; margin-bottom: 22px; border-left: 4px solid #EA580C;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748B; width: 140px; font-weight: 600;">Full Name:</td>
              <td style="padding: 6px 0; color: #0F172A; font-weight: 700; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #EA580C; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Organization:</td>
              <td style="padding: 6px 0; color: #0F172A; font-weight: 600;">${organization}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Service Interest:</td>
              <td style="padding: 6px 0;"><span style="background: #FFEDD5; color: #9A3412; padding: 3px 10px; border-radius: 6px; font-weight: 700; font-size: 12px;">${service}</span></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748B; font-weight: 600;">Target Timeline:</td>
              <td style="padding: 6px 0; color: #0F172A; font-weight: 600;">${timeline}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 26px;">
          <h4 style="color: #475569; margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.6px; font-weight: 800;">Message & Project Objectives:</h4>
          <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 18px; color: #1E293B; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>

        <div style="text-align: center; padding-top: 14px; border-top: 1px solid #F1F5F9;">
          <a href="mailto:${email}?subject=Re:%20Your%20Inquiry%20regarding%20${encodeURIComponent(service)}&body=Hi%20${encodeURIComponent(name)},%0A%0AThank%20you%20for%20reaching%20out%20through%20my%20portfolio..." 
             style="display: inline-block; background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); color: #FFFFFF; font-weight: 800; font-size: 14px; text-decoration: none; padding: 13px 32px; border-radius: 12px; box-shadow: 0 6px 18px rgba(234, 88, 12, 0.35);">
            Reply Directly to ${name}
          </a>
        </div>
      </div>
    `;
    
    MailApp.sendEmail({
      to: POOJA_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: email
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Inquiry saved to Google Sheet and email alert dispatched to Ms. Pooja."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "Google Apps Script webhook is active. Send a POST request to record inquiries and dispatch emails."
  })).setMimeType(ContentService.MimeType.JSON);
}

// ==============================================================
// 1-CLICK TEST FUNCTION (Run this directly inside Apps Script!)
// ==============================================================
function testSendEmail() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        name: "Test Client",
        email: "testclient@example.com",
        organization: "Automated Verification Corp",
        service: "Executive MIS & Power BI Consulting",
        timeline: "Immediate (1-2 wks)",
        message: "Hello Pooja, this is a test inquiry to verify that email alerts are working!"
      })
    }
  };
  
  var result = doPost(mockEvent);
  Logger.log("Result: " + result.getContent());
}

