import { FC, useState } from 'react';
import { CheckCircle2, Star, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Testimonial {
  quote: string;
  fullQuote?: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  rating: number;
  verified: boolean;
  date: string;
  sessions: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I wasted ten years climbing someone else's ladder. After 8 conversations, I finally see MY path. I quit my corporate job and started coaching — something I'd been terrified to do. Now I wake up energized instead of dreading Monday.",
    fullQuote:
      "I wasted ten years climbing someone else's ladder. After 8 conversations, I finally see MY path. I quit my corporate job and started coaching — something I'd been terrified to do. Now I wake up energized instead of dreading Monday. The questions Acheevo asked me weren't the kind anyone had ever asked before. They cut through the noise and helped me see what I'd been avoiding: I wanted to help people directly, face-to-face, not manage campaigns for products I didn't care about. It took courage, but the clarity made the leap feel less like jumping and more like stepping onto solid ground.",
    name: 'Sarah Mitchell',
    role: 'Former Marketing VP → Life Coach, 38',
    initials: 'SM',
    avatarColor: 'bg-rose-500',
    rating: 5,
    verified: true,
    date: '2 weeks ago',
    sessions: 8,
  },
  {
    quote:
      "I almost quit my job out of frustration. Acheevo helped me realize it wasn't the work I hated — it was the disconnect from my values. I restructured my role around what matters to me, and my manager actually supported it. Same company, completely different experience.",
    fullQuote:
      "I almost quit my job out of frustration. Acheevo helped me realize it wasn't the work I hated — it was the disconnect from my values. I restructured my role around what matters to me, and my manager actually supported it. Same company, completely different experience. I used to spend Sunday evenings spiraling about Monday. Now I have a clear framework for why my work matters and how it connects to my bigger picture. I didn't need to blow up my life — I just needed to understand what was actually missing.",
    name: 'David Chen',
    role: 'Software Engineering Lead, 31',
    initials: 'DC',
    avatarColor: 'bg-blue-500',
    rating: 5,
    verified: true,
    date: '1 month ago',
    sessions: 5,
  },
  {
    quote:
      "I'm 22 and everyone kept telling me to 'just pick something.' Acheevo helped me understand what actually drives me before I committed to the wrong career. I saved myself years of going down a path that looked good on paper but would've left me empty.",
    fullQuote:
      "I'm 22 and everyone kept telling me to 'just pick something.' Acheevo helped me understand what actually drives me before I committed to the wrong career. I saved myself years of going down a path that looked good on paper but would've left me empty. My parents wanted me in finance, my friends said tech, and I was paralyzed. Acheevo didn't tell me what to do — it helped me discover the pattern in everything I'd ever loved doing. Turns out, I'm wired for education design. I never would have found that on a job board.",
    name: 'Jordan Rivera',
    role: 'Recent Graduate, 22',
    initials: 'JR',
    avatarColor: 'bg-emerald-500',
    rating: 5,
    verified: true,
    date: '3 weeks ago',
    sessions: 4,
  },
  {
    quote:
      "At 52, I thought my window for change had closed. I was wrong. Acheevo helped me see that everything I've been through — the detours, the setbacks — was building toward something. I'm now launching a mentoring program for women re-entering the workforce.",
    fullQuote:
      "At 52, I thought my window for change had closed. I was wrong. Acheevo helped me see that everything I've been through — the detours, the setbacks — was building toward something. I'm now launching a mentoring program for women re-entering the workforce. For decades I thought purpose was a young person's luxury. Something you figure out in your twenties or not at all. But the conversations showed me that my 30 years of experience weren't random — they were preparation. I cried when I finally saw the thread connecting it all.",
    name: 'Patricia Owens',
    role: 'Former HR Director → Nonprofit Founder, 52',
    initials: 'PO',
    avatarColor: 'bg-amber-500',
    rating: 5,
    verified: true,
    date: '1 month ago',
    sessions: 7,
  },
  {
    quote:
      "I'd been freelancing for years but couldn't articulate why my business existed beyond 'I need to pay rent.' Acheevo helped me find the deeper why — and once I could say it clearly, my clients started finding me instead of the other way around.",
    fullQuote:
      "I'd been freelancing for years but couldn't articulate why my business existed beyond 'I need to pay rent.' Acheevo helped me find the deeper why — and once I could say it clearly, my clients started finding me instead of the other way around. I rewrote my entire brand story after session five. Not because Acheevo told me to, but because I finally had the words. My revenue has grown 40% since I started leading with purpose instead of a services list. Turns out people want to work with someone who knows why they do what they do.",
    name: 'Marcus Grant',
    role: 'Brand Strategist & Freelancer, 36',
    initials: 'MG',
    avatarColor: 'bg-violet-500',
    rating: 5,
    verified: true,
    date: '2 months ago',
    sessions: 6,
  },
  {
    quote:
      "I was running on fumes — 60-hour weeks, no boundaries, and zero joy. Acheevo didn't tell me to quit. It helped me understand what I was running from and what I actually wanted to run toward. I'm still in healthcare, but I've completely redesigned how I show up.",
    fullQuote:
      "I was running on fumes — 60-hour weeks, no boundaries, and zero joy. Acheevo didn't tell me to quit. It helped me understand what I was running from and what I actually wanted to run toward. I'm still in healthcare, but I've completely redesigned how I show up. I used to think burnout meant I was weak. Acheevo showed me it meant I was misaligned. The work itself wasn't the problem — it was doing it without understanding my own needs and limits. I set real boundaries for the first time, and the world didn't end. It actually got better.",
    name: 'Emily Watson',
    role: 'ICU Nurse, Burnout Recovery, 29',
    initials: 'EW',
    avatarColor: 'bg-teal-500',
    rating: 5,
    verified: true,
    date: '3 weeks ago',
    sessions: 4,
  },
];

