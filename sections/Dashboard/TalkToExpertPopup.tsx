import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TalkToExpertFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const TalkToExpertPopup: React.FC<TalkToExpertFormProps> = ({
  onSuccess,
  onError,
}) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [mobileCode, setMobileCode] = useState("+91"); // Default to India's code
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    // Simulate form submission (replace with your actual API call)
    try {
      console.log("Submitting form data:", {
        name,
        mobileCode,
        mobileNumber,
        email,
        location,
      });
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      setIsSubmitting(false);
      setOpen(false); // Close the popup on successful submission
      if (onSuccess) {
        onSuccess();
      } else {
        alert(
          "Thank you for your interest! We will get in touch with you soon."
        );
        // Optionally reset the form here
        setName("");
        setMobileNumber("");
        setEmail("");
        setLocation("");
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      setSubmissionError("Failed to submit the form. Please try again later.");
      if (onError) {
        onError(error.message || "An unexpected error occurred.");
      }
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v && onSuccess) onSuccess();
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-gray-600" /> Talk to Our
              Expert
            </div>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              id="name"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="flex rounded-md shadow-sm">
              <Select value={mobileCode} onValueChange={setMobileCode}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">🇮🇳 +91</SelectItem>
                  {/* Add more country codes as needed */}
                </SelectContent>
              </Select>
              <Input
                type="tel"
                id="mobile"
                placeholder="Mobile Number*"
                className="flex-1"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="text"
              id="location"
              placeholder="Location of your Plot*"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          {submissionError && (
            <p className="text-red-500 text-sm">{submissionError}</p>
          )}
          <div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            By submitting this form, I confirm that I have read and agreed to
            accept Brick&Bolt's{" "}
            <a href="#" className="text-blue-500 hover:underline">
              privacy policy
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TalkToExpertPopup;
