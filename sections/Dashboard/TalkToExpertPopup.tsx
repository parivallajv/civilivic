import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
  const [mobileCode, setMobileCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mobileCode,
          mobileNumber,
          email,
          location,
        }),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Failed to send email");
      }
      setIsSubmitting(false);
      setOpen(false);
      onSuccess?.();
      toast.success("Enquiry submitted!", {
        description: "We'll get in touch with you shortly.",
        duration: 5000,
      });
      setName("");
      setMobileNumber("");
      setEmail("");
      setLocation("");
    } catch (error: any) {
      setIsSubmitting(false);
      setSubmissionError(error.message);
      onError?.(error.message);
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
