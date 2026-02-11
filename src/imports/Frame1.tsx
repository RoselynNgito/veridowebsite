import svgPaths from "./svg-0ovgnv91dy";

// THE PROBLEM SECTION
function Container5() {
  return (
    <div className="mb-4 w-full" data-name="Container">
      <div className="text-center mb-5">
        <p className="font-black text-[#dc2626] text-[22px] tracking-[3px] uppercase mb-2">THE PROBLEM</p>
        <div className="w-[120px] h-[3px] bg-gradient-to-r from-transparent via-[#dc2626] to-transparent mx-auto"></div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full mb-3 text-center" data-name="Heading 2">
      <div className="inline-block bg-[#f9fafb] px-4 py-2 rounded-lg border border-[#e5e7eb]">
        <p className="font-semibold text-[#6b7280] text-[14px] leading-[20px]">
          You already manage a complex distribution network.
        </p>
      </div>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="relative shrink-0 w-full mb-3.5" data-name="SubHeading">
      <p className="font-bold text-[#162f21] text-[16px] leading-[24px] text-center">
        But every growth decision comes with pressure:
      </p>
    </div>
  );
}

function PressureCard({ number, children }: { number: string; children: string }) {
  return (
    <div className="relative bg-gradient-to-br from-white to-[#fef2f2] border-l-4 border-[#dc2626] rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-2.5">
        <div className="shrink-0 w-7 h-7 bg-[#dc2626] rounded flex items-center justify-center">
          <span className="font-black text-white text-[13px]">{number}</span>
        </div>
        <p className="font-semibold text-[#162f21] text-[12.5px] leading-[18px] pt-0.5">{children}</p>
      </div>
    </div>
  );
}

function PressureList() {
  return (
    <div className="w-full mb-5">
      <div className="grid grid-cols-2 gap-2.5 w-full px-1">
        <PressureCard number="1">
          Retailers push for more stock or credit
        </PressureCard>
        <PressureCard number="2">
          Agents say "this one is safe"
        </PressureCard>
        <PressureCard number="3">
          Sales wants expansion
        </PressureCard>
        <PressureCard number="4">
          Finance wants control
        </PressureCard>
      </div>
    </div>
  );
}

function ImportantBanner() {
  return (
    <div className="relative bg-gradient-to-br from-white via-[#fee2e2] to-[#fecaca] border-2 border-[#dc2626] rounded-lg p-2.5 w-full">
      <div className="text-center">
        <p className="font-bold text-[#162f21] text-[12px] leading-[18px]">
          Problems don't show up where you're looking.{' '}
          <span className="font-black text-[#dc2626]">They show up where you're not.</span>
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container5 />
        <Heading />
        <SubHeading />
        <PressureList />
        <ImportantBanner />
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <div className="py-8 px-16 bg-white">
      <Container4 />
    </div>
  );
}

// THE REAL ISSUE SECTION
function RealIssueTitle() {
  return (
    <div className="mb-5 w-full">
      <div className="text-center mb-6">
        <p className="font-black text-[#162f21] text-[22px] tracking-[3px] uppercase mb-2">THE REAL ISSUE</p>
        <div className="w-[120px] h-[3px] bg-gradient-to-r from-transparent via-[#162f21] to-transparent mx-auto"></div>
      </div>
    </div>
  );
}