const Avatar: FC<{ initials: string; color: string; size?: 'sm' | 'lg' }> = ({
  initials,
  color,
  size = 'sm',
}) => {
  const sizeClasses = size === 'lg' ? 'w-20 h-20 text-2xl' : 'w-12 h-12 text-sm';
  return (
    <div
      className={`${sizeClasses} ${color} rounded-full flex items-center justify-center font-bold text-white ring-4 ring-white dark:ring-gray-800 shadow-lg select-none`}
    >
      {initials}
    </div>
  );
};

const StoryModal: FC<{
  testimonial: Testimonial;
  onClose: () => void;
}> = ({ testimonial, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-gray-200 hover:bg-neutral-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Avatar initials={testimonial.initials} color={testimonial.avatarColor} size="lg" />
            {testimonial.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 ring-4 ring-white dark:ring-gray-900">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-lg text-neutral-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-neutral-500 dark:text-gray-400">{testimonial.role}</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>

        <blockquote className="text-neutral-700 dark:text-gray-300 leading-relaxed text-base">
          "{testimonial.fullQuote || testimonial.quote}"
        </blockquote>

        <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-gray-700 flex items-center justify-between text-sm text-neutral-500 dark:text-gray-400">
          <span>{testimonial.sessions} conversations</span>
          <span>{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const featuredTestimonial = testimonials[0];
  const gridTestimonials = testimonials.slice(1);

  return (
    <section
      id="testimonials"
      className="relative p-[80px] bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300"
    >
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-20 dark:opacity-10 pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-2xl">
          <ScrollReveal animation="slide-up">
            <h2 className="text-h4 lg:text-h3 font-bold text-neutral-900 dark:text-white mb-sm">
              Real people.{' '}
              <span className="gradient-text">Real clarity.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={100}>
            <p className="text-body-lg text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Not everyone quits their job. But everyone walks away knowing something they didn't before.
            </p>
          </ScrollReveal>

          {/* Trust indicator */}
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="mt-sm flex items-center justify-center gap-3xs text-neutral-600 dark:text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 pulse-ring" />
              <span className="text-sm font-medium">
                From people who completed all 8 conversations
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Featured Testimonial - Full Width Hero */}
        <ScrollReveal animation="fade-in" delay={300}>
          <div className="mb-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-3xl p-2xl relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-full blur-3xl opacity-30 dark:opacity-20" />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Star Rating */}
              <div className="mb-lg flex items-center justify-center gap-1">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Text - Large and Prominent */}
              <blockquote className="text-center mb-xl">
                <p className="text-2xl lg:text-3xl text-neutral-900 dark:text-white leading-relaxed font-light italic">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author Info - Centered */}
              <div className="flex flex-col items-center">
                <div className="relative mb-md">
                  <Avatar
                    initials={featuredTestimonial.initials}
                    color={featuredTestimonial.avatarColor}
                    size="lg"
                  />
                  {featuredTestimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 ring-4 ring-white dark:ring-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <p className="font-bold text-h5 text-neutral-900 dark:text-white mb-xs">
                    {featuredTestimonial.name}
                  </p>
                  <p className="text-body-sm text-neutral-500 dark:text-gray-400">
                    {featuredTestimonial.role}
                  </p>
                  <p className="text-body-sm text-neutral-400 dark:text-gray-500 mt-1">
                    {featuredTestimonial.sessions} conversations &middot; {featuredTestimonial.date}
                  </p>
                </div>

                {/* Read Full Story Button — opens modal */}
                {featuredTestimonial.fullQuote && (
                  <button
                    onClick={() => setExpandedIndex(0)}
                    className="mt-lg inline-flex items-center gap-2xs text-body-md font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group cursor-pointer"
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
                  </button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {gridTestimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} animation="slide-up" delay={100 * (index + 1)}>
              <div className="h-full bg-neutral-50 dark:bg-gray-800/50 rounded-2xl p-lg flex flex-col border border-neutral-100 dark:border-gray-700/50 hover:shadow-lg transition-shadow duration-300">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-md">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 mb-lg">
                  <p className="text-neutral-700 dark:text-gray-300 leading-relaxed text-body-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-md border-t border-neutral-200 dark:border-gray-700/50">
                  <div className="relative flex-shrink-0">
                    <Avatar initials={testimonial.initials} color={testimonial.avatarColor} />
                    {testimonial.verified && (
                      <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded-full p-0.5 ring-2 ring-neutral-50 dark:ring-gray-800">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-neutral-900 dark:text-white truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-gray-400 truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-gray-500 mt-0.5">
                      {testimonial.sessions} conversations &middot; {testimonial.date}
                    </p>
                  </div>
                </div>

                {/* Read Full Story Button — opens modal */}
                {testimonial.fullQuote && (
                  <button
                    onClick={() => setExpandedIndex(index + 1)}
                    className="mt-md inline-flex items-center gap-1 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group cursor-pointer"
                  >
                    Read full story
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </button>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {/* Full Story Modal */}
      {expandedIndex !== null && (
        <StoryModal
          testimonial={testimonials[expandedIndex]}
          onClose={() => setExpandedIndex(null)}
        />
      )}
    </section>
  );
};

export default Testimonials;
