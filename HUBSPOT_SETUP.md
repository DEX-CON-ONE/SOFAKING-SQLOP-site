# HubSpot CRM Integration Setup

This site includes a Solutions Contact Form that integrates with HubSpot CRM for lead generation and pipeline management.

## Setup Instructions

### 1. Create a HubSpot Form

1. Log in to your HubSpot account at https://app.hubspot.com/
2. Navigate to **Marketing** > **Forms**
3. Click **Create form**
4. Choose **Embedded form** type
5. Add the following fields to your form:
   - First Name (firstname)
   - Last Name (lastname)
   - Email (email)
   - Company Name (company)
   - Phone Number (phone)
   - Solution Type (custom property: solution_type)
   - Problem Description (custom property: problem_description)
   - Message (message)

### 2. Create Custom Properties (if needed)

If the custom properties don't exist, create them:

1. Go to **Settings** > **Properties**
2. Click **Create property**
3. Create these contact properties:
   - **solution_type**: Single-line text
   - **problem_description**: Multi-line text

### 3. Get Your API Credentials

1. Find your **Portal ID**:
   - Go to **Settings** > **Account Setup** > **Account Defaults**
   - Copy the Hub ID (this is your Portal ID)

2. Find your **Form ID**:
   - Go to your form in **Marketing** > **Forms**
   - Click on the form you created
   - Look at the URL: `https://app.hubspot.com/forms/{PORTAL_ID}/{FORM_ID}/edit`
   - Or click **Share** and find it in the embed code

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_actual_portal_id
   NEXT_PUBLIC_HUBSPOT_FORM_ID=your_actual_form_id
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 5. Test the Integration

1. Navigate to http://localhost:3000/solutions
2. Fill out and submit the contact form
3. Check your HubSpot account for the new submission
4. The lead should appear in **Contacts** > **Contacts**

## Form Behavior

- **With HubSpot configured**: Submissions are sent to HubSpot CRM and user is redirected to booking
- **Without HubSpot configured**: Form data is logged to console with instructions to set up environment variables, then user is redirected to booking

## Deployment

When deploying to production (Vercel, etc.):

1. Add the environment variables in your hosting platform's settings:
   - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`
   - `NEXT_PUBLIC_HUBSPOT_FORM_ID`

2. Redeploy the application

## Testing

To test without configuring HubSpot:
- Simply submit the form
- Check browser console for the logged form data
- User will still be redirected to booking

## Troubleshooting

### Form submissions not appearing in HubSpot

1. Verify Portal ID and Form ID are correct
2. Check browser console for errors
3. Ensure custom properties exist in HubSpot
4. Verify form is published and not in draft mode

### CORS errors

HubSpot's API should allow requests from any origin, but if you encounter CORS issues:
1. Check that you're using the correct API endpoint
2. Verify the Portal ID and Form ID are correct
3. Contact HubSpot support if issues persist

## Additional Resources

- [HubSpot Forms API Documentation](https://developers.hubspot.com/docs/api/marketing/forms)
- [HubSpot Contact Properties](https://developers.hubspot.com/docs/api/crm/properties)
