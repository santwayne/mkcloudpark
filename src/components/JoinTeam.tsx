import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, Heart, ArrowRight, Target, Briefcase, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

const JoinTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Career Growth", description: "Continuous learning opportunities and clear advancement paths in the logistics industry" },
    { icon: <Award className="w-6 h-6" />, title: "Competitive Benefits", description: "Comprehensive health coverage, retirement planning, and performance bonuses" },
    { icon: <Heart className="w-6 h-6" />, title: "Work-Life Balance", description: "Flexible schedules and generous time-off policies for your well-being" },
    { icon: <Users className="w-6 h-6" />, title: "Great Culture", description: "Collaborative environment with supportive team members and leadership" },
  ];

  const values = [
    { icon: <Target className="w-8 h-8" />, title: "Excellence", description: "We strive for excellence in every delivery and service we provide" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Professionalism", description: "Maintaining the highest standards in logistics and customer service" },
    { icon: <Globe className="w-8 h-8" />, title: "Innovation", description: "Embracing new technologies and methods to stay ahead in the industry" },
  ];

  const handleApplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast.success("Application submitted. Our team will review your resume and contact you.");
    form.reset();
    // TODO: connect to backend or service for real submissions.
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#1b2a6b] via-[#263c96] to-[#1b2a6b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className={`relative max-w-7xl mx-auto px-6 py-24 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Join Our <span className="text-white drop-shadow-lg animate-text-shimmer">Team</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
              Be part of a dynamic logistics company that's shaping the future of transportation and warehousing
            </p>

            {/* Scroll to driver application form on same page */}
            <a href="#driver-application">
              <button className="inline-flex items-center px-8 py-4 bg-white text-[#263c96] rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fade-in-up delay-400 group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-wave">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Join Us</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We invest in our people, provide modern equipment, and offer stable routes with competitive pay.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(b.title)}
                onMouseLeave={() => setActiveCard(null)}
                className={`p-6 rounded-2xl bg-white border border-border shadow-sm transition-all ${activeCard === b.title ? 'shadow-lg scale-[1.02]' : ''}`}
              >
                <div className="mb-4 text-primary">{b.icon}</div>
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="text-muted-foreground mt-2">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-border shadow-sm text-center">
                <div className="flex justify-center text-primary mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="text-muted-foreground mt-2">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Application Form (bottom of the page) */}
      {/* Driver Application Form (bottom of the page) */}
      <section id="driver-application" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Start Your Journey With Us</h2>
            <p className="text-muted-foreground mt-3">
              Apply to join our team as a professional truck driver. Submit your details and resume, and we’ll get in touch.
            </p>
          </div>

          <Card className="p-0 overflow-hidden">
            <form className="divide-y" onSubmit={handleApplySubmit}>
              {/* Section: Personal Information */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                    Personal Information
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tell us how to reach you.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" name="fullName" placeholder="John Smith" required aria-required="true" />
                    <p className="text-xs text-muted-foreground">As shown on your driver’s license.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required aria-required="true" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      pattern="^[0-9()+\-.\s]{7,20}$"
                      required
                      aria-required="true"
                    />
                    <p className="text-xs text-muted-foreground">Use a number we can reach during business hours.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (City, State/Province)</Label>
                    <Input id="location" name="location" placeholder="Toronto, ON" />
                  </div>
                </div>
              </div>

              {/* Section: Qualifications */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                    Qualifications
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your license and experience help us match you to the right routes.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="licenseClass">License Class *</Label>
                    <Input id="licenseClass" name="licenseClass" placeholder="AZ / Class 1 / CDL" required aria-required="true" />
                    <p className="text-xs text-muted-foreground">Include any endorsements (e.g., Air Brake, HazMat).</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input id="experience" name="experience" type="number" min={0} placeholder="3" required aria-required="true" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eligibility">Eligible to work? *</Label>
                    <select
                      id="eligibility"
                      name="eligibility"
                      required
                      aria-required="true"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section: Preferences */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                    Preferences
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">
                    Let us know what schedules and equipment you prefer.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <select
                      id="availability"
                      name="availability"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <option value="">Select...</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Routes preference, endorsements, equipment experience..."
                      className="min-h-28"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Resume & Consent */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                    Resume & Consent
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload your most recent resume including driving history.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume (PDF/DOC) *</Label>
                  <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required aria-required="true" />
                  <p className="text-xs text-muted-foreground">Max 10MB. Include endorsements and last 3 years' driving history.</p>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input id="consent" name="consent" type="checkbox" required aria-required="true" className="mt-1 h-4 w-4 rounded border-input" />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to the processing of my personal data for recruitment purposes.
                  </Label>
                </div>

                <Button type="submit" size="lg" className="mt-8 w-full bg-primary text-white hover:bg-primary/90 py-6 rounded-full">
                  Submit Application
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-3">* Required fields.</p>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default JoinTeam;