import { Container, ScrollReveal } from '@/components/ui';
import { Heart, Compass, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Story = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const journey = [
    {
      icon: Heart,
      phase: "You're not alone",
      title: "Feeling stuck or uncertain?",
      description: "That nagging feeling that something's missing. The Sunday night anxiety about Monday morning. The daydreams about 'what if I had chosen differently?' We see you, and we understand.",
      emotion: "recognition",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Compass,
      phase: "There's a path forward",
      title: "Clarity is closer than you think",
      description: "You don't need years of therapy or expensive retreats. Through guided conversation, you'll rediscover what truly matters to you—not what society expects, but what lights you up inside.",
      emotion: "hope",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      phase: "Your transformation awaits",
      title: "Imagine waking up with purpose",
      description: "Picture yourself six months from now: energized by your work, aligned with your values, finally living the life you were meant for. That version of you? They're already inside you, waiting to emerge.",
      emotion: "inspiration",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="relative p-[80px] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        {/* Section Header - Empathetic and personal */}
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-2xl">
            <p className="eyebrow mb-md">
              YOUR JOURNEY STARTS HERE
            </p>
            <h2 className="font-heading text-h4 lg:text-h3 text-gray-900 mb-lg font-bold leading-tight">
              We believe everyone deserves to live with{' '}
              <span className="gradient-text">purpose</span>
            </h2>
            <p className="font-body text-body-lg text-gray-600 leading-relaxed font-light">
              This isn't just another productivity tool or self-help program.{' '}
              <span className="font-semibold text-gray-900">It's your companion on the most important journey you'll ever take</span>
              —discovering who you truly are and what you're meant to contribute.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-2xl items-center max-w-6xl mx-auto">
          {/* Left column: Chat UI mockup */}
          <ScrollReveal animation="slide-right" threshold={0.2}>
            <div className="relative">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20" />

              {/* Phone mockup */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Phone frame */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                  {/* Status bar */}
                  <div className="bg-gray-50 px-md py-3 flex items-center justify-between text-xs">
                    <span className="font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-gray-400 rounded-sm relative">
                        <div className="absolute inset-0.5 bg-gray-400 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Chat header */}
                  <div className="px-md py-xs border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900">Purpose Discovery</h3>
                        <p className="text-xs text-purple-600 font-medium">Conversation 1 of 8</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="p-md space-y-xs bg-gradient-to-b from-purple-50/50 to-white min-h-[400px]">
                    {/* AI message 1 */}
                    <div className="flex">
                      <div className="bg-purple-50 rounded-2xl rounded-tl-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-gray-800">
                          Let's start with something meaningful. Tell me about a time when you felt most energized and alive.
                        </p>
                      </div>
                    </div>

                    {/* User message 1 */}
                    <div className="flex justify-end">
                      <div className="bg-purple-200 rounded-2xl rounded-tr-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-gray-900">
                          When I was teaching my nephew to code. Seeing his eyes light up when he finally understood...
                        </p>
                      </div>
                    </div>

                    {/* AI message 2 */}
                    <div className="flex">
                      <div className="bg-purple-50 rounded-2xl rounded-tl-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-gray-800">
                          That's beautiful. What was it about that moment that made you feel so alive?
                        </p>
                      </div>
                    </div>

                    {/* User message 2 */}
                    <div className="flex justify-end">
                      <div className="bg-purple-200 rounded-2xl rounded-tr-sm px-md py-xs shadow-sm max-w-[80%]">
                        <p className="text-sm text-gray-900">
                          I realized I was making a real difference. Helping someone discover their potential.
                        </p>
                      </div>
                    </div>

                    {/* AI typing indicator */}
                    <div className="flex">
                      <div className="bg-purple-50 rounded-2xl rounded-tl-sm px-md py-xs shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-8 h-8 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-8 h-8 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-8 h-8 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: Interactive accordion */}
          <ScrollReveal animation="slide-left" threshold={0.2}>
            <div className="space-y-3">
              {journey.map((step, index) => (
                <div
                  key={step.phase}
                  className={`relative glass-card cursor-pointer transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? 'p-xl' : 'p-md'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 h-full bg-gradient-to-b ${step.color} transition-all duration-300 ${
                    activeIndex === index ? 'w-8 opacity-100' : 'w-2 opacity-50'
                  }`} />

                  <div className="flex items-start gap-md">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Phase label */}
                      <p className={`font-body text-body-xs font-semibold text-purple-600 uppercase tracking-wide mb-xs transition-opacity duration-300 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-70'
                      }`}>
                        {step.phase}
                      </p>

                      {/* Title */}
                      <h3 className={`font-heading text-gray-900 font-bold transition-all duration-300 ${
                        activeIndex === index ? 'text-body-lg lg:text-h5 mb-md' : 'text-body-md mb-0'
                      }`}>
                        {step.title}
                      </h3>

                      {/* Description - only shown when active */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          activeIndex === index ? 'max-h-48 opacity-100 mt-md' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="font-body text-body-md text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <div className={`flex-shrink-0 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Story;
