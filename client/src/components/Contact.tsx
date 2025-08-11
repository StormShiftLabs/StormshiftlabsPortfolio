import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-gray-900/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-orbitron font-bold text-5xl md:text-6xl mb-8" data-testid="contact-title">
          Let's Build <span className="text-neon-cyan">Something</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto" data-testid="contact-subtitle">
          Ready to bring your ideas to life? Whether it's a sleek mobile app or a cutting-edge web experience, 
          let's collaborate and create something extraordinary.
        </p>
        
        {/* Contact Form */}
        <div ref={ref} className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 mb-12 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6" data-testid="contact-form">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-600 text-white focus:border-neon-cyan"
              data-testid="input-name"
            />
            <Input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-600 text-white focus:border-neon-cyan"
              data-testid="input-email"
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="md:col-span-2 bg-gray-800 border-gray-600 text-white focus:border-neon-cyan"
              data-testid="input-subject"
            />
            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="md:col-span-2 bg-gray-800 border-gray-600 text-white focus:border-neon-cyan resize-none"
              data-testid="textarea-message"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="md:col-span-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold py-3 px-8 hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:-translate-y-1"
              data-testid="button-submit"
            >
              {isSubmitting ? (
                <>
                  <Send className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
        
        {/* Contact Links */}
        <div className="flex justify-center space-x-8" data-testid="social-links">
          <a 
            href="mailto:justin@stormshiftlabs.com" 
            className="text-neon-cyan hover:text-white transition-colors duration-300 group"
            data-testid="link-email"
          >
            <Mail size={32} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://github.com/justinmadanayake" 
            className="text-neon-cyan hover:text-white transition-colors duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github"
          >
            <Github size={32} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://linkedin.com/in/justinmadanayake" 
            className="text-neon-cyan hover:text-white transition-colors duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-linkedin"
          >
            <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://twitter.com/justinmadanayake" 
            className="text-neon-cyan hover:text-white transition-colors duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-twitter"
          >
            <Twitter size={32} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
