import { useState, useEffect, useRef, useCallback } from 'react';
import { Container, ScrollReveal } from '@/components/ui';
import MacbookSvg from '@/assets/Macbook.svg';

const STEP_DURATION = 4500;
const FADE_MS = 300;

interface Message { role: 'ai' | 'user' | 'typing'; text?: string; }
interface Conversation { id: number; label: string; title: string; subtitle: string; messages: Message[]; }

const conversations: Conversation[] = [
  {
    id: 1, label: 'Conversation 1', title: 'Purpose Discovery', subtitle: 'Conversation 1 of 8',
    messages: [
      { role: 'ai', text: "Before we talk about work — what do you actually look forward to on a Monday morning?" },
      { role: 'user', text: "Honestly? Not much lately." },
      { role: 'ai', text: "That's useful. Has it always felt that way, or is this newer?" },
      { role: 'user', text: "Maybe three years? Weirdly, it started around when I got promoted." },
      { role: 'ai', text: "Say more about that. What changed when you got promoted?" },
      { role: 'user', text: "Less hands-on. More meetings. I stopped doing the thing I was actually good at." },
      { role: 'typing' },
    ],
  },
  {
    id: 2, label: 'Conversation 2', title: 'Finding the Pattern', subtitle: 'Conversation 2 of 8',
    messages: [
      { role: 'ai', text: "You mentioned you stopped doing the thing you were good at. What was that thing?" },
      { role: 'user', text: "Building stuff people actually used. Seeing their reaction. That feedback loop." },
      { role: 'ai', text: "What did that feedback loop give you that the meetings don't?" },
      { role: 'user', text: "Proof, I guess. That I left something behind." },
      { role: 'ai', text: "That's not a small thing. Do you feel invisible in your current role?" },
      { role: 'user', text: "Sometimes, yeah. Weird thing to admit out loud." },
      { role: 'typing' },
    ],
  },
  {
    id: 3, label: 'Conversation 3', title: 'The Thread Emerges', subtitle: 'Conversation 3 of 8',
    messages: [
      { role: 'ai', text: `Something I keep noticing — you use the word "proof" a lot. Proof you're capable. Proof you matter.` },
      { role: 'user', text: "I didn't realize I was doing that." },
      { role: 'ai', text: "You're not chasing success. You're chasing evidence. That's why recognition without impact feels hollow." },
      { role: 'user', text: "That actually explains a lot." },
      { role: 'ai', text: "What would it mean to build something where the evidence stopped mattering?" },
      { role: 'user', text: "I don't know how to answer that. But I want to." },
      { role: 'typing' },
    ],
  },
];

const steps = [
  { title: 'Tell your story', description: "Just talk. Your experiences, what mattered, what didn't. Acheevo listens and follows the thread." },
  { title: 'Watch the patterns surface', description: "Each conversation adds a layer. Patterns you've never noticed start becoming obvious." },
  { title: 'Walk away with a roadmap', description: "A Purpose Summary — not a personality type, but a clear statement of what you're here to do next." },
];

// Arrow 14 flipped — left callout points right toward mockup
const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg width="110" height="21" viewBox="0 0 219 41" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" style={{ transform: 'scaleX(-1) scaleY(-1)' }}>
    <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" fill="currentColor"/>
  </svg>
);

// Arrow 14 as-is — right callout points left toward mockup
const ArrowLeft = ({ className = '' }: { className?: string }) => (
  <svg width="110" height="21" viewBox="0 0 219 41" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" fill="currentColor"/>
  </svg>
);

// Arrow 03 rotated 180° — bottom callout points up toward mockup
const ArrowUp = ({ className = '' }: { className?: string }) => (
  <svg width="50" height="61" viewBox="0 0 122 148" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" style={{ transform: 'rotate(180deg)' }}>
    <path d="M0 2.65037C6.14938 -1.37392 12.2988 -0.103094 17.812 1.80315C25.4458 4.55662 32.8674 8.1573 39.6529 12.3934C70.3998 32.7267 88.8479 61.744 96.4816 97.539C98.39 106.647 99.0262 116.178 100.299 126.556C108.78 121.685 113.233 112.154 121.715 106.647C122.776 110.883 120.655 113.636 118.959 115.966C111.961 125.497 104.752 135.028 97.3299 144.348C93.7251 148.796 90.9684 149.219 87.1515 145.407C79.0937 137.57 74.2167 128.039 72.7323 117.025C72.7323 116.601 73.3684 115.966 74.2166 114.907C83.3347 117.237 81.2142 128.886 89.06 133.122C92.4527 118.508 89.9082 104.529 86.0913 90.973C82.0624 76.7821 76.7612 63.2266 68.2793 51.1537C60.0095 39.2926 49.6191 29.7614 38.1686 20.8656C26.93 11.758 14.2072 6.03925 0 2.65037Z" fill="currentColor"/>
  </svg>
);

