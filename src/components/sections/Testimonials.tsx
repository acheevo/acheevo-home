import { FC, useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  verified: boolean;
  date: string;
  sessions: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "I wasted ten years climbing someone else's ladder. After 8 conversations, I finally see MY path. I quit my corporate job and started coaching—something I'd been terrified to do. Now I wake up energized instead of dreading Monday.",
    name: "Sarah Mitchell",
    role: "Former Marketing VP → Life Coach",
    avatar: "/images/avatars/sarah.jpg",
    rating: 5,
    verified: true,
    date: "2 weeks ago",
    sessions: 8,
  },
  {
    quote: "I thought purpose was this grand, elusive thing. Turns out it was right in front of me the whole time—I just needed someone to ask the right questions. My entire perspective shifted in 3 sessions.",
    name: "David Chen",
    role: "Software Engineer → Open Source Advocate",
    avatar: "/images/avatars/david.jpg",
    rating: 5,
    verified: true,
    date: "1 month ago",
    sessions: 5,
  },
  {
    quote: "For the first time in my adult life, I understand WHY I do what I do. That clarity gave me the courage to say no to things that drain me and yes to what matters. My anxiety has dropped significantly.",
    name: "Maria Rodriguez",
    role: "Teacher & Community Organizer",
    avatar: "/images/avatars/maria.jpg",
    rating: 5,
    verified: true,
    date: "3 weeks ago",
    sessions: 3,
  },
  {
    quote: "I've spent $10,000+ on courses, coaches, and therapy. This free beta gave me more clarity than all of that combined. The AI doesn't judge—it just listens and guides. Breakthrough after breakthrough.",
    name: "James Peterson",
    role: "Entrepreneur",
    avatar: "/images/avatars/james.jpg",
    rating: 5,
    verified: true,
    date: "1 week ago",
    sessions: 6,
  },
  {
    quote: "I thought burnout was just part of being a nurse. Discovering my purpose showed me how to bring meaning back to my work. Same job, completely different experience. I'm present with my patients again.",
    name: "Emily Watson",
    role: "ICU Nurse",
    avatar: "/images/avatars/emily.jpg",
    rating: 5,
    verified: true,
    date: "2 months ago",
    sessions: 4,
  },
  {
    quote: "The questions made me cry (in the best way). I'd been burying my dreams for 'practical' reasons. Now I'm designing for nonprofits—using my skills for what I actually care about. I feel alive again.",
    name: "Alex Thompson",
    role: "Designer → Social Impact Designer",
    avatar: "/images/avatars/alex.jpg",
    rating: 5,
    verified: true,
    date: "3 weeks ago",
    sessions: 7,
  },
];

const Testimonials: FC = () => {
  const featuredTestimonial = testimonials[0]; // Always show first testimonial

  return (
    <section id="testimonials" className="relative p-[80px] bg-white overflow-hidden">
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-20 pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-2xl">
          <ScrollReveal animation="slide-up">
            <h2 className="text-h4 lg:text-h3 font-bold text-neutral-900 mb-sm">
              What people are{' '}
              <span className="gradient-text">saying</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              These are real people who've been through the process. Here's what stuck with them.
            </p>
          </ScrollReveal>

          {/* Trust indicator */}
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="mt-sm flex items-center justify-center gap-3xs text-neutral-600">
              <CheckCircle2 className="w-5 h-5 text-green-600 pulse-ring" />
              <span className="text-sm font-medium">
                From people who completed all 8 conversations
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Featured Testimonial - Full Width Hero */}
        <ScrollReveal animation="fade-in" delay={300}>
          <div className="mb-2xl bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-2xl relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30" />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Star Rating */}
              <div className="mb-lg flex items-center justify-center gap-1">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Text - Large and Prominent */}
              <blockquote className="text-center mb-xl">
                <p className="text-2xl lg:text-3xl text-neutral-900 leading-relaxed font-light italic">
                  "{featuredTestimonial.quote}"
                </p>
              </blockquote>

              {/* Author Info - Centered */}
              <div className="flex flex-col items-center">
                <div className="relative mb-md">
                  <img
                    src={featuredTestimonial.avatar}
                    alt={featuredTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  {featuredTestimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 ring-4 ring-white">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <p className="font-bold text-h5 text-neutral-900 mb-xs">
                    {featuredTestimonial.name}
                  </p>
                  <p className="text-body-sm text-neutral-500">
                    {featuredTestimonial.sessions} conversations • {featuredTestimonial.date}
                  </p>
                </div>

                {/* Read Full Story Link */}
                <a
                  href="#"
                  className="mt-lg inline-flex items-center gap-2xs text-body-md font-semibold text-purple-600 hover:text-purple-700 transition-colors group"
                >
                  Read full story
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default Testimonials;
