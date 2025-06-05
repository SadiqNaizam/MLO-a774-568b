import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from "sonner";

import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage: React.FC = () => {
  console.log('ContactPage loaded');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    // Simulate API call
    toast.promise(new Promise(resolve => setTimeout(resolve, 1500)), {
        loading: 'Sending your message...',
        success: () => {
            form.reset();
            return `Thank you, ${data.name}! Your message has been sent.`;
        },
        error: 'Failed to send message. Please try again.'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavigationMenu />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project idea, a question, or just want to say hello? I'd love to hear from you!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">Send me a message</CardTitle>
                    <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                          {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </form>
                    </Form>
                </CardContent>
            </Card>
            
            <div className="space-y-6">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <a href="mailto:hello@example.com" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                            <span>hello@example.com</span>
                        </a>
                        {/* Add other contact details like phone if applicable */}
                    </CardContent>
                </Card>
                 <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl">Connect with Me</CardTitle>
                    </CardHeader>
                    <CardContent className="flex space-x-4">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-7 w-7" /> <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-7 w-7" /> <span className="sr-only">GitHub</span>
                        </a>
                         {/* Add other social links like Twitter, etc. */}
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;