interface MockupProps { active: Conversation; chatOpacity: number; activeId: number; onSelect: (id: number) => void; }

const Mockup = ({ active, chatOpacity, activeId, onSelect }: MockupProps) => (
  <div className="relative w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl blur-3xl opacity-15 pointer-events-none" />
    <div className="relative w-full" style={{ aspectRatio: '1834 / 1054' }}>
      <img src={MacbookSvg} alt="MacBook showing an Acheevo conversation" className="w-full h-full object-contain select-none" draggable={false} />
      <div className="absolute overflow-hidden flex flex-col" style={{ left: '10.74%', top: '5.69%', width: '78.52%', height: '85.39%' }}>
        <div className="bg-neutral-100 px-xs py-2xs flex items-center gap-2 border-b border-neutral-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-neutral-400 border border-neutral-200 max-w-xs mx-auto text-center">app.acheevo.com</div>
        </div>
        <div className="flex-1 min-h-0 flex bg-white">
          <div className="w-auto bg-neutral-50 border-r border-neutral-200 flex flex-col p-16 gap-3xs flex-shrink-0">
            <div className="flex items-center py-3xs mb-xs">
              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Acheevo</span>
            </div>
            {conversations.map((c) => (
              <button key={c.id} onClick={() => onSelect(c.id)}
                className={`px-xs py-2xs rounded-lg text-xs font-semibold text-left transition-colors duration-150 whitespace-nowrap ${c.id === activeId ? 'bg-primary-100 text-primary-800' : 'text-neutral-400 hover:bg-neutral-100'}`}>
                {c.label}
              </button>
            ))}
            <div className="flex-1" />
            <div className="-mx-16 px-16 pt-xs border-t border-neutral-200 flex items-center gap-xs">
              <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-semibold text-primary-700">JD</span>
              </div>
              <span className="text-xs font-medium text-neutral-700 whitespace-nowrap">Jane Doe</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-0" style={{ opacity: chatOpacity, transition: `opacity ${FADE_MS}ms ease` }}>
            <div className="p-16 border-b border-neutral-100 flex items-center flex-shrink-0">
              <div>
                <p className="text-xs font-semibold text-neutral-900">{active.title}</p>
                <p className="text-[10px] text-primary-600 font-medium">{active.subtitle}</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden px-16 pt-3xs pb-3xs bg-gradient-to-b from-primary-50/30 to-white flex flex-col justify-end">
              {active.messages.map((msg, i) => {
                const prevRole = i > 0 ? active.messages[i - 1].role : null;
                const gapTop = prevRole !== msg.role && i !== 0 ? 'mt-xs' : 'mt-3xs';
                if (msg.role === 'typing') return (
                  <div key={i} className={`flex items-center ${gapTop}`}>
                    <div className="flex gap-1 items-center" style={{ height: '14px' }}>
                      <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                );
                if (msg.role === 'ai') return (
                  <div key={i} className={gapTop}>
                    <p className="text-xs text-neutral-700 leading-relaxed">{msg.text}</p>
                  </div>
                );
                return (
                  <div key={i} className={`flex justify-end ${gapTop}`}>
                    <div className="bg-primary-100 text-xs text-neutral-700 leading-relaxed max-w-[72%] px-xs py-2xs rounded-md">{msg.text}</div>
                  </div>
                );
              })}
            </div>
            <div className="px-16 py-xs flex-shrink-0">
              <div className="bg-neutral-50 rounded-xl px-xs py-2xs flex items-center gap-4 border border-neutral-200">
                <span className="text-xs text-neutral-400 flex-1">Share what comes to mind...</span>
                <div className="w-7 h-7 rounded-lg bg-action flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  const [activeId, setActiveId] = useState(1);
  const [chatOpacity, setChatOpacity] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeIdRef = useRef(1);
  const transitioning = useRef(false);

  const switchTo = useCallback((nextId: number) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setChatOpacity(0);
    setTimeout(() => {
      setActiveId(nextId);
      activeIdRef.current = nextId;
      setChatOpacity(1);
      setTimeout(() => { transitioning.current = false; }, FADE_MS);
    }, FADE_MS);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      switchTo(activeIdRef.current === 3 ? 1 : activeIdRef.current + 1);
    }, STEP_DURATION);
  }, [switchTo]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startAutoPlay]);

  const handleSelect = (id: number) => {
    if (id === activeId) return;
    switchTo(id);
    startAutoPlay();
  };

  const active = conversations.find((c) => c.id === activeId)!;

  const calloutStyle = (id: number): React.CSSProperties => ({
    transition: `opacity ${FADE_MS * 2}ms ease`,
    opacity: activeId === id ? 1 : 0.35,
  });

  return (
    <section id="how-it-works" aria-label="How Acheevo works"
      className="relative px-md md:px-[80px] py-2xl md:py-[120px] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-100 dark:bg-primary-800 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <ScrollReveal animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-2xl">
            <p className="eyebrow mb-md">HOW IT WORKS</p>
            <h2 className="font-heading text-h4 lg:text-h3 text-neutral-900 dark:text-white mb-lg font-semibold leading-tight">
              Not a quiz. Not a course.{' '}
              <span className="text-primary-700 dark:text-primary-400">A real conversation.</span>
            </h2>
            <p className="font-body text-body-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              Eight structured conversations with an AI coach that remembers everything you say — and helps you connect it into a clear, personal roadmap.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" threshold={0.1}>

          {/* Desktop: annotated layout */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="mx-[200px]">
                <Mockup active={active} chatOpacity={chatOpacity} activeId={activeId} onSelect={handleSelect} />
              </div>

              {/* Left callout — Tell your story */}
              <div className="absolute left-0 top-0 bottom-0 w-[185px] flex flex-col justify-center pr-3" style={calloutStyle(1)}>
                <h3
                  className="font-heading text-body-md font-semibold text-neutral-900 dark:text-white mb-xs text-right leading-snug"
                >
                  {steps[0].title}
                </h3>
                <p
                  className="font-body text-body-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-right"
                >
                  {steps[0].description}
                </p>
                <div className="flex justify-end mt-sm">
                  <ArrowRight className="text-primary-400 dark:text-primary-500" />
                </div>
              </div>

              {/* Right callout — Watch the patterns */}
              <div className="absolute right-0 top-0 bottom-0 w-[185px] flex flex-col justify-center pl-3" style={calloutStyle(2)}>
                <div className="flex justify-start mb-sm">
                  <ArrowLeft className="text-primary-400 dark:text-primary-500" />
                </div>
                <h3
                  className="font-heading text-body-md font-semibold text-neutral-900 dark:text-white mb-xs leading-snug"
                >
                  {steps[1].title}
                </h3>
                <p
                  className="font-body text-body-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                >
                  {steps[1].description}
                </p>
              </div>
            </div>

            {/* Bottom callout — Walk away with a roadmap */}
            <div className="text-center mt-lg" style={calloutStyle(3)}>
              <div className="flex justify-center mb-sm">
                <ArrowUp className="text-primary-400 dark:text-primary-500" />
              </div>
              <h3
                className="font-heading text-body-md font-semibold text-neutral-900 dark:text-white mb-xs"
              >
                {steps[2].title}
              </h3>
              <p
                className="font-body text-body-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xs mx-auto"
              >
                {steps[2].description}
              </p>
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-xl">
            <Mockup active={active} chatOpacity={chatOpacity} activeId={activeId} onSelect={handleSelect} />
            <div className="flex flex-col gap-md">
              {steps.map((step, i) => (
                <div key={i} className="text-center" style={calloutStyle(i + 1)}>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 mb-xs">
                    <span className="font-heading text-body-sm font-semibold text-primary-700 dark:text-primary-400">{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-body-md font-semibold text-neutral-900 dark:text-white mb-xs">{step.title}</h3>
                  <p className="font-body text-body-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        </ScrollReveal>
      </Container>
    </section>
  );
};

export default HowItWorks;
