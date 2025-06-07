"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { OFFICE_LOCATION } from '@/lib/constants';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // Validate required fields (already handled by react-hook-form, but added for clarity)
      if (!data.name || !data.email || !data.phone || !data.projectType || !data.budget || !data.message) {
        throw new Error('All fields are required');
      }

      // Format the WhatsApp message
      const formattedMessage = `New Contact Form Submission:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${data.projectType}
Budget: ${data.budget}
Message: ${data.message || 'No message provided'}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(formattedMessage);

      // WhatsApp API URL using environment variable
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
      if (!whatsappNumber) {
        throw new Error('WhatsApp number is not configured');
      }
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(whatsappNumber)}&text=${encodedMessage}&type=phone_number&app_absent=0`;

      // Open WhatsApp URL in a new tab
      window.open(whatsappUrl, '_blank');

      toast({
        title: 'Redirecting to WhatsApp',
        description: 'Please send the pre-filled message to complete your submission.',
      });
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to process your submission. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="website">Website Development</SelectItem>
                                <SelectItem value="ecommerce">E-commerce Solution</SelectItem>
                                <SelectItem value="webapp">Web Application</SelectItem>
                                <SelectItem value="design">UI/UX Design</SelectItem>
                                <SelectItem value="marketing">Digital Marketing</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under5k">Under $5,000</SelectItem>
                              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="over50k">Over $50,000</SelectItem>
                              <SelectItem value="notSure">Not Sure Yet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project and what you're looking to achieve..." 
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">{OFFICE_LOCATION.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Phone Number</h3>
                    <p className="text-gray-600 dark:text-gray-300">{OFFICE_LOCATION.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">{OFFICE_LOCATION.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">{OFFICE_LOCATION.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={OFFICE_LOCATION.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ShaviWebStore Office Location"
                  className="rounded-xl"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Answers to some common questions about working with us.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-6">
              <motion.div
                variants={fadeIn("up", 0.1)}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How long does it typically take to complete a website?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", 0.2)}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Do you provide ongoing support after the website is launched?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, we offer various maintenance and support packages to keep your website secure, up-to-date, and performing optimally after launch.
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", 0.3)}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How much input will I have in the design process?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe in collaborative design. Your input is crucial throughout the process, and we'll work closely with you to ensure the final product aligns with your vision and business goals.
                </p>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", 0.4)}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Will my website be mobile-friendly?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function beautifully on all devices, from smartphones to desktops.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}