function ComparisonBoxes() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full px-2">
      {/* LEFT BOX - The Myth */}
      <div className="relative bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] border-2 border-[#d1d5db] rounded-xl p-5 opacity-60">
        <div className="mb-3">
          <p className="font-semibold text-[#6b7280] text-[11px] uppercase tracking-[1px] mb-2">What you're often told:</p>
        </div>
        <div className="relative">
          <p className="font-bold text-[#374151] text-[15px] leading-[22px] italic">"Some retailers just aren't trustworthy."</p>
          {/* Subtle X pattern overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M10 10L30 30M30 10L10 30" stroke="#6b7280" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* RIGHT BOX - The Truth */}
      <div className="relative bg-gradient-to-br from-white via-[#fef2f2] to-[#fee2e2] border-3 border-[#dc2626] rounded-xl p-5 shadow-lg">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-[3px] h-[14px] bg-[#dc2626] rounded-full"></div>
            <p className="font-black text-[#dc2626] text-[11px] uppercase tracking-[1px]">What's actually happening:</p>
          </div>
        </div>
        <p className="font-bold text-[#162f21] text-[14px] leading-[21px]">
          Risk hides in agent and retailer behaviour and only becomes visible after money or stock is gone.
        </p>
        {/* Checkmark accent */}
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 bg-[#dc2626] rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7L6 10L11 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealIssueSection() {
  return (
    <div className="py-8 px-16 bg-[#FAFBFA]">
      <RealIssueTitle />
      <ComparisonBoxes />
    </div>
  );
}

// VERIDO POSITIONING SECTION (No title)
function VeridoPositioning() {
  return (
    <div className="py-12 px-16 bg-gradient-to-br from-[#162f21] via-[#1a3826] to-[#0f1f15] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4A574] blur-[120px] opacity-10 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white blur-[100px] opacity-5 rounded-full"></div>
      
      <div className="relative w-full">
        {/* Decorative top accent */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#D4A574]"></div>
          <div className="w-2 h-2 bg-[#D4A574] rounded-full"></div>
          <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#D4A574]"></div>
        </div>
        
        <div className="space-y-5 w-full">
          <p className="font-black text-white text-[20px] leading-[28px] tracking-tight text-center w-full px-8">
            Verido is risk infrastructure for growing distribution networks.
          </p>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-12 py-9 w-full">
            <p className="font-bold text-[#D4A574] text-[17px] leading-[25px] text-center w-full">
              It shows you who is safe to grow with before you pay the price.
            </p>
          </div>
          <div className="bg-[#D4A574]/10 border border-[#D4A574]/30 rounded-lg px-10 py-6 w-full">
            <p className="font-semibold text-white/90 text-[14px] leading-[22px] text-center w-full">
              Based on real agent and retailer behaviour, where most risk hides.
            </p>
          </div>
        </div>
        
        {/* Decorative bottom accent */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#D4A574]/50"></div>
          <div className="w-1.5 h-1.5 bg-[#D4A574]/50 rounded-full"></div>
          <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#D4A574]/50"></div>
        </div>
      </div>
    </div>
  );
}

// 5 RISK SCORES SECTION
function ScoresTitle() {
  return (
    <div className="mb-8 w-full">
      <div className="text-center mb-6">
        <p className="font-black text-[#162f21] text-[22px] tracking-[3px] uppercase mb-2">5 RISK SCORES THAT MATTER</p>
        <div className="w-[120px] h-[3px] bg-gradient-to-r from-transparent via-[#162f21] to-transparent mx-auto"></div>
      </div>
    </div>
  );
}

function ScoreItem({ question, scoreName, index }: { question: string; scoreName: string; index: number }) {
  const gradients = [
    'from-[#162f21]/5 to-[#162f21]/10',
    'from-[#1a3826]/5 to-[#1a3826]/10',
    'from-[#162f21]/5 to-[#162f21]/10',
    'from-[#1a3826]/5 to-[#1a3826]/10',
    'from-[#162f21]/5 to-[#162f21]/10',
  ];
  
  return (
    <div className={`relative bg-gradient-to-br ${gradients[index]} border-2 border-[#162f21]/20 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-[#162f21]/40 transition-all duration-300 group`}>
      {/* Number badge */}
      <div className="absolute -left-3 -top-3 w-9 h-9 bg-gradient-to-br from-[#162f21] to-[#1a3826] rounded-lg flex items-center justify-center shadow-lg border-2 border-white">
        <span className="font-black text-white text-[15px]">{index + 1}</span>
      </div>
      
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4A574] blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
      
      <div className="relative pl-4">
        <p className="font-bold text-[#dc2626] text-[14px] leading-[21px] mb-3">{question}</p>
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-[#162f21] to-[#D4A574] rounded-full"></div>
          <p className="font-black text-[#162f21] text-[16px] leading-[23px]">{scoreName}</p>
        </div>
      </div>
    </div>
  );
}

function ScoresBanner() {
  return (
    <div className="relative bg-gradient-to-r from-[#162f21] via-[#1a3826] to-[#162f21] rounded-2xl p-6 shadow-2xl mt-8 overflow-hidden">
      {/* Animated glow effects */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4A574] blur-[100px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4A574] blur-[80px] opacity-20 rounded-full"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#D4A574]"></div>
          <svg className="w-5 h-5 text-[#D4A574]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#D4A574]"></div>
        </div>
        
        <p className="font-bold text-white text-[15px] leading-[24px]">
          Each score links to a clear decision: 
          <span className="font-black text-[#D4A574] text-[16px]"> approve, limit, delay, or decline</span> — calmly.
        </p>
      </div>
      
      {/* Border accent */}
      <div className="absolute inset-0 rounded-2xl border-2 border-[#D4A574]/30"></div>
    </div>
  );
}

function FiveScoresSection() {
  const scores = [
    { question: "Can I trust their records?", scoreName: "Data Quality Score" },
    { question: "Are they consistent over time?", scoreName: "Verido Trust Score" },
    { question: "How much exposure is safe right now?", scoreName: "Trade Credit Score" },
    { question: "Can I release stock before payment?", scoreName: "Consignment Readiness Score" },
    { question: "Are they ready for bigger or third-party finance?", scoreName: "Loan Readiness & Safe Loan Size" },
  ];
  
  return (
    <div className="py-12 px-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #162f21 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative">
        <ScoresTitle />
        <div className="max-w-[700px] mx-auto">
          <div className="bg-gradient-to-br from-[#162f21]/5 to-transparent border-l-4 border-[#162f21] rounded-xl p-5 mb-6">
            <p className="font-bold text-[#162f21] text-[16px] leading-[25px] text-center">
              Before you release stock or approve credit,<br />
              <span className="text-[#dc2626]">Verido answers five uncomfortable questions:</span>
            </p>
          </div>
          
          <div className="space-y-4">
            {scores.map((score, index) => (
              <ScoreItem 
                key={index}
                question={score.question} 
                scoreName={score.scoreName}
                index={index}
              />
            ))}
          </div>
          
          <ScoresBanner />
        </div>
      </div>
    </div>
  );
}

// PAYOFF SECTION
function PayoffTitle() {
  return (
    <div className="mb-8 w-full">
      <div className="text-center mb-6">
        <p className="font-black text-[#162f21] text-[22px] tracking-[3px] uppercase mb-2">PAYOFF</p>
        <div className="w-[120px] h-[3px] bg-gradient-to-r from-transparent via-[#162f21] to-transparent mx-auto"></div>
      </div>
    </div>
  );
}

function PayoffItem({ children, iconType }: { children: string; iconType: 'money' | 'speed' | 'growth' }) {
  const icons = {
    money: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8"/>
        <path d="M12 18V6"/>
      </svg>
    ),
    speed: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    growth: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  };
  
  return (
    <div className="relative group w-full">
      <div className="bg-gradient-to-br from-white via-[#f9fafb] to-white border-2 border-[#162f21]/15 rounded-2xl px-10 py-7 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#D4A574]/40 w-full">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-3 border-l-3 border-[#162f21]/10 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-3 border-r-3 border-[#D4A574]/20 rounded-br-2xl"></div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/0 to-[#D4A574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        
        <div className="relative flex items-center gap-5 w-full">
          {/* Icon circle */}
          <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-[#162f21] to-[#1a3826] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="text-[#D4A574]">
              {icons[iconType]}
            </div>
          </div>
          
          {/* Text content - FULL WIDTH */}
          <p className="font-bold text-[#162f21] text-[16px] leading-[24px] flex-1 w-full">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

function PayoffSection() {
  return (
    <div className="py-12 px-16 bg-gradient-to-b from-[#FAFBFA] to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#162f21] blur-[150px] opacity-[0.02] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A574] blur-[150px] opacity-[0.03] rounded-full"></div>
      
      <div className="relative w-full">
        <PayoffTitle />
        {/* Intro text box */}
        <div className="bg-gradient-to-br from-[#162f21]/5 to-transparent border-l-4 border-[#162f21] rounded-xl px-8 py-5 mb-8 w-full">
          <p className="font-bold text-[#162f21] text-[15px] leading-[24px] text-center">
            What changes when you see clearly:
          </p>
        </div>
        
        <div className="space-y-5 w-full">
          <PayoffItem iconType="money">
            Fewer defaults and write-offs
          </PayoffItem>
          <PayoffItem iconType="speed">
            Faster onboarding of new retailers
          </PayoffItem>
          <PayoffItem iconType="growth">
            Expansion into new areas without blind risk
          </PayoffItem>
        </div>
      </div>
    </div>
  );
}

export default function Frame1(
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative min-w-px w-full">
      <ProblemSection />
      <RealIssueSection />
      <VeridoPositioning />
      <FiveScoresSection />
      <PayoffSection />
    </div>
  );
}