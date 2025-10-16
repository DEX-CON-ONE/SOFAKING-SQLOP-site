"use client";

import { useState } from "react";

interface SolutionsContactFormProps {
  solutionType?: string;
  problemDescription?: string;
}

export default function SolutionsContactForm({ 
  solutionType = "", 
  problemDescription = "" 
}: SolutionsContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    solution: solutionType,
    problem: problemDescription,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // HubSpot Forms API integration
      // This will be activated when HUBSPOT_PORTAL_ID and HUBSPOT_FORM_ID env vars are provided
      const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
      const hubspotFormId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

      if (hubspotPortalId && hubspotFormId) {
        const response = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: [
                { name: "firstname", value: formData.name.split(" ")[0] },
                { name: "lastname", value: formData.name.split(" ").slice(1).join(" ") || formData.name.split(" ")[0] },
                { name: "email", value: formData.email },
                { name: "company", value: formData.company },
                { name: "phone", value: formData.phone },
                { name: "solution_type", value: formData.solution },
                { name: "problem_description", value: formData.problem },
                { name: "message", value: formData.message },
              ],
              context: {
                pageUri: window.location.href,
                pageName: document.title,
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
      } else {
        // Fallback: Log to console when HubSpot is not configured
        console.log("HubSpot not configured. Form data:", formData);
        console.log("To enable HubSpot integration, set NEXT_PUBLIC_HUBSPOT_PORTAL_ID and NEXT_PUBLIC_HUBSPOT_FORM_ID environment variables");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        solution: solutionType,
        problem: problemDescription,
        message: "",
      });

      // Redirect to thank you page or booking
      setTimeout(() => {
        window.location.href = "https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/";
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card-elevated p-8 bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md text-shadow">
        Request a Solution Review
      </h3>
      
      {status === "success" ? (
        <div className="bg-accent/20 border border-accent/40 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h4 className="text-xl font-bold">Thank You!</h4>
          </div>
          <p className="mb-2">Your request has been submitted successfully.</p>
          <p className="text-sm text-white/80">Redirecting you to schedule a call...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-white font-medium mb-2">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="solution" className="block text-white font-medium mb-2">
              Solution Type *
            </label>
            <select
              id="solution"
              name="solution"
              required
              value={formData.solution}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent"
            >
              <option value="">Select a solution type</option>
              <option value="deadlock-resolution">Deadlock Resolution</option>
              <option value="backup-dr-risk">Backup & DR Risk</option>
              <option value="migration-risk">Migration Risk Mitigation</option>
              <option value="slow-azure-mi">Slow Azure MI Reporting</option>
              <option value="custom">Custom Solution</option>
            </select>
          </div>

          <div>
            <label htmlFor="problem" className="block text-white font-medium mb-2">
              Problem Description
            </label>
            <textarea
              id="problem"
              name="problem"
              rows={3}
              value={formData.problem}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Brief description of your SQL Server challenge..."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Any additional details about your environment, timeline, or specific requirements..."
            />
          </div>

          {status === "error" && (
            <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 text-white">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                There was an error submitting your request. Please try again or contact us directly.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-primary text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Request"
            )}
          </button>

          <p className="text-sm text-white/70 text-center">
            By submitting this form, you agree to be contacted by our team regarding your SQL Server needs.
          </p>
        </form>
      )}
    </div>
  );
